import L, { LatLng, latLng } from 'leaflet'
import React from 'react'
import { LayerGroup, Marker, Tooltip } from 'react-leaflet'
import { AssetRow } from '../planning-assets/types/props'
import PropTypes from './types/props'

export const PlanningForces: React.FC<PropTypes> = ({ assets, opFor, selectedItem }) => {
  // temporarily use alternate icon for opForces
  const iconForThisForce = opFor ? 'layers.png' : 'marker-icon-2x.png'
  return <>
    {
      assets.length > 0 && <LayerGroup key={'first-forces-layer'}>
        {
          assets.map((asset: AssetRow, index: number) => {
            const loc: LatLng = asset.position ? asset.position : latLng([0, 0])
            const isSelected = asset.id === selectedItem
            // override the marker if this is the selected asset
            // TODO: apply some styling to the component
            const marker = isSelected ? 'selected-marker.png' : iconForThisForce
            return <Marker
              key={'asset-icon-' + index}
              position={loc}
              icon={L.divIcon({
                html: '<img src="./images/' + marker + '" style="width:20px;height:30px"/>'
              })} >
              <Tooltip>{asset.name}</Tooltip>
            </Marker>
          })
        }
      </LayerGroup >
    }
  </>
}

export default PlanningForces
