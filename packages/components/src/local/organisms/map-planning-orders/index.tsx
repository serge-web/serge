
import { MessagePlanning, PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import { PathOptions, StyleFunction } from 'leaflet'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { LayerGroup, GeoJSON } from 'react-leaflet'
import PropTypes from './types/props'

export const MapPlanningOrders: React.FC<PropTypes> = ({ orders, activities, forceColor }) => {
  const [orderGeometries, setOrderGeometries] = useState<GeoJSON.Feature[] | undefined>(undefined)

  /** orders definitions can specify the color to use.  If there is one, use it.
   * else use the force color
   */
  const styleFor: StyleFunction<any> = (feature?: GeoJSON.Feature<any>): PathOptions => {
    const featureId = feature && feature.properties && feature.properties.uniqid
    if (featureId && activities && activities.length) {
      const activity = activities.find((value: PlanningActivity) => {
        // it's only worth processing if it has a color
        if (value.color && value.geometries) {
          return value.geometries.find((geom: PlanningActivityGeometry) => geom.uniqid === featureId)
        }
        return false
      })
      if (activity) {
        const color = activity.color
        return {
          color: color,
          fillColor: color
        }
      }
    }
    console.warn('activity color not found for', feature)
    return {
      color: forceColor || '#f00'
    }
  }

  useEffect(() => {
    if (orders) {
      const withLocation = orders.filter((msg: MessagePlanning) => msg.message.location !== undefined)
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

export default MapPlanningOrders
