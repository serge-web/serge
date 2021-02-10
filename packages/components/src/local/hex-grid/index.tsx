import React, { useEffect, useState, useContext } from 'react'
import L from 'leaflet'
import { Point, PointLike } from 'honeycomb-grid'
import { Marker, LayerGroup, Polyline } from 'react-leaflet'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { toWorld, calcAllowableCells, plannedRouteFor } from '@serge/helpers'
import Polygon from './helpers/polygon'
import getCellStyle from './helpers/get-cell-style'

/* Import mapping context */
import { MapContext } from '../mapping'

/* Import Types */
import { SergeHex, Route, NewTurnValues } from '@serge/custom-types'
import { LAYDOWN_TURN } from '@serge/config'

/* Render component */
export const HexGrid: React.FC<{}> = () => {
  const {
    gridCells, planningConstraints, planningRange: planningRangeProps,
    zoomLevel, setNewLeg, setHidePlanningForm, selectedAsset, viewAsRouteStore
  } = useContext(MapContext).props

  // fix the leaflet icon path, using tip from here:
  // https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-611930767
  L.Icon.Default.imagePath = '/images/'

  // allowable cells filtered depending on cell type
  const [allowableFilteredCells, setAllowableFilteredCells] = useState<Array<SergeHex<{}>>>([])

  // the cell for the selected asset
  const [cellForSelected, setCellForSelected] = useState<string | undefined>(undefined)

  // cells representing the route that is currently being dragged
  const [planningRouteCells, setPlanningRouteCells] = useState<Array<SergeHex<{}>>>([])
  const [planningRoutePoly, setPlanningRoutePoly] = useState<L.LatLng[]>([])

  // cells representing any route snippet that is already specified
  const [plannedRouteCells, setPlannedRouteCells] = useState<Array<SergeHex<{}>>>([])
  const [plannedRoutePoly, setPlannedRoutePoly] = useState<L.LatLng[]>([])

  // collate list of named polygons
  const [allowablePolygons, setAllowablePolygons] = useState<{ [id: string]: L.LatLng[] }>({})
  // collate list of named polygon centres
  const [allowableCentres, setAllowableCentres] = useState<{ [id: string]: L.LatLng }>({})
  // collate list of named hex cells
  const [allowableHexCells, setAllowableHexCells] = useState<{ [id: string]: SergeHex<{}> }>({})

  // allow the planning marker origin to be changed
  const [origin, setOrigin] = useState<L.LatLng | undefined>(undefined)
  const [originHex, setOriginHex] = useState<SergeHex<{}> | undefined>(undefined)

  // allow the destination end point to be changed
  const [dragDestination, setDragDestination] = useState<SergeHex<{}> | undefined>(undefined)

  //  allow the achievable range to be changed
  const [planningRange, setPlanningRange] = useState<number | undefined>(planningRangeProps)

  // the AllowableRange story doesn't have a selected asset. Set to red in here
  // it won't have impact on real game play
  const [assetColor, setAssetColor] = useState<string | undefined>(undefined)

  // remember the id of the current asset, so we can check if we're receiving a new one
  const [selectedAssetId, setSelectedAssetId] = useState<string | undefined>(undefined)

  /** capture the color of this asset, so planning shapes
   * get rendered in a suitable color
   */
  useEffect(() => {
    if (selectedAsset) {
      // get the color for this asset
      const current: Route = viewAsRouteStore.routes.find((route: Route) => route.uniqid === selectedAsset.uniqid)
      if (current) {
        // double-check it's not the current asset (to reduce renders, and maybe lost plotted route)
        if (selectedAsset.uniqid !== selectedAssetId) {
          // clear the current planning details
          setPlanningRange(undefined)
          setAllowableFilteredCells([])

          // and update the asset id
          setSelectedAssetId(selectedAsset.uniqid)
          // remember the color of the selected asset, so we shade correctly shade background
          // for highlighted cell
          if (current.color !== assetColor) {
            setAssetColor(current.color)
          }
          // store coords of selected asset, so we can highlight that cell
          if (cellForSelected !== current.currentPosition) {
            setCellForSelected(current.currentPosition)
          }
        }
      } else {
        // selected asset no longer present - hide it
        setCellForSelected(undefined)
        setOrigin(undefined)
      }
    } else {
      setSelectedAssetId(undefined)
      /** if no asset is selected, clear the planning elements
       */
      setDragDestination(undefined)
      setAllowableFilteredCells([])
      setPlanningRange(undefined)
      setOrigin(undefined)
      setAssetColor(undefined)
      setOriginHex(undefined)
      setPlanningRoutePoly([])
      setPlannedRoutePoly([])
      setCellForSelected(undefined)
    }
  }, [selectedAsset, gridCells, viewAsRouteStore])

  /** allow for the props being changed. This could be from the StoryBook testing, but could equally
       *  be from the plan route form
       */
  useEffect(() => {
    setPlanningRange(planningRangeProps)
  }, [planningRangeProps])

  /** handle the dynamic indicator that follows mouse movement,
   * represented as cells & a line
   */
  useEffect(() => {
    if (dragDestination && originHex) {
      // check we're not in laydown mode
      if (planningConstraints && planningConstraints.status === LAYDOWN_TURN) {
        // we don't show path in laydown mode
        setPlanningRoutePoly([])

        // see if current cell is acceptable
        // work out the available cells
        if (allowableFilteredCells.includes(dragDestination)) {
          // ok, set planning route to just that cell - to mark the
          // last acceptable cell
          setPlanningRouteCells([dragDestination])
        }
      } else {
        // work out the available cells
        const plannedRoute: SergeHex<{}>[] = planningConstraints
          ? plannedRouteFor(gridCells, allowableFilteredCells, originHex, dragDestination) : []

        // combine with any existing planned cells
        setPlanningRouteCells(plannedRoute)

        // also produce the lat-long values needed for the polylines
        const tmpPlannedRoutePoly: L.LatLng[] = plannedRoute.map((cell: SergeHex<{}>) => {
          return cell.centreLatLng
        })

        // combine with any existing planned cells
        setPlanningRoutePoly(tmpPlannedRoutePoly)
      }
    } else {
      // drop cells
      setPlanningRouteCells([])
      setPlanningRoutePoly([])
    }
  }, [dragDestination, originHex])

  /** provide a list of cells allowable for this platform. The area may reduce
       * as a player plans the leg
       */
  useEffect(() => {
    const rangeUnlimited = planningConstraints && planningConstraints.speed === undefined
    // check all data necessary for rendering is present
    if (planningConstraints && planningConstraints.origin && gridCells && (planningRange || rangeUnlimited)) {
      // if we're mid-way through a leg, we take the value from the origin hex, not the planning centre
      const originCell = plannedRoutePoly.length ? originHex : gridCells.find((cell: SergeHex<{}>) => cell.name === planningConstraints.origin)
      // did we find cell?
      if (originCell) {
        setOrigin(originCell.centreLatLng)

        // is there a limited range?
        const allowableCells: SergeHex<{}>[] = planningRange ? calcAllowableCells(gridCells, originCell, planningRange) : gridCells

        // ok, see which ones are filterd
        // "air" is a special planning mode, where we don't have to filter it
        if (planningConstraints.travelMode === 'air') {
          // can use any of the allowable cells
          setAllowableFilteredCells(allowableCells)
        } else if (allowableCells.length) {
          // ok, land or sea. filter accordingly
          const filteredCells = allowableCells.filter((cell: SergeHex<{}>) => cell.type === planningConstraints.travelMode.toLowerCase())
          setAllowableFilteredCells(filteredCells)
        } else {
          // clear the allowable cells
          console.warn('Hex grid - travel mode missing in ', planningConstraints)
          setAllowableFilteredCells([])
        }
      } else {
        // drop the marker if we can't find it
        setOrigin(undefined)
        setAllowableFilteredCells([])
      }
      // store it anyway, even if it's undefined
      setOriginHex(originCell)
    } else {
      // clear the route
      setAllowableFilteredCells([])
      setOrigin(undefined)
      setOriginHex(undefined)
    }
  }, [planningRange, planningConstraints, gridCells])

  /** calculate the set of polygons that represent the map grid, including
       * locations for their text labels, and a similarly indexed set of hex
       * grid cells that can be used to lookup styling
       */
  useEffect(() => {
    if (gridCells) {
      const tmpPolys: { [id: string]: L.LatLng[] } = {}
      const tmpCentres: { [id: string]: L.LatLng } = {}
      const tmpHexCells: { [id: string]: SergeHex<{}> } = {}

      // create a polygon for each hex, add it to the parent
      gridCells.forEach((hex: SergeHex<{}>) => {
        // move coords to our map
        const centreWorld: L.LatLng = hex.centreLatLng
        // get hex center
        const centreH = hex.center()
        // get hex corners coords
        const corners = hex.corners()
        // convert hex corners coords to our map
        // build up an array of correctly mapped corners
        const cornerArr: L.LatLng[] = corners.map((value: Point) => {
          // the corners are relative to the origin (TL). So, offset them to the centre
          const point: PointLike = {
            x: value.x - centreH.x,
            y: value.y - centreH.y
          }
          const newP = toWorld(point, centreWorld, gridCells.tileDiameterDegs / 2)
          return newP
        })
        // add the polygon to polygons array, indexed by the cell name
        tmpPolys[hex.name] = cornerArr
        tmpCentres[hex.name] = centreWorld
        tmpHexCells[hex.name] = hex
      })
      setAllowablePolygons(tmpPolys)
      setAllowableCentres(tmpCentres)
      setAllowableHexCells(tmpHexCells)
    }
  }, [gridCells])

  /** handler for planning marker being droppped
       *
       */
  const dropped = (e: any): void => {
    if (planningConstraints && planningConstraints.status === LAYDOWN_TURN) {
      // Special Case - in Force Laydown
      // find the drop location
      if (planningRouteCells && planningRouteCells.length) {
        const laydown: NewTurnValues = {
          state: planningConstraints.status,
          speed: planningConstraints.speed,
          route: [planningRouteCells[0]]
        }
        setNewLeg(laydown)
      } else {
        console.warn('Pin dropped in laydown mode, but we do not have acceptable cells')
      }
      // clear other bits anyway
      setOrigin(undefined)
      setPlannedRouteCells([])
      setPlannedRoutePoly([])
      setPlanningRouteCells([])
      setPlanningRoutePoly([])
      setPlanningRange(undefined)
      setAllowableFilteredCells([])
    } else {
      // Note: ok, we don't actually use the marker location, since
      // it may be outside the achievable area. Just
      // use the last point in the planning leg
      const rangeUnlimited = planningConstraints && planningConstraints.speed === undefined
      if (plannedRouteCells && (planningRange || rangeUnlimited) && planningRouteCells.length) {
        // deduct one from planned route, since it includes the origin cell
        const routeLen = planningRouteCells.length - 1
        const lastCell: SergeHex<{}> = planningRouteCells[routeLen]

        const marker = e.target
        marker.setLatLng(lastCell.centreLatLng)

        // drop the first cell, since it's the current location
        const trimmedPlanningRouteCells = planningRouteCells.slice(1)

        // have we consumed the full length?
        if (rangeUnlimited || routeLen === planningRange) {
          // combine planned and planning cells, ready for results
          const fullCellList: Array<SergeHex<{}>> = plannedRouteCells.concat(trimmedPlanningRouteCells)

          // clear the planning routes
          setPlannedRouteCells([])
          setPlannedRoutePoly([])
          setPlanningRouteCells([])
          setPlanningRoutePoly([])

          // restore the full planning range allowance
          setPlanningRange(planningRangeProps)

          // ok, planning complete - fire the event back up the hierarchy
          setNewLeg({ state: planningConstraints.status, speed: planningConstraints.speed, route: fullCellList })
        } else {
          if (planningRange && !rangeUnlimited) {
            // ok, it's limited range, and just some of it has been consumed. Reduce what is remaining
            const remaining = planningRange - routeLen

            if (lastCell) {
              setPlannedRouteCells(plannedRouteCells.concat(trimmedPlanningRouteCells))
              // note: we extend the existing planned cells, with the new ones
              setPlannedRoutePoly(plannedRoutePoly.concat(planningRoutePoly))
              setOriginHex(lastCell)
              setPlanningRange(remaining)
            }
          }
        }
      }
    }
  }

  /** handler for planning marker being dragged
       *
       */
  const beingDragged = (e: any): void => {
    const marker = e.target
    const location = marker.getLatLng()
    const cellPos: SergeHex<{}> | undefined = gridCells.cellFor(location)
    if (cellPos) {
      setDragDestination(cellPos)
    }
  }

  const onMarkerClick = (): void => {
    if (setHidePlanningForm) {
      setHidePlanningForm(false)
    }
  }

  return <>
    <LayerGroup key={'hex_polygons'} >{Object.keys(allowablePolygons).map((k: string) => (
      <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
        key={'hex_poly_' + k}
        color={ assetColor }
        positions={allowablePolygons[k]}
        stroke={k === cellForSelected && assetColor ? assetColor : '#fff'}
        className={styles[getCellStyle(allowableHexCells[k], planningRouteCells, allowableFilteredCells, cellForSelected)]}
      />
    ))}
    <Polyline
      key={'hex_planned_line'}
      color={ assetColor }
      positions={plannedRoutePoly}
      className={styles['planned-line']}
    />
    <Polyline
      key={'hex_planning_line'}
      color={ assetColor }
      positions={planningRoutePoly}
      className={styles['planning-line']}
    />
    {origin &&
        <Marker
          draggable={true}
          onDragend={dropped}
          onDrag={beingDragged}
          onClick={onMarkerClick}
          position={origin}
          key={'drag_marker_'} />
    }
    </LayerGroup>
    {
      zoomLevel > 11 &&
      <LayerGroup key={'hex_labels'} >{Object.keys(allowableCentres).map(k => (
        <Marker
          key={'hex_label_' + k}
          position={allowableCentres[k]}
          width="120"
          icon={L.divIcon({
            html: k,
            className: styles['default-coords'],
            iconSize: [30, 20]
          })}
        />
      ))}
      </LayerGroup>
    }
  </>
}

export default HexGrid
