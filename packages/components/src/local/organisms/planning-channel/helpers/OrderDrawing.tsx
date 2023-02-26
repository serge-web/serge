import { faPlaneSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GeometryType } from '@serge/config'
import { Area, AreaCategory, PlannedActivityGeometry, PlanningActivity, PlanningActivityGeometry } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'
import { Geometry, Position } from 'geojson'
import L, { LatLng, Layer, PM } from 'leaflet'
import 'leaflet-notifications'
import _ from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v4'
import AssetIcon from '../../../asset-icon'
import Item from '../../../map-control/helpers/item'
import styles from '../styles.module.scss'
import { Select } from '../typings'
import { CustomTranslation } from './CustomTranslation'
import StandardAreaMenu from './StandardAreaMenu'

interface OrderDrawingProps {
  activity: PlanningActivity | undefined
  cancelled: { (): void }
  planned: { (geometries: PlannedActivityGeometry[]): void }
  // set of standard areas
  areas?: AreaCategory[]
}

interface PendingItem {
  shape: PM.SUPPORTED_SHAPES
  layer: Layer
}

/* Render component */
export const OrderDrawing: React.FC<OrderDrawingProps> = ({ activity, planned, cancelled, areas }) => {
  const [plannedGeometries, setPlannedGeometries] = useState<Geometry[]>([])
  const [geoLayers, setGeoLayers] = useState<Layer[]>([])
  const [currentGeometry, setCurrentGeometry] = useState<number>(-1)
  const [planningGeometries, setPlanningGeometries] = useState<PlanningActivityGeometry[]>([])
  const [pendingGeometry, setPendingGeometry] = useState<PendingItem | undefined>(undefined)
  const [drawOptions, setDrawOptions] = useState<PM.ToolbarOptions>({})
  const [globalOptions, setGlobalOptions] = useState<PM.GlobalOptions>({})

  const [standardPolygons, setStandardPolygons] = useState<AreaCategory[] | undefined>(undefined)

  const [workingLayer, setWorkingLayer] = useState<L.Layer>()
  const selectedPolygonLayer = useRef<L.Polygon>()

  // this next state is a workaround, to prevent GeoMan calling
  // onCreate multiple times
  const [lastPendingGeometry, setLastPendingGeometry] = useState<PendingItem | undefined>(undefined)

  const standardAreaBtn = useRef<Select>()

  const map = useMap()

  useEffect(() => {
    setPlannedGeometries([])
    setPlanningGeometries([])
    setCurrentGeometry(-1)
    if (activity && activity.geometries) {
      setPlanningGeometries(activity.geometries)
      setCurrentGeometry(0)
    }
  }, [activity])

  useEffect(() => {
    if (!standardPolygons && standardAreaBtn.current) {
      // remove standard area button
      standardAreaBtn.current.remove()
    }
  }, [standardPolygons])

  useEffect(() => {
    if (pendingGeometry) {
      const layerAsAny = pendingGeometry.layer as any
      let res: Geometry | undefined
      switch (pendingGeometry.shape) {
        case 'Line': {
          const longLats = layerAsAny._latlngs.map((pt: LatLng): number[] => {
            return [pt.lng, pt.lat]
          })
          res = {
            type: 'LineString',
            coordinates: longLats
          }
          break
        }
        case 'Polygon': {
          const longLats = layerAsAny._latlngs.map((pt: LatLng[]): number[][] => {
            return pt.map((pt2: LatLng): number[] => {
              return [pt2.lng, pt2.lat]
            })
          })
          // if GeoMan hasn't closed the poly, do it for it
          const data = longLats[0]
          if (!_.isEqual(data[0], data[data.length - 1])) {
            data.push(data[0])
          }
          res = {
            type: 'Polygon',
            coordinates: longLats
          }
          break
        }
        case 'Marker': {
          const pt2 = layerAsAny._latlng
          const longLat = [pt2.lng, pt2.lat]
          res = {
            type: 'Point',
            coordinates: longLat
          }
          break
        }
      }
      // append the layer to our private list
      const newLayers = geoLayers.concat(pendingGeometry.layer)
      setGeoLayers(newLayers)

      if (res) {
        const newGeoms = plannedGeometries.concat(res)
        setPlannedGeometries(newGeoms)
        setPendingGeometry(undefined)
      }
    }
  }, [pendingGeometry])

  useEffect(() => {
    // cancel drawing
    map.pm.disableDraw()

    // note: we may have empty planning geometries for non-spatial activities
    if (activity && currentGeometry >= 0 && planningGeometries.length > 0) {
      // configure the drawing tool
      const current = planningGeometries[currentGeometry]
      const globalOpts: PM.GlobalOptions = {
        continueDrawing: false,
        editable: false,
        allowCutting: false,
        allowRemoval: false,
        allowRotation: false,
        allowSelfIntersection: false
      }

      // switch off all controls
      const toolbarOpts: PM.ToolbarOptions = {
        position: 'bottomright',
        drawControls: false,
        editControls: false
      }

      // make copy of translations file. Note: we have to set the language BEFORE
      // we enable the draw mode, for the new tooltip to be used for the new mode
      const newTranslations = deepCopy(CustomTranslation)

      const getAssetIcon = (imageSrc: string): string => {
        return (
          ReactDOMServer.renderToString(<AssetIcon imageSrc={imageSrc} />)
        )
      }

      const header = '<b>' + activity.name + '</b><br/>'

      // now just switch on the control we want
      switch (current.aType) {
        case GeometryType.point: {
          const icon = L.divIcon({
            iconSize: [30, 30],
            html: getAssetIcon('/images/marker-icon-2x.png'),
            className: styles['marker-icon']
          })
          newTranslations.tooltips.placeMarker = header + 'Click map to specify point location for <b>[' + current.name + ']</b>'
          map.pm.setGlobalOptions({ markerStyle: { icon } })
          map.pm.setLang('en', newTranslations, 'en')
          map.pm.enableDraw('Marker')
          setStandardPolygons(undefined)
          break
        }
        case GeometryType.polyline: {
          newTranslations.tooltips.firstVertex = header + 'Click map to start route for <b>[' + current.name + ']</b>'
          newTranslations.tooltips.continueLine = header + 'Click map to continue <b>[' + current.name + ']</b>'
          newTranslations.tooltips.finishLine = header + 'Click existing route point to complete <b>[' + current.name + ']</b>'
          map.pm.setLang('en', newTranslations, 'en')
          map.pm.enableDraw('Line')
          setStandardPolygons(undefined)
          break
        }
        case GeometryType.polygon: {
          newTranslations.tooltips.firstVertex = header + 'Click map to start area for <b>[' + current.name + ']</b>'
          newTranslations.tooltips.continueLine = header + 'Click map to continue <b>[' + current.name + ']</b>'
          newTranslations.tooltips.finishPoly = header + 'Click existing marker to complete <b>[' + current.name + ']</b>'
          map.pm.setLang('en', newTranslations, 'en')
          map.pm.enableDraw('Polygon')
          if (areas && areas.length) {
            setStandardPolygons(areas)
          } else {
            setStandardPolygons(undefined)
          }
          break
        }
      }
      setDrawOptions(toolbarOpts)
      setGlobalOptions(globalOpts)
    }
  }, [currentGeometry])

  useEffect(() => {
    if (plannedGeometries.length === planningGeometries.length && plannedGeometries.length > 0) {
      // we've generated all geometries
      const plannedGeoms = plannedGeometries.map((geom: Geometry, index: number) => {
        const planned: PlannedActivityGeometry = {
          uniqid: planningGeometries[index].uniqid,
          geometry: {
            type: 'Feature',
            properties: {},
            geometry: geom
          }
        }
        return planned
      })
      planned(plannedGeoms)

      // now delete the GeoMan layer
      geoLayers.forEach((layer: Layer) => layer.remove && layer.remove())
      setGeoLayers([])

      // remove standard area when finished
      if (selectedPolygonLayer.current) {
        map.removeLayer(selectedPolygonLayer.current)
      }
    } else if (plannedGeometries.length > 0) {
      // move forward one
      setCurrentGeometry(currentGeometry + 1)
    }
  }, [plannedGeometries])

  const cancelDrawing = (): void => {
    if (map) {
      map.pm.disableDraw()
      // also ditch the lines
      const layers = map.pm.getGeomanDrawLayers()
      if (layers.length) {
        // there won't be a remove method if it's our
        // standard reference area
        layers.forEach((layer: Layer) => layer.remove && layer.remove())
      }
    }
    // when we cancel drawing, this component is unmount => we should remove the Standard Area Menu also
    if (standardAreaBtn.current) {
      standardAreaBtn.current.remove()
    }
    cancelled()
  }

  const onCreate = (e: { shape: string, layer: Layer }): void => {
    // note: this is a workaround.  Each time we start to plot a new activity,
    // note: it appears that another `onCreate` handler gets declared
    // note: this workaround prevents successive create events
    // note: propagating
    setWorkingLayer(undefined)

    if (lastPendingGeometry) {
      const layer = lastPendingGeometry.layer as any
      const oldLatLngs = layer._latlngs
      // TODO: this looks like a bug. I thing it should look at `e.layer`, not `layer
      const newE = e.layer as any
      const newLatLngs = newE._latlngs
      if (!_.isEqual(oldLatLngs, newLatLngs)) {
        setLastPendingGeometry(e)
        setPendingGeometry(e)
      }
    } else {
      setLastPendingGeometry(e)
      setPendingGeometry(e)
    }
  }

  /** handler for player selecting a standard area */
  const useStandardArea = (area: Area) => {
    // remove selected standard area polygon
    if (selectedPolygonLayer.current) {
      map.removeLayer(selectedPolygonLayer.current)
    }

    const coords = area.polygon.coordinates
    // processing is expecting Leaflet lat-longs not number coords.
    const lCoords: LatLng[][] = coords.map((item: Position[]) => {
      return item.map((pos: Position) => {
        return L.latLng(pos[1], pos[0])
      })
    })

    // draw polygon on map
    selectedPolygonLayer.current = L.polygon(lCoords).addTo(map)

    // cancel drawing
    if (workingLayer) {
      workingLayer.remove()
      map.pm.disableDraw()
    }

    const res: any = {
      _latlngs: lCoords
    }

    // simulate playe completing shape
    onCreate({ shape: 'Polygon', layer: res as Layer })
  }

  const onDrawStart = (e: { shape: string, workingLayer: Layer }) => {
    setWorkingLayer(e.workingLayer)
  }

  const onMount = (controlButton: Select) => {
    standardAreaBtn.current = controlButton
  }

  return (
    <> {activity &&
      <>
        <div className='leaflet-top leaflet-left'>
          <div className='leaflet-control'>
            <Item onClick={cancelDrawing}><FontAwesomeIcon title='Cancel editing' size={'lg'} icon={faPlaneSlash} /></Item>
          </div>
          <StandardAreaMenu
            areas={standardPolygons}
            showControl={!!(standardPolygons && standardPolygons.length > 0)}
            handler={useStandardArea}
            onMount={onMount}
            additionalClass='select-control-order-drawing'
          />
        </div>
        <GeomanControls
          options={drawOptions}
          globalOptions={globalOptions}
          onDrawStart={onDrawStart}
          onCreate={onCreate}
        />
      </>
    }
    </>
  )
}

export default OrderDrawing
