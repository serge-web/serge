import { InteractionDetails, MessageAdjudicationOutcomes, MessagePlanning, PerForcePlanningActivitySet, PlannedProps } from '@serge/custom-types'
import { deepCopy, ForceStyle } from '@serge/helpers'
import { Feature, GeoJsonObject } from 'geojson'
import { circleMarker, LatLng, Layer, PathOptions, StyleFunction } from 'leaflet'
import _ from 'lodash'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { GeoJSON, LayerGroup, Marker, Tooltip } from 'react-leaflet-v4'
import {
  findPlannedGeometries, GeomWithOrders, injectTimes, invertMessages, overlapsInTime,
  PlanningContact, putInBin, SpatialBin, spatialBinning, touches
} from '../../support-panel/helpers/gen-order-data'
import { shapeFor, shapeForGeomWithOrders } from './SharedOrderRenderer'

export interface OrderPlotterProps {
  orders: MessagePlanning[]
  step: number
  handleAdjudication?: { (details: InteractionDetails, outcomes: MessageAdjudicationOutcomes): void }
  activities: PerForcePlanningActivitySet[]
  forceCols: Array<ForceStyle>
}

const differentForces = (me: GeomWithOrders, other: GeomWithOrders): boolean => {
  return me.force !== other.force
}

const createContactReference = (me: string, other: string): string => {
  return me + ' ' + other
}

