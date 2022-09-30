import React, { useEffect, useState } from 'react'
import { LayerGroup, Map, ScaleControl, TileLayer, GeoJSON } from 'react-leaflet'
import PlanningForces from '../planning-force'
import { MapConstants } from './helper/MapConstants'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { Map as LMap } from 'leaflet'
import MapControl from '../../map-control'
import { MessagePlanning, PlannedActivityGeometry } from '@serge/custom-types'
import _ from 'lodash'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds, ownAssets,
  opAssets, filterApplied, setFilterApplied, setSelectedAssets, selectedAssets, forces,
  viewAsCallback, viewAsForce, actionItems, actionCallback, orders
}) => {
  const TileLayerProps = MapConstants.TileLayer
  const [orderGeometries, setOrderGeometries] = useState<GeoJSON.Feature[] | undefined>(undefined)

  const [leafletElement, setLeafletElement] = useState<LMap | undefined>(undefined)

  useEffect(() => {
    if (orders) {
      const withLocation = orders.filter((msg: MessagePlanning) => {
        return msg.message.location !== undefined
      })
      const geometries = withLocation.map((msg: MessagePlanning): GeoJSON.Feature[] => {
        if (msg.message.location) {
          const geoms = msg.message.location.map((act: PlannedActivityGeometry) => {
            const res = { ...act.geometry }
            if (res.properties) {
              res.properties.uniqid = act.uniqid
            } else {
              res.properties = { uniqid: act.uniqid }
            }
            return res
          })
          return geoms
        } else {
          throw Error('Location missing ' + msg.message.title)
        }
      })
      const flatGeom = _.flatten(geometries)
      setOrderGeometries(flatGeom)
      console.log('geo', geometries)
    }
  }, [bounds])

  useEffect(() => {
    if ((bounds !== undefined) && leafletElement) {
      leafletElement.flyToBounds(bounds, { duration: 0.6 })
    }
  }, [bounds])

  useEffect(() => {
    if (position !== undefined) {
      const defaultZoom = 10
      leafletElement && leafletElement.flyTo(position, defaultZoom, { duration: 0.6 })
    }
  }, [position])

  const handleEvents = (ref: any): void => {
    if (ref && ref.leafletElement) {
      const map: LMap = ref.leafletElement
      if (leafletElement === undefined) {
        setLeafletElement(map)
        bounds && map.fitBounds(bounds)
      }
    }
  }

  return (
    <Map
      className={styles.map}
      ref={handleEvents}
      zoomControl={false}
    >
      <MapControl
        map={leafletElement}
        bounds={bounds}
        filterApplied={filterApplied}
        forces={forces || undefined}
        viewAsCallback={viewAsCallback}
        viewAsForce={viewAsForce}
        zoomStepSize={1}
        actionItems={actionItems}
        actionCallback={actionCallback}
        setFilterApplied={setFilterApplied} />
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      <LayerGroup key={'own-forces'}>
        <PlanningForces opFor={false} assets={ownAssets} setSelectedAssets={setSelectedAssets} selectedAssets={selectedAssets} />
      </LayerGroup>
      <LayerGroup key={'opp-forces'}>
        <PlanningForces opFor={true} assets={opAssets} setSelectedAssets={setSelectedAssets} selectedAssets={selectedAssets} />
      </LayerGroup>
      {
        orderGeometries &&
        <LayerGroup key={'orders'}>
          <GeoJSON data={orderGeometries}/>
        </LayerGroup>
      }
    </Map>
  )
}

export default SupportMapping
