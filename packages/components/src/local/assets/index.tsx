import React, { useContext, useEffect, useState } from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
import AssetIcon from '../asset-icon'
import { findPerceivedAsTypes, platformTypeNameToKey, visibleTo } from '@serge/helpers'
import { UMPIRE_FORCE, ADJUDICATION_PHASE } from '@serge/config'
import { Route } from '../route'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Types */
import AssetInfo from './types/asset_info'
import { Route as RouteType, ForceData, PerceivedTypes } from '@serge/custom-types'
import orientationFor from './helpers/orientation-for'

/* Render component */
export const Assets: React.FC<{}> = () => {
  // pull in some context (with TS definitions)
  const { props } = useContext(MapContext)
  if (typeof props === 'undefined') return null
  const {
    h3gridCells,
    forces,
    playerForce,
    selectedAsset,
    viewAsRouteStore,
    phase,
    clearFromTurn = (turn: number): void => { console.log(`clearFromTurn(${turn})`) },
    platformTypesByKey
  } = props

  const [assets, setAssets] = useState<AssetInfo[]>([])
  const [umpireInAdjudication, setUmpireInAdjudication] = useState<boolean>(false)

  const playerForceEle = forces.find((force: ForceData) => force.uniqid === playerForce)
  const playerForceName: string = playerForceEle ? playerForceEle.name : 'unknown'

  /**
   * determine if this is the umpire in adjudication mode, so that the
   * planned routes get trimmed
   */
  useEffect(() => {
    setUmpireInAdjudication(playerForce === UMPIRE_FORCE && phase === ADJUDICATION_PHASE)
  }, [playerForce])

  useEffect(() => {
    if (h3gridCells) {
      const tmpAssets: AssetInfo[] = []
      viewAsRouteStore.routes.forEach((route: RouteType) => {
        const { uniqid, name, platformType, actualForceName, condition, laydownPhase, visibleToThisForce, attributes } = route
        const thisPlatformType = platformTypesByKey[platformTypeNameToKey(route.asset.platformType)]
        if (!thisPlatformType) {
          console.warn('Failed to find platform for', platformType, platformTypesByKey, route)
        }
        const { contactId, status, perceptions } = route.asset

        // see if the player of this force can see (perceive) this asset
        const perceivedAsTypes: PerceivedTypes | null = findPerceivedAsTypes(
          playerForceName,
          name,
          visibleToThisForce,
          contactId,
          actualForceName,
          platformType,
          perceptions
        )

        if (perceivedAsTypes) {
          const position: L.LatLng | undefined = route.currentLocation // (cell && cell.centreLatLng) || undefined // route.currentLocation
          const visibleToArr: string[] = visibleTo(perceptions)
          if (position != null) {
            // sort out who can control this force
            let assetForce: ForceData | undefined = forces.find((force: ForceData) => force.name === actualForceName)
            if (!assetForce) {
              // TODO: introduce consistency in how we represent forces (id, not name)
              assetForce = forces.find((force: ForceData) => force.uniqid === actualForceName)
            }
            if (assetForce) {
              const isSelected: boolean = selectedAsset !== undefined ? uniqid === selectedAsset.uniqid : false
              const orientation = orientationFor(route.currentPosition, route.history, route.planned, route.attributes, thisPlatformType && thisPlatformType.orientation)
              const shadeOrientation = thisPlatformType && thisPlatformType.orientation && thisPlatformType.orientation.attribute != undefined
              const assetInfo: AssetInfo = {
                position: position,
                name: perceivedAsTypes.name,
                contactId: route.asset.contactId,
                condition: condition,
                status: status,
                selected: isSelected,
                type: perceivedAsTypes.type,
                perceivedForceColor: route.perceivedForceColor,
                perceivedForceClass: route.perceivedForceClass,
                force: assetForce.uniqid,
                visibleTo: visibleToArr,
                uniqid: uniqid,
                controlledBy: assetForce.controlledBy,
                laydownPhase: laydownPhase,
                attributes: attributes,
                orientation: orientation,
                shadeOrientation: shadeOrientation
              }
              tmpAssets.push(assetInfo)
            }
          } else {
            console.log('!! Failed to find cell numbered:', route.currentPosition)
          }
        }
      })
      setAssets(tmpAssets)
    }
  }, [h3gridCells, forces, playerForce, viewAsRouteStore])


  return <>
    <LayerGroup>{ assets && assets.map((asset: AssetInfo) => {
      const platformType = platformTypesByKey[asset.type]
      const imageSrc: string | undefined = typeof platformType !== 'undefined' ? platformType.icon : undefined
      return <AssetIcon
        key={'a_for_' + asset.uniqid}
        name={asset.name}
        orientation={asset.orientation && 180 + asset.orientation}
        shadeOrientation={asset.shadeOrientation}
        contactId={asset.contactId}
        uniqid={asset.uniqid}
        position={asset.position}
        type={asset.type}
        selected={asset.selected}
        condition={asset.condition}
        status={asset.status}
        controlledBy={asset.controlledBy}
        visibleTo={asset.visibleTo}
        force={asset.force}
        perceivedForceColor={asset.perceivedForceColor}
        perceivedForceClass={asset.perceivedForceClass}
        tooltip={asset.name}
        imageSrc={imageSrc}
        attributes={asset.attributes}
        locationPending={!!asset.laydownPhase}/>
    })}

    { viewAsRouteStore && viewAsRouteStore.routes.map((route: RouteType) => (
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
