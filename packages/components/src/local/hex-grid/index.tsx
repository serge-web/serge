import React, { useEffect, useState, useContext} from 'react'
import L from 'leaflet'
import { PointLike } from 'honeycomb-grid'
import { Polygon, Marker, LayerGroup, Polyline } from 'react-leaflet'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/to-world'
import { MapContext } from '../mapping'
import SergeHex from '../mapping/types/serge-hex'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ gridCells }: PropTypes) => {
      
      const { gridCells: gcProp, allowableCellList, zoomLevel, plannedRouteList  } = useContext(MapContext).props

      // collate list of named polygons
      const polygons: { [id: string]: L.LatLng[] } = {}
      // collate list of named polygon centres
      const centres: { [id: string]: L.LatLng } = {}
      // collate list of named hex cells
      const hexCells: { [id: string]: SergeHex<{}> } = {}

      // Set up an 'allowableCells' state to monitor
      const [allowableCells, setAllowableCells] = useState<Array<SergeHex<{}>>>(allowableCellList)
      const [plannedRouteCells, setPlannedRouteCells] = useState<Array<SergeHex<{}>>>(plannedRouteList)

      // Use direct property if available, otherwise, use context prop.
      const gc = gridCells || gcProp
      
      const setCellStyle = (cell: SergeHex<{}>, pc:Array<SergeHex<{}>>, ac: Array<SergeHex<{}>>): string => 
      `${pc && pc.includes(cell) ? 'planned' : ac && ac.includes(cell) ? 'allowable' : 'default'}-hex`
      
      // Watch the 'allowableCellList' property for changes and update the state accordingly
      useEffect(() => {
        setAllowableCells(allowableCellList)
      }, [allowableCellList])
      useEffect(() => {
        setPlannedRouteCells(plannedRouteList)
      }, [plannedRouteList])

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
        polygons[hex.name] = cornerArr
        centres[hex.name] = centreWorld
        hexCells[hex.name] = hex
      })

      // create a polygon for each hex, add it to the parent
      const plannedRoutePoly: L.LatLng[] = []
      if(plannedRouteList) {
        plannedRouteList.forEach((cell:SergeHex<{}>) => {
          plannedRoutePoly.push(cell.centreLatLng)
        })
      }

      const uniqid: number = Math.floor(Math.random() * 1000); 

       return <>
        <LayerGroup key={'hex_polygons'} >{Object.keys(polygons).map(k => (
          <Polygon
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            // TODO: There's a bad smell here. We're using the uniqid to
            // force the Leaflet polygon to redraw.  They were being
            // redrawn on change of `positions` attribute, but not classname
            key = {'hex_poly_' + k + '_' + uniqid}
            positions={polygons[k]}
            className={styles[setCellStyle(hexCells[k], plannedRouteCells, allowableCells)]}
          />
        ))}
         <Polyline
            key = {'hex_planned_line' + '_' + uniqid}
            positions={plannedRoutePoly}
            className={styles['planned-line']}
          />
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
