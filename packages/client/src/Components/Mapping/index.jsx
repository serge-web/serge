import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import GridImplementation from './helpers/GridImplementation'
import MapAdjudicatingUmpireListener from './helpers/MapAdjudicatingUmpireListener'
import MapAdjudicatingPlayerListener from './helpers/MapAdjudicatingPlayerListener'
import MapAdjudicationPendingListener from './helpers/MapAdjudicationPendingListener'
import MapPlanningPlayerListener from './helpers/MapPlanningPlayerListener'
import MapPlanningUmpireListener from './helpers/MapPlanningUmpireListener'
import markerFor from './helpers/markerFor'
import hasPendingForces from './helpers/hasPendingForces'
import { saveMapMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { FORCE_LAYDOWN, VISIBILIY_CHANGES, PERCEPTION_OF_CONTACT, SUBMIT_PLANS } from '../../consts'
import assetsVisibleToMe from './helpers/assetsVisibleToMe'
import forceFor from './helpers/forceFor'
import findAsset from './helpers/findAsset'

import handleVisibilityChanges from '../../ActionsAndReducers/playerUi/helpers/handleVisibilityChanges'
import removeClassNamesFrom from './helpers/removeClassNamesFrom'

// TODO: This needs to be refactored so we're not just importing the whole file.
import './helpers/mousePosition'

import './styles.scss'

// TODO: Refactor. We should convert the next file into a module
import './leaflet.zoomhome.js'
import declutterLayer from './helpers/declutterLayer'
import findPerceivedAsClasses from './helpers/findPerceivedAsClassName'
import handlePerceptionChanges from '../../ActionsAndReducers/playerUi/helpers/handlePerceptionChanges'
import handlePlansSubmittedChanges from '../../ActionsAndReducers/playerUi/helpers/handlePlansSubmittedChanges'

const Mapping = ({ currentTurn, role, currentWargame, selectedForce, allForces, allPlatforms, phase, channelID, imageTop, imageLeft, imageBottom, imageRight }) => {
  const mapRef = useRef(null) // the leaflet map
  const platformsLayerRef = useRef(null) // the platform markers
  const gridImplRef = useRef(null) // hexagonal grid
  const forcesRef = useRef(allForces) // the current list of forces
  const currentPhaseModeRef = useRef(null)
  const currentPhaseMapRef = useRef(null)
  const myForceRef = useRef(selectedForce)
  const platformTypesRef = useRef(allPlatforms)
  const currentTurnRef = useRef(currentTurn)
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

  const perceivedStateCallback = (asset, force, perception) => {
    const perceivedType = { asset: asset.uniqid, force: force, perception: perception }
    sendMessage(PERCEPTION_OF_CONTACT, perceivedType)
    handlePerceptionChanges(perceivedType, allForces)
  }

  /** callback to tell UI that we've got control of a platform in this UI */
  const declareControlOf = (force, name, platformType) => {
  }

  const routeCompleteCallback = (/* object */payload) => {
    sendMessage(SUBMIT_PLANS, payload)
    // also call the reducer ourselves
  //  handlePlansSubmittedChanges(payload, allForces)
  }

  const clearControlledAssets = () => {
  }

  const formRequestCallback = (form, payload) => {
    console.log('Popup form requested for:', form, payload)
  }

  // run the declutter algorithm, to distribute markers around a cell if necessary
  const declutterCallback = () => {
    declutterLayer(currentPhaseMapRef.current, gridImplRef.current)
  }

  const createThisMarker = (asset, grid, force) => {
    // set the asset location
    asset.loc = grid.hexNamed(asset.position).centrePos

    const inForceLaydown = hasPendingForces(forcesRef.current, myForceRef.current)

    // set the asset force
    asset.force = force.uniqid

    var assetIsDraggable
    switch (phase) {
      case 'adjudication':
        assetIsDraggable = ((myForceRef.current === 'umpire') || (inForceLaydown && (asset.force === myForceRef.current)))
        break
      case 'planning':
        assetIsDraggable = myForceRef.current !== 'umpire' && asset.force === myForceRef.current
        break
      default:
        console.log('Error - unexpected game phase encountered in Mapping component')
    }

    const userIsUmpire = myForceRef.current === 'umpire'
    const marker = markerFor(asset, force.name, myForceRef.current, platformTypesRef.current, assetIsDraggable, userIsUmpire,
      perceiveAsForceRef.current)

    // did we create one?
    if (marker != null) {
      // tell the UI we're in control of this marker
      if (assetIsDraggable) {
        declareControlOf(force.name, asset.name, asset.platformType)
      }

      currentPhaseModeRef.current.listenTo(marker, currentTurnRef.current)
      platformsLayerRef.current.addLayer(marker)
    }
  }

  useEffect(() => {
    console.log('re-rendering map ocmponent at:', new Date(), 'phase:', phase)
    if (currentPhaseModeRef.current) {
      // check if clear listeners present
      if (currentPhaseModeRef.current.clearListeners) {
        // detatch the current listener
        currentPhaseModeRef.current.clearListeners()
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
    const inForceLaydown = hasPendingForces(forcesRef.current, myForceRef.current)
    const allForces = forcesRef.current.map(force => force.uniqid)
    switch (phase) {
      case 'adjudication':
        if (myForceRef.current === 'umpire') {
          currentPhaseModeRef.current = new MapAdjudicatingUmpireListener(mapRef.current, gridImplRef.current, formRequestCallback)
        } else if (inForceLaydown && currentTurnRef.current === 0) {
          // this force has assets with location pending
          currentPhaseModeRef.current = new MapAdjudicationPendingListener(mapRef.current, gridImplRef.current, laydownFunc)
        } else {
          // just use dumb adjudication listener
          currentPhaseModeRef.current = new MapAdjudicatingPlayerListener(mapRef.current, gridImplRef.current)
        }
        break
      case 'planning':
        if (myForceRef.current === 'umpire') {
          currentPhaseModeRef.current = new MapPlanningUmpireListener(mapRef.current, gridImplRef.current, visChangesFunc)
        } else {
          currentPhaseModeRef.current = new MapPlanningPlayerListener(currentPhaseMapRef.current, mapRef.current, gridImplRef.current,
            myForceRef.current, currentTurnRef.current, routeCompleteCallback,
            platformTypesRef.current, declutterCallback, perceivedStateCallback, allForces)
        }
        break
      default:
        console.log('Error - unexpected game phase encountered in Mapping component')
    }

    // create markers, and listen to them
    forcesRef.current.forEach(force => {
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
    console.log('Mapping Component state changed at', new Date())
    const markers = platformsLayerRef.current
    const grid = gridImplRef.current
    //
    // ASSET MOVEMENT
    //
    markers.eachLayer(function (marker) {
      const force = allForces.find(force => marker.force === force.name)
      if (force && marker.asset) {
        const asset = force.assets.find(({ name }) => name === marker.asset.name)
        if (asset) {
          // check the positions match
          if (marker.asset.position !== asset.position) {
            // update marker
            marker.setLatLng(grid.hexNamed(asset.position).centrePos)
          }
        } else {
        }
      }
    })
    //
    // ASSET VISIBILITY
    //
    const visibleToMe = assetsVisibleToMe(allForces, selectedForce)
    const foundItems = []
    const toDelete = []
    markers.eachLayer(marker => {
      const uniqid = marker.asset.uniqid
      var found = visibleToMe.find(item => item.uniqid === uniqid)
      // get a new pointer to this asset
      if (found) {
        foundItems.push(uniqid)

        const asset = findAsset(allForces, marker.asset.uniqid)

        // also check it's formatted correctly
        const userIsUmpire = myForceRef.current === 'umpire'
        const perceptionClassName = findPerceivedAsClasses(perceiveAsForceRef.current, asset.force,
          asset.platformType, asset.perceptions, userIsUmpire)

        if (perceptionClassName) {
          // remove exiting types
          removeClassNamesFrom(marker, ['platform-force-', 'platform-type-'])

          // now store the new ones
          L.DomUtil.addClass(marker._icon, perceptionClassName)
        }
      } else {
        marker.remove()
        toDelete.push(marker)
      }
    })
    toDelete.forEach(marker => {
      markers.removeLayer(marker)
    })
    // trim the items in visibleTo me
    const toBeAdded = visibleToMe.filter(asset => foundItems.indexOf(asset.uniqid) === -1)

    if (toBeAdded) {
      toBeAdded.forEach(asset => {
        var force = asset.force
        if (!force) {
          // grr, we'll have to find it
          asset.force = forceFor(allForces, asset.uniqid)
        }
        createThisMarker(asset, grid, asset.force, false)
      })
    }
    //
    // Other diagnostics
    //
  }, [allForces])

  return (
    <div id="map" className="mapping"/>
  )
}
export default Mapping
