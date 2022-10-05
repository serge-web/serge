
import { MessagePlanning } from '@serge/custom-types'
import { circleMarker, Layer, PathOptions, StyleFunction } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { LayerGroup, GeoJSON } from 'react-leaflet'
import { findPlannedGeometries, GeomWithOrders, injectTimes, invertMessages, overlapsInTime, putInBin, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'
import * as turf from '@turf/turf'
import { deepCopy } from '@serge/helpers'

export interface PlotterTypes {
  orders: MessagePlanning[]
  step: number
}

const touches = (me: GeomWithOrders, other: GeomWithOrders): boolean => {
  const geom = me.geometry.geometry as any
  const myCoords = geom.coordinates
  const geom2 = other.geometry.geometry as any
  const otherCoords = geom2.coordinates
  let res: boolean | undefined
  const titles: string[] = []
  const monitor = (titles.includes(me.activity.message.title) ||
    titles.includes(other.activity.message.title))
  if (monitor) {
    console.log('check', me, other)
  }
  switch (me.geometry.geometry.type) {
    case 'Point': {
      const mePt = turf.point(myCoords)
      switch (other.geometry.geometry.type) {
        case 'Point': {
          const otherPt = turf.point(otherCoords)
          res = turf.booleanEqual(mePt, otherPt)
          break
        }
        case 'LineString': {
          const otherLine = turf.lineString(otherCoords)
          res = turf.booleanPointOnLine(mePt, otherLine)
          break
        }
        case 'Polygon': {
          const turfPoly = turf.polygon(otherCoords)
          res = (turf.booleanPointInPolygon(mePt, turfPoly))
          break
        }
      }
      break
    }
    case 'LineString': {
      const meLine = turf.lineString(myCoords)
      switch (other.geometry.geometry.type) {
        case 'Point': {
          const otherPt = turf.point(otherCoords)
          res = turf.booleanPointOnLine(otherPt, meLine)
          break
        }
        case 'LineString': {
          const otherLine = turf.lineString(otherCoords)
          const inter = turf.lineIntersect(meLine, otherLine)
          res = inter.features.length > 0
          break
        }
        case 'Polygon': {
          const turfPoly = turf.polygon(otherCoords)
          res = (turf.booleanCrosses(meLine, turfPoly))
          break
        }
      }
      break
    }
    case 'Polygon': {
      const mePoly = turf.polygon(myCoords)
      switch (other.geometry.geometry.type) {
        case 'Point': {
          const otherPt = turf.point(otherCoords)
          res = turf.booleanPointInPolygon(otherPt, mePoly)
          break
        }
        case 'LineString': {
          const otherLine = turf.lineString(otherCoords)
          res = turf.booleanCrosses(mePoly, otherLine)
          break
        }
        case 'Polygon': {
          const turfPoly = turf.polygon(otherCoords)
          res = (turf.booleanOverlap(mePoly, turfPoly))
          break
        }
      }
      break
    }
  }
  if (res === undefined) {
    console.warn('Didn\'t handle this case', me, other)
    return false
  } else {
    return res
  }
}

const genID = (orders: GeomWithOrders): string => {
  return orders.activity.message.title + '-' + orders.uniqid
}

interface Contact {
  first: GeomWithOrders
  second: GeomWithOrders
}

const differentForces = (me: GeomWithOrders, other: GeomWithOrders): boolean => {
  return me.force !== other.force
}

const createContactReference = (me: string, other: string): string => {
  return me + ' ' + other
}

const findTouching = (geometries: GeomWithOrders[], contacts: string[]): Contact[] => {
  const res: Contact[] = []
  const checked: string[] = []
  geometries.forEach((me: GeomWithOrders, myIndex: number) => {
    geometries.forEach((other: GeomWithOrders, otherIndex: number) => {
      // check it's not me
      if (myIndex !== otherIndex) {
        // don't compare geometries that are part of the same activity
        if (me.activity._id !== other.activity._id) {
          // generate IDs, to ensure we don't compare shapes twice
          const myId = genID(me)
          const otherId = genID(other)
          const meFirst = (myId < otherId)
          const first = meFirst ? me : other
          const second = meFirst ? other : me
          const id = createContactReference(genID(first), genID(second))
          // have we already checked this permutation?
          if (!checked.includes(id)) {
            // have we got this interaction already?
            if (!contacts.includes(id)) {
              console.log('check', id)
              checked.push(id)
              if (differentForces(me, other) && overlapsInTime(me, other) && touches(me, other)) {
                res.push({
                  first: first,
                  second: second
                })
              }
            } else {
              console.warn('not checking', id)
            }
          }
        }
      }
    })
  })
  return res
}

export const OrderPlotter: React.FC<PlotterTypes> = ({ orders, step }) => {
  const [bins, setBins] = useState<SpatialBin[]>([])
  const [currentBins, setCurrentBins] = useState<SpatialBin[]>([])
  const [features, setFeatures] = useState<GeoJSON.Feature[]>([])
  const [contactsFound, setContactsFound] = useState<string[]>([])

  useEffect(() => {
    setFeatures([])
    if (bins.length === 0) {
      const geometries = invertMessages(orders)
      const withTimes = injectTimes(geometries)
      const time = '2022-11-15T00:00:00.000Z'
      const binsInTimeWindow = findPlannedGeometries(withTimes, time, 30)
      // now do spatial binning
      const bins = spatialBinning(binsInTimeWindow, 6)
      const binnedOrders = putInBin(geometries, bins)
      setBins(binnedOrders)
      if (step <= 0) {
        setCurrentBins(binnedOrders)
        setFeatures(geometries.map((val: GeomWithOrders) => val.geometry))
      }
    }
    console.log('step', step)
    if (bins.length > 0 && step >= 0) {
      setCurrentBins([bins[step]])
      const contacts = findTouching(bins[step].orders, contactsFound)
      console.log('contacts', contacts)
      const contactNames: string[] = []
      const newContacts = contacts.filter((val: Contact) => {
        const id = createContactReference(genID(val.first), genID(val.second))
        if (contactsFound.includes(id)) {
          console.log('shoud not have checked', id, contactsFound)
        }
        return !contactsFound.includes(id)
      })
      if (newContacts.length) {
        const newContactList = newContacts.map((val: Contact) => {
          return createContactReference(genID(val.first), genID(val.second))
        })
        console.log('storing contacts', contactsFound.length, newContactList.length)
        setContactsFound(contactsFound.concat(newContactList))
      }
      contacts.forEach((val: Contact) => {
        const check = (orders: GeomWithOrders): void => {
          const id = genID(orders)
          if (!contactNames.includes(id)) {
            contactNames.push(id)
          }
        }
        check(val.first)
        check(val.second)
      })
      setFeatures(bins[step].orders.map((val: GeomWithOrders) => {
        const id = genID(val)
        if (contactNames.includes(id)) {
          if (!val.geometry.properties) {
            val.geometry.properties = {}
          }
          val.geometry.properties.touching = true
        }
        if (contactsFound.includes(id)) {
          if (!val.geometry.properties) {
            val.geometry.properties = {}
          }
          val.geometry.properties.oldTouching = true
        }
        return deepCopy(val.geometry)
      }))
    }
  }, [orders, step])

  const onEachFeature = (feature: GeoJSON.Feature, layer: Layer): any => {
    // put the activity name into the popup for the feature
    if (feature && feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name)
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
    const oldTouching = feature && feature.properties && !!feature.properties.oldTouching
    const touching = feature && feature.properties && !!feature.properties.touching
    console.log('feature', contactsFound.length, feature?.id, oldTouching, touching)
    return {
      color: touching ? '#0f0' : oldTouching ? '#005' : '#b00',
      fillColor: '#00f',
      className: 'leaflet-default-icon-path'
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
      features.length > 0 &&
      <LayerGroup key={'features'}>
        <GeoJSON pointToLayer={pointToLayer} style={styleForFeatures} onEachFeature={onEachFeature} data={features} key={'feature_' + features.length} />
      </LayerGroup >
    }
  </>
}

export default OrderPlotter
