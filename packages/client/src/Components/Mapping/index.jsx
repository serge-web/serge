import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import {
  assetsVisibleToMe,
  declutterLayer,
  findAsset,
  findPerceivedAsClasses,
  forceFor,
  GridImplementation,
  hasPendingForces,
  MapAdjudicationPendingListener,
  MapPlanningPlayerListener,
  MapPopupHelper,
  markerFor
} from './helpers'
import { saveMapMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { FORCE_LAYDOWN, VISIBILIY_CHANGES, PERCEPTION_OF_CONTACT, SUBMIT_PLANS, STATE_OF_WORLD, ADJUDICATION_PHASE } from '../../consts'

import handleVisibilityChanges from '../../ActionsAndReducers/playerUi/helpers/handleVisibilityChanges'
import removeClassNamesFrom from './helpers/removeClassNamesFrom'

// TODO: This needs to be refactored so we're not just importing the whole file.
import './helpers/mousePosition'

import './styles.scss'

// TODO: Refactor. We should convert the next file into a module
import './leaflet.zoomhome.js'

import handlePerceptionChanges from '../../ActionsAndReducers/playerUi/helpers/handlePerceptionChanges'
import MappingForm from './components/FormContainer'
import handleStateOfWorldChanges from '../../ActionsAndReducers/playerUi/helpers/handleStateOfWorldChanges'

const Mapping = ({ currentTurn, role, currentWargame, selectedForce, allForces, allPlatforms, phase, channelID, imageTop, imageLeft, imageBottom, imageRight }) => {
  const mapRef = useRef(null) // the leaflet map
  const platformsLayerRef = useRef(null) // the platform markers
  const gridImplRef = useRef(null) // hexagonal grid
  const currentPhaseModeRef = useRef(null)
  const currentPhaseMapRef = useRef(null)
  const myForceRef = useRef(selectedForce)
  const platformTypesRef = useRef(allPlatforms)
  const perceiveAsForceRef = useRef(selectedForce) // in case white changes how they perceive the data

  useEffect(() => {
    mapRef.current = L.map('map', {
      minZoom: 8,
      maxZoom: 12,
      center: [(imageTop + imageBottom) / 2, (imageLeft + imageRight) / 2],
      zoom: 10,
      zoomDelta: 0.25, // to allow incremental zoom steps from +/- zoom controls
      zoomSnap: 0.25, // to allow incremental zoom steps
      zoomControl: false, // since we're using our own control bar
      attributionControl: false,
      zoomAnimation: false
    })

    const tiledBackdrop = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
      attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>'
    })

    const imageBounds = [[imageTop, imageLeft], [imageBottom, imageRight]]

    const tiles = L.tileLayer('./tiles/{z}/{x}/{y}.png', {
      minZoom: 8,
      maxZoom: 12,
      tms: false,
      bounds: imageBounds,
      attribution: 'Generated by QTiles'
    }).addTo(mapRef.current)

    const zoomHome = L.Control.zoomHome()
    zoomHome.addTo(mapRef.current)
    zoomHome.setHomeBounds(imageBounds)

    L.control.mousePosition({ position: 'bottomright' }).addTo(mapRef.current)

    const gridLayer = L.layerGroup().addTo(mapRef.current)
    platformsLayerRef.current = L.layerGroup().addTo(mapRef.current)

    // note: we don't show the marker layer by default - only when zoomed in
    const coordsLayer = L.layerGroup()

    const overlays = {
      Grid: gridLayer,
      Coordinates: coordsLayer,
      Platforms: platformsLayerRef.current
    }

    const baseLayers = {
      OpenStreetMap: tiledBackdrop,
      'Tiled image': tiles
    }

    L.control.layers(baseLayers, overlays, {
      collapsed: false
    }).addTo(mapRef.current)

    // only show the markers when zoomed in
    mapRef.current.on('zoomend', () => {
      if (mapRef.current.getZoom() < 11) {
        mapRef.current.removeLayer(coordsLayer)
      } else {
        mapRef.current.addLayer(coordsLayer)
      }
    })

    /* CREATE THE GRID */
    const delta = 0.0416666
    const origin = L.latLng(14.1166, 42.4166)
    gridImplRef.current = new GridImplementation({ origin, delta, width: 24, height: 21, markerLayer: coordsLayer })

    // add hexagons to this map
    gridImplRef.current.addShapesTo(gridLayer)

    return () => console.log('Map unmounted')
  }, [])

  const sendMessage = (mType, message) => {
    const curForce = allForces.find((force) => force.uniqid === selectedForce)
    const details = {
      channel: channelID,
      forceDelta: true, // to indicate it represents a change in forces state
      from: {
        force: curForce.name,
        forceColor: curForce.color,
        role: role,
        icon: curForce.icon
      },
      messageType: mType,
      timestamp: new Date().toISOString()
    }
    saveMapMessage(currentWargame, details, message)
  }

  /** callback function - will transmit received parameters as "laydown" action */
  const laydownFunc = param => {
    sendMessage(FORCE_LAYDOWN, param)
  }

  const visChangesFunc = changes => {
    sendMessage(VISIBILIY_CHANGES, changes)

    /** note: we aren't currently receiving messages that we've sent. So we
     * to trigger the reducer ourselves
     */
    handleVisibilityChanges(changes, allForces)
  }

  const perceivedStateCallback = (/* string */ assetid, /* string */ perceivedBy, /* object */ perception) => {
    const perceivedType = { asset: assetid, force: perceivedBy, perception: perception }
    sendMessage(PERCEPTION_OF_CONTACT, perceivedType)
    handlePerceptionChanges(perceivedType, allForces)
  }

  const routeCompleteCallback = (/* object */payload) => {
    sendMessage(SUBMIT_PLANS, payload)
    // also call the reducer ourselves
  //  handlePlansSubmittedChanges(payload, allForces)
  }

  const clearControlledAssets = () => {
  }

  const newStateOfWorldCallback = (payload) => {
    sendMessage(STATE_OF_WORLD, payload)
    // also call the reducer ourselves
    handleStateOfWorldChanges(payload, allForces)
  }

  // run the declutter algorithm, to distribute markers around a cell if necessary
  const declutterCallback = () => {
    declutterLayer(currentPhaseMapRef.current, gridImplRef.current)
  }

  const createThisMarker = (asset, grid, force) => {
    // set the asset force
    asset.force = force.uniqid

    const userIsUmpire = myForceRef.current === 'umpire'

    // note - if we're in adjudication phase, at turn zero, we don't see assets for other forces
    let showThis
    if (phase === 'adjudication' && currentTurn === 0 && !userIsUmpire) {
      // ok, special mode = we only show our assets in this mode
      showThis = asset.force === selectedForce
    } else {
      // yes, we show markers
      showThis = true
    }
    if (showThis) {
      const marker = markerFor(asset, grid, force.name, myForceRef.current, platformTypesRef.current, userIsUmpire,
        perceiveAsForceRef.current)

      // did we create one?
      if (marker != null) {
        currentPhaseModeRef.current.listenTo(marker, currentTurn)
        platformsLayerRef.current.addLayer(marker)
      }
    }
  }

  useEffect(() => {
    console.log('Re-rendering map Component at:', new Date(), 'phase:', phase)

    // we're going to be re-generating all the markers, so delete any that are there already
    if (platformsLayerRef.current) {
      platformsLayerRef.current.clearLayers()
    }

    if (currentPhaseModeRef.current) {
      // check if clear listeners present
      if (currentPhaseModeRef.current.clearListeners) {
        // detatch the current listener
        currentPhaseModeRef.current.clearListeners(platformsLayerRef.current)
      }

      // ditch the listener
      currentPhaseModeRef.current = null
    }

    if (currentPhaseMapRef.current) {
      // ok, detach it
      currentPhaseMapRef.current.remove()
      currentPhaseMapRef.current.clearLayers()
    }

    currentPhaseMapRef.current = L.layerGroup().addTo(mapRef.current)

    // clear the UI
    clearControlledAssets()

    // create a listener for the new phase
    const inForceLaydown = hasPendingForces(allForces, myForceRef.current)
    const forceNames = allForces.map(force => force.uniqid)
    if (phase === ADJUDICATION_PHASE && inForceLaydown && currentTurn === 0) {
      // this force has assets with location pending
      currentPhaseModeRef.current = new MapAdjudicationPendingListener(mapRef.current, gridImplRef.current, laydownFunc, myForceRef.current)
    } else {
      currentPhaseModeRef.current = new MapPlanningPlayerListener(currentPhaseMapRef.current, mapRef.current, gridImplRef.current,
        myForceRef.current, currentTurn, routeCompleteCallback,
        platformTypesRef.current, allForces, declutterCallback, perceivedStateCallback, forceNames, phase, newStateOfWorldCallback, visChangesFunc)
    }

    // create markers, and listen to them
    allForces.forEach(force => {
      // see if this force has any assets (white typically doesn't)
      if (force.assets) {
        force.assets.forEach(asset => {
          // for our subsequent convenience, shove the force in the asset
          asset.force = force.uniqid
          createThisMarker(asset, gridImplRef.current, force)
        })
      }
    })

    declutterCallback()
  }, [phase])

  /** create handler for wargame updates - specifically when the
   * contents of allForces changes
   */
  useEffect(() => {
    console.log('Mapping Component state changed at', new Date(), 'phase:', phase)
    const markers = platformsLayerRef.current
    const grid = gridImplRef.current
    //
    // ASSET MOVEMENT
    // NOTE: no, we don't bother updating on movement. Movement is handled when
    // we move to a new game phase
    // markers.eachLayer(function (marker) {
    //   const force = allForces.find(force => marker.force === force.name)
    //   if (force && marker.asset) {
    //     const asset = force.assets.find(({ name }) => name === marker.asset.name)
    //     if (asset) {
    //       // check the positions match
    //       if (marker.asset.position !== asset.position) {
    //         // update marker
    //         marker.setLatLng(grid.hexNamed(asset.position).centrePos)
    //       }
    //     } else {
    //     }
    //   }
    // })
    //
    // ASSET VISIBILITY
    //
    const visibleToMe = assetsVisibleToMe(allForces, selectedForce)
    const foundItems = []
    const toDelete = []

    const userIsUmpire = myForceRef.current === 'umpire'

    markers.eachLayer(marker => {
      const uniqid = marker.asset.uniqid
      var found = visibleToMe.find(item => item.uniqid === uniqid)

      // get a new pointer to this asset
      if (found) {
        foundItems.push(uniqid)

        const asset = findAsset(allForces, marker.asset.uniqid)
        if (!asset.force) {
          asset.force = forceFor(allForces, asset.uniqid).name
        }

        // also check it's formatted correctly
        const perceptionClassName = findPerceivedAsClasses(perceiveAsForceRef.current, asset.force,
          asset.platformType, asset.perceptions, userIsUmpire)

        if (perceptionClassName) {
          // remove existing types
          removeClassNamesFrom(marker, ['platform-force-', 'platform-type-'])

          // now store the new ones
          L.DomUtil.addClass(marker._icon, perceptionClassName)
        }
      } else {
        // ok, it's no longer visible to me. hide it
        marker.remove()
        toDelete.push(marker)
      }
      // Show a form on popup
      const popup = new MapPopupHelper(mapRef.current, marker)
      popup.setStore({
        currentForce: myForceRef.current,
        currentMarkerName: marker.asset.name,
        currentMarkerForce: marker.asset.force,
        perception: marker.asset.perceptions[myForceRef.current],
        allForces,
        allPlatforms
      })
      popup.onUpdate(data => {
        if (data) {
          popup.setStore(data)
          perceivedStateCallback(marker.asset.uniqid, data.currentForce, data.perception)
        }
        popup.closePopup(() => {
          console.log('popup closed')
        })
      })
      popup.useComponent(MappingForm)
      // popup.openPopup()
      popup.renderListener()
    })
    toDelete.forEach(marker => markers.removeLayer(marker))
    // trim the items in visibleTo me
    const toBeAdded = visibleToMe.filter(asset => foundItems.indexOf(asset.uniqid) === -1)

    if (toBeAdded) {
      toBeAdded.forEach(asset => {
        var force = asset.force
        if (!force) {
          // grr, we'll have to find it
          asset.force = forceFor(allForces, asset.uniqid).name
        }
        createThisMarker(asset, grid, asset.force, false)
      })
    }

    //
    // Other diagnostics
    //
  }, [allForces])

  return (
    <div id="map" className="mapping">
    </div>
  )
}
export default Mapping
