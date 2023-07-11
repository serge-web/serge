import { ADJUDICATION_PHASE, LaydownPhases, UMPIRE_FORCE, UNKNOWN_TYPE } from 'src/config'
import { ForceData, PerceivedTypes, Route as RouteType } from 'src/custom-types'
import { OrientationMarker } from 'src/custom-types/platform-type-data'
import { findPerceivedAsTypes, findPlatformTypeFor, visibleTo } from 'src/Helpers'
import L from 'leaflet'
import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup, Marker, Polygon } from 'react-leaflet'
import MapIcon from '../map-icon'
/* Import Context */
import { MapContext } from '../mapping'
import { Route } from '../route'
import orientationFor from './helpers/orientation-for'
/* Import Types */
import AssetInfo, { OrientationData } from './types/asset_info'
import * as h3 from 'h3-js'
import styles from './styles.module.scss'

/* Render component */
export const Assets: React.FC = () => {
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
    viewport,
    h3Resolution,
    assetLaydown,
    viewAsUmpire
  } = props

  const [visibleAssets, setVisibleAssets] = useState<AssetInfo[]>([])
  const [positionedAssets, setPositionedAssets] = useState<AssetInfo[]>([])
  const [umpireInAdjudication, setUmpireInAdjudication] = useState<boolean>(false)

  const [pendingArea, setPendingArea] = useState<L.LatLng[]>([])
  const [penCentre, setPenCentre] = useState<L.LatLng | undefined>(undefined)

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

      // we may need to provide location for assets that are in laydown
      const dummyLocation = L.latLng(12.2, 13.3)
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
          const assetInLaydown = route.laydownPhase === LaydownPhases.Unmoved
          if (!route.currentLocation2 && !assetInLaydown) {
            console.warn('Warning: location missing for asset that isn\'t in laydown:', route.name, ' This may be because we\'re mid-update')
          }
          if (assetInLaydown && (route.currentLocation2 !== undefined)) {
            console.warn('Unmoved asset doesn\'t have location as pending')
          }
          const position: L.LatLng | undefined = route.currentLocation2 || dummyLocation

          const visibleToArr: string[] = visibleTo(perceptions)
          if (position != null || route.currentPosition === 'pending') {
            // sort out who can control this force
            const assetForce: ForceData | undefined = forces.find((force: ForceData) => force.uniqid === actualForceId)
            if (assetForce) {
              const isSelected: boolean = selectedAsset !== undefined ? uniqid === selectedAsset.uniqid : false
              const orientData: OrientationData[] = []
              const canViewOrientation = route.underControlByThisForce || viewAsUmpire
              canViewOrientation && thisPlatformType && thisPlatformType.orientation && thisPlatformType.orientation.forEach((marker: OrientationMarker) => {
                const orientation = orientationFor(route.currentPosition, route.history, route.planned, route.attributes, marker)
                if (orientation !== undefined) {
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
            } else {
              console.warn('Failed to find force that controls', route.name)
            }
          } else {
            console.log('!! Failed to find cell numbered:', position, route.currentPosition, route.name)
          }
        }
      })

      setVisibleAssets(tmpAssets)
    }
  }, [h3gridCells, playerForce, viewAsRouteStore])

  const forLaydown = (phase?: LaydownPhases): boolean => {
    return !!phase && (phase === LaydownPhases.Unmoved || phase === LaydownPhases.Moved)
  }

  /**
   * if we have any assets with location pending,
   * and we're in the correct game phase, put them in the location pending
   * pen
   */
  useEffect(() => {
    const inPendingPen = (phase?: LaydownPhases): boolean => {
      return !!phase && phase === LaydownPhases.Unmoved
    }

    // find pending assets
    const pendingAssets = visibleAssets.filter((asset: AssetInfo) => inPendingPen(asset.laydownPhase))

    if (pendingAssets && pendingAssets.length && viewport) {
      // find bounds of viewport
      const centre = viewport.getCenter()
      const north = viewport.getNorth()
      const east = viewport.getEast()
      const demiWid = east - centre.lng
      const qtrWid = demiWid / 2
      const demiHt = north - centre.lat
      const qtrHt = demiHt / 2
      const topEdge = north - qtrHt / 4

      // get the h3 cell at the centre of where we're looking
      const oCell = h3.geoToH3(topEdge, centre.lng + qtrWid, h3Resolution)

      // find the centre of the cell
      const cellCentre = h3.h3ToGeo(oCell)
      setPenCentre(L.latLng(cellCentre[0], cellCentre[1]))

      const centreOriginLat = cellCentre[0]

      // how many rings to we need to accommodate the pending assets?
      const numRings = Math.ceil(pendingAssets.length / 3) + 1

      // work out in rings, until we have enough.
      // Note: we start at ring 1, since we manually push in the origin cell
      // Note: later on
      let allCells: string[] = []
      for (let i = 1; i < numRings; i++) {
        const cells = h3.hexRing(oCell, i)
        allCells = allCells.concat(cells)
      }

      // get cells beneath north edge
      const allSouthCells = allCells.filter((index: string) => {
        const centre = h3.h3ToGeo(index)
        return centre[0] <= centreOriginLat
      })

      // reduce the list of cells to just those we know we need
      const southCells = allSouthCells.slice(0, pendingAssets.length)

      // assign pending assets to cells
      pendingAssets.forEach((asset: AssetInfo, i: number) => {
        const newPos = h3.h3ToGeo(southCells[i])
        asset.position = L.latLng(newPos[0], newPos[1])
      })

      // now generate the hull around valid cells
      // note: we manually inject the origin cell, since it may have failed the
      // note: < topEdge test (putting oCell back in the area)
      southCells.unshift(oCell)
      const hull1 = h3.h3SetToMultiPolygon(southCells, true)
      const h3points1 = hull1[0][0].map((pair: number[]) => L.latLng(pair[1], pair[0]))
      setPendingArea(h3points1)
    } else {
      // clear the pending area
      setPenCentre(undefined)
      setPendingArea([])
    }

    const validAssets = visibleAssets.filter((asset: AssetInfo) => asset.position !== undefined)
    setPositionedAssets(validAssets)
  }, [visibleAssets, viewport])

  const markerDropped = (cell: string, assetId: string): void => {
    assetLaydown && assetLaydown(cell, assetId)
  }

  return <>
    <LayerGroup>{positionedAssets && positionedAssets.map((asset: AssetInfo) => {
      return (
        <MapIcon
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
          markerDropped={markerDropped}
          locationPending={asset.selected && forLaydown(asset.laydownPhase)}
        />
      )
    })}
    {
      penCentre && <>
        <Polygon
          key={'pending_area'}
          positions={pendingArea}
          color={'#aaa'}
          opacity={1.0}
          weight={2}
          lineJoin={'round'}
        />
        <Marker
          key={'pen-title'}
          position={penCentre}
          width='120'
          icon={L.divIcon({
            html: 'Laydown pen',
            className: styles['pending-area'],
            iconSize: [80, 50],
            iconAnchor: [40, 10]
          })} />
      </>
    }
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
