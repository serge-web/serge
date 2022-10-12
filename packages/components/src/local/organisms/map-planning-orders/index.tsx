
import { MessagePlanning, PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import { circleMarker, LatLng, Layer, PathOptions, StyleFunction } from 'leaflet'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { GeoJSON, LayerGroup } from 'react-leaflet-v4'
import PropTypes from './types/props'

const findActivity = (activities: PlanningActivity[], uniqid: PlanningActivityGeometry['uniqid']): PlanningActivity | undefined => {
  const activity = activities.find((value: PlanningActivity) => {
    // it's only worth processing if it has a color
    if (value.color && value.geometries) {
      return value.geometries.find((geom: PlanningActivityGeometry) => geom.uniqid === uniqid)
    }
    return false
  })
  return activity
}

export const MapPlanningOrders: React.FC<PropTypes> = ({ orders, activities, forceColor }) => {
  const [orderGeometries, setOrderGeometries] = useState<GeoJSON.Feature[] | undefined>()

  const geojsonMarkerOptions = {
    radius: 20,
    fillColor: '#ff7800',
    color: '#0f0',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }

  const pointToLayer = (_feature: GeoJSON.Feature<any>, latlng: LatLng): Layer => {
    return circleMarker(latlng, geojsonMarkerOptions)
  }

  /** orders definitions can specify the color to use.  If there is one, use it.
   * else use the force color
   */
  const styleFor: StyleFunction<any> = (feature?: GeoJSON.Feature<any>): PathOptions => {
    const featureId = feature && feature.properties && feature.properties.uniqid
    if (featureId && activities && activities.length) {
      const activity = findActivity(activities, featureId)
      if (activity) {
        const color = activity.color
        return {
          color: color,
          fillColor: color,
          className: 'leaflet-default-icon-path'
        }
      }
    }
    return {
      color: forceColor || '#f00'
    }
  }

  const onEachFeature = (feature: GeoJSON.Feature, layer: Layer): any => {
    // put the activity name into the popup for the feature
    if (feature && feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name)
    }
  }

  useEffect(() => {
    if (orders) {
      const withLocation = orders.filter((msg: MessagePlanning) => msg.message && (msg.message.location !== undefined))
      const geometries = withLocation.map((msg: MessagePlanning): GeoJSON.Feature[] => {
        if (msg.message.location) {
          const geoms = msg.message.location.map((act: PlannedActivityGeometry) => {
            const res = { ...act.geometry }
            if (res.properties) {
              res.properties.uniqid = act.uniqid
            } else {
              res.properties = { uniqid: act.uniqid }
            }
            const activity = findActivity(activities, act.uniqid)
            if (activity && activity.geometries) {
              const geometry = activity.geometries.find((geom: PlanningActivityGeometry) => geom.uniqid === act.uniqid)
              if (geometry) {
                res.properties.name = geometry.name
              }
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

  useEffect(() => {
    const outputOrderTimings = false
    if (orders && outputOrderTimings) {
      const timings = orders.map((msg: MessagePlanning) => {
        return '' + msg.message.title + ',' + msg.message.startDate + ', ' + msg.message.endDate
      })
      console.log(timings)
    }
  }, [orders])

  return <>
    {
      orderGeometries &&
      <LayerGroup key={'orders'}>
        <GeoJSON style={styleFor} pointToLayer={pointToLayer} onEachFeature={onEachFeature} data={{ ...orderGeometries, type: 'Feature' }} />
      </LayerGroup>
    }
  </>
}

export default MapPlanningOrders
