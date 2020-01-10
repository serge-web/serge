import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import L from 'leaflet'
import GridImplementation from '../../Helpers/GridImplementation'
import MovementListener from '../../Helpers/MovementListener'
import markerFor from '../../Helpers/markerFor'

// TODO: This needs to be refactored so we're not just importing the whole file.
import '../../Helpers/mousePosition'

import './styles.scss'

const Mapping = ({ forces, imageTop, imageLeft, imageBottom, imageRight }) => {
  const mapRef = useRef(null)
  const gridRef = useRef(null)
  const coordsRef = useRef(null)
  const platformRef = useRef(null)
  const tileRef = useRef(null)
  const gridImplRef = useRef(null)
  const forcesRef = useRef(forces)
  const laydownRef = useRef(null)

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

    tileRef.current = L.tileLayer('./tiles/{z}/{x}/{y}.png', {
      minZoom: 8,
      maxZoom: 12,
      tms: false,
      bounds: imageBounds,
      attribution: 'Generated by QTiles'
    }).addTo(mapRef.current)

    L.control.mousePosition().addTo(mapRef.current)

    gridRef.current = L.layerGroup().addTo(mapRef.current)
    platformRef.current = L.layerGroup().addTo(mapRef.current)

    // note: we don't show the marker layer by default - only when zoomed in
    coordsRef.current = L.layerGroup()

    const overlays = {
      Grid: gridRef.current,
      Coordinates: coordsRef.current,
      Platforms: platformRef.current
    }

    const baseLayers = {
      OpenStreetMap: tiledBackdrop,
      'Tiled image': tileRef.current
    }

    L.control.layers(baseLayers, overlays, {
      collapsed: false
    }).addTo(mapRef.current)

    // only show the markers when zoomed in
    mapRef.current.on('zoomend', () => {
      if (mapRef.current.getZoom() < 11) {
        mapRef.current.removeLayer(coordsRef.current)
      } else {
        mapRef.current.addLayer(coordsRef.current)
      }
    })

    /* CREATE THE GRID */
    const delta = 0.0416666
    const origin = L.latLng(14.1166, 42.4166)
    gridImplRef.current = new GridImplementation({ origin, delta, width: 24, height: 21, markerLayer: coordsRef.current, gridRef: gridRef.current })

    // add hexagons to this map
    gridImplRef.current.addShapesTo(gridRef.current)

    return () => console.log('Map unmounted')
  }, [])

  useEffect(() => {
    // experiment with back-history
    const trialHistory = ['C05', 'C04', 'C03', 'C02', 'C01']

    // give us a couple of platforms
    const platforms = []
    platforms.push({ loc: gridImplRef.current.hexNamed('C01').centrePos, draggable: true, name: 'Frigate', travelMode: 'Sea', force: 'Blue', allowance: 5, mobile: true, history: trialHistory })
    platforms.push({ loc: gridImplRef.current.hexNamed('P02').centrePos, draggable: true, name: 'Coastal Radar Site', travelMode: 'Land', force: 'Red', mobile: false })
    platforms.push({ loc: gridImplRef.current.hexNamed('P03').centrePos, draggable: true, name: 'Fishing Vessel', travelMode: 'Sea', force: 'Green', allowance: 3, mobile: true })
    platforms.push({ loc: gridImplRef.current.hexNamed('C17').centrePos, draggable: true, name: 'Fixed Wing Aircraft', travelMode: 'Air', force: 'Blue', mobile: true })

    // create class to listen for movement
    const listener = new MovementListener(mapRef.current, gridImplRef.current)

    // listen to the platorm markers
    platforms.forEach(spec => {
      const marker = markerFor(spec)
      listener.listenTo(marker)
      platformRef.current.addLayer(marker)
    })
  }, [forcesRef])

  useEffect(() => {
  // Laydown ref updates
  }, [laydownRef])

  return (<div id="map" className="mapping"></div>)
}

export default Mapping
