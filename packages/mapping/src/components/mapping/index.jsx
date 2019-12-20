import React, { useEffect, useRef }  from 'react'
import L from 'leaflet'
import GridImplementation from '../../helpers/GridImplementation'
import MovementListener from '../../helpers/MovementListener'
import markerFor from '../../helpers/markerFor'

// TODO: This needs to be refactored so we're not just importing the whole file.
import '../../helpers/mousePosition'

import './styles.scss'

const Mapping = ({ image_top, image_left, image_bottom, image_right }) => {

    
    let mapRef = useRef(null)
    let gridRef = useRef(null)
    let markerRef = useRef(null)
    let platformRef = useRef(null)
    let tileRef = useRef(null)

    useEffect(() => {
        mapRef.current = L.map('map', {
            minZoom: 8,
            maxZoom: 12,
            center: [(image_top + image_bottom) / 2, (image_left + image_right) / 2],
            zoom: 9,
            attributionControl: false,
            zoomAnimation: false
        });

        mapRef.current.zoomControl.setPosition('topleft');
        
        const tiledBackdrop = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
            attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>'
        });
        
        const imageBounds = [[image_top, image_left], [image_bottom, image_right]];
        
        tileRef.current = L.tileLayer('./tiles/{z}/{x}/{y}.png', {
            minZoom: 8,
            maxZoom: 12,
            tms: false,
            bounds: imageBounds,
            attribution: 'Generated by QTiles'
        }).addTo(mapRef.current);
        
        L.control.mousePosition().addTo(mapRef.current);

        gridRef.current = L.layerGroup().addTo(mapRef.current)
        platformRef.current = L.layerGroup().addTo(mapRef.current);
        
        // note: we don't show the marker layer by default - only when zoomed in
        markerRef.current = L.layerGroup()
        
        const overlays = {
            "Grid":  gridRef.current,
            "Tooltips": markerRef.current,
            "Platforms": platformRef.current
        }

        const baseLayers = {
            "OpenStreetMap": tiledBackdrop,
            "Tiled image": tileRef.current
        }

        L.control.layers(baseLayers, overlays, {
            collapsed: false
        }).addTo(mapRef.current);

        // only show the markers when zoomed in
        mapRef.current.on('zoomend', () => {
            const loaded = mapRef.current.hasLayer(markerRef.current)
            if (mapRef.current.getZoom() < 11 && loaded) {
                mapRef.current.removeLayer(markerRef.current)
            } else {
                mapRef.current.addLayer(markerRef.current)
            }
        });

       /*
       *  CREATE THE GRID
       */
       const delta = 0.0416666
       const origin = L.latLng(14.1166, 42.4166)
       const gridImpl = new GridImplementation({origin, delta, width: 24, height: 21, markerLayer: markerRef.current, gridRef: gridRef.current})
       
       // add hexagons to this map
       gridImpl.addShapesTo(gridRef.current)

        /* 
        * CREATE SOME SAMPLE PLATFORMS
        */

        // experiment with back-history
        const trial_history = ["C05", "C04", "C03", "C02", "C01"]

        // give us a couple of platforms
        const platforms = []
        platforms.push({loc:gridImpl.hexNamed("C01").centrePos, draggable:true, name:"Frigate", travelMode:"Sea", force:"Blue", allowance:5, mobile:true, history:trial_history})
        platforms.push({loc:gridImpl.hexNamed("P02").centrePos, draggable:true, name:"Coastal Battery", travelMode:"Land", force:"Red", mobile:false})
        platforms.push({loc:gridImpl.hexNamed("P03").centrePos, draggable:true, name:"Fisherman", travelMode:"Sea", force:"Red", allowance:3, mobile:true})
        platforms.push({loc:gridImpl.hexNamed("C17").centrePos, draggable:true, name:"MPA", travelMode:"Air", force:"Blue", mobile:true})

        // create class to listen for movement
        const listener = new MovementListener(mapRef.current, gridImpl)

        // listen to the platorm markers
        platforms.forEach(spec => {
            markerRef.current = markerFor(spec)
            listener.listenTo(markerRef.current)
            platformRef.current.addLayer(markerRef.current)
        })

        return () => console.log("Map unmounted");
    }, [])

    return (
        <div id="map" className="mapping"></div>
    )
}

export default Mapping