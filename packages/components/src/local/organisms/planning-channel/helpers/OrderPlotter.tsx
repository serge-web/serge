
import { MessagePlanning, PlannedProps } from '@serge/custom-types'
import { circleMarker, Layer, PathOptions, StyleFunction } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { LayerGroup, GeoJSON } from 'react-leaflet'
import { PlanningContact, findPlannedGeometries, GeomWithOrders, injectTimes, invertMessages, overlapsInTime, putInBin, SpatialBin, spatialBinning, touches } from '../../support-panel/helpers/gen-order-data'
import { deepCopy } from '@serge/helpers'
import _ from 'lodash'
import moment from 'moment-timezone'

export interface PlotterTypes {
  orders: MessagePlanning[]
  step: number
  handleAdjudication: { (contact: PlanningContact): void }
}

const differentForces = (me: GeomWithOrders, other: GeomWithOrders): boolean => {
  return me.force !== other.force
}

const createContactReference = (me: string, other: string): string => {
  return me + ' ' + other
}

export const OrderPlotter: React.FC<PlotterTypes> = ({ orders, step, handleAdjudication }) => {
  const [bins, setBins] = useState<SpatialBin[]>([])
  const [currentBins, setCurrentBins] = useState<SpatialBin[]>([])
  const [interactionsProcessed, setInteractionsProcessed] = useState<string[]>([])
  const [geometries, setGeometries] = useState<GeomWithOrders[]>([])
  const [binToProcess, setBinToProcess] = useState<number | undefined>(undefined)
  const [binningComplete, setBinningComplete] = useState<boolean>(false)
  const [contacts, setContacts] = useState<PlanningContact[]>([])
  const [sentForAdjudication] = useState<PlanningContact[]>([])

  const findTouching = (geometries: GeomWithOrders[]): PlanningContact[] => {
    const res: PlanningContact[] = []
    geometries.forEach((me: GeomWithOrders, myIndex: number) => {
      geometries.forEach((other: GeomWithOrders, otherIndex: number) => {
        // check it's not me
        if (myIndex !== otherIndex) {
          // don't compare geometries that are part of the same activity
          if (me.activity._id !== other.activity._id) {
            // generate IDs, to ensure we don't compare shapes twice
            const meFirst = (me.id < other.id)
            const first = meFirst ? me : other
            const second = meFirst ? other : me
            const id = createContactReference(first.id, second.id)
            // have we already checked this permutation?
            if (!interactionsProcessed.includes(id)) {
              if (!sentForAdjudication.find((item: PlanningContact) => item.id === id)) {
                interactionsProcessed.push(id)
                if (differentForces(me, other) && overlapsInTime(me, other)) {
                  const contact = touches(me, other, id, Math.random)
                  if (contact) {
                    res.push(contact)
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
      const cleanGeoms = geometries.map((geom: GeomWithOrders): GeomWithOrders => {
        const clean: GeomWithOrders = deepCopy(geom)
        const props = clean.geometry.properties as PlannedProps
        delete props.inContact
        delete props.newContact
        return clean
      })
      setGeometries(cleanGeoms)

      const newGeometries = invertMessages(orders)
      const withTimes = injectTimes(newGeometries)
      let time = '2022-11-15T00:00:00.000Z'
      if (sentForAdjudication.length) {
        const lastId = sentForAdjudication[sentForAdjudication.length - 1]
        console.log('last one', lastId)
        time = moment(lastId.timeStart).toISOString()
      }
      const geometriesInTimeWindow = findPlannedGeometries(withTimes, time, 60)
      console.log('looking from ', time, geometriesInTimeWindow.length)
      // now do spatial binning
      const bins = spatialBinning(geometriesInTimeWindow, 6)
      const binnedOrders = putInBin(geometriesInTimeWindow, bins)
      setBins(binnedOrders)
      if (step <= 0) {
        setCurrentBins(binnedOrders)
        setGeometries(withTimes)
      }
    }
    console.log('step', step)
    if (step > 0) {
      setBinToProcess(0)
    }
  }, [orders, step])

  useEffect(() => {
    if (bins.length && binToProcess !== undefined) {
      const bin = bins[binToProcess]
      const newContacts = findTouching(bin.orders)
      setContacts(contacts.concat(newContacts))

      console.log('found', newContacts.length, 'from analysis of ', interactionsProcessed.length, 'interactions')

      // update contact status
      const updated = geometries.map((geom: GeomWithOrders): GeomWithOrders => {
        const newItem: GeomWithOrders = deepCopy(geom)
        const props: PlannedProps = newItem.geometry.properties as PlannedProps
        if (props.newContact) {
          delete props.newContact
        }
        if (!props.inContact) {
          const isNewContact = newContacts.find((val: PlanningContact) => val.first.id === newItem.id || val.second.id === newItem.id)
          if (isNewContact) {
            props.inContact = true
            props.newContact = true
          }
        }
        return newItem
      })
      setGeometries(updated)
      setCurrentBins([bin])
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
      a: val.first.activity.message.title + ' ' + val.first.id,
      b: val.second.activity.message.title + ' ' + val.second.id
    }
  }

  useEffect(() => {
    if (binningComplete) {
      const withTime = contacts.filter((contact: PlanningContact) => contact.timeStart !== -1)
      // sort by start time
      const sorted = _.sortBy(withTime, ['timeStart'])
      if (sorted.length > 0) {
        const nextToProcess = sorted[0]
        handleAdjudication(nextToProcess)
        // reset
        setContacts([])
        setInteractionsProcessed([])
        setBins([])
        setCurrentBins(bins)
        sentForAdjudication.push(nextToProcess)
      }
      const debug = !7
      debug && console.table(sorted.map((val: PlanningContact) => {
        return summariseContact(val)
      }))
      setBinningComplete(false)
    }
  }, [binningComplete])

  const onEachFeature = (feature: GeoJSON.Feature, layer: Layer): any => {
    // put the activity name into the popup for the feature
    if (feature && feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name)
    }
  }

  const filterPendingFeatures = (inContact: boolean, feature: GeoJSON.Feature): any => {
    // put the activity name into the popup for the feature
    if (feature && feature.properties && feature.properties) {
      const myProps = feature.properties as PlannedProps
      if (inContact) {
        return myProps.inContact
      } else {
        return !myProps.inContact
      }
    }
  }

  const styleForBoxes: StyleFunction<any> = (feature?: GeoJSON.Feature<any>): PathOptions => {
    const hasOrders = feature && feature.properties && feature.properties.orderNum > 0
    return {
      color: '#f0f',
      fillColor: hasOrders ? '#0f0' : '#eee',
      className: 'leaflet-default-icon-path'
    }
  }

  const geojsonMarkerOptions = {
    radius: 10,
    fillColor: '#ff7800',
    color: '#0f0',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }

  const pointToLayer = (_feature: GeoJSON.Feature<any>, latlng: L.LatLng): L.Layer => {
    return circleMarker(latlng, geojsonMarkerOptions)
  }

  const styleForFeatures: StyleFunction<any> = (feature?: GeoJSON.Feature<any>): PathOptions => {
    if (feature) {
      const props = feature.properties as PlannedProps
      const inContact = props.inContact
      const newContact = props.newContact
      let color
      if (inContact) {
        if (newContact) {
          color = '#0f0'
        } else {
          color = '#080'
        }
      } else {
        color = '#aaa'
      }
      return {
        color: color,
        fillColor: '#00f',
        className: 'leaflet-default-icon-path'
      }
    } else {
      return {}
    }
  }

  return <>
    {bins.length > 0 &&
      <LayerGroup key={'bins'}>
        {currentBins.map((bin: SpatialBin, index: number) =>
          <GeoJSON style={styleForBoxes} onEachFeature={onEachFeature} data={bin.polygon} key={'a_' + index + Math.random()} />
        )}
      </LayerGroup>
    }
    {
      geometries.length > 0 &&
      <>
        <LayerGroup key={'features'}>
          <GeoJSON pointToLayer={pointToLayer} style={styleForFeatures} onEachFeature={onEachFeature}
            filter={(feature: any): boolean => filterPendingFeatures(false, feature)}
            data={geometries.map((val: GeomWithOrders) => val.geometry)} key={'feature_no_contact' + Math.random()} />
          <GeoJSON pointToLayer={pointToLayer} style={styleForFeatures} onEachFeature={onEachFeature}
            filter={(feature: any): boolean => filterPendingFeatures(true, feature)}
            data={geometries.map((val: GeomWithOrders) => val.geometry)} key={'feature_contact' + Math.random()} />
        </LayerGroup >
      </>
    }
  </>
}

export default OrderPlotter
