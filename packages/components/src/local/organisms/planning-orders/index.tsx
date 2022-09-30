
import { MessagePlanning, PlannedActivityGeometry } from '@serge/custom-types'
import { PathOptions, StyleFunction } from 'leaflet'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { LayerGroup, GeoJSON } from 'react-leaflet'
import PropTypes from './types/props'

export const PlanningOrders: React.FC<PropTypes> = ({ orders }) => {
  const [orderGeometries, setOrderGeometries] = useState<GeoJSON.Feature[] | undefined>(undefined)

  const styleFor: StyleFunction<any> = (feature?: GeoJSON.Feature<any>): PathOptions => {
    console.log('data', feature)
    return {
      color: '#f00'
    }
  }

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
    }
  }, [orders])

  return <>
    {
      orderGeometries &&
      <LayerGroup key={'orders'}>
        <GeoJSON style={styleFor} data={orderGeometries} />
      </LayerGroup>
    }
  </>
}

export default PlanningOrders
