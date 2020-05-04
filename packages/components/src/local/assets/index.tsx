import React, { useContext, useEffect, useState } from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
import findPerceivedAsTypes from '@serge/helpers/findPerceivedAsTypes'
import hexNamed from './helpers/hexNamed'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import AssetInfo from './types/asset_info'
import { UMPIRE_FORCE } from '@serge/config'
import SergeHex from '../mapping/types/serge-hex'

/* Render component */
export const Assets: React.FC<{}> = () => {
    const { gridCells, forces, playerForce  } = useContext(MapContext).props

    const [assets, setAssets] = useState<AssetInfo[]> ([])


    useEffect(() => {
      if(gridCells) {
        const tmpAssets: AssetInfo[] = []
        // REFACTOR:Can these nested loops be done better?
        forces.forEach((force: any) => {
          if (force.assets) {
            force.assets.forEach((asset: any) => {
            // see if the player of this force can see (perceive) this asset
              const isUmpire: boolean = playerForce === UMPIRE_FORCE
              const perceivedAs: [string, string] = findPerceivedAsTypes(playerForce, force.uniqid,
                asset.platformType, asset.perceptions, isUmpire)
              if (perceivedAs) {
                const cell: SergeHex<{}> | undefined = hexNamed(asset.position, gridCells)
                if (cell != null) {
                  const position: L.LatLng = cell.centreLatLng
                  const assetInfo: AssetInfo = {
                    name: asset.name,
                    controlledBy: force.controlledBy,
                    type: perceivedAs[1],
                    force: perceivedAs[0],
                    position: position,
                    uniqid: asset.uniqid
                  }
                  tmpAssets.push(assetInfo)
                } else {
                  console.log('!! Failed to find cell numbered:', asset.position)
                }
              }
            })
          }
        })
        setAssets(tmpAssets)
      }
    }, [gridCells, forces, playerForce])

    return <>
      <LayerGroup>{ assets && assets.map((asset) => (
        <AssetIcon
          key={asset.uniqid}
          id={asset.uniqid}
          position={asset.position}
          type={asset.type}
          selected={false}
          controlledBy={asset.controlledBy}
          force={asset.force}
          tooltip={asset.name}/>
      ))}
      </LayerGroup>
    </>
  }
export default Assets
