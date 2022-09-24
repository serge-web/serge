import { LatLng, latLng } from 'leaflet'
import React from 'react'
import { LayerGroup, Marker, Tooltip } from 'react-leaflet'
import { AssetRow } from '../planning-assets/types/props'
import PropTypes from './types/props'

export const PlanningForces: React.FC<PropTypes> = ({ assets }) => {
  return <>
    {
      assets.length > 0 && <LayerGroup key={'first-forces-layer'}>
        {
          assets.map((asset: AssetRow, index: number) => {
            const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
            return <Marker key={'asset-icon-' + index} position={loc}>
              <Tooltip>{asset.name}</Tooltip>
            </Marker>
          })
        }
      </LayerGroup >
    }
  </>
}

export default PlanningForces
