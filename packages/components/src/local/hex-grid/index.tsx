import React, { useEffect, useState, useContext } from 'react'
import L, { DragEndEvent } from 'leaflet'
import { Marker, LayerGroup, Polyline } from 'react-leaflet'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { calcAllowableCells, plannedRouteFor, plannedRouteFor3 } from '@serge/helpers'
import Polygon from './helpers/polygon'
import getCellStyle from './helpers/get-cell-style'

import binCells, { binCells3, PolyBin, PolyBin3 } from './helpers/bin-cells'
import generateOuterBoundary from './helpers/get-outer-boundary'
import multiPolyFromGeoJSON, { TerrainPolygons } from './helpers/multi-poly-from-geojson'

/* Import mapping context */
import { MapContext } from '../mapping'

/* Import Types */
import { SergeHex, SergeGrid, Route, NewTurnValues, SergeGrid3, SergeHex3 } from '@serge/custom-types'
import { LAYDOWN_TURN } from '@serge/config'
import { geoToH3, H3Index, kRing } from 'h3-js'
import generateOuterBoundary3 from './helpers/get-outer-boundary-3'

/**
 *  create hexagonal grid
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid grid of hex cells
 * @param {SergeHex<{}>} originHex start for this planning turn
 * @param {number} range allowed distance of travel in this turn
 * @returns {SergeHex<{}>[]} List of cells for where this asset could travel to
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
    gridCells, h3gridCells, planningConstraints, setNewLeg, setHidePlanningForm,
    selectedAsset, viewAsRouteStore, viewport, polygonAreas
  } = props

  // define detail cut-offs
  const SHOW_LABELS_UNDER = 600
  const SHOW_HEXES_UNDER = 2000

  // fix the leaflet icon path, using tip from here:
  // https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-611930767
  L.Icon.Default.imagePath = '/images/'

  // allowable cells filtered depending on cell type
  const [allowableCells, setAllowableCells] = useState<Array<SergeHex<{}>>>([])
  const [allowableCells3, setAllowableCells3] = useState<SergeGrid3>([])
  const [allowablePoly, setAllowablePoly] = useState<Array<L.LatLng>>([])
  const [allowablePoly3, setAllowablePoly3] = useState<Array<L.LatLng>>([])

  // Store the set of leaflet polygon areas, used as performance
  // fix for showing very large areas of hexes
  const [terrainPolys, setTerrainPolys] = useState<TerrainPolygons[]>([])

  // the cell for the selected asset
  const [cellForSelected, setCellForSelected] = useState<string | undefined>(undefined)
  const [cellForSelected3, setCellForSelected3] = useState<string | undefined>(undefined)

  // cells representing the route that is currently being dragged
  const [planningRouteCells, setPlanningRouteCells] = useState<Array<SergeHex<{}>>>([])
  const [planningRouteCells3, setPlanningRouteCells3] = useState<SergeGrid3>([])
  const [planningRoutePoly, setPlanningRoutePoly] = useState<L.LatLng[]>([])
  const [planningRoutePoly3, setPlanningRoutePoly3] = useState<L.LatLng[]>([])

  // cells representing any route snippet that is already specified
  const [plannedRouteCells, setPlannedRouteCells] = useState<Array<SergeHex<{}>>>([])
  const [plannedRoutePoly, setPlannedRoutePoly] = useState<L.LatLng[]>([])

  // the binned polygons
  const [polyBins, setPolyBins] = useState<PolyBin[]>([])
  const [polyBins3, setPolyBins3] = useState<PolyBin3[]>([])

  // the cells that are contained in the current viewport
  const [visibleCells, setVisibleCells] = useState<SergeHex<{}>[]>([])

  // at higher zoom levels we need to reduce the number of hexes plotted
  // we do this by filtering out cells that aren't relevant. Namely
  // cells on land or cells in open ocean
  const [relevantCells, setRelevantCells] = useState<SergeHex<{}>[]>([])
  const [relevantCells3, setRelevantCells3] = useState<SergeGrid3>([])

  // union of relevant cells & cells available for the current planning step
  const [visibleAndAllowableCells, setVisibleAndAllowableCells] = useState<SergeHex<{}>[]>([])
  const [visibleAndAllowableCells3, setVisibleAndAllowableCells3] = useState<SergeGrid3>([])

  // allow the planning marker origin to be changed
  const [origin, setOrigin] = useState<L.LatLng | undefined>(undefined)
  const [originHex, setOriginHex] = useState<SergeHex<{}> | undefined>(undefined)
  const [originHex3, setOriginHex3] = useState<SergeHex3 | undefined>(undefined)

  // allow the destination end point to be changed
  const [dragDestination, setDragDestination] = useState<SergeHex<{}> | undefined>(undefined)
  const [dragDestination3, setDragDestination3] = useState<SergeHex3 | undefined>(undefined)

  //  allow the achievable range to be changed
  const [planningRange, setPlanningRange] = useState<number | undefined>(planningConstraints && planningConstraints.range)

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
          setPlanningRange(undefined)
          setAllowableCells([])
          setOrigin(undefined)
          setDragDestination(undefined)
          setDragDestination3(undefined)
          setPlanningRouteCells([])
          setPlanningRoutePoly([])
          setPlannedRouteCells([])
          setPlannedRoutePoly([])

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

          const loc = current.currentLocation
          if (loc) {
            const h3Cell = geoToH3(loc.lat, loc.lng, 4)
            if (cellForSelected3 !== h3Cell) {
              setCellForSelected3(h3Cell)
            }
          }
        }
      } else {
        // selected asset no longer present - hide it
        setCellForSelected(undefined)
        setCellForSelected3(undefined)
        setOrigin(undefined)
        setPlanningRange(undefined)
        setDragDestination(undefined)
        setDragDestination3(undefined)
      }
    } else {
      setSelectedAssetId(undefined)
      /** if no asset is selected, clear the planning elements
       */
      setDragDestination(undefined)
      setDragDestination3(undefined)
      setAllowableCells([])
      setPlanningRange(undefined)
      setOrigin(undefined)
      setAssetColor(undefined)
      setOriginHex(undefined)
      setPlanningRoutePoly([])
      setPlannedRoutePoly([])
      setPlannedRouteCells([])
      setCellForSelected(undefined)
    }
  }, [selectedAsset, gridCells, viewAsRouteStore])

  /**
   Returns the point that is a distance and heading away from
    the given origin point.
    @param {L.LatLng} latlng: origin point
    @param {float} heading: heading in degrees, clockwise from 0 degrees north.
    @param {float} distance: distance in meters
    @returns {L.latLng} the destination point.
    Many thanks to Chris Veness at http://www.movable-type.co.uk/scripts/latlong.html
    for a great reference and examples.
    */
  const destination = (latlng: L.LatLng, heading: number, distance: number): L.LatLng => {
    heading = (heading + 360) % 360
    const rad = Math.PI / 180
    const radInv = 180 / Math.PI
    const R = 6378137 // approximation of Earth's radius
    const lon1 = latlng.lng * rad
    const lat1 = latlng.lat * rad
    const rheading = heading * rad
    const sinLat1 = Math.sin(lat1)
    const cosLat1 = Math.cos(lat1)
    const cosDistR = Math.cos(distance / R)
    const sinDistR = Math.sin(distance / R)
    const lat2 = Math.asin(sinLat1 * cosDistR + cosLat1 *
      sinDistR * Math.cos(rheading))
    let lon2 = lon1 + Math.atan2(Math.sin(rheading) * sinDistR *
      cosLat1, cosDistR - sinLat1 * Math.sin(lat2))
    lon2 = lon2 * radInv
    lon2 = lon2 > 180 ? lon2 - 360 : lon2 < -180 ? lon2 + 360 : lon2
    return L.latLng([lat2 * radInv, lon2])
  }

  /** handle the dynamic indicator that follows mouse movement,
   * represented as cells & a line
   */
  useEffect(() => {
    if (dragDestination3 && originHex3) {
      // check if we're in laydown mode
      if (planningConstraints && planningConstraints.status === LAYDOWN_TURN) {
        // we don't show path in laydown mode
        setPlanningRoutePoly([])

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

  /** handle the dynamic indicator that follows mouse movement,
   * represented as cells & a line
   */
  useEffect(() => {
    if (dragDestination && originHex) {
      // check if we're in laydown mode
      if (planningConstraints && planningConstraints.status === LAYDOWN_TURN) {
        // we don't show path in laydown mode
        setPlanningRoutePoly([])

        // see if current cell is acceptable
        // Note: special handling. if there are no allowable cells, it can be laid down anywhere
        if (!allowableCells.length || allowableCells.includes(dragDestination)) {
          // ok, set planning route to just that cell - to mark the
          // last acceptable cell
          setPlanningRouteCells([dragDestination])
        }
      } else {
        // work out the available cells
        const plannedRoute: SergeHex<{}>[] = planningConstraints
          ? plannedRouteFor(gridCells, allowableCells, originHex, dragDestination) : []

        // combine with any existing planned cells
        if (selectedAsset && selectedAsset.type === 'datum') {
          if (plannedRoute.length > 0) {
            // we need the planned route to be more than one cell long in order
            // for later code to recognise it as a valid leg
            setPlanningRouteCells([plannedRoute[0], plannedRoute[plannedRoute.length - 1]])
          }
        } else {
          setPlanningRouteCells(plannedRoute)

          // also produce the lat-long values needed for the polylines
          const tmpPlannedRoutePoly: L.LatLng[] = plannedRoute.map((cell: SergeHex<{}>) => {
            return cell.centreLatLng
          })

          // combine with any existing planned cells
          setPlanningRoutePoly(tmpPlannedRoutePoly)
        }
      }
    } else {
      // drop cells
      setPlanningRouteCells([])
      setPlanningRoutePoly([])
    }
  }, [dragDestination, originHex])

  /** listen out for just planning constraints changing, since we
  * update planning range from it.
  */
  useEffect(() => {
    if (planningConstraints !== undefined) {
      setPlanningRange(planningConstraints.range)
    }
  }, [planningConstraints])

  /** provide a list of cells allowable for this platform. The area may reduce
       * as a player plans the leg
       */
  useEffect(() => {
    const rangeUnlimited = planningConstraints && planningConstraints.speed === undefined
    if (planningRange === undefined && planningConstraints !== undefined) {
      setPlanningRange(planningConstraints.range)
    }
    // check all data necessary for rendering is present
    if (selectedAsset && planningConstraints && planningConstraints.origin && gridCells && (planningRange || rangeUnlimited)) {
      // if we're mid-way through a leg, we take the value from the origin hex, not the planning centre
      const originCell = plannedRoutePoly.length ? originHex3 : h3gridCells.find((cell: SergeHex3) => cell.name === planningConstraints.origin)
      // did we find cell?
      if (originCell) {
        setOrigin(originCell.centreLatLng)

        // is there a limited range?
        const allowableCellList: SergeHex3[] = planningRange ? calcAllowableCells3(h3gridCells, originCell.index, planningRange) : h3gridCells

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
          const filteredCells = allowableCellList.filter((cell: SergeHex3) => cell.terrain === planningConstraints.travelMode.toLowerCase())
          setAllowableCells3(filteredCells)

          if (filteredCells.length <= 500) {
            // try to create convex polygon around cells, but only if there
            // arent' too many cells
            const hull = generateOuterBoundary3(filteredCells)
            setAllowablePoly3(hull)
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
      setOriginHex(undefined)
    }
  }, [planningRange, planningConstraints, h3gridCells])

  /** provide a list of cells allowable for this platform. The area may reduce
       * as a player plans the leg
       */
  useEffect(() => {
    const rangeUnlimited = planningConstraints && planningConstraints.speed === undefined
    if (planningRange === undefined && planningConstraints !== undefined) {
      setPlanningRange(planningConstraints.range)
    }
    // check all data necessary for rendering is present
    if (selectedAsset && planningConstraints && planningConstraints.origin && gridCells && (planningRange || rangeUnlimited)) {
      // if we're mid-way through a leg, we take the value from the origin hex, not the planning centre
      const originCell = plannedRoutePoly.length ? originHex : gridCells.find((cell: SergeHex<{}>) => cell.name === planningConstraints.origin)
      // did we find cell?
      if (originCell) {
        setOrigin(originCell.centreLatLng)

        // is there a limited range?
        const allowableCellList: SergeHex<{}>[] = planningRange ? calcAllowableCells(gridCells, originCell, planningRange) : gridCells

        // ok, see which ones are filterd
        // "air" is a special planning mode, where we don't have to filter it
        if (planningConstraints.travelMode === 'air') {
          // are we an air platform in laydown?
          // if we are, ensure laydown location is on land
          const laydownCells = planningConstraints.status === LAYDOWN_TURN
            ? allowableCellList.filter((cell: SergeHex<{}>) => cell.terrain === 'land')
            : allowableCellList

          setAllowableCells(laydownCells)
        } else {
          const filteredCells = allowableCellList.filter((cell: SergeHex<{}>) => cell.terrain === planningConstraints.travelMode.toLowerCase())
          setAllowableCells(filteredCells)

          if (filteredCells.length <= 500) {
            // try to create convex polygon around cells, but only if there
            // arent' too many cells
            const hull = generateOuterBoundary(filteredCells)
            setAllowablePoly(hull)
          } else {
            setAllowablePoly([])
          }
        }
      } else {
        // drop the marker if we can't find it
        setOrigin(undefined)
        setAllowableCells([])
        setAllowablePoly([])
      }
      // store it anyway, even if it's undefined
      setOriginHex(originCell)
    } else {
      // clear the route
      setAllowableCells([])
      setAllowablePoly([])
      setOrigin(undefined)
      setOriginHex(undefined)
    }
  }, [planningRange, planningConstraints, gridCells])

  /** remap the GeoJSON coords (lngLat) to Leaflet coords (latLng)
  */
  useEffect(() => {
    if (polygonAreas) {
      const leafletPolyAreas = multiPolyFromGeoJSON(polygonAreas)
      setTerrainPolys(leafletPolyAreas)
    }
  }, [polygonAreas])

  const createPolyBins = (cells: SergeGrid<SergeHex<{}>>): PolyBin[] | undefined => {
    if (gridCells) {
      const store: SergeHex<{}>[] = []
      let bounds: L.LatLngBounds | undefined

      // create a polygon for each hex, add it to the parent
      cells.forEach((hex: SergeHex<{}>) => {
        // get centre
        const centreWorld: L.LatLng = hex.centreLatLng
        // extend the bounds
        bounds = bounds === undefined ? L.latLngBounds(centreWorld, centreWorld) : bounds.extend(centreWorld)
        store.push(hex)
      })
      if (bounds) {
        const polyBins = binCells(bounds, store)
        // const bins = polyBins.map((bin: PolyBins) => bin.cells.length)
        // console.log('bin sizes:', bins)
        return polyBins
      }
    }
    return undefined
  }
  const createPolyBins3 = (cells: SergeGrid3): PolyBin3[] | undefined => {
    if (gridCells) {
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
    if (viewport && gridCells) {
      if (polyBins.length === 0) {
        const bins = createPolyBins(gridCells)
        bins && setPolyBins(bins)
      } else {
        // grow the viewport by 1/2 cell, so we can test
        // if the cell centre is inside the viewport -
        // necessary for cells at the edge
        const bufferDist = gridCells.tileDiameterMins * 1852 * 1
        const newTL = viewport.getNorthWest().toBounds(bufferDist)
        const newBR = viewport.getSouthEast().toBounds(bufferDist)
        const extendedViewport = L.latLngBounds(newTL.getNorthWest(), newBR.getSouthEast())

        let visible: SergeHex<{}>[] = []

        // sort out visible cells, first by the bin
        polyBins.forEach((bin: PolyBin) => {
          if (extendedViewport.contains(bin.bounds)) {
            // ok, add all of them
            visible = visible.concat(bin.cells)
          } else if (bin.bounds.intersects(extendedViewport)) {
            // find the ones in the viewport
            const inZone = bin.cells.filter((cell: SergeHex<{}>) =>
              extendedViewport.contains(cell.centreLatLng)
            )
            visible = visible.concat(inZone)
          }
        })

        const relevantCellArr = visible

        // see if first cell is missing poly
        if (visible.length && !visible[0].poly) {
          // now check each cell has its polygon generated
          visible.forEach((cell: SergeHex<{}>) => {
            if (!cell.poly) {
              const centreH = cell.centreLatLng
              // legacy format was to store tile diameter in mins
              if (gridCells.tileDiameterMins === undefined) {
                console.warn('Warning tile diameter in Degrees should be in the wargame definition. Potentially a legacy wargame.')
              }
              const tileDiamMins = gridCells.tileDiameterMins ? gridCells.tileDiameterMins / 60 : gridCells.tileDiameterMins

              const cornerArr: L.LatLng[] = []
              // don't let us fall over if we don't know diam mins
              if (tileDiamMins !== undefined && !isNaN(tileDiamMins)) {
                for (let i = 0; i < 6; i++) {
                  const angle = 30 + i * 60
                  const point = destination(centreH, angle, tileDiamMins * 1852)
                  cornerArr.push(point)
                }
              }
              cell.poly = cornerArr
            }
          })
        }

        setVisibleCells(visible)
        setRelevantCells(relevantCellArr)
      }
    } else {
      setVisibleCells([])
      setRelevantCells([])
    }
  }, [viewport, gridCells, polyBins])

  useEffect(() => {
    if (viewport && h3gridCells && gridCells) {
      if (polyBins3.length === 0) {
        const bins = createPolyBins3(h3gridCells)
        bins && setPolyBins3(bins)
      } else {
        // grow the viewport by 1/2 cell, so we can test
        // if the cell centre is inside the viewport -
        // necessary for cells at the edge
        const bufferDist = gridCells.tileDiameterMins * 1852 * 1
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
    const allCells = relevantCells.concat(planningRouteCells)
    // some cells may be in both lists, so reduce to unique cells
    //    const uniqueCells = [...new Set(allCells)]
    //    console.log('reduce visible', allowableCells.length, allCells.length, uniqueCells.length)
    setVisibleAndAllowableCells(allCells)
  }, [allowableCells, relevantCells, planningRouteCells])

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
    setDragDestination(undefined)
    if (planningConstraints && planningConstraints.status === LAYDOWN_TURN) {
      // Special Case - in Force Laydown
      // find the drop location
      if (planningRouteCells && planningRouteCells.length) {
        const laydown: NewTurnValues = {
          state: planningConstraints.status,
          speed: planningConstraints.speed,
          route: [planningRouteCells[0]]
        }
        setNewLeg && setNewLeg(laydown)
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
      setAllowableCells([])
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

        // note: the planning route cells includes the start cell. So, it's only a valie route if the
        // planning route cells are more than 1 in length
        if (planningConstraints && planningRouteCells.length > 1) {
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
            setPlanningRange(planningConstraints.range)

            // ok, planning complete - fire the event back up the hierarchy
            setNewLeg && setNewLeg({ state: planningConstraints.status, speed: planningConstraints.speed, route: fullCellList })
          } else if (planningRange && !rangeUnlimited) {
            // ok, it's limited range, and just some of it has been consumed. Reduce what is remaining
            const remaining = planningRange - routeLen

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

  /** handler for planning marker being dragged
       *
       */
  const beingDragged = (e: any): void => {
    if (!gridCells) {
      return
    }
    const marker = e.target
    const location = marker.getLatLng()
    const destinationHex: SergeHex<{}> | undefined = dragDestination && gridCells.cellFor(location, dragDestination)
    if (destinationHex) {
      setDragDestination(destinationHex)
    } else {
      // fallback.  When allowable region is really, really large, it's possible to
      // drag the cursur quicker than this function can run. Allow the user to drag the
      // marker past the origin to have another go
      const originHexCell: SergeHex<{}> | undefined = originHex && gridCells.cellFor(location, originHex)
      if (originHexCell) {
        setDragDestination(originHexCell)
      }
    }

    // and the h3 version
    const destinationHex3: string | undefined = dragDestination3 && geoToH3(location.lat, location.lng, 4)
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

  //  console.log('vis', visibleCells.length, relevantCells.length, relevantCells3.length)

  //  console.log('zoom', zoomLevel, visibleAndAllowableCells.length, visibleCells.length, allowableCells.length)
  // console.log('hex grid', setPlanningRouteCells.length, setPlanningRouteCells.length && setPlanningRouteCells.length[0])

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
    {/* <LayerGroup key={'poly_bounds'} >{viewport && polyBins3 && polyBins3.map((bin: PolyBin3, index: number) => (
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
        </LayerGroup> */}

    <LayerGroup key={'hex_polygons'} >{
      /* not too many cells visible, show hex outlines */
      visibleAndAllowableCells.length < SHOW_HEXES_UNDER && visibleAndAllowableCells.map((cell: SergeHex<{}>, index: number) => (
        <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
          key={'hex_poly_' + cell.name + '_' + index}
          fillColor={cell.fillColor || '#f00'}
          fill={terrainPolys.length === 0} // only fill them if we don't have polys
          positions={cell.poly}
          stroke={cell.name === cellForSelected && assetColor ? assetColor : '#fff'}
          className={styles[getCellStyle(cell, planningRouteCells, [], cellForSelected)]}
        />
      ))}
    </LayerGroup>
    <LayerGroup key={'hex_polygons3'} >{
      /* not too many cells visible, show hex outlines */
      visibleAndAllowableCells3 && visibleAndAllowableCells3.length < SHOW_HEXES_UNDER && visibleAndAllowableCells3.map((cell: SergeHex3, index: number) => (
        <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
          key={'hex_poly3_' + cell.name + '_' + index}
          fillColor={cell.fillColor || '#f00'}
          fill={terrainPolys.length === 0} // only fill them if we don't have polys
          positions={cell.poly}
          stroke={cell.name === cellForSelected && assetColor ? assetColor : '#fff'}
          className={styles['default-hex3']}
          // className={styles[getCellStyle3(cell, [], [], undefined)]}
          // className={styles[getCellStyle3(cell, planningRouteCells, [], cellForSelected)]}
        />
      ))}
    </LayerGroup>

    <LayerGroup key={'hex_polygons4'} >{
      /** too many cells visible to show outline, so just show planned route (or target for laydown) */
      visibleAndAllowableCells.length >= SHOW_HEXES_UNDER && planningRouteCells.map((cell: SergeHex<{}>, index: number) => (
        <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
          key={'hex_poly_' + cell.name + '_' + index}
          fillColor={cell.fillColor || '#f00'}
          fill={terrainPolys.length === 0} // only fill them if we don't have polys
          positions={cell.poly}
          stroke={cell.name === cellForSelected && assetColor ? assetColor : '#fff'}
          className={styles[getCellStyle(cell, planningRouteCells, [], cellForSelected)]}
        />
      ))}
    { // special case - if we're in air travel mode the planning route may not be in the
      // available cells listing
      planningConstraints && planningConstraints.travelMode === 'air' &&
        allowableCells.length === 0 &&
        planningRouteCells.map((cell: SergeHex<{}>, index: number) => (
          <Polygon
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key={'hex_planning_' + cell.name + '_' + index}
            fillColor={cell.fillColor || '#f00'}
            positions={cell.poly}
            stroke={cell.name === cellForSelected && assetColor ? assetColor : '#fff'}
            className={styles['planned-hex']}
          />
        ))}
    <Polyline
      key={'hex_planned_line'}
      color={assetColor}
      positions={plannedRoutePoly}
      className={styles['planned-line']}
    />
    <Polyline
      key={'hex_planning_line'}
      color={assetColor}
      positions={planningRoutePoly}
      className={styles['planning-line']}
    />
    <Polyline
      key={'hex_planning_line3'}
      color={assetColor}
      positions={planningRoutePoly3}
      className={styles['planning-line']}
    />
    <Polyline
      key={'allowableCells_line'}
      color={assetColor}
      positions={allowablePoly}
      className={styles['planning-line']}
    />
    <Polyline
      key={'allowableCells3_line'}
      color={assetColor}
      positions={allowablePoly3}
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
    <LayerGroup key='polygon_outlines'>
      {terrainPolys.map((terrain: TerrainPolygons, index: number) =>
        <Polygon
          key={'poly_a' + index}
          positions={terrain.data}
          fillColor={terrain.terrain.fillColor}
          className={styles['terrain-outline']}/>
      )}
    </LayerGroup>
    {
      // zoomLevel > 5.5 &&
      // change - show labels if there are less than 400. With the zoom level
      // we were getting issues where up North (where the cells appear larger) there are
      // fewer visible at once, but we still weren't showing the labels.
      visibleCells.length < SHOW_LABELS_UNDER &&
      /* note: for the label markers - we use the cells in the currently visible area */
      <LayerGroup key={'hex_labels'} >{visibleCells.map((cell: SergeHex<{}>, index: number) => (
        <Marker
          key={'hex_label_' + cell.name + '_' + index}
          position={cell.centreLatLng}
          zIndexOffset={-1000}
          width="120"
          icon={L.divIcon({
            // html: '' + cell.x + ',' + cell.y,
            html: cell.name,
            className: styles['default-coords'],
            iconSize: [30, 20]
          })}
        />
      ))}
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
          key={'hex_label3_' + cell.name + '_' + index}
          position={cell.centreLatLng}
          zIndexOffset={-1000}
          width="120"
          icon={L.divIcon({
            // html: '' + cell.x + ',' + cell.y,
            html: cell.name,
            className: styles['default-coords-3'],
            iconSize: [30, 20]
          })}
        />
      ))}
      </LayerGroup>
    }

  </>
}

export default HexGrid
