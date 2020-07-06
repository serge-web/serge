import React, { useEffect, useState, useContext } from 'react'
import L from 'leaflet'
import { PointLike } from 'honeycomb-grid'
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
import { SergeHex } from '@serge/custom-types'

/* Render component */
export const HexGrid: React.FC<{}> = () => {
  const { gridCells, planningConstraints, planningRange: planningRangeProps, zoomLevel, setNewLeg } = useContext(MapContext).props

  // fix the leaflet icon path, using tip from here:
  // https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-611930767
  L.Icon.Default.imagePath = '/images/'

  // Set up an 'allowableCells' state to monitor
  const [allowableCells, setAllowableCells] = useState<Array<SergeHex<{}>>>([])

  // allowable cells filtered depending on cell type
  const [allowableFilteredCells, setAllowableFilteredCells] = useState<Array<SergeHex<{}>>>([])

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

  /** allow for the props being changed. This could be from the StoryBook testing, but could equally
       *  be from the plan route form
       */
  useEffect(() => {
    setPlanningRange(planningRangeProps)
  }, [planningRangeProps])

  /** handle the dynamic indicator that follows mouse movement,
       * represented as cells & a line
       *
       */
  useEffect(() => {
    if (dragDestination && originHex) {
      // work out the available cells
      const plannedRoute: SergeHex<{}>[] = planningConstraints && dragDestination
        ? plannedRouteFor(gridCells, allowableFilteredCells, originHex, dragDestination) : []

      // combine with any existing planned cells
      setPlanningRouteCells(plannedRoute)

      // also produce the lat-long values needed for the polylines
      const tmpPlannedRoutePoly: L.LatLng[] = []
      plannedRoute.forEach((cell: SergeHex<{}>) => {
        tmpPlannedRoutePoly.push(cell.centreLatLng)
      })

      // combine with any existing planned cells
      setPlanningRoutePoly(tmpPlannedRoutePoly)
    } else {
      // combine with any existing planned cells
      setPlanningRouteCells([])
      setPlanningRoutePoly([])
    }
  }, [dragDestination, originHex])

  /** provide a list of cells allowable for this platform. The area may reduce
       * as a player plans the leg
       */
  useEffect(() => {
    const rangeUnlimited = planningConstraints && planningConstraints.speed === undefined
    if (originHex && gridCells && (planningRange || rangeUnlimited)) {
      if(planningRange) {
        // special case. if we don't have a planning range, use the one from props
        const cells: SergeHex<{}>[] = calcAllowableCells(gridCells, originHex, planningRange)
        setAllowableCells(cells)
      } else {
        // range is unlimited - allow all cells
        setAllowableCells(gridCells)
      }
      setOrigin(originHex.centreLatLng)
    } else {
      // clear the route
      setAllowableCells([])
      setOrigin(undefined)
    }
  }, [originHex, planningRange, gridCells, planningConstraints])

  /** filter the list of cells allowable for this platform
       * depending on requested cell type
       */
  useEffect(() => {
    if (allowableCells && planningConstraints) {
      // "air" is a special planning mode, where we don't have to filter it
      if(planningConstraints.travelMode == 'air') {
        // can use any of the allowable cells
        setAllowableFilteredCells(allowableCells)
      } else {
        // ok, land or sea. filter accordingly
        const filteredCells = allowableCells.filter((cell: SergeHex<{}>) => cell.type === planningConstraints.travelMode.toLowerCase())
        setAllowableFilteredCells(filteredCells)
      }
    } else {
      // clear the allowable cells
      setAllowableFilteredCells([])
    }
  }, [planningConstraints, allowableCells])

  /** store the start/origin cell
       *
       */
  useEffect(() => {
    if (gridCells && planningConstraints) {
      const originCell = gridCells.find((cell: SergeHex<{}>) => cell.name === planningConstraints.origin)
      if (originCell) {
        setOriginHex(originCell)
      }
    } else {
      setOriginHex(undefined)
    }
  }, [planningConstraints, gridCells])

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
        // build up an array of correctly mapped corners
        const cornerArr: L.LatLng[] = []
        // get hex center
        const centreH = hex.center()
        // get hex corners coords
        const corners = hex.corners()
        // convert hex corners coords to our map
        corners.forEach((value: any) => {
          // the corners are relative to the origin (TL). So, offset them to the centre
          const point: PointLike = {
            x: value.x - centreH.x,
            y: value.y - centreH.y
          }
          const newP = toWorld(point, centreWorld, gridCells.tileDiameterDegs / 2)
          cornerArr.push(newP)
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

      // have we consumed the full length?
      if (rangeUnlimited || routeLen === planningRange ) {
        // combine planned and planning cells, ready for results
        const fullCellList: Array<SergeHex<{}>> = plannedRouteCells.concat(planningRouteCells)

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
        if(planningRange && !rangeUnlimited) {
          // ok, it's limited range, and just some of it has been consumed. Reduce what is remaining
          const remaining = planningRange - routeLen

          if (lastCell) {
            setPlannedRouteCells([])
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
    const marker = e.target
    const location = marker.getLatLng()
    const cellPos: SergeHex<{}> | undefined = gridCells.cellFor(location)
    if (cellPos) {
      setDragDestination(cellPos)
    }
  }

  return <>
    <LayerGroup key={'hex_polygons'} >{Object.keys(allowablePolygons).map(k => (
      <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
        key={'hex_poly_' + k}
        positions={allowablePolygons[k]}
        className={styles[getCellStyle(allowableHexCells[k], planningRouteCells, allowableFilteredCells)]}
      />
    ))}
    <Polyline
      key={'hex_planned_line'}
      positions={plannedRoutePoly}
      className={styles['planned-line']}
    />
    <Polyline
      key={'hex_planning_line'}
      positions={planningRoutePoly}
      className={styles['planning-line']}
    />
    {origin &&
        <Marker
          draggable={true}
          onDragend={dropped}
          onDrag={beingDragged}
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
