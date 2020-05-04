import React, { useEffect, useState, useContext} from 'react'
import L from 'leaflet'
import { PointLike } from 'honeycomb-grid'
import { Marker, LayerGroup, Polyline } from 'react-leaflet'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import toWorld from './helpers/to-world'
import Polygon from './helpers/polygon'
import { MapContext } from '../mapping'
import SergeHex from '../mapping/types/serge-hex'


import calcAllowableCells from '../mapping/helpers/allowable-cells'
import plannedRouteFor from '../mapping/helpers/planned-route-for'

/* Render component */
export const HexGrid: React.FC<{}> = () => {

      const { gridCells, planningConstraints, planningRange: planningRangeProps, zoomLevel, setDropDestination  } = useContext(MapContext).props

      // fix the leaflet icon path, using tip from here: 
      // https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-611930767
      L.Icon.Default.imagePath='/images/' 

      // Set up an 'allowableCells' state to monitor
      const [allowableCells, setAllowableCells] = useState<Array<SergeHex<{}>>>([])

      const [plannedRouteCells, setPlannedRouteCells] = useState<Array<SergeHex<{}>>>([])
      const [plannedRoutePoly, setPlannedRoutePoly] = useState<L.LatLng[]> ([])

      // collate list of named polygons
      const [allowablePolygons, setAllowablePolygons] = useState<{ [id: string]: L.LatLng[] }>({})
      // collate list of named polygon centres
      const [allowableCentres, setAllowableCentres] = useState< { [id: string]: L.LatLng } > ({})
      // collate list of named hex cells
      const [allowableHexCells, setAllowableHexCells] = useState<{ [id: string]: SergeHex<{}> }>({})

      // allow the planning marker origin to be changed
      const [origin, setOrigin] = useState<L.LatLng | undefined>(undefined)
      const [originHex, setOriginHex] = useState<SergeHex<{}> | undefined>(undefined)

      // allow the destination end point to be changed
      const [dragDestination, setDragDestination] = useState<SergeHex<{}> | undefined>(undefined)

      const [planningRange, setPlanningRange] = useState<number | undefined> (planningRangeProps)

      useEffect(() => {
        if(dragDestination && originHex) {
          const plannedRoute: SergeHex<{}>[] = planningConstraints && dragDestination ? 
            plannedRouteFor(gridCells, allowableCells, originHex, dragDestination): []
          setPlannedRouteCells(plannedRoute)

          // also produce the polygon
          const tmpPlannedRoutePoly: L.LatLng[] = []
          plannedRoute.forEach((cell:SergeHex<{}>) => {
            tmpPlannedRoutePoly.push(cell.centreLatLng)
          })
          setPlannedRoutePoly(tmpPlannedRoutePoly)
          // also do the polys
        }
      }, [dragDestination, originHex])

      useEffect(() => {
        if(originHex && gridCells) {
          // special case. if we don't have a planning range, use the one from props
          const cells: SergeHex<{}>[] = planningRange ? calcAllowableCells(gridCells, originHex, planningRange) : []
          setAllowableCells(cells)
          setOrigin(originHex.centreLatLng)  
        }
      }, [originHex, planningRange, gridCells])

      useEffect(() => {
        if(gridCells && planningConstraints) {
          const originCell = gridCells.find((cell: SergeHex<{}>) => cell.name === planningConstraints.origin)
          if(originCell) {
            setOriginHex(originCell)
          }  
        }
      }, [planningConstraints, gridCells])

      // Use direct property if available, otherwise, use context prop.
      const setCellStyle = (cell: SergeHex<{}>, pc:Array<SergeHex<{}>>, ac: Array<SergeHex<{}>>): string => 
      `${pc && pc.includes(cell) ? 'planned' : ac && ac.includes(cell) ? 'allowable' : 'default'}-hex`

      useEffect(() => {
        if(gridCells) {
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


      const dropped = ():void => {
        // Note: ok, we don't actually use the marker location, since
        // it may be outside the achievable area. Just
        // use the last point in the planning leg

        // sort out if the full distance has been consumed
  
        // clear the planned route
        setPlannedRouteCells([])
        setPlannedRoutePoly([])

        if(plannedRouteCells && planningRange) {
          const routeLen = plannedRouteCells.length - 1
          const lastCell: SergeHex<{}> = plannedRouteCells[routeLen]

          // have we consumed the full length?
          if(routeLen == planningRange) {

            // clear the full planning range
            setPlanningRange(planningRangeProps)

            // ok, planning complete
            setDropDestination(lastCell)
          } else {
            // ok, just some of it has been consumed. Reduce what is remaining
            const remaining = planningRange - routeLen
  
            if(lastCell) {
              setOriginHex(lastCell)
              setPlanningRange(remaining)
            }
          }
        }
      }

      const beingDragged = (e: any):void => {
        const marker = e.target
        const location = marker.getLatLng()
        const cellPos: SergeHex<{}> | undefined = gridCells.cellFor(location)
        if(cellPos) {
          setDragDestination(cellPos)
        }
      }

       return <>
        <LayerGroup key={'hex_polygons'} >{Object.keys(allowablePolygons).map(k => (
          <Polygon
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key = {'hex_poly_' + k}
            positions={allowablePolygons[k]}
            className={styles[setCellStyle(allowableHexCells[k], plannedRouteCells, allowableCells)]}
          />
        ))}
         <Polyline
            key = {'hex_planned_line'}
            positions={plannedRoutePoly}
            className={styles['planned-line']}
          />
          { origin && 
            <Marker
            draggable={true}
            onDragend={dropped}
            onDrag={beingDragged}
            position={origin}
            key={'drag_marker_'}/>        
          }
        </LayerGroup>
        {
          zoomLevel > 11 &&
          <LayerGroup key={'hex_labels'} >{Object.keys(allowableCentres).map(k => (
            <Marker
              key = {'hex_label_' + k}
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
