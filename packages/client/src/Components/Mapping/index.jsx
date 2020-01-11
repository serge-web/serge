import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import GridImplementation from '../../Helpers/GridImplementation'
import MapAdjudicatingUmpireListener from '../../Helpers/MapAdjudicatingUmpireListener'
import MapAdjudicatingPlayerListener from '../../Helpers/MapAdjudicatingPlayerListener'
import MapAdjudicationPendingListener from '../../Helpers/MapAdjudicationPendingListener'
import MapPlanningListener from '../../Helpers/MapPlanningListener'
import markerFor from '../../Helpers/markerFor'
import hasPendingForces from '../../Helpers/hasPendingForces'

// TODO: This needs to be refactored so we're not just importing the whole file.
import '../../Helpers/mousePosition'

import './styles.scss'

const Mapping = ({ allForces, allPlatforms, force, phase, imageTop, imageLeft, imageBottom, imageRight }) => {
  const mapRef = useRef(null) // the leaflet map
  const platformsLayerRef = useRef(null) // the platform markers
  const gridImplRef = useRef(null) // hexagonal grid
  const forcesRef = useRef(allForces) // the current list of forces
  const phaseRef = useRef(phase) // the current game phase
  const mapListenerRef = useRef(null) // listen for mouse drag events
  const myForceRef = useRef(force)
  const platformTypesRef = useRef(allPlatforms)

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

  /** callback function - will transmit received parameters as "laydown" action */
  const laydownFunc = param => console.log(param)

  useEffect(() => {
    // experiment with back-history
    const trialHistory = ['C05', 'C04', 'C03', 'C02', 'C01']

    // give us a couple of platforms
    const platforms = []
    platforms.push({ loc: gridImplRef.current.hexNamed('C01').centrePos, draggable: true, name: 'Frigate', travelMode: 'sea', force: 'Blue', allowance: 5, mobile: true, history: trialHistory })
    platforms.push({ loc: gridImplRef.current.hexNamed('P02').centrePos, draggable: true, name: 'Coastal Radar Site', travelMode: 'land', force: 'Red', mobile: false })
    platforms.push({ loc: gridImplRef.current.hexNamed('P03').centrePos, draggable: true, name: 'Fishing Vessel', travelMode: 'sea', force: 'Green', allowance: 3, mobile: true })
    platforms.push({ loc: gridImplRef.current.hexNamed('C17').centrePos, draggable: true, name: 'Fixed Wing Aircraft', travelMode: 'air', force: 'Blue', mobile: true })

    if (mapListenerRef.current != null) {
      // remove the current listener

      // ditch the listener
      mapListenerRef.current = null
    }

    // create a listener for the new phase
    const inForceLaydown = hasPendingForces(forcesRef.current, myForceRef.current)
    switch (phaseRef.current) {
      case 'adjudication':
        if (myForceRef.current === 'umpire') {
          mapListenerRef.current = new MapAdjudicatingUmpireListener(mapRef.current, gridImplRef.current)
        } else if (inForceLaydown) {
          // this force has assets with location pending
          mapListenerRef.current = new MapAdjudicationPendingListener(mapRef.current, gridImplRef.current, laydownFunc)
        } else {
          // just use dumb adjudication listener
          mapListenerRef.current = new MapAdjudicatingPlayerListener(mapRef.current, gridImplRef.current)
        }
        break
      case 'planning':
        mapListenerRef.current = new MapPlanningListener(mapRef.current, gridImplRef.current)
        break
      default:
        console.log('Error - unexpected game phase encountered in Mapping component')
    }

    // laydownFunc({ force: 'Red', platform: 'Fishing Vessel', location: 'A13' })

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
            mapListenerRef.current.listenTo(marker, myForceRef.current)
            platformsLayerRef.current.addLayer(marker)
          }
        })
      }
    })

  }, [forcesRef, phaseRef])

  return (<div id="map" className="mapping"></div>)
}

export default Mapping
