
import { MessageInteraction, MessagePlanning, PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import { ForceStyle } from '@serge/helpers'
import { Feature } from 'geojson'
import { Layer } from 'leaflet'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { LayerGroup } from 'react-leaflet-v4'
import { shapeFor } from '../planning-channel/helpers/SharedOrderRenderer'
import PropTypes from './types/props'

const localFindActivity = (activities: PlanningActivity[], uniqid: PlanningActivityGeometry['uniqid']): PlanningActivity | undefined => {
  const activity = activities.find((value: PlanningActivity) => {
    if (value.geometries) {
      return value.geometries.find((geom: PlanningActivityGeometry) => geom.uniqid === uniqid)
    }
    return false
  })
  return activity
}

export const MapPlanningOrders: React.FC<PropTypes> = ({ orders, activities, selectedOrders, forceColors, interactions, selectedInteraction }) => {
  const [interactionGeometries, setInteractionGeometries] = useState<React.ReactElement[]>([])
  const [orderGeometries, setOrderGeometries] = useState<React.ReactElement[]>([])
  const [layersToDelete] = useState<Layer[]>([])

  /** produce a list of features for the geometries in this message */
  const featuresForPlanningMessage = (msg: MessagePlanning): Feature[] => {
    if (msg.message.location) {
      const fromForce = msg.details.from.forceId
      const color: ForceStyle = forceColors.find((force: ForceStyle) => force.forceId === fromForce)
      const geoms = msg.message.location.map((act: PlannedActivityGeometry) => {
        const res = { ...act.geometry }
        if (res.properties) {
          res.properties.uniqid = act.uniqid
        } else {
          res.properties = { uniqid: act.uniqid }
        }
        res.properties.forceColor = color.color
        const activity = localFindActivity(activities, act.uniqid)
        if (activity && activity.geometries) {
          const geometry = activity.geometries.find((geom: PlanningActivityGeometry) => geom.uniqid === act.uniqid)
          if (geometry) {
            res.properties.name = activity.name + ' - ' + geometry.name
          }
        } else {
          console.warn('failed to find activity for', act.uniqid, activities)
        }
        return res
      })
      return geoms
    } else {
      throw Error('Location missing ' + msg.message.title)
    }
  }

  useEffect(() => {
    if (interactions) {
      // clear existing data
      while (layersToDelete.length > 0) {
        const layer = layersToDelete.shift()
        layer && layer.remove()
      }

      if (!selectedInteraction) {
        setInteractionGeometries([])
      } else {
        const interMsg = interactions.find((val: MessageInteraction) => val._id === selectedInteraction)
        if (!interMsg) {
          console.warn('failed to find interaction with id:', selectedInteraction)
          return
        }
        const details = interMsg.details.interaction
        if (!details) {
          console.warn('Failed to find interaction details for id:', selectedInteraction)
          return
        }
        // get the ids
        const iOrdersIds = details.orders2 ? [details.orders1, details.orders2] : [details.orders1]
        // get the actual orders
        const iOrders = orders.filter((plan: MessagePlanning) => iOrdersIds.includes(plan._id))
        const withLocation = iOrders.filter((msg: MessagePlanning) => msg.message && (msg.message.location !== undefined) && Array.isArray(msg.message.location))
        const geometries = withLocation.map((msg: MessagePlanning): Feature[] => {
          return featuresForPlanningMessage(msg)
        })
        const flatGeom = _.flatten(geometries)

        // handler to store layer references
        const storeRef = (polyline: Layer): void => {
          layersToDelete.push(polyline)
        }

        const elements = flatGeom.map((feature: Feature, index: number) => {
          if (feature.properties) {
            const color = feature.properties.forceColor
            return shapeFor(feature, color, feature.properties.name || 'unknown', storeRef, index)
          } else {
            return <></>
          }
        })

        // also see if there is an interaction geomertry
        if (details.geometry) {
          // create the feature
          const feature: Feature = {
            type: 'Feature',
            geometry: details.geometry,
            properties: {}
          }
          const color = '#FF0'
          const shape = shapeFor(feature, color, 'interaction', storeRef, elements.length)
          console.warn('Generating shape for this interaction', shape)
          elements.push(shape)
        }

        setInteractionGeometries(elements)
      }
    }
  }, [interactions, selectedInteraction])

  useEffect(() => {
    if (orders) {
      // clear existing data
      while (layersToDelete.length > 0) {
        const layer = layersToDelete.shift()
        layer && layer.remove()
      }

      // sort out what to render
      // note: we were failing on the next line because incomplete messages had an empty string in for location
      const withLocation = orders.filter((msg: MessagePlanning) => msg.message && (msg.message.location !== undefined) && Array.isArray(msg.message.location))
      const isSelected = withLocation.filter((msg: MessagePlanning) => selectedOrders && selectedOrders.includes(msg._id))
      const geometries = isSelected.map((msg: MessagePlanning): Feature[] => {
        return featuresForPlanningMessage(msg)
      })
      const flatGeom = _.flatten(geometries)

      // handler to store layer references
      const storeRef = (polyline: Layer): void => {
        layersToDelete.push(polyline)
      }

      const elements = flatGeom.map((feature: Feature, index: number) => {
        if (feature.properties) {
          const color = feature.properties.forceColor
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
    {orderGeometries && orderGeometries.length > 0 &&
      <LayerGroup key={'orders'}>
        {orderGeometries}
      </LayerGroup>}
    {interactionGeometries && interactionGeometries.length > 0 &&
      <LayerGroup key={'interactions'}>
        {interactionGeometries}
      </LayerGroup>}
  </>
}

export default MapPlanningOrders
