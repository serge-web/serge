import React, { useEffect, useState, useContext } from 'react'
import L, { DragEndEvent } from 'leaflet'
import * as turf from '@turf/turf'
import { Marker, LayerGroup, Polyline } from 'react-leaflet'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { plannedRouteFor3 } from '@serge/helpers'
import Polygon from './helpers/polygon'

import { binCells3, PolyBin3 } from './helpers/bin-cells'
import multiPolyFromGeoJSON, { TerrainPolygons } from './helpers/multi-poly-from-geojson'

/* Import mapping context */
import { MapContext } from '../mapping'

/* Import Types */
import { Route, NewTurnValues, SergeGrid3, SergeHex3, TurningDetails } from '@serge/custom-types'
import { CellLabelStyle, LAYDOWN_TURN } from '@serge/config'
import { h3SetToMultiPolygon, edgeLength, geoToH3, h3GetResolution, H3Index, kRing, h3ToGeo } from 'h3-js'
import getCellStyle3 from './helpers/get-cell-style-3'
import { leafletBuffer, leafletContainsTurf, leafletUnion, toRadians, toTurf, toVector } from '../mapping/helpers/h3-helpers'

/**
 *  create hexagonal grid
 * @param {SergeGrid3} grid grid of hex cells
 * @param {H3Index} originHex start for this planning turn
 * @param {number} range allowed distance of travel in this turn (in cells)
 * @returns {SergeGrid3} List of cells for where this asset could travel to
 */
const calcAllowableCells3 = (grid: SergeGrid3, originHex: H3Index, range: number): SergeGrid3 => {
  if (grid) {
    const matchingCells = kRing(originHex, range)
    return grid.filter((cell: SergeHex3) => matchingCells.indexOf(cell.index) !== -1)
  } else {
    return []
  }
}

