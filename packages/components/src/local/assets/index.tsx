import React from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
import findPerceivedAsTypes from '@serge/helpers/findPerceivedAsTypes'
import hexNamed from './helpers/hexNamed'

/* Import Stylesheet */

/* Import Types */
import PropTypes from './types/props'
import AssetInfo from './types/asset_info'
import { UMPIRE_FORCE } from '@serge/config'


/* Render component */
export const Assets: React.FC<PropTypes> = ({ gridCells, forces, playerForce }: PropTypes) => {
  const assets: AssetInfo[] = []
  //REFACTOR:Can these nested loops be done better?
  forces.forEach((force: any) => {
    if(force.assets) {
      force.assets.forEach((asset: any) => {
        // see if the player of this force can see (perceive) this asset
        const isUmpire: boolean = playerForce === UMPIRE_FORCE
        const perceivedAs: [string, string] = findPerceivedAsTypes(playerForce, force.uniqid, 
          asset.platformType, asset.perceptions, isUmpire)
        if(perceivedAs) {
          const cell = hexNamed(asset.position, gridCells)
          if(cell != null) {
            const position: L.LatLng = cell.centreLatLng
            const asset_info: AssetInfo = {
              name: asset.name,
              type: perceivedAs[1],
              force: perceivedAs[0],
              position: position,
              uniqid: asset.uniqid
            }
            assets.push(asset_info)
          } else {
            console.log("!! Failed to find cell numbered:", asset.position)
          }
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
