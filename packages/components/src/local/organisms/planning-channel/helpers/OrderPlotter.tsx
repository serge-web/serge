
import { MessagePlanning } from '@serge/custom-types'
import { PathOptions, StyleFunction } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { LayerGroup, GeoJSON } from 'react-leaflet'
import { findPlannedGeometries, invertMessages, putInBin, SpatialBin, spatialBinning } from '../../support-panel/helpers/gen-order-data'

export interface PlotterTypes {
  orders: MessagePlanning[]
  step: number
}

export const OrderPlotter: React.FC<PlotterTypes> = ({ orders, step }) => {
  const [bins, setBins] = useState<SpatialBin[]>([])

  useEffect(() => {
    const geometries = invertMessages(orders)
    const time = '2022-11-15T00:00:00.000Z'

    const binsInTimeWindow = findPlannedGeometries(geometries, time, 30)
    // now do spatial binning
    const bins = spatialBinning(binsInTimeWindow, 6)
    const binnedOrders = putInBin(geometries, bins)
    console.log('bins', bins.length)
    setBins(binnedOrders)
  }, [orders, step])

  const styleFor: StyleFunction<any> = (feature?: GeoJSON.Feature<any>): PathOptions => {
    console.log('rect', feature)
    return {
      color: '#f00',
      fillColor: '#00f',
      className: 'leaflet-default-icon-path'
    }
  }

  return <>
    {
      bins.length > 0 &&
      <LayerGroup key={'bins'}>
        {
          bins.map((bin: SpatialBin, index: number) =>
            <GeoJSON style={styleFor} data={bin.polygon} key={'a_' + index} />
          )
        }
      </LayerGroup >
    }
  </>
}

export default OrderPlotter
