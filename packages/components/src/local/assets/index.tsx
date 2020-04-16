import React from 'react'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
/* Import Stylesheet */

/* Import Types */
import PropTypes from './types/props'
import AssetInfo from './types/props'


/* Render component */
export const Assets: React.FC<PropTypes> = ({ forces, platform_types, force, view_as }: PropTypes) => {

  console.log(forces, platform_types, force, view_as)

  const assets: AssetInfo[] = []
  forces.forEach(force => {
    force.assets.forEach(asset => {
      const asset_info: AssetInfo = {
        name: asset.name,
        type: asset.type,
        force: asset.force,
        position: [12, 12]
      }
      assets.push(asset_info)
    ) 
  })

  return <>
    <LayerGroup>{assets.map((asset) => (
      <AssetIcon 
        position={asset.position} 
        type={asset.type} 
        force={asset.force} 
        tooltip={asset.name}/>
    ))}<AssetIcon position={[13.298034302, 43.0488191271]} type="agi" force="blue" tooltip="Dummy marker"/>
    </LayerGroup>
  </>
}

export default Assets
