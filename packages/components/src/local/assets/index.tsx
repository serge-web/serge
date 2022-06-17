import { ADJUDICATION_PHASE, UMPIRE_FORCE, UNKNOWN_TYPE } from '@serge/config'
import { ForceData, PerceivedTypes, Route as RouteType } from '@serge/custom-types'
import { OrientationMarker } from '@serge/custom-types/platform-type-data'
import { findPerceivedAsTypes, findPlatformTypeFor, visibleTo } from '@serge/helpers'
import L from 'leaflet'
import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup } from 'react-leaflet'
import MapIcon from '../map-icon'
/* Import Context */
import { MapContext } from '../mapping'
import { Route } from '../route'
import orientationFor from './helpers/orientation-for'
/* Import Types */
import AssetInfo, { OrientationData } from './types/asset_info'

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
    platforms,
    map,
    viewport
  } = props

  const [visibleAssets, setVisibleAssets] = useState<AssetInfo[]>([])
  const [positionedAssets, setPositionedAssets] = useState<AssetInfo[]>([])
  const [umpireInAdjudication, setUmpireInAdjudication] = useState<boolean>(false)

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
        const { uniqid, name, platformTypeId, actualForceId, condition, laydownPhase, visibleToThisForce, attributes } = route
        const thisPlatformType = findPlatformTypeFor(platforms, '', route.asset.platformTypeId)
        if (!thisPlatformType) {
          console.warn('Failed to find platform for', platformTypeId, platforms, route)
        }
        const { contactId, status, perceptions } = route.asset

        // see if the player of this force can see (perceive) this asset
        const perceivedAsTypes: PerceivedTypes | null = (platformTypeId === undefined) ? null : findPerceivedAsTypes(
          playerForce,
          name,
          visibleToThisForce,
          contactId,
          actualForceId,
          platformTypeId,
          perceptions
        )

        if (perceivedAsTypes && perceivedAsTypes.typeId) {
          const position: L.LatLng | undefined = route.currentLocation2 // (cell && cell.centreLatLng) || undefined // route.currentLocation
          const visibleToArr: string[] = visibleTo(perceptions)
          if (position != null) {
            // sort out who can control this force
            const assetForce: ForceData | undefined = forces.find((force: ForceData) => force.uniqid === actualForceId)

            // console.log('percy', perceivedAsTypes, position, !!assetForce, actualForceId)

            if (assetForce) {
              const isSelected: boolean = selectedAsset !== undefined ? uniqid === selectedAsset.uniqid : false
              const orientData: OrientationData[] = []
              thisPlatformType && thisPlatformType.orientation && thisPlatformType.orientation.forEach((marker: OrientationMarker) => {
                const orientation = orientationFor(route.currentPosition, route.history, route.planned, route.attributes, marker)
                if (orientation) {
                  const shadeOrientation = marker.attribute !== undefined
                  const newItem: OrientationData = {
                    orientation: orientation,
                    shadeOrientation: shadeOrientation
                  }
                  orientData.push(newItem)
                }
              })

              // sort out the icon
              const iconUrl = perceivedAsTypes.typeId === UNKNOWN_TYPE ? 'unknown.svg' : findPlatformTypeFor(platforms, '', perceivedAsTypes.typeId).icon
              const assetInfo: AssetInfo = {
                position: position,
                name: perceivedAsTypes.name,
                contactId: route.asset.contactId,
                condition: condition,
                status: status,
                selected: isSelected,
                typeId: perceivedAsTypes.typeId,
                iconUrl: iconUrl,
                perceivedForceColor: route.perceivedForceColor,
                force: assetForce.uniqid,
                visibleTo: visibleToArr,
                uniqid: uniqid,
                laydownPhase: laydownPhase,
                attributes: attributes,
                orientationData: orientData
              }
              tmpAssets.push(assetInfo)
            }
          } else {
            console.log('!! Failed to find cell numbered:', route.currentPosition)
          }
        }
      })

      setVisibleAssets(tmpAssets)
    }
  }, [h3gridCells, forces, playerForce, viewAsRouteStore])

  /**
   * if we have any assets with location pending, 
   * and we're in the correct game phase, put them in the location pending 
   * pen
   */
   useEffect(() => {
      // find pending assets
      const pendingAssets = visibleAssets.filter((asset: AssetInfo) => asset.position === undefined)

      // find bounds of viewport
      console.log('viewport', viewport)

      if (pendingAssets && pendingAssets.length) {

        // work out how far to come in from top-right corner

        // generate ring around top-right corner

        // filter for cells to bottom-left

        // assign pending assets to cells

      }

      const validAssets = visibleAssets.filter((asset: AssetInfo) => asset.position !== undefined)
      setPositionedAssets(validAssets)
  }, [visibleAssets, viewport])

  return <>
    <LayerGroup>{positionedAssets && positionedAssets.map((asset: AssetInfo) => {
      return <MapIcon
        key={'a_for_' + asset.uniqid}
        name={asset.name}
        orientationData={asset.orientationData}
        contactId={asset.contactId}
        uniqid={asset.uniqid}
        position={asset.position}
        typeId={asset.typeId}
        selected={asset.selected}
        condition={asset.condition}
        status={asset.status}
        visibleTo={asset.visibleTo}
        force={asset.force}
        perceivedForceColor={asset.perceivedForceColor}
        tooltip={asset.name}
        imageSrc={asset.iconUrl}
        attributes={asset.attributes}
        map={map}
        locationPending={!!asset.laydownPhase} />
    })}

    {
      viewAsRouteStore && viewAsRouteStore.routes.map((route: RouteType) => (
        <Route name={'test'}
          key={'r_for_' + route.uniqid}
          route={route} color={route.color}
          selected={route.selected}
          trimmed={umpireInAdjudication}
          clearRouteHandler={clearFromTurn}
        />
      ))
    }

    </LayerGroup>
  </>
}
export default Assets
