import React, { useEffect, useState, useContext} from 'react'
import L from 'leaflet'
import { PointLike } from 'honeycomb-grid'
import { Marker, LayerGroup, Polyline } from 'react-leaflet'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/to-world'
import Polygon from './helpers/polygon'
import { MapContext } from '../mapping'
import SergeHex from '../mapping/types/serge-hex'


import calcAllowableCells from '../mapping/helpers/allowable-cells'
import plannedRouteFor from '../mapping/helpers/planned-route-for'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({  }: PropTypes) => {

      const { gridCells: gcProp, planningConstraints, zoomLevel, setDropDestination  } = useContext(MapContext).props

      const gc = gcProp

      // fix the leaflet icon path, using tip from here: 
      // https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-611930767
      L.Icon.Default.imagePath='/images/' 

      // Set up an 'allowableCells' state to monitor
      const [allowableCells, setAllowableCells] = useState<Array<SergeHex<{}>>>([])

      const [plannedRouteCells, setPlannedRouteCells] = useState<Array<SergeHex<{}>>>([])

      // collate list of named polygons
      const [polygons, setPolygons] = useState<{ [id: string]: L.LatLng[] }>({})
      // collate list of named polygon centres
      const [centres, setCentres] = useState< { [id: string]: L.LatLng } > ({})
      // collate list of named hex cells
      const [hexCells, setHexCells] = useState<{ [id: string]: SergeHex<{}> }>({})

      // allow the planning marker origin to be changed
      const [origin, setOrigin] = useState<L.LatLng | undefined>(undefined)

      // allow the destination end point to be changed
      const [dragDestination, setDragDestination] = useState<SergeHex<{}> | undefined>(undefined)

      const [plannedRoutePoly, setPlannedRoutePoly] = useState<L.LatLng[]> ([])
      
      useEffect(() => {
        if(dragDestination) {
          console.log('[hex-grid] - calculating planning route')
          const plannedRoute: SergeHex<{}>[] = planningConstraints && dragDestination ? 
            plannedRouteFor(gc, allowableCells, planningConstraints.origin, dragDestination): []
          setPlannedRouteCells(plannedRoute)

          // also produce the polygon
          const tmpPlannedRoutePoly: L.LatLng[] = []
          plannedRoute.forEach((cell:SergeHex<{}>) => {
            tmpPlannedRoutePoly.push(cell.centreLatLng)
          })
          setPlannedRoutePoly(tmpPlannedRoutePoly)
          // also do the polys
        }
      }, [dragDestination])

      useEffect(() => {
        console.log('[hex-grid] - calculating allowable cells')
        const cells: SergeHex<{}>[] = planningConstraints ? calcAllowableCells(gc, planningConstraints) : []
        setAllowableCells(cells)
        const originCell = gc.find((cell: SergeHex<{}>) => cell.name == planningConstraints.origin)
        if(originCell) {
          setOrigin(originCell.centreLatLng)
        }
      }, [planningConstraints])

      // Use direct property if available, otherwise, use context prop.
      const setCellStyle = (cell: SergeHex<{}>, pc:Array<SergeHex<{}>>, ac: Array<SergeHex<{}>>): string => 
      `${pc && pc.includes(cell) ? 'planned' : ac && ac.includes(cell) ? 'allowable' : 'default'}-hex`

      useEffect(() => {
        if(gc) {
          const tmpPolys: { [id: string]: L.LatLng[] } = {}
          const tmpCentres: { [id: string]: L.LatLng } = {}
          const tmpHexCells: { [id: string]: SergeHex<{}> } = {}

          // create a polygon for each hex, add it to the parent
          gc.forEach((hex: SergeHex<{}>) => {
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
              const newP = toWorld(point, centreWorld, gc.tileDiameterDegs / 2)
              cornerArr.push(newP)
            })
            // add the polygon to polygons array, indexed by the cell name
            tmpPolys[hex.name] = cornerArr
            tmpCentres[hex.name] = centreWorld
            tmpHexCells[hex.name] = hex
          })
          setPolygons(tmpPolys)
          setCentres(tmpCentres)
          setHexCells(tmpHexCells)
        }
      }, [gc])


      const dropped = (e: any) => {
        const marker = e.target
        const location = marker.getLatLng()
        const cellPos: SergeHex<{}> | undefined = gc.cellFor(location)
        if(cellPos) {
          setDropDestination(cellPos)
        }
      }

      const beingDragged = (e: any) => {
        const marker = e.target
        const location = marker.getLatLng()
        const cellPos: SergeHex<{}> | undefined = gc.cellFor(location)
        if(cellPos) {
          setDragDestination(cellPos)
        }
      }

       return <>
        <LayerGroup key={'hex_polygons'} >{Object.keys(polygons).map(k => (
          <Polygon
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key = {'hex_poly_' + k}
            positions={polygons[k]}
            className={styles[setCellStyle(hexCells[k], plannedRouteCells, allowableCells)]}
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
          <LayerGroup key={'hex_labels'} >{Object.keys(centres).map(k => (
            <Marker
              key = {'hex_label_' + k}
              position={centres[k]}
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
