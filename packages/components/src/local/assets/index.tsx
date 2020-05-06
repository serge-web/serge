import React, { useContext, useEffect, useState } from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
import findPerceivedAsTypes from './helpers/find-perceived-as-types'
import hexNamed from './helpers/hex-named'
import { UMPIRE_FORCE } from '@serge/config'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import AssetInfo from './types/asset_info'
import { SergeHex } from '@serge/custom-types'

/* Render component */
export const Assets: React.FC<{}> = () => {
  const { gridCells, forces, playerForce } = useContext(MapContext).props

  const [assets, setAssets] = useState<AssetInfo[]>([])

  useEffect(() => {
    if (gridCells) {
      const tmpAssets: AssetInfo[] = []
      // REFACTOR:Can these nested loops be done better?
      forces.forEach((force: any) => {
        if (force.assets) {
          force.assets.forEach((asset: any) => {
            // see if the player of this force can see (perceive) this asset
            const isUmpire: boolean = playerForce === UMPIRE_FORCE
            const perceivedAs: [string, string] = findPerceivedAsTypes(
              playerForce,
              force.uniqid,
              asset.platformType,
              asset.perceptions,
              isUmpire
            )
            if (perceivedAs) {
              const cell: SergeHex<{}> | undefined = hexNamed(asset.position, gridCells)
              if (cell != null) {
                const position: L.LatLng = cell.centreLatLng
                const assetInfo: AssetInfo = {
                  name: asset.name,
                  condition: asset.condition,
                  status: asset.status,
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
        name={asset.name}
        id={asset.uniqid}
        position={asset.position}
        type={asset.type}
        selected={false}
        condition={asset.condition}
        status={asset.status}
        controlledBy={asset.controlledBy}
        force={asset.force}
        tooltip={asset.name}/>
    ))}
    </LayerGroup>
  </>
}
export default Assets
