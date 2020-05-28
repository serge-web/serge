import React, { useContext, useEffect, useState } from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
import findPerceivedAsTypes from './helpers/find-perceived-as-types'
import hexNamed from './helpers/hex-named'
import { UMPIRE_FORCE } from '@serge/config'
import { Route } from '../route'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import AssetInfo from './types/asset_info'
import { SergeHex, SergeGrid, RouteStore, Route as RouteType } from '@serge/custom-types'

/* Render component */
export const Assets: React.FC<{}> = () => {
  // pull in some context (with TS definitions)
  const { gridCells, forces, playerForce, routeStore }:
    { gridCells: SergeGrid<SergeHex<{}>> | undefined, forces: any, playerForce: string, routeStore: RouteStore} =
    useContext(MapContext).props

  const [assets, setAssets] = useState<AssetInfo[]>([])

  useEffect(() => {
    if (gridCells) {
      const tmpAssets: AssetInfo[] = []
      // REFACTOR:Can these nested loops be done better?
      forces && forces.forEach((force: any) => {
        if (force.assets) {
          force.assets.forEach((asset: any) => {
            const { uniqid, name, contactId, condition, status, platformType, perceptions } = asset

            // see if the player of this force can see (perceive) this asset
            const isUmpire: boolean = playerForce === UMPIRE_FORCE
            const perceivedAs: [string, string, string] = findPerceivedAsTypes(
              playerForce,
              name,
              contactId,
              force.uniqid,
              platformType,
              perceptions,
              isUmpire
            )

            if (perceivedAs) {
              const cell: SergeHex<{}> | undefined = hexNamed(asset.position, gridCells)
              const visibleTo: Array<string> = perceptions && perceptions.length ? perceptions.map((p: any) => p.by) : []
              if (cell != null) {
                const position: L.LatLng = cell.centreLatLng
                const assetInfo: AssetInfo = {
                  name: perceivedAs[0],
                  condition,
                  status,
                  controlledBy: force.controlledBy,
                  type: perceivedAs[2],
                  force: perceivedAs[1],
                  visibleTo: visibleTo,
                  position,
                  uniqid
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
        uniqid={asset.uniqid}
        position={asset.position}
        type={asset.type}
        selected={false}
        condition={asset.condition}
        status={asset.status}
        controlledBy={asset.controlledBy}
        visibleTo={asset.visibleTo}
        force={asset.force}
        tooltip={asset.name}/>
    ))}

    { routeStore && routeStore.routes.map((route: RouteType) => (
      <Route name={'test'}
        key = { 'r_for_' + route.uniqid }
        route = {route} color={route.color}
        selected={ route.selected}
        trimmed={ false }
      />
    ))}

    </LayerGroup>
  </>
}
export default Assets
