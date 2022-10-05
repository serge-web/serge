
import { MessagePlanning } from '@serge/custom-types'
import { circleMarker, Layer, PathOptions, StyleFunction } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { LayerGroup, GeoJSON } from 'react-leaflet'
import { findPlannedGeometries, GeomWithOrders, invertMessages, putInBin, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'
import * as turf from '@turf/turf'

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
  const titles = ['Order item 9 Transit', 'Order item 33 Kinetic']
  const monitor = (titles.includes(me.activity.message.title) &&
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
          res = !!turf.lineIntersect(meLine, otherLine)
          if (monitor) {
            console.log('log', res, meLine, otherLine)
          }
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
  if (monitor) {
    console.log('finished', res)
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

const findTouching = (geometries: GeomWithOrders[]): Contact[] => {
  const res: Contact[] = []
  const checked: string[] = []
  geometries.forEach((me: GeomWithOrders, myIndex: number) => {
    geometries.forEach((other: GeomWithOrders, otherIndex: number) => {
      // check it's not me
      if (myIndex !== otherIndex) {
        // don't compare geometries that are part of the same activity
        if (me.activity._id !== other.activity._id) {
          // generate IDs, to ensure we don't compare shapes twice
          const id = '' + genID(me) + ' ' + genID(other)
          const revId = '' + genID(other) + ' ' + genID(me)
          // have we already checked this permutation?
          if (!checked.includes(id) && !checked.includes(revId)) {
            checked.push(id)
            const theseTouch = touches(me, other)
            if (me.uniqid === 'aa8' && other.uniqid === 'a11') {
              console.log('more testing', theseTouch)
            }
            if (theseTouch) {
              const sortIt = (orders: GeomWithOrders): void => {
                if (!orders.geometry.properties) {
                  orders.geometry.properties = {}
                }
                orders.geometry.properties.touching = true
              }
              sortIt(me)
              sortIt(other)
              const newContact: Contact = {
                first: me,
                second: other
              }
              res.push(newContact)
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

  useEffect(() => {
    setFeatures([])
    if (bins.length === 0) {
      const geometries = invertMessages(orders)
      const time = '2022-11-15T00:00:00.000Z'
      const binsInTimeWindow = findPlannedGeometries(geometries, time, 30)
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
      findTouching(bins[step].orders)
      setFeatures(bins[step].orders.map((val: GeomWithOrders) => val.geometry))
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
    const touching = feature && feature.properties && !!feature.properties.touching
    console.log('feature', feature)
    return {
      color: touching ? '#0f0' : '#b00',
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
