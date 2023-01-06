import { ForceStyle } from '@serge/helpers'
import { latLng } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { Circle, LayerGroup } from 'react-leaflet-v4'
import { AssetRow } from '../../planning-assets/types/props'

export interface OrderPlotterProps {
  /** key to use for layer group */
  title: string
  /** list of assets to plot */
  assets: AssetRow[]
  /** per force colors */
  forceCols: Array<ForceStyle>
}

export const RangeRingPlotter: React.FC<OrderPlotterProps> = ({ title, assets, forceCols }) => {
  const [rangeRings, setRangeRings] = useState<React.ReactElement[]>([])
  useEffect(() => {
    console.log('update range rings')
    const rings: React.ReactElement[] = []
    assets.forEach((asset: AssetRow) => {
      const attrs = asset.attributes
      // try for the two range attributes
      const range: string = attrs['MEZ Range'] || attrs.Range
      if (range) {
        const index = range.indexOf('km')
        const rangeKm = index ? parseFloat(range.substring(0, index)) : parseFloat(range)
        const forceCol = forceCols.find((style: ForceStyle) => style.force === asset.force)
        const centre = asset.position ? asset.position : latLng([0, 0])
        const rad = rangeKm * 1000
        rings.push(<Circle center={centre} key={asset.id} radius={rad} pathOptions={{ color: forceCol?.color }} />)
      }
    })
    setRangeRings(rings)
  }, [assets])

  return <LayerGroup key={title}>
    {rangeRings}
  </LayerGroup>
}

export default RangeRingPlotter
