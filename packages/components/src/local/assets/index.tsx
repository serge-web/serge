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
import { SergeHex, Route as RouteType, RouteForce } from '@serge/custom-types'

/** helper interface, to allow us to store the color and the route */
interface RouteWithColor {
  route: RouteType
  color: string
}

/* Render component */
export const Assets: React.FC<{}> = () => {
  const { gridCells, forces, playerForce, routeStore } = useContext(MapContext).props

  const [assets, setAssets] = useState<AssetInfo[]>([])
  const [routes, setRoutes] = useState<RouteWithColor[]>([])

  useEffect(() => {
    if (gridCells) {
      const tmpRoutes: RouteWithColor[] = []
      routeStore && routeStore.forces.forEach((rf: RouteForce) => {
        rf.routes.forEach((r: RouteType) => {
          tmpRoutes.push({ route: r, color: rf.color })
        })
      })
      setRoutes(tmpRoutes)
    }
  }, [routeStore])

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

    { routes && routes.map((routeWithColor) => (
      <Route name={'test'}
        key = { 'r_for_' + routeWithColor.route.uniqid }
        route = {routeWithColor.route} color={routeWithColor.color}
        selected={ routeWithColor.route.selected}
        trimmed={ false }
      />
    ))}

    </LayerGroup>
  </>
}
export default Assets
