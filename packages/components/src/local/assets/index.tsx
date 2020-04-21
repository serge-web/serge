import React from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
import findPerceivedAsTypes from '@serge/helpers/findPerceivedAsTypes'
import hexNamed from './helpers/hexNamed'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import PropTypes from './types/props'
import AssetInfo from './types/asset_info'
import { UMPIRE_FORCE } from '@serge/config'

/* Render component */
export const Assets: React.FC<PropTypes> = ({ gridCells, forces, playerForce }: PropTypes) =>
  <MapContext.Consumer>
    {
      (context): React.ReactNode => {
        const assets: AssetInfo[] = []

        const f = forces || context.props.forces
        const pf = playerForce || context.props.playerForce
        const gc = gridCells || context.props.gridCells

        // REFACTOR:Can these nested loops be done better?
        f.forEach((force: any) => {
          if (force.assets) {
            force.assets.forEach((asset: any) => {
            // see if the player of this force can see (perceive) this asset
              const isUmpire: boolean = playerForce === UMPIRE_FORCE
              const perceivedAs: [string, string] = findPerceivedAsTypes(pf, force.uniqid,
                asset.platformType, asset.perceptions, isUmpire)
              if (perceivedAs) {
                const cell = hexNamed(asset.position, gc)
                if (cell != null) {
                  const position: L.LatLng = cell.centreLatLng
                  const assetInfo: AssetInfo = {
                    name: asset.name,
                    type: perceivedAs[1],
                    force: perceivedAs[0],
                    position: position,
                    uniqid: asset.uniqid
                  }
                  assets.push(assetInfo)
                } else {
                  console.log('!! Failed to find cell numbered:', asset.position)
                }
              }
            })
          }
        })

        return <>
          <LayerGroup>{assets.map((asset) => (
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
    }
  </MapContext.Consumer>

export default Assets
