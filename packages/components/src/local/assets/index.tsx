import React from 'react'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
/* Import Stylesheet */

/* Import Types */
import PropTypes from './types/props'
import AssetInfo from './types/asset_info'


/* Render component */
export const Assets: React.FC<PropTypes> = ({ forces, platformTypes, force, view_as }: PropTypes) => {

  console.log(forces, platformTypes, force, view_as)

  const assets: AssetInfo[] = []
  forces.forEach((force: any) => {
    if(force.assets) {
      force.assets.forEach((asset: any) => {
        const asset_info: AssetInfo = {
          name: asset.name,
          type: asset.type,
          force: asset.force,
          position: [12, 12]
        }
        assets.push(asset_info)
      })  
    }
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