export const OrderPlotter: React.FC<OrderPlotterProps> = ({ orders, step, activities, handleAdjudication, forceCols }) => {
  const [bins, setBins] = useState<SpatialBin[]>([])
  //   const [currentBins, setCurrentBins] = useState<SpatialBin[]>([])
  const [interactionsProcessed, setInteractionsProcessed] = useState<string[]>([])
  const [geometriesWithOrders, setGeometriesWithOrders] = useState<GeomWithOrders[]>([])
  const [geometries, setGeometries] = useState<GeoJsonObject | undefined>(undefined)
  const [binToProcess, setBinToProcess] = useState<number | undefined>(undefined)
  const [binningComplete, setBinningComplete] = useState<boolean>(false)
  const [contacts, setContacts] = useState<PlanningContact[]>([])
  const [cachedContacts] = useState<Record<string, PlanningContact | null>>({})
  const [sentForAdjudication] = useState<PlanningContact[]>([])
  const [message1, setMessage1] = useState<string>('')
  const [message2, setMessage2] = useState<string>('')
  const [toAdjudicateFeature, setToAdjudicateFeature] = useState<React.ReactElement | undefined>(undefined)
  const [layersToDelete] = useState<Layer[]>([])

  const findTouching = (geometries: GeomWithOrders[]): PlanningContact[] => {
    const res: PlanningContact[] = []
    geometries.forEach((me: GeomWithOrders, myIndex: number) => {
      geometries.forEach((other: GeomWithOrders, otherIndex: number) => {
        // check it's not me
        if (myIndex !== otherIndex) {
          // don't compare geometries that are part of the same activity
          if (me.plan._id !== other.plan._id) {
            // generate IDs, to ensure we don't compare shapes twice
            const meFirst = (me.id < other.id)
            const first = meFirst ? me : other
            const second = meFirst ? other : me
            const id = createContactReference(first.id, second.id)
            // have we already checked this permutation?
            if (!interactionsProcessed.includes(id)) {
              // has it already been sent for adjudication?
              if (!sentForAdjudication.find((item: PlanningContact) => item.id === id)) {
                interactionsProcessed.push(id)
                if (differentForces(me, other) && overlapsInTime(me, other)) {
                  // see if we have a cached ocntact
                  const cachedResult = cachedContacts[id]
                  if (cachedResult !== undefined) {
                    if (cachedResult !== null) {
                      res.push(cachedResult)
                    }
                  } else {
                    const contact = touches(me, other, id, Math.random, 30)
                    if (contact) {
                      res.push(contact)
                    }
                    cachedContacts[id] = contact || null
                  }
                }
              }
            }
          }
        }
      })
    })
    return res
  }

  useEffect(() => {
    if (bins.length === 0 && !binningComplete) {
      console.log('binning', geometriesWithOrders.length)
      const cleanGeoms = geometriesWithOrders.map((geom: GeomWithOrders): GeomWithOrders => {
        const clean: GeomWithOrders = deepCopy(geom)
        const props = clean.geometry.properties as PlannedProps
        delete props.inContact
        delete props.newContact
        delete props.toBeConsidered
        return clean
      })
      setGeometriesWithOrders(cleanGeoms)

      console.time('Execution Time')

      const newGeometries = invertMessages(orders, activities)
      const withTimes = injectTimes(newGeometries)
      let time = moment('2022-11-15T00:00:00.000Z').valueOf()
      if (sentForAdjudication.length) {
        const lastId = sentForAdjudication[sentForAdjudication.length - 1]
        console.log('last one', lastId)
        time = lastId.timeStart
      }
      setMessage2('Considering activities from ' + time + ' onwards')

      const geometriesInTimeWindow = findPlannedGeometries(withTimes, time, 160)

      // update if it's to be considered
      const updated = withTimes.map((geom: GeomWithOrders): GeomWithOrders => {
        const newItem: GeomWithOrders = deepCopy(geom)
        const props = geom.geometry.properties as PlannedProps
        props.toBeConsidered = geometriesInTimeWindow.some((val: GeomWithOrders) => val.id === geom.id)
        return newItem
      })
      setGeometriesWithOrders(updated)

      // now do spatial binning
      const bins = spatialBinning(geometriesInTimeWindow, 6)
      const binnedOrders = putInBin(geometriesInTimeWindow, bins)
      setBins(binnedOrders)
      //      setCurrentBins(binnedOrders)

      setMessage1('Generating interactions for' + geometriesInTimeWindow.length + ' orders in this time window in ' + bins.length + ' bins')
    }
    if (step > 0) {
      setBinToProcess(0)
    }
  }, [orders, step])

  useEffect(() => {
    if (bins.length && binToProcess !== undefined) {
      setToAdjudicateFeature(undefined)
      if (binToProcess === 0) {
        setInteractionsProcessed([])
      }

      setMessage1('Processing bin ' + (1 + binToProcess) + ' of ' + bins.length + ' (' + interactionsProcessed.length + ' tests)')
      if (sentForAdjudication.length > 0) {
        const lastItem = sentForAdjudication[sentForAdjudication.length - 1]
        setMessage2('Considering activities from ' + moment(lastItem.timeStart).toISOString() + ' onwards')
      }
      const bin = bins[binToProcess]
      const newContacts = findTouching(bin.orders)
      setContacts(contacts.concat(newContacts))

      // update contact status
      const updated = geometriesWithOrders.map((geom: GeomWithOrders): GeomWithOrders => {
        const newItem: GeomWithOrders = deepCopy(geom)
        const props: PlannedProps = newItem.geometry.properties as PlannedProps
        if (props.newContact) {
          delete props.newContact
        }
        if (!props.inContact) {
          const isNewContact = newContacts.find((val: PlanningContact) => val.first.id === newItem.id || (val.second && val.second.id === newItem.id))
          if (isNewContact) {
            props.inContact = true
            props.newContact = true
          }
        }
        return newItem
      })
      setGeometriesWithOrders(updated)
      // setCurrentBins([bin])
      if (binToProcess < bins.length - 1) {
        setTimeout(() => setBinToProcess(1 + binToProcess), 0)
      } else {
        setBinningComplete(true)
      }
    }
  }, [binToProcess, bins])

  const summariseContact = (val: PlanningContact): any => {
    return {
      val: moment(val.timeStart).toISOString(),
      a: val.first.plan.message.title + ' ' + val.first.id,
      b: val.second ? val.second.plan.message.title + ' ' + val.second.id : ''
    }
  }
  useEffect(() => {
    if (binningComplete) {
      const withTime = contacts.filter((contact: PlanningContact) => contact.timeStart !== -1)
      console.log('matches', withTime.length)
      // sort by start time
      const sorted = _.sortBy(withTime, ['timeStart'])
      if (sorted.length > 0) {
        const nextToProcess = sorted[0] as any
        // note this next line will fail, we need generate outcomes from the
        // planning contact
        handleAdjudication && handleAdjudication(nextToProcess as InteractionDetails, nextToProcess as MessageAdjudicationOutcomes)
        // reset
        setContacts([])
        setInteractionsProcessed([])
        setBins([])
        // setCurrentBins(bins)
        sentForAdjudication.push(nextToProcess)

        setMessage1('Sending for adjudication:' + nextToProcess.id)
        console.timeEnd('Execution Time')

        // flush any temporary layers
        while (layersToDelete.length > 0) {
          const layer = layersToDelete.shift()
          layer && layer.remove()
        }

        // handler to store layer references
        const storeRef = (polyline: Layer): void => {
          layersToDelete.push(polyline)
        }

        setToAdjudicateFeature(shapesForContact(sorted[0], storeRef))
      }
      const debug = !7
      debug && console.table(sorted.map((val: PlanningContact) => {
        return summariseContact(val)
      }))
      setBinningComplete(false)
    }
  }, [binningComplete])

  useEffect(() => {
    if (geometriesWithOrders.length) {
      const geoJson = {
        type: 'FeatureCollection',
        features: geometriesWithOrders.map((geom: GeomWithOrders) => geom.geometry)
      }
      setGeometries(geoJson as GeoJsonObject)
    }
  }, [geometriesWithOrders])

  const onEachFeature = (feature: GeoJSON.Feature, layer: Layer): any => {
    // put the activity name into the popup for the feature
    if (feature && feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name)
    }
  }

  const filterPendingFeatures = (inContact: boolean, feature: Feature): any => {
    // put the activity name into the popup for the feature
    if (feature && feature.properties) {
      const myProps = feature.properties as PlannedProps
      if (inContact) {
        return myProps.inContact
      } else {
        return !myProps.inContact
      }
    }
  }

  // const styleForBoxes: StyleFunction<any> = (feature?: Feature<any>): PathOptions => {
  //   const hasOrders = feature && feature.properties && feature.properties.orderNum > 0
  //   return {
  //     color: '#f0f',
  //     fillColor: hasOrders ? '#0f0' : '#eee',
  //     className: 'leaflet-default-icon-path'
  //   }
  // }

  const geojsonMarkerOptions = {
    radius: 10,
    fillColor: '#ff7800',
    color: '#0f0',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }

  const pointToLayer = (_feature: Feature<any>, latlng: LatLng): Layer => {
    return circleMarker(latlng, geojsonMarkerOptions)
  }

  const styleForFeatures: StyleFunction<any> = (feature?: Feature<any>): PathOptions => {
    if (feature) {
      const props = feature.properties as PlannedProps
      const force = props.force
      const forceStyle = forceCols.find((val) => val.forceId === force)
      const useForceColor = true
      let color
      if (useForceColor) {
        color = forceStyle ? forceStyle.color : '#0ff'
      } else {
        const inContact = props.inContact
        const newContact = props.newContact
        if (inContact) {
          if (newContact) {
            color = '#0f0'
          } else {
            color = '#080'
          }
        } else {
          color = '#aaa'
        }
      }
      return {
        color: color,
        weight: 1,
        fillColor: color,
        className: 'leaflet-default-icon-path'
      }
    } else {
      return {}
    }
  }

  const shapesForContact = (contact: PlanningContact, storeRef: { (polyline: Layer): void }): React.ReactElement => {
    const hightlightColor = '#0f0'
    const interFeature = contact.intersection && {
      type: 'Feature',
      geometry: contact.intersection,
      properties: {}
    }
    return <>
      {shapeForGeomWithOrders(contact.first, forceCols, activities, storeRef, 1)}
      {contact.second && shapeForGeomWithOrders(contact.second, forceCols, activities, storeRef, 2)}
      {interFeature && shapeFor(interFeature as Feature, hightlightColor, '', storeRef, 3)}
    </>
  }

  return <>
    {(message1.length > 0 || message2.length > 0) &&
      <Marker opacity={0} position={[-2, 120]}>
        <Tooltip permanent={true}>
          <span>{message1}</span><br /><span>{message2}</span>
        </Tooltip>
      </Marker>
    }
    {/* {bins.length > 0 &&
      <LayerGroup key={'bins'}>
        {!7 && currentBins.map((bin: SpatialBin, index: number) =>
          <GeoJSON style={styleForBoxes} onEachFeature={onEachFeature} data={bin.polygon} key={'a_' + index + Math.random()} />
        )}
      </LayerGroup>
    } */}
    {
      geometries !== undefined && !toAdjudicateFeature &&
      <>
        <LayerGroup key={'features'}>
          <GeoJSON pointToLayer={pointToLayer} style={styleForFeatures} onEachFeature={onEachFeature}
            filter={(feature): boolean => filterPendingFeatures(false, feature)}
            data={geometries} key={'feature_no_contact' + Math.random()} />
          <GeoJSON pointToLayer={pointToLayer} style={styleForFeatures} onEachFeature={onEachFeature}
            filter={(feature): boolean => filterPendingFeatures(true, feature)}
            data={geometries} key={'feature_contact' + Math.random()} />
        </LayerGroup >
      </>
    }
    {
      toAdjudicateFeature &&
      <>
        <LayerGroup key={'feature_to_adjudicate'}>
          {
            toAdjudicateFeature
          }
        </LayerGroup >
      </>
    }
  </>
}

export default OrderPlotter
