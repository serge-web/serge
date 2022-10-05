
import { MessagePlanning } from '@serge/custom-types'
import { PathOptions, StyleFunction } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { LayerGroup, GeoJSON } from 'react-leaflet'
import { findPlannedGeometries, GeomWithOrders, invertMessages, putInBin, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'
import * as turf from '@turf/turf'
import _ from 'lodash'
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
      return false
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
          res = turf.booleanCrosses(meLine, otherLine)
          break
        }
        case 'Polygon': {
          const turfPoly = turf.polygon(otherCoords)
          res = (turf.booleanCrosses(meLine, turfPoly))
          break
        }
      }
      return false
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
          console.log('poly', mePoly, turfPoly)
          res = (turf.booleanOverlap(mePoly, turfPoly))
          break
        }
      }
    }
  }
  if (res === undefined) {
    console.warn('Didn\'t handle this case', me, other)
    return false
  } else {
    return res
  }
}

const findTouching = (geometries: GeomWithOrders[]): GeoJSON.Feature[] => {
  const res: GeoJSON.Feature[] = []
  geometries.forEach((me: GeomWithOrders, myIndex: number) => {
    geometries.forEach((other: GeomWithOrders, otherIndex: number) => {
      // check it's not me
      if (myIndex !== otherIndex) {
        if (me.activity._id !== other.activity._id) {
          if (touches(me, other)) {
            res.push(me.geometry)
            res.push(other.geometry)
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
    if (bins.length === 0) {
      const geometries = invertMessages(orders)
      const time = '2022-11-15T00:00:00.000Z'
      const binsInTimeWindow = findPlannedGeometries(geometries, time, 30)
      // now do spatial binning
      const bins = spatialBinning(binsInTimeWindow, 6)
      const binnedOrders = putInBin(geometries, bins)
      console.log('bins', bins.length, step)
      setBins(binnedOrders)
      setCurrentBins(binnedOrders)
    }
    switch (step) {
      case 1: {
        setCurrentBins(bins)
        const binned = bins.map((bin: SpatialBin) => bin.orders.map((order: GeomWithOrders) => {
          const res2: GeoJSON.Feature = deepCopy(order.geometry)
          if (!res2.properties) {
            res2.properties = {}
          }
          console.log('bin', bin.orders.length)
          res2.properties.orderNumer = bin.orders.length
          return res2
        }))
        const res = _.flatten(binned)
        setFeatures(res) // bins[1].orders.map((order: GeomWithOrders) => order.geometry))
        break
      }
      case 2: {
        setFeatures(findTouching(currentBins[0].orders))
        break
      }
      // default: {
      //   step > 1 && setCurrentBins([bins[step]])
      //   step > 1 && setFeatures(findTouching(bins[step].orders))
      // }
    }
    if (step > 2) {
      console.log('bins', step, bins[step].polygon.geometry, bins.length, findTouching(bins[step].orders))
      setCurrentBins([bins[step]])
      setFeatures(findTouching(bins[step].orders))
    }
  }, [orders, step])

  const styleFor: StyleFunction<any> = (feature?: GeoJSON.Feature<any>): PathOptions => {
    const type = feature && feature.properties && feature.properties.bType
    if (type === 'box') {
      const hasOrders = feature && feature.properties && feature.properties.orderNumber > 0
      return {
        color: '#f0f',
        fillColor: hasOrders ? '#00f' : '#eee',
        className: 'leaflet-default-icon-path'
      }
    } else {
      return {
        color: '#f00',
        fillColor: '#00f',
        className: 'leaflet-default-icon-path'
      }
    }
  }

  return <>
    {
      bins.length > 0 &&
      <LayerGroup key={'bins'}>
        {
          currentBins.map((bin: SpatialBin, index: number) =>
            <GeoJSON style={styleFor} data={bin.polygon} key={'a_' + index + Math.random()} />
          )
        }
        {
          features.length > 0 &&
          <GeoJSON style={styleFor} data={features} key={'feature_'} />
        }
      </LayerGroup >
    }
  </>
}

export default OrderPlotter
