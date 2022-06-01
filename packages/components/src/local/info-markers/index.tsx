import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup } from 'react-leaflet'
import L from 'leaflet'
/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import { ForceData } from '@serge/custom-types'
import { MapAnnotations, MapAnnotation } from '@serge/custom-types/map-annotation'
import InfoMarker from '../info-marker'
import { geoToH3, h3ToGeo } from 'h3-js'

/* Render component */
export const InfoMarkers: React.FC<{}> = () => {
  // pull in some context (with TS definitions)
  const { props } = useContext(MapContext)
  if (typeof props === 'undefined') return null
  const {
    forces,
    playerForce,
    infoMarkers,
    h3Resolution,
    selectedMarker,
    updateMarker,
    markerIcons
  } = props

  const [isUmpire, setIsUmpire] = useState<boolean>(false)
  const [visibleMarkers, setVisibleMarkers] = useState<MapAnnotations>([])

  /**
   * determine if this is the umpire in adjudication mode, so that the
   * planned routes get trimmed
   */
  useEffect(() => {
    const hisForce = forces.find((force: ForceData) => force.uniqid === playerForce)
    setIsUmpire((hisForce && hisForce.umpire) || false)
  }, [playerForce, forces])

  const dragHandler = (location: L.LatLng): void => {
    const marker = infoMarkers.find((item: MapAnnotation) => item.uniqid === selectedMarker)
    if (!marker) {
      console.error('could not find this marker', selectedMarker)
      return
    }
    const newLocation = geoToH3(location.lat, location.lng, h3Resolution)
    marker.location = newLocation
    updateMarker && updateMarker(marker)
  }

  /**
   * filter the set of visible markers
   */
  useEffect(() => {
    if (infoMarkers) {
      if (isUmpire) {
        // include all
        setVisibleMarkers(infoMarkers)
      } else {
        const visibleMarkers = infoMarkers ? infoMarkers.filter((marker: MapAnnotation) => marker.visibleTo.some((value: string) => value === playerForce)) : []
        setVisibleMarkers(visibleMarkers)
      }
    } else {
      setVisibleMarkers([])
    }
  }, [infoMarkers, isUmpire])

  return <>
    <LayerGroup key='info-markers' >{visibleMarkers && visibleMarkers.map((marker: MapAnnotation) => {
      const coords = h3ToGeo(marker.location)
      const location = marker.position || L.latLng(coords[0], coords[1])
      return <InfoMarker key={marker.uniqid} marker={marker} icons={markerIcons} locationHex={marker.location} location={location} dragged={dragHandler} />
    })}
    </LayerGroup>
  </>
}
export default InfoMarkers
