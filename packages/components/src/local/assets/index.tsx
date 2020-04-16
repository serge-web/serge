import React from 'react'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'

import findPerceivedAsTypes from '@serge/helpers/findPerceivedAsTypes'

/* Import Stylesheet */

/* Import Types */
import PropTypes from './types/props'
import AssetInfo from './types/asset_info'
import { UMPIRE_FORCE } from '@serge/config'


/* Render component */
export const Assets: React.FC<PropTypes> = ({ forces, playerForce }: PropTypes) => {
  const assets: AssetInfo[] = []
  forces.forEach((force: any) => {
    if(force.assets) {
      force.assets.forEach((asset: any) => {
        // see if the player of this force can see (perceive) this asset
        const isUmpire: boolean = playerForce === UMPIRE_FORCE
        const perceivedAs: [string, string] = findPerceivedAsTypes(playerForce, force.uniqid, 
          asset.platformType, asset.perceptions, isUmpire)

        if(perceivedAs) {
          // TODO: generate the lat/long position for this asset location
          const index = assets.length;
          const position: [number, number] = [12.6 + index * 0.1, 42.5 + index * 0.2]
          const asset_info: AssetInfo = {
            name: asset.name,
            type: perceivedAs[1],
            force: perceivedAs[0],
            position: position,
            uniqid: asset.uniqid
          }
          assets.push(asset_info)
        }
      })  
    }
  })

  return <>
    <LayerGroup>{assets.map((asset, ) => (
      <AssetIcon 
        key={asset.uniqid}
        position={asset.position} 
        type={asset.type} 
        force={asset.force} 
        tooltip={asset.name}/>
    ))}
    </LayerGroup>
  </>
}

export default Assets
