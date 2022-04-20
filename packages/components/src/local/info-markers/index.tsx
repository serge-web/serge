import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup } from 'react-leaflet'
import L from 'leaflet'
/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import { ForceData } from '@serge/custom-types'
import { MapAnnotations, MapAnnotation } from '@serge/custom-types/map-annotation'
import InfoMarker from '../info-marker'
import { PLANNING_PHASE } from '@serge/config'
import { h3ToGeo } from 'h3-js'

/* Render component */
export const InfoMarkers: React.FC<{}> = () => {
  // pull in some context (with TS definitions)
  const { props } = useContext(MapContext)
  if (typeof props === 'undefined') return null
  const {
    forces,
    playerForce,
    phase,
    infoMarkers
  } = props

  const [isUmpire, setIsUmpire] = useState<boolean>(false)
  const [visibleMarkers, setVisibleMarkers] = useState<MapAnnotations>([])
  const [dragHandler, setDragHandler] = useState<{(location: L.LatLng): void } | undefined>(undefined)

  /**
   * determine if this is the umpire in adjudication mode, so that the
   * planned routes get trimmed
   */
  useEffect(() => {
    const hisForce = forces.find((force: ForceData) => force.uniqid === playerForce)
    setIsUmpire((hisForce && hisForce.umpire) || false)
  }, [playerForce, forces])

  useEffect(() => {
    if (isUmpire) {
      if (phase === PLANNING_PHASE) {
        const updateNow = (location: L.LatLng): void => {
          console.log('dragging marker immediately to:', location)
        }
        setDragHandler(updateNow)
      } else {
        const addToStateOfWorld = (location: L.LatLng): void => {
          console.log('In state of world, update marker to:', location)
        }
        setDragHandler(addToStateOfWorld)
      }
    } else {
      setDragHandler(undefined)
    }
  }, [isUmpire, phase])

  /**
   * filter the set of visible markers
   */
  useEffect(() => {
    if (infoMarkers) {
      if (isUmpire) {
        // include all
        setVisibleMarkers(infoMarkers)
      } else {
        const visibleMarkers = infoMarkers.filter((marker: MapAnnotation) => marker.visibleTo.some((value: string) => value === playerForce))
        setVisibleMarkers(visibleMarkers)
      }
    } else {
      setVisibleMarkers([])
    }
  }, [infoMarkers, isUmpire])

  return <>
    <LayerGroup key='info-markers' >{visibleMarkers && visibleMarkers.map((marker: MapAnnotation) => {
      const coords = h3ToGeo(marker.location)
      const location = L.latLng(coords[0], coords[1])
      return <InfoMarker key={marker.uniqid} marker={marker} location={location} dragged={dragHandler} />
    })}
    </LayerGroup>
  </>
}
export default InfoMarkers
