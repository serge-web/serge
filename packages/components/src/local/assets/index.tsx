import React, { useContext, useEffect, useState } from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
import { findPerceivedAsTypes, visibleTo } from '@serge/helpers'
import hexNamed from './helpers/hex-named'
import { UMPIRE_FORCE, ADJUDICATION_PHASE } from '@serge/config'
import { Route } from '../route'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import AssetInfo from './types/asset_info'
import { SergeHex, SergeGrid, RouteStore, Route as RouteType } from '@serge/custom-types'

/* Render component */
export const Assets: React.FC<{}> = () => {
  // pull in some context (with TS definitions)
  const { gridCells, forces, playerForce, routeStore, phase, clearFromTurn }:
    { gridCells: SergeGrid<SergeHex<{}>> | undefined
      forces: any
      playerForce: string
      routeStore: RouteStore
      phase: string
      turnNumber: number
      clearFromTurn: { (turn: number): void } } =
    useContext(MapContext).props

  const [assets, setAssets] = useState<AssetInfo[]>([])
  const [umpireInAdjudication, setUmpireInAdjudication] = useState<boolean>(false)

  // set flag for if this is the umpire in adjudication, so that the
  // planned routes get trimmed
  useEffect(() => {
    setUmpireInAdjudication(playerForce === UMPIRE_FORCE && phase === ADJUDICATION_PHASE)
  }, [playerForce, playerForce])

  useEffect(() => {
    if (gridCells) {
      const tmpAssets: AssetInfo[] = []
      routeStore.routes.forEach((route: RouteType) => {
        const { uniqid, name, platformType, actualForceName } = route
        const { contactId, status, condition, perceptions } = route.asset

        // see if the player of this force can see (perceive) this asset
        const isUmpire: boolean = playerForce === UMPIRE_FORCE
        const perceivedAs: [string, string, string] = findPerceivedAsTypes(
          playerForce,
          name,
          contactId,
          route.perceivedForceName,
          platformType,
          perceptions,
          isUmpire
        )

        if (perceivedAs) {
          const cell: SergeHex<{}> | undefined = hexNamed(route.currentPosition, gridCells)
          const visibleToArr: string[] = visibleTo(perceptions)
          if (cell != null) {
            // sort out who can control this force
            const assetForce = forces.find((force: any) => force.name === actualForceName)

            const position: L.LatLng = cell.centreLatLng
            const assetInfo: AssetInfo = {
              name: perceivedAs[0],
              condition,
              status,
              controlledBy: assetForce.controlledBy,
              type: perceivedAs[2],
              force: perceivedAs[1],
              visibleTo: visibleToArr,
              position,
              uniqid
            }
            tmpAssets.push(assetInfo)
          } else {
            console.log('!! Failed to find cell numbered:', route.currentPosition)
          }
        }
      })
      setAssets(tmpAssets)
    }
  }, [gridCells, forces, playerForce, routeStore])

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
        selected = { route.selected}
        trimmed = { umpireInAdjudication }
        clearRouteHandler = { clearFromTurn }
      />
    ))}

    </LayerGroup>
  </>
}
export default Assets