/* Render component */
export const HexGrid: React.FC<{}> = () => {
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const {
    h3gridCells, planningConstraints, setNewLeg, setHidePlanningForm,
    selectedAsset, viewAsRouteStore, viewport, polygonAreas, cellLabelStyle, 
    mapBounds, h3Resolution
  } = props

  // define detail cut-offs
  const SHOW_LABELS_UNDER = 400
  const SHOW_HEXES_UNDER = 1000

  // fix the leaflet icon path, using tip from here:
  // https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-611930767
  L.Icon.Default.imagePath = '/images/'

  // allowable cells filtered depending on cell type
  const [allowableCells3, setAllowableCells3] = useState<SergeGrid3>([])
  const [allowablePoly3, setAllowablePoly3] = useState<Array<L.LatLng>>([])

  // Store the set of leaflet polygon areas, used as performance
  // fix for showing very large areas of hexes
  const [terrainPolys, setTerrainPolys] = useState<TerrainPolygons[]>([])

  // the cell for the selected asset
  const [cellForSelected3, setCellForSelected3] = useState<string | undefined>()

  // cells representing the route that is currently being dragged
  const [planningRouteCells3, setPlanningRouteCells3] = useState<SergeGrid3>([])
  const [planningRoutePoly3, setPlanningRoutePoly3] = useState<L.LatLng[]>([])

  // cells representing any route snippet that is already specified
  const [plannedRouteCells, setPlannedRouteCells] = useState<Array<SergeHex3>>([])
  const [plannedRoutePoly, setPlannedRoutePoly] = useState<L.LatLng[]>([])

  // temporary turn data
  const [leftTurn, setLeftTurn] = useState<L.LatLng[]>([])
  const [rightTurn, setRightTurn] = useState<L.LatLng[]>([])
  const [turningPoly, setTurningPoly] = useState<L.LatLng[]>([])
  const [achievablePoly, setAchievablePoly] = useState<L.LatLng[]>([])

  const [mapBoundsPts, setMapBoundsPts] = useState<L.LatLng[]>([])

  // the binned polygons
  const [polyBins3, setPolyBins3] = useState<PolyBin3[]>([])

  // at higher zoom levels we need to reduce the number of hexes plotted
  // we do this by filtering out cells that aren't relevant. Namely
  // cells on land or cells in open ocean
  const [relevantCells3, setRelevantCells3] = useState<SergeGrid3>([])

  // union of relevant cells & cells available for the current planning step
  const [visibleAndAllowableCells3, setVisibleAndAllowableCells3] = useState<SergeGrid3>([])

  // allow the planning marker origin to be changed
  const [origin, setOrigin] = useState<L.LatLng | undefined>(undefined)
  const [originHex3, setOriginHex3] = useState<SergeHex3 | undefined>(undefined)

  // allow the destination end point to be changed
  const [dragDestination3, setDragDestination3] = useState<SergeHex3 | undefined>(undefined)

  //  allow the achievable range to be changed
  const [planningRangeCells, setPlanningRangeCells] = useState<number | undefined>(planningConstraints && planningConstraints.rangeCells)

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
      const current: Route | undefined = viewAsRouteStore.routes.find((route: Route) => route.uniqid === selectedAsset.uniqid)
      if (current) {
        // double-check it's not the current asset (to reduce renders, and maybe lost plotted route)
        if (selectedAsset.uniqid !== selectedAssetId) {
          // clear the current planning details
          setPlanningRangeCells(undefined)
          setAllowableCells3([])
          setOrigin(undefined)
          setDragDestination3(undefined)
          setPlanningRouteCells3([])
          setPlanningRoutePoly3([])
          setPlannedRouteCells([])
          setPlannedRoutePoly([])

          // temp for turning circles
          setLeftTurn([])
          setRightTurn([])

          // and update the asset id
          setSelectedAssetId(selectedAsset.uniqid)
          // remember the color of the selected asset, so we shade correctly shade background
          // for highlighted cell
          if (current.color !== assetColor) {
            setAssetColor(current.color)
          }
          // store coords of selected asset, so we can highlight that cell
          if (cellForSelected3 !== current.currentPosition) {
            setCellForSelected3(current.currentPosition)
          }
        }
      } else {
        // selected asset no longer present - hide it
        setCellForSelected3(undefined)
        setOrigin(undefined)
        setPlanningRangeCells(undefined)
        setDragDestination3(undefined)
      }
    } else {
      setSelectedAssetId(undefined)
      /** if no asset is selected, clear the planning elements
       */
      setDragDestination3(undefined)
      setAllowableCells3([])
      setPlanningRangeCells(undefined)
      setOrigin(undefined)
      setAssetColor(undefined)
      setOriginHex3(undefined)
      setPlanningRoutePoly3([])
      setPlannedRoutePoly([])
      setPlannedRouteCells([])
      setCellForSelected3(undefined)

      // temp for turning circles
      setLeftTurn([])
      setRightTurn([])
    }
  }, [selectedAsset, h3gridCells, viewAsRouteStore])

  /** handle the dynamic indicator that follows mouse movement,
   * represented as cells & a line
   */
  useEffect(() => {
    if (dragDestination3 && originHex3) {
      // check if we're in laydown mode
      if (planningConstraints && planningConstraints.status === LAYDOWN_TURN) {
        // we don't show path in laydown mode
        setPlanningRoutePoly3([])

        // see if current cell is acceptable
        // Note: special handling. if there are no allowable cells, it can be laid down anywhere
        if (!allowableCells3.length || allowableCells3.includes(dragDestination3)) {
          // ok, set planning route to just that cell - to mark the
          // last acceptable cell
          setPlanningRouteCells3([dragDestination3])
        }
      } else {
        // work out the available cells
        const plannedRoute: SergeHex3[] = planningConstraints
          ? plannedRouteFor3(h3gridCells, allowableCells3, originHex3, dragDestination3) : []

        // combine with any existing planned cells
        if (selectedAsset && selectedAsset.type === 'datum') {
          if (plannedRoute.length > 0) {
            // we need the planned route to be more than one cell long in order
            // for later code to recognise it as a valid leg
            setPlanningRouteCells3([plannedRoute[0], plannedRoute[plannedRoute.length - 1]])
          }
        } else {
          setPlanningRouteCells3(plannedRoute)

          // also produce the lat-long values needed for the polylines
          const tmpPlannedRoutePoly: L.LatLng[] = plannedRoute.map((cell: SergeHex3) => {
            return cell.centreLatLng
          })

          // combine with any existing planned cells
          setPlanningRoutePoly3(tmpPlannedRoutePoly)
        }
      }
    } else {
      // drop cells
      setPlanningRouteCells3([])
      setPlanningRoutePoly3([])
    }
  }, [dragDestination3, originHex3])


  const calcTurnData = (originCell: SergeHex3, details?: TurningDetails): 
    {turnCircles: L.LatLng[], turnOverall: L.LatLng[], cellBehind: string} => {

    if (details) {
      // coords of circle
      const turnRadiusKm: number = details.radius / 1000 // grow radius, to ensure circles slightly overlap
      const origin = turf.point([originCell.centreLatLng.lng, originCell.centreLatLng.lat])
      const heading = details.heading

      // calculate the position behind the origin
      const behindLoc = turf.destination(origin, turnRadiusKm, 180 + heading, { units: 'kilometers' })
      const coords = behindLoc.geometry.coordinates
      const cellBehind = geoToH3(coords[1], coords[0], h3Resolution)

      // store data
      const leftPts = buildTurn(origin, true, turnRadiusKm, heading)
      const rightPts = buildTurn(origin, false, turnRadiusKm, heading)

      // now the circle involute
      let distKm = details.distance / 1000
      const circum = turnRadiusKm * Math.PI * 2

      let excess = 0
      if (distKm > circum) {
        excess = distKm - circum
        console.log('buffer', circum, distKm, excess)
        distKm = circum * 0.95
      }

      const startAngle = distKm / circum * 360 + 180
      const startRads = toRadians(startAngle)
      const lArc = [originCell.centreLatLng]
      const rArc = [originCell.centreLatLng]
      // console.log('start', distKm, radiusKm, circum, startAngle, cleanStart, startRads, heading)
      const angleStep = startAngle / 20
      let incomplete = true
      for (let i = 0; i <= startAngle && incomplete; i += angleStep) {
        const t = toRadians(i)
        const u = t - startRads
        const x = turnRadiusKm * (1 + Math.cos(u) + t * Math.sin(u))
        const y = turnRadiusKm * (Math.sin(u) - t * Math.cos(u))
        const vectorR = toVector(x, -y)
        const newLocR = turf.destination(origin, vectorR.magnitude, 90 + vectorR.direction + heading, { units: 'kilometers' })
        const locR = L.latLng(newLocR.geometry.coordinates[1], newLocR.geometry.coordinates[0])
        rArc.push(locR)
        const vectorL = toVector(-x, -y)
        const newLocL = turf.destination(origin, vectorL.magnitude, 90 + vectorL.direction + heading, { units: 'kilometers' })
        const locL = L.latLng(newLocL.geometry.coordinates[1], newLocL.geometry.coordinates[0])
        lArc.push(locL)
        // console.log('p', i, x, y, vectorL.direction, vectorL.magnitude)
        incomplete = vectorR.direction > -90
      }
      // start off with the right arc

      // now append the left arc, in reverse
      const leftReverse = lArc.reverse()
      rArc.push(...leftReverse)

      // now calculate union of zones
      // extend the circles slightly, so they overal
      const growLeft = leafletBuffer(leftPts, turnRadiusKm * 0.05)
      const growRight = leafletBuffer(rightPts, turnRadiusKm * 0.05)

      const circles = leafletUnion(growLeft, growRight) || []
      const overall = leafletUnion(circles, rArc) || []
      const turnArc = excess ? leafletBuffer(overall, excess) : overall

      return {turnCircles: circles, turnOverall: turnArc, cellBehind: cellBehind}
    }
    return { turnCircles: [], turnOverall: [], cellBehind: ''}
  }

  /** listen out for just planning constraints changing, since we
  * update planning range from it.
  */
  useEffect(() => {
    if (planningConstraints !== undefined) {
      setPlanningRangeCells(planningConstraints.rangeCells)
    }
  }, [planningConstraints])

  /** function to create a circle */
  const buildTurn = (origin: turf.Feature<turf.Point>, left: boolean, radiusKm: number, heading: number): L.LatLng[] => {
    const offset = left ? -90 : 90
    const thisOrigin = turf.destination(origin, radiusKm, heading + offset, { units: 'kilometers' })
    const pts: L.LatLng[] = []
    for (let i = 0; i < 360; i += 30) {
      const dest: turf.Feature<turf.Point> = turf.destination(thisOrigin, radiusKm, i, { units: 'kilometers' })
      const point: turf.Position = dest.geometry.coordinates
      const pos: L.LatLng = L.latLng(point[1], point[0])
      pts.push(pos)
    }
    // append the start point, to make poly
    pts.push(pts[0])
    return pts
  }

  /** provide a list of cells allowable for this platform. The area may reduce
       * as a player plans the leg
       */
  useEffect(() => {
    const rangeUnlimited = planningConstraints && planningConstraints.speed === undefined
    if (planningRangeCells === undefined && planningConstraints !== undefined) {
      setPlanningRangeCells(planningConstraints.rangeCells)
    }
    // check all data necessary for rendering is present
    if (selectedAsset && planningConstraints && planningConstraints.origin && h3gridCells && (planningRangeCells || rangeUnlimited)) {
      // if we're mid-way through a leg, we take the value from the origin hex, not the planning centre
      const originCell = plannedRoutePoly.length ? originHex3 : h3gridCells.find((cell: SergeHex3) => cell.index === planningConstraints.origin)
      // did we find cell?
      if (originCell) {
        setOrigin(originCell.centreLatLng)

        const { turnCircles, turnOverall, cellBehind}= calcTurnData(originCell, planningConstraints.turningCircle)

        // don't draw the lines
        false && setAchievablePoly(turnOverall)
        false && setTurningPoly(turnCircles)

        // is there a limited range?
        let allowableCellList: SergeHex3[] = planningRangeCells 
          ? calcAllowableCells3(h3gridCells, originCell.index, planningRangeCells) : h3gridCells
        
        if (turnOverall.length) {
          // convert the poly to turf, to remove repeated processing
          const turfOverall = toTurf(turnOverall)
          const circleOverall = toTurf(turnCircles)

          // filter the allowable cells for the turning circles
          allowableCellList = allowableCellList.filter((value: SergeHex3) => {
            if(value.index === originCell.index) {
              return true
            } else {
              if(value.index === cellBehind) {
                return false
              } else {
                const pos = h3ToGeo(value.index)
                const lPos = L.latLng(pos[0], pos[1])
                if (leafletContainsTurf(circleOverall, lPos)) {
                  return false 
                } else {
                  return leafletContainsTurf(turfOverall, lPos)
                }
              }
            }
          })
        }

        // ok, see which ones are filterd
        // "air" is a special planning mode, where we don't have to filter it
        if (planningConstraints.travelMode === 'air') {
          // are we an air platform in laydown?
          // if we are, ensure laydown location is on land
          const laydownCells = planningConstraints.status === LAYDOWN_TURN
            ? allowableCellList.filter((cell: SergeHex3) => cell.terrain === 'land')
            : allowableCellList

          setAllowableCells3(laydownCells)
        } else {
          // TODO: reinstate terrain tests
          const filteredCells = allowableCellList.filter((cell: SergeHex3) => cell.terrain === planningConstraints.travelMode.toLowerCase())
          setAllowableCells3(filteredCells)

          if (filteredCells.length <= 5000) {
            // try to create convex polygon around cells, but only if there
            // arent' too many cells
            // const hull = generateOuterBoundary3(filteredCells)
            // setAllowablePoly3(hull)

            // use h3 hull function
            const cellIndices = filteredCells.map((cell: SergeHex3): string => cell.index)
            const hull2 = h3SetToMultiPolygon(cellIndices, true)
            const h3points = hull2[0][0].map((pair: number[]) => L.latLng(pair[1], pair[0]))
            setAllowablePoly3(h3points)
          } else {
            setAllowablePoly3([])
          }
        }
      } else {
        // drop the marker if we can't find it
        setOrigin(undefined)
        setAllowableCells3([])
        setAllowablePoly3([])
      }
      // store it anyway, even if it's undefined
      setOriginHex3(originCell)
    } else {
      // clear the route
      setAllowableCells3([])
      setAllowablePoly3([])
      setOrigin(undefined)
      setOriginHex3(undefined)
    }
  }, [planningRangeCells, planningConstraints, h3gridCells])

  /** remap the GeoJSON coords (lngLat) to Leaflet coords (latLng)
  */
  useEffect(() => {
    if (polygonAreas) {
      const leafletPolyAreas = multiPolyFromGeoJSON(polygonAreas)
      setTerrainPolys(leafletPolyAreas)
    }
  }, [polygonAreas])

  /** plot the outer map bounds
    */
  useEffect(() => {
    if (mapBounds) {
      const res = []
      res.push(mapBounds.getNorthWest())
      res.push(mapBounds.getNorthEast())
      res.push(mapBounds.getSouthEast())
      res.push(mapBounds.getSouthWest())
      res.push(mapBounds.getNorthWest())
      setMapBoundsPts(res)
    }
  }, [mapBounds])

  const createPolyBins3 = (cells: SergeGrid3): PolyBin3[] | undefined => {
    if (h3gridCells) {
      const store: SergeGrid3 = []
      let bounds: L.LatLngBounds | undefined

      // create a polygon for each hex, add it to the parent
      cells.forEach((hex: SergeHex3) => {
        const centreWorld: L.LatLng = hex.centreLatLng
        // extend the bounds
        bounds = bounds === undefined ? L.latLngBounds(centreWorld, centreWorld) : bounds.extend(centreWorld)
        store.push(hex)
      })
      if (bounds) {
        const polyBins = binCells3(bounds, store)
        // const bins = polyBins.map((bin: PolyBins) => bin.cells.length)
        // console.log('bin sizes:', bins)
        return polyBins
      }
    }
    return undefined
  }

  useEffect(() => {
    if (viewport && h3gridCells) {
      if (polyBins3.length === 0) {
        const bins = createPolyBins3(h3gridCells)
        bins && setPolyBins3(bins)
      } else {
        // grow the viewport by 1/2 cell, so we can test
        // if the cell centre is inside the viewport -
        // necessary for cells at the edge
        const someCell = h3gridCells[0].index
        const h3res = h3GetResolution(someCell)
        const bufferDist = edgeLength(h3res, 'm')
        const newTL = viewport.getNorthWest().toBounds(bufferDist)
        const newBR = viewport.getSouthEast().toBounds(bufferDist)
        const extendedViewport = L.latLngBounds(newTL.getNorthWest(), newBR.getSouthEast())

        const visible: SergeGrid3 = []

        // sort out visible cells, first by the bin
        polyBins3.forEach((bin: PolyBin3) => {
          if (extendedViewport.contains(bin.bounds)) {
            // ok, add all of them
            visible.push(...bin.cells)
          } else if (bin.bounds.intersects(extendedViewport)) {
            // find the ones in the viewport
            const inZone = bin.cells.filter((cell: SergeHex3) =>
              extendedViewport.contains(cell.centreLatLng)
            )
            visible.push(...inZone)
          }
        })

        setRelevantCells3(visible)
      }
    } else {
      setRelevantCells3([])
    }
  }, [viewport, h3gridCells, polyBins3])

  // as a performance optimisation we plot the
  // visible cells at this zoom level, plus the
  // allowable filtered cells
  useEffect(() => {
    // combine both lists
    const allCells = relevantCells3.concat(planningRouteCells3)
    // some cells may be in both lists, so reduce to unique cells
    //    const uniqueCells = [...new Set(allCells)]
    //    console.log('reduce visible', allowableCells.length, allCells.length, uniqueCells.length)
    setVisibleAndAllowableCells3(allCells)
  }, [relevantCells3, planningRouteCells3])

  /** handler for planning marker being droppped
       *
       */
  const dropped = (e: DragEndEvent): void => {
    setDragDestination3(undefined)
    setAllowableCells3([])
    if (planningConstraints && planningConstraints.status === LAYDOWN_TURN) {
      // Special Case - in Force Laydown
      // find the drop location
      if (planningRouteCells3 && planningRouteCells3.length) {
        const laydown: NewTurnValues = {
          state: planningConstraints.status,
          speed: planningConstraints.speed,
          route: [planningRouteCells3[0]]
        }
        setNewLeg && setNewLeg(laydown)
      } else {
        console.warn('Pin dropped in laydown mode, but we do not have acceptable cells')
      }
      // clear other bits anyway
      setOrigin(undefined)
      setPlannedRouteCells([])
      setPlannedRoutePoly([])
      setPlanningRouteCells3([])
      setPlanningRoutePoly3([])
      setPlanningRangeCells(undefined)
      setAllowableCells3([])
    } else {
      // Note: ok, we don't actually use the marker location, since
      // it may be outside the achievable area. Just
      // use the last point in the planning leg
      const rangeUnlimited = planningConstraints && planningConstraints.speed === undefined

      if (plannedRouteCells && (planningRangeCells || rangeUnlimited) && planningRouteCells3.length) {
        // deduct one from planned route, since it includes the origin cell
        const routeLen = planningRouteCells3.length - 1
        const lastCell: SergeHex3 = planningRouteCells3[routeLen]

        const marker = e.target
        marker.setLatLng(lastCell.centreLatLng)

        // note: the planning route cells includes the start cell. So, it's only a valie route if the
        // planning route cells are more than 1 in length
        if (planningConstraints && planningRouteCells3.length > 1) {
          // drop the first cell, since it's the current location
          const trimmedPlanningRouteCells = planningRouteCells3.slice(1)

          // have we consumed the full length?
          if (rangeUnlimited || routeLen === planningRangeCells) {
            // combine planned and planning cells, ready for results
            const fullCellList: Array<SergeHex3> = plannedRouteCells.concat(trimmedPlanningRouteCells)

            // clear the planning routes
            setPlannedRouteCells([])
            setPlannedRoutePoly([])
            setPlanningRouteCells3([])
            setPlanningRoutePoly3([])

            // restore the full planning range allowance
            setPlanningRangeCells(planningConstraints.rangeCells)

            // ok, planning complete - fire the event back up the hierarchy
            setNewLeg && setNewLeg({ state: planningConstraints.status, speed: planningConstraints.speed, route: fullCellList })
          } else if (planningRangeCells && !rangeUnlimited) {
            // ok, it's limited range, and just some of it has been consumed. Reduce what is remaining
            const remaining = planningRangeCells - routeLen

            setPlannedRouteCells(plannedRouteCells.concat(trimmedPlanningRouteCells))
            // note: we extend the existing planned cells, with the new ones
            setPlannedRoutePoly(plannedRoutePoly.concat(planningRoutePoly3))
            setOriginHex3(lastCell)
            setPlanningRangeCells(remaining)
          }
        }
      }
    }
  }

  /** handler for planning marker being dragged
       *
       */
  const beingDragged = (e: any): void => {
    if (!h3gridCells) {
      return
    }
    const marker = e.target
    const location = marker.getLatLng()

    const res = h3GetResolution(h3gridCells[0].index)
    const destinationHex3: string | undefined = geoToH3(location.lat, location.lng, res)
    if (destinationHex3) {
      const dest = h3gridCells.find((cell: SergeHex3) => cell.index === destinationHex3)
      dest && setDragDestination3(dest)
    }
  }

  const onMarkerClick = (): void => {
    if (setHidePlanningForm) {
      setHidePlanningForm(false)
    }
  }

  const cellLabelFor = (cell: SergeHex3): string => {
    const store = cell.labelStore
    switch (cellLabelStyle) {
      case CellLabelStyle.CTR_LABELS:
        return store.ctr
      case CellLabelStyle.H3_LABELS:
        return cell.index
      case CellLabelStyle.X_Y_LABELS:
        return store.xy
      case CellLabelStyle.LAT_LON_LABELS:
      default:
        return store.latLon
    }
  }

  //  console.log('vis', visibleCells.length, relevantCells.length, relevantCells3.length)

  //  console.log('zoom', zoomLevel, visibleAndAllowableCells.length, visibleCells.length, allowableCells.length)
  // console.log('hex grid', setPlanningRouteCells.length, setPlanningRouteCells.length && setPlanningRouteCells.length[0])

  // console.log('selected', cellForSelected3)

  // console.log('allowable', allowableCells3.length, allowablePoly3.length, allowablePoly3, planningRoutePoly3.length, planningRoutePoly3)

  return <>
    { /*  - show number of visible cells */}
    { viewport &&
      <Marker
        key={'num_vis_cells'}
        position={ viewport.getCenter()}
        width='120'
        icon={L.divIcon({
          html: '' + visibleAndAllowableCells3.length + ' h3 cells',
          className: styles['num-cells'],
          iconSize: [30, 20]
        })}
      />
    }

    { /* POLY BINS */}
    { /* <LayerGroup key={'poly_bounds'} >{viewport && polyBins3 && polyBins3.map((bin: PolyBin3, index: number) => (
      <>
        <Polygon
          key={'bin_line_' + index}
          color={ bin.bounds.intersects(viewport) ? '#00f' : '#f00' }
          fillColor={ bin.bounds.intersects(viewport) ? '#00f' : '#f00' }
          positions={[bin.bounds.getNorthWest(), bin.bounds.getSouthWest(), bin.bounds.getSouthEast(), bin.bounds.getNorthEast()]}
          className={styles['planning-line']}
        />
        <Marker
          key={'bin_label_' + index}
          position={bin.bounds.getCenter()}
          width="120"
          icon={L.divIcon({
            html: '' + bin.cells.length,
            className: styles['default-coords'],
            iconSize: [30, 20]
          })}
        />
      </>
    ))}
        </LayerGroup> */ }

    <LayerGroup key={'hex_polygons3'} >{
      /* not too many cells visible, show hex outlines */
      visibleAndAllowableCells3 && visibleAndAllowableCells3.length < SHOW_HEXES_UNDER && visibleAndAllowableCells3.map((cell: SergeHex3, index: number) => (
        <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
          key={'hex_poly3_' + cell.index + '_' + index}
          fillColor={cell.fillColor || assetColor}
          fill={terrainPolys.length === 0 || allowableCells3.find((hex: SergeHex3) => hex.index === cell.index)} // only fill them if we don't have polys
          positions={cell.poly}
          stroke={cell.index === cellForSelected3 && assetColor ? assetColor : '#f00' }
          className={styles[getCellStyle3(cell, [] /* planningRouteCells3 */, allowableCells3, cellForSelected3)]}
        />
      ))}
    </LayerGroup>

    <LayerGroup key={'hex_polygons4'} >{
      /** too many cells visible to show outline, so just show planned route (or target for laydown) */
      visibleAndAllowableCells3.length >= SHOW_HEXES_UNDER && planningRouteCells3.map((cell: SergeHex3, index: number) => (
        <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
          key={'hex_poly_' + cell.index + '_' + index}
          fillColor={cell.fillColor || '#f00'}
          fill={terrainPolys.length === 0} // only fill them if we don't have polys
          positions={cell.poly}
          stroke={cell.index === cellForSelected3 && assetColor ? assetColor : '#f0f' }
          className={styles[getCellStyle3(cell, planningRouteCells3, [], cellForSelected3)]}
        />
      ))}
    { // special case - if we're in air travel mode the planning route may not be in the
      // available cells listing
      planningConstraints && planningConstraints.travelMode === 'air' &&
        allowableCells3.length === 0 &&
        planningRouteCells3.map((cell: SergeHex3, index: number) => (
          <Polygon
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key={'hex_planning_' + cell.index + '_' + index}
            fillColor={cell.fillColor || '#f00'}
            positions={cell.poly}
            stroke={'#0ff' /* cell.index === cellForSelected3 && assetColor ? assetColor : '#fff' */}
            className={styles['planned-hex']}
          />
        ))}
    <Polyline
      key={'temp_left_turn'}
      color={'#ff0'}
      positions={leftTurn}
      className={styles['planned-line']}
    />
    <Polyline
      key={'temp_right_turn'}
      color={'#f0f'}
      positions={rightTurn}
      className={styles['planned-line']}
    />
    <Polyline
      key={'temp_left_arc'}
      color={'#0ff'}
      positions={turningPoly}
      className={styles['planned-line']}
    />
    <Polyline
      key={'temp_both_arc'}
      color={'#f66'}
      positions={achievablePoly}
      className={styles['planned-line']}
    />
    <Polyline
      key={'temp_map_bounds'}
      color={'#22c'}
      positions={mapBoundsPts}
      className={styles['planned-line']}
    />

    <Polyline
      key={'hex_planned_line'}
      color={assetColor}
      positions={plannedRoutePoly}
      className={styles['planned-line']}
    />
    <Polyline
      key={'hex_planning_line3'}
      color={assetColor}
      positions={planningRoutePoly3}
      className={styles['planning-line']}
    />
    <Polyline
      key={'allowableCells3_line'}
      color={assetColor}
      positions={allowablePoly3}
      className={styles['allowable-line']}
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
    { false && // don't plot the polys from legacy data
      <LayerGroup key='polygon_outlines'>
        {terrainPolys.map((terrain: TerrainPolygons, index: number) =>
          <Polygon
            key={'poly_a' + index}
            positions={terrain.data}
            fillColor={terrain.terrain.fillColor}
            className={styles['terrain-outline']}/>
        )}
      </LayerGroup>
    }
    {
      // zoomLevel > 5.5 &&
      // change - show labels if there are less than 400. With the zoom level
      // we were getting issues where up North (where the cells appear larger) there are
      // fewer visible at once, but we still weren't showing the labels.
      relevantCells3 && relevantCells3.length < SHOW_LABELS_UNDER &&
      /* note: for the label markers - we use the cells in the currently visible area */
      <LayerGroup key={'hex_labels3'} >{relevantCells3.map((cell: SergeHex3, index: number) => (
        <Marker
          key={'hex_label3_' + cell.index + '_' + index}
          position={cell.centreLatLng}
          zIndexOffset={-1000}
          width="120"
          icon={L.divIcon({
            // html: '' + cell.x + ',' + cell.y,
            html: cellLabelFor(cell),
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
