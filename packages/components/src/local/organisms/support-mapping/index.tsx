import React, { useEffect } from 'react'
import { LayerGroup, Map, ScaleControl, TileLayer } from 'react-leaflet'
import PlanningForces from '../planning-force'
import { MapConstants } from './helper/MapConstants'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const SupportMapping: React.FC<PropTypes> = ({ position, bounds, zoom, opForces, ownForces }) => {
  const TileLayerProps = MapConstants.TileLayer

  // const [markers, setMarkers] = useState<Asset[]>([])

  // useEffect(() => {
  //   const res: Asset[] = []
  //   allForces.forEach((force: ForceData) => {
  //     force.assets && force.assets.forEach((a: Asset) => {
  //       const loc = a.location
  //       if (loc) {
  //         res.push(a)
  //       }
  //     })
  //   })
  //   setMarkers(res)
  // }, [allForces])

  useEffect(() => {
    console.log('=> [SupportMapping] ownForces update: ', ownForces && ownForces.length, 'items')
  }, [ownForces])

  useEffect(() => {
    console.log('=> [SupportMapping]: opForces update: ', opForces && opForces.length, 'items')
  }, [opForces])

  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      const map: L.Map = ref.leafletElement
      map.zoomControl.setPosition('bottomright')
    }
  }

  return (
    <Map
      className={styles.map}
      center={bounds ? undefined : position}
      bounds={bounds}
      zoom={bounds ? undefined : zoom}
      ref={handleEvents}
    >
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      <LayerGroup key={'first-forces-layer'}>
        <PlanningForces assets={opForces} />
        {/* <PlanningForces assets={ownForces} /> */}
      </LayerGroup>
    </Map>
  )
}

export default SupportMapping
