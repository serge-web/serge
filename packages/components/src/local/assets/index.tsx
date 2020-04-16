import React from 'react'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'

import findPerceivedAsClass from '../../../../client/src/Components/Mapping/helpers/findPerceivedAsClass'

/* Import Stylesheet */

/* Import Types */
import PropTypes from './types/props'
import AssetInfo from './types/asset_info'
import { UMPIRE_FORCE } from '@serge/config'


/* Render component */
export const Assets: React.FC<PropTypes> = ({ forces, platformTypes, force, view_as }: PropTypes) => {

  console.log(forces, platformTypes, force, view_as)

  const assets: AssetInfo[] = []
  forces.forEach((force: any) => {
    if(force.assets) {
      force.assets.forEach((asset: any) => {

        // see if the player of this force can see (perceive) this asset
        const perceivedAs: string = findPerceivedAsClass(force, force.uniqid, asset.platformType,
          asset.perceptions, force.uniqid === UMPIRE_FORCE, asset.name)

        if(perceivedAs) {
          // TODO: generate the lat/long position for this asset location
          const position: [number, number] = [12, 12]
          const asset_info: AssetInfo = {
            name: asset.name,
            type: asset.type,
            force: asset.force,
            position: position
          }
          assets.push(asset_info)
        }
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
