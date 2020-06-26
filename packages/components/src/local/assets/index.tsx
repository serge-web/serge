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
  const { gridCells, forces, playerForce, viewAsForce, routeStore, phase, clearFromTurn }:
    { gridCells: SergeGrid<SergeHex<{}>> | undefined
      forces: any
      playerForce: string
      viewAsForce: string
      routeStore: RouteStore
      phase: string
      turnNumber: number
      clearFromTurn: { (turn: number): void } } =
    useContext(MapContext).props

  const [assets, setAssets] = useState<AssetInfo[]>([])
  const [umpireInAdjudication, setUmpireInAdjudication] = useState<boolean>(false)
  const [viewAsForceValue, setViewAsForceValue] = useState<string>('')
  const [localRouteStore, setLocalRouteStore] = useState<Array<RouteType>>([])

  /**
   * determine if this is the umpire in adjudication mode, so that the
   * planned routes get trimmed
   */
  useEffect(() => {
    setUmpireInAdjudication(playerForce === UMPIRE_FORCE && phase === ADJUDICATION_PHASE)
  }, [playerForce])

  /**
   * determine which force to view the plot as, if applicable
   */
  useEffect(() => {
    setViewAsForceValue(playerForce === UMPIRE_FORCE ? viewAsForce || playerForce : playerForce)
  }, [playerForce, viewAsForce])

  /**
   * collate the routes, adjusted according to if there is a viewAs in force
   */
  useEffect(() => {
    const tmpRoutes: Array<RouteType> = []
    const useViewAs: boolean = playerForce === UMPIRE_FORCE && viewAsForceValue != undefined && viewAsForceValue != UMPIRE_FORCE
    // umpire wishes to view map as another force. loop through routes, and set viewAs color accordingly,
    // including undefined if the route should not be displayed
    if (routeStore && routeStore.routes.length) {
      routeStore.routes.forEach((route: RouteType) => {
        if (useViewAs) {
          // see if the player of this force can see (perceive) this asset
          const perceivedAs: [string, string, string] = findPerceivedAsTypes(
            viewAsForceValue,
            name,
            route.asset.contactId,
            route.actualForceName,
            route.asset.platformType,
            route.asset.perceptions,
            false)
          if (perceivedAs) {
            route.viewAsColor = perceivedAs[1]
            tmpRoutes.push(route)
          } else {
            // this force can't see it, so don't render it
            route.viewAsColor = undefined
          }
        } else {
          // ok, just use the routes object
          route.viewAsColor = route.color
          tmpRoutes.push(route)
        }
      })
    }
    // update the route store, even if its empty
    setLocalRouteStore(tmpRoutes)
  }, [viewAsForceValue, playerForce, routeStore])

  /**
   *  collate the assets, ready for the icons
   */
  useEffect(() => {
    if (gridCells) {
      const tmpAssets: AssetInfo[] = []

      // determine if this is an umpire, in which case they can see everything
      const isUmpire: boolean = viewAsForceValue === UMPIRE_FORCE

      forces && forces.forEach((force: any) => {
        if (force.assets) {
          force.assets.forEach((asset: any) => {
            const { uniqid, name, contactId, condition, status, platformType, perceptions } = asset

            // see if the player of this force can see (perceive) this asset
            const perceivedAs: [string, string, string] = findPerceivedAsTypes(
              viewAsForceValue,
              name,
              contactId,
              force.uniqid,
              platformType,
              perceptions,
              isUmpire
            )

            if (perceivedAs) {
              const cell: SergeHex<{}> | undefined = hexNamed(asset.position, gridCells)
              const visibleToArr: string[] = visibleTo(perceptions)
              if (cell != null) {
                const position: L.LatLng = cell.centreLatLng
                const assetInfo: AssetInfo = {
                  name: perceivedAs[0],
                  condition,
                  status,
                  controlledBy: force.controlledBy,
                  type: perceivedAs[2],
                  force: perceivedAs[1],
                  visibleTo: visibleToArr,
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
  }, [gridCells, forces, playerForce, viewAsForceValue])

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

    { localRouteStore && localRouteStore.map((route: RouteType) => (
      route.viewAsColor &&
      <Route name={'test'}
        key = { 'r_for_' + route.uniqid }
        route = {route} color={route.viewAsColor}
        selected = { route.selected}
        trimmed = { umpireInAdjudication }
        clearRouteHandler = { clearFromTurn }
      />
    ))}

    </LayerGroup>
  </>
}
export default Assets
