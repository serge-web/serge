
import { MessagePlanning, PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import { Feature } from 'geojson'
import { Layer } from 'leaflet'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { LayerGroup } from 'react-leaflet-v4'
import { shapeFor } from '../planning-channel/helpers/SharedOrderRenderer'
import PropTypes from './types/props'

const localFindActivity = (activities: PlanningActivity[], uniqid: PlanningActivityGeometry['uniqid']): PlanningActivity | undefined => {
  const activity = activities.find((value: PlanningActivity) => {
    // it's only worth processing if it has a color
    if (value.color && value.geometries) {
      return value.geometries.find((geom: PlanningActivityGeometry) => geom.uniqid === uniqid)
    }
    return false
  })
  return activity
}

export const MapPlanningOrders: React.FC<PropTypes> = ({ orders, activities, forceColor, selectedOrders }) => {
  const [orderGeometries, setOrderGeometries] = useState<React.ReactElement[]>([])
  const [layersToDelete] = useState<Layer[]>([])

  useEffect(() => {
    if (orders) {
      // clear existing data
      while (layersToDelete.length > 0) {
        const layer = layersToDelete.shift()
        layer && layer.remove()
      }

      // sort out what to render
      const withLocation = orders.filter((msg: MessagePlanning) => msg.message && (msg.message.location !== undefined))
      const isSelected = withLocation.filter((msg: MessagePlanning) => selectedOrders && selectedOrders.includes(msg._id))
      const geometries = isSelected.map((msg: MessagePlanning): Feature[] => {
        if (msg.message.location) {
          const geoms = msg.message.location.map((act: PlannedActivityGeometry) => {
            const res = { ...act.geometry }
            if (res.properties) {
              res.properties.uniqid = act.uniqid
            } else {
              res.properties = { uniqid: act.uniqid }
            }
            const activity = localFindActivity(activities, act.uniqid)
            if (activity && activity.geometries) {
              const geometry = activity.geometries.find((geom: PlanningActivityGeometry) => geom.uniqid === act.uniqid)
              if (geometry) {
                res.properties.name = geometry.name
              }
            } else {
              console.warn('failed to find activity for', act.uniqid)
            }
            return res
          })
          return geoms
        } else {
          throw Error('Location missing ' + msg.message.title)
        }
      })
      const flatGeom = _.flatten(geometries)

      // handler to store layer references
      const storeRef = (polyline: Layer): void => {
        layersToDelete.push(polyline)
      }

      const elements = flatGeom.map((feature: Feature, index: number) => {
        if (feature.properties) {
          const activity = localFindActivity(activities, feature.properties.uniqid)
          let color = forceColor || '#0f0'
          if (activity && activity.color) {
            color = activity.color
          }
          return shapeFor(feature, color, feature.properties.name || 'unknown', storeRef, index)
        } else {
          return <></>
        }
      })

      setOrderGeometries(elements)
    }
  }, [orders, selectedOrders])

  useEffect(() => {
    const outputOrderTimings = false
    if (orders && outputOrderTimings) {
      const timings = orders.map((msg: MessagePlanning) => {
        return '' + msg.message.title + ',' + msg.message.startDate + ', ' + msg.message.endDate
      })
      console.log('timings', timings)
    }
  }, [orders])

  return <>
    { orderGeometries && orderGeometries.length > 0 &&
      <LayerGroup key={'orders'}>
        { orderGeometries }
      </LayerGroup> }
  </>
}

export default MapPlanningOrders
