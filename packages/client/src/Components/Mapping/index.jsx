import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import GridImplementation from '../../Helpers/GridImplementation'
import MapAdjudicatingUmpireListener from '../../Helpers/MapAdjudicatingUmpireListener'
import MapAdjudicatingPlayerListener from '../../Helpers/MapAdjudicatingPlayerListener'
import MapAdjudicationPendingListener from '../../Helpers/MapAdjudicationPendingListener'
import MapPlanningPlayerListener from '../../Helpers/MapPlanningPlayerListener'
import MapPlanningUmpireListener from '../../Helpers/MapPlanningUmpireListener'
import markerFor from '../../Helpers/markerFor'
import hasPendingForces from '../../Helpers/hasPendingForces'
import { saveMapMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

// TODO: This needs to be refactored so we're not just importing the whole file.
import '../../Helpers/mousePosition'

import './styles.scss'

const Mapping = ({ currentTurn, currentWargame, selectedForce, allForces, allPlatforms, phase, imageTop, imageLeft, imageBottom, imageRight }) => {
  const mapRef = useRef(null) // the leaflet map
  const platformsLayerRef = useRef(null) // the platform markers
  const gridImplRef = useRef(null) // hexagonal grid
  const forcesRef = useRef(allForces) // the current list of forces
  const phaseRef = useRef(phase) // the current game phase
  const mapListenerRef = useRef(null) // listen for mouse drag events
  const myForceRef = useRef(selectedForce)
  const platformTypesRef = useRef(allPlatforms)
  const currentTurnRef = useRef(currentTurn)

  useEffect(() => {
    mapRef.current = L.map('map', {
      minZoom: 8,
      maxZoom: 12,
      center: [(imageTop + imageBottom) / 2, (imageLeft + imageRight) / 2],
      zoom: 10,
      attributionControl: false,
      zoomAnimation: false
    })

    mapRef.current.zoomControl.setPosition('topleft')

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

    L.control.mousePosition().addTo(mapRef.current)

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

  const sendMessage = (mType, values) => {
    const curForce = allForces.find((force) => force.uniqid === selectedForce)
    const details = {
      channel: 'mapChannel', // todo: add channel
      from: {
        force: curForce.name,
        forceColor: curForce.forceColor,
        role: curForce.selectedRole,
        icon: curForce.icon
      },
      messageType: mType,
      timestamp: new Date().toISOString()
    }
    console.log('Sending:', currentWargame, details, values)

    saveMapMessage(currentWargame, details, values)
  }

  /** callback function - will transmit received parameters as "laydown" action */
  const laydownFunc = param => {
    sendMessage('ForceLaydown', param)
  }

  /** callback to tell UI that we've got control of a platform in this UI */
  const declareControlOf = (force, name, platformType) => {
    console.log('User can control:', name)
  }

  const clearControlledAssets = () => {
    console.log('Clearing list of controlled assets')
  }

  useEffect(() => {
    // double-check where we are
    console.log(new Date(), 'TURN:', phaseRef.current, currentTurnRef.current)

    if (mapListenerRef.current != null) {
      // remove the current listener
      mapListenerRef.current.clearListeners()

      // ditch the listener
      mapListenerRef.current = null
    }

    // clear the UI
    clearControlledAssets()

    // create a listener for the new phase
    const inForceLaydown = hasPendingForces(forcesRef.current, myForceRef.current)
    switch (phaseRef.current) {
      case 'adjudication':
        if (myForceRef.current === 'umpire') {
          mapListenerRef.current = new MapAdjudicatingUmpireListener(mapRef.current, gridImplRef.current)
        } else if (inForceLaydown && currentTurnRef.current === 0) {
          // this force has assets with location pending
          mapListenerRef.current = new MapAdjudicationPendingListener(mapRef.current, gridImplRef.current, laydownFunc)
        } else {
          // just use dumb adjudication listener
          mapListenerRef.current = new MapAdjudicatingPlayerListener(mapRef.current, gridImplRef.current)
        }
        break
      case 'planning':
        if (myForceRef.current === 'umpire') {
          mapListenerRef.current = new MapPlanningUmpireListener(mapRef.current, gridImplRef.current)
        } else {
<<<<<<< HEAD
          const turnComplete = (payload) => {
            console.log('Planned Route:', payload)
          }
          mapListenerRef.current = new MapPlanningPlayerListener(mapRef.current, gridImplRef.current, myForceRef.current, turnComplete)
=======
          mapListenerRef.current = new MapPlanningPlayerListener(mapRef.current, gridImplRef.current, myForceRef.current)
>>>>>>> feature/91-see-my-forces-state
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
          // set the asset location
          asset.loc = gridImplRef.current.hexNamed(asset.position).centrePos

          // set the asset force
          asset.force = force.name

          var assetIsDraggable
          switch (phaseRef.current) {
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
          const marker = markerFor(asset, force.name, myForceRef.current, platformTypesRef.current, assetIsDraggable, userIsUmpire)

          // did we create one?
          if (marker != null) {
            // tell the UI we're in control of this marker
            if (assetIsDraggable) {
              declareControlOf(force.name, asset.name, asset.platformType)
            }

            mapListenerRef.current.listenTo(marker, currentTurnRef.current)
            platformsLayerRef.current.addLayer(marker)
          }
        })
      }
    })
  }, [forcesRef, phaseRef, currentTurnRef])

  return (<div id="map" className="mapping"></div>)
}

export default Mapping
