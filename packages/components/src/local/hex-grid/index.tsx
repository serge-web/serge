import React, { useEffect, useState, useContext } from 'react'
import L, { DragEndEvent } from 'leaflet'
import { Marker, LayerGroup, Polyline } from 'react-leaflet'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { calcAllowableCells, plannedRouteFor } from '@serge/helpers'
import Polygon from './helpers/polygon'
import getCellStyle from './helpers/get-cell-style'

import binCells, { PolyBin } from './helpers/bin-cells'

/* Import mapping context */
import { MapContext } from '../mapping'

/* Import Types */
import { SergeHex, SergeGrid, Route, NewTurnValues } from '@serge/custom-types'
import { LAYDOWN_TURN, Domain } from '@serge/config'

/* Render component */
export const HexGrid: React.FC<{}> = () => {
  const {
    gridCells, planningConstraints, zoomLevel, setNewLeg, setHidePlanningForm,
    selectedAsset, viewAsRouteStore, viewport, domain
  } = useContext(MapContext).props

  // fix the leaflet icon path, using tip from here:
  // https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-611930767
  L.Icon.Default.imagePath = '/images/'

  // allowable cells filtered depending on cell type
  const [allowableFilteredCells, setAllowableFilteredCells] = useState<Array<SergeHex<{}>>>([])

  // whether to show performance optimised view
  const [reducedDetail, setReducedDetail] = useState<boolean>(false)

  // the cell for the selected asset
  const [cellForSelected, setCellForSelected] = useState<string | undefined>(undefined)

  // cells representing the route that is currently being dragged
  const [planningRouteCells, setPlanningRouteCells] = useState<Array<SergeHex<{}>>>([])
  const [planningRoutePoly, setPlanningRoutePoly] = useState<L.LatLng[]>([])

  // cells representing any route snippet that is already specified
  const [plannedRouteCells, setPlannedRouteCells] = useState<Array<SergeHex<{}>>>([])
  const [plannedRoutePoly, setPlannedRoutePoly] = useState<L.LatLng[]>([])

  // the binned polygons
  const [polyBin, setPolyBin] = useState<PolyBin[]>([])
  const [visibleCells, setVisibleCells] = useState<SergeHex<{}>[]>([])

  // allow the planning marker origin to be changed
  const [origin, setOrigin] = useState<L.LatLng | undefined>(undefined)
  const [originHex, setOriginHex] = useState<SergeHex<{}> | undefined>(undefined)

  // allow the destination end point to be changed
  const [dragDestination, setDragDestination] = useState<SergeHex<{}> | undefined>(undefined)

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
      const current: Route = viewAsRouteStore.routes.find((route: Route) => route.uniqid === selectedAsset.uniqid)
      if (current) {
        // double-check it's not the current asset (to reduce renders, and maybe lost plotted route)
        if (selectedAsset.uniqid !== selectedAssetId) {
          // clear the current planning details
          setPlanningRange(undefined)
          setAllowableFilteredCells([])
          setOrigin(undefined)
          setDragDestination(undefined)
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
        }
      } else {
        // selected asset no longer present - hide it
        setCellForSelected(undefined)
        setOrigin(undefined)
        setPlanningRange(undefined)
        setDragDestination(undefined)
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
    console.log('drag dest')
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

  /** listen out for just planning constraints changing, since we
  * update planning range from it.
  */
  useEffect(() => {
    console.log('planning constraints')
    if (planningConstraints !== undefined) {
      setPlanningRange(planningConstraints.range)
    }
  }, [planningConstraints])

  /** provide a list of cells allowable for this platform. The area may reduce
       * as a player plans the leg
       */
  useEffect(() => {
    console.log('plan range, cells')

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

  const createPolyBin = (cells: SergeGrid<SergeHex<{}>>): PolyBin[] | undefined => {
    if (gridCells) {
      console.log('generating empty bins')
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
        const polyBin = binCells(bounds, store)
        const bins = polyBin.map((bin: PolyBin) => bin.cells.length)
        console.log('bin sizes:', bins)
        return polyBin
      }
    }
    return undefined
  }

  useEffect(() => {
    console.log('gen vis')
    if (viewport && gridCells) {
      if (polyBin.length === 0) {
        const bin = createPolyBin(gridCells)
        bin && setPolyBin(bin)
      } else {
        const start = Date.now()

        // grow the viewport by 1/2 cell, so we can test
        // if the cell centre is inside the viewport -
        // necessary for cells at the edge


        let visible: SergeHex<{}>[] = []
        polyBin.forEach((bin: PolyBin) => {
          if(viewport.contains(bin.bounds)) {
            // ok, add all of them
            visible = visible.concat(bin.cells)
          } else if(bin.bounds.intersects(viewport)) {
            // find the ones in the viewport
            const inZone = bin.cells.filter((cell: SergeHex<{}>) =>
              viewport.contains(cell.centreLatLng)
            )
            visible = visible.concat(inZone)
          }
        })

        console.log('binned, visible:', visible.length)

        // if we have reduced detail, don't show land or plain-sea
        if (reducedDetail && domain === Domain.ATLANTIC) {
          visible = visible.filter((cell: SergeHex<{}>) => {
            return cell.type !== 'land' && cell.type !== 'sea'
          })
          console.log('trimmed to:', visible.length)
        }

        // see if first cell is missing poly
        if (visible.length && !visible[0].poly) {
          // now check each cell has its polygon generated
          visible.forEach((cell: SergeHex<{}>) => {
            if (!cell.poly) {
              const centreH = cell.centreLatLng
              const cornerArr: L.LatLng[] = []
              for (let i = 0; i < 6; i++) {
                const angle = 30 + i * 60
                const point = destination(centreH, angle, 18 * 1852)
                cornerArr.push(point)
              }
              cell.poly = cornerArr
            }
          })
        }

        // if (visible.length < 10) {
        //   visible.forEach((cell: SergeHex<{}>, index: number) => {
        //     console.log('cell ' + index, cell.name, cell.poly)
        //   })
        // }

        console.log('vis filter elapsed', Date.now() - start)

        setVisibleCells(visible)
      }
    } else {
      setVisibleCells([])
    }
  }, [reducedDetail, viewport, gridCells, polyBin])

  useEffect(() => {
    console.log('zoom level')

    setReducedDetail(zoomLevel <= 5.5)
  }, [zoomLevel])

  useEffect(() => {
    console.log('reduced detail', reducedDetail)
  }, [reducedDetail])

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
          setPlanningRange(planningConstraints.range)

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
    const cellPos: SergeHex<{}> | undefined = gridCells.cellFor(location, dragDestination || originHex)
    if (cellPos) {
      setDragDestination(cellPos)
    }
  }

  const onMarkerClick = (): void => {
    if (setHidePlanningForm) {
      setHidePlanningForm(false)
    }
  }

  console.log('zoom', zoomLevel, visibleCells.length)


  return <>

    { /* POLY BINS */ }
    <LayerGroup key={'poly_bounds'} >{polyBin && polyBin.map((bin: PolyBin, index: number) => (
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
    </LayerGroup>

    <LayerGroup key={'hex_polygons'} >{visibleCells.map((cell: SergeHex<{}>, index: number) => (
      <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
        key={'hex_poly_' + cell.name + '_' + index}
        fillColor={ cell.fillColor || '#f00' }
        positions={cell.poly}
        stroke={cell.name === cellForSelected && assetColor ? assetColor : '#fff'}
        className={styles[getCellStyle(cell, planningRouteCells, allowableFilteredCells, cellForSelected)]}
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
      zoomLevel > 6.5 &&
      <LayerGroup key={'hex_labels'} >{gridCells && gridCells.map((cell: SergeHex<{}>, index: number) => (
        <Marker
          key={'hex_label_' + cell.name + '_' + index}
          position={cell.centreLatLng}
          width="120"
          icon={L.divIcon({
            html: cell.name,
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
