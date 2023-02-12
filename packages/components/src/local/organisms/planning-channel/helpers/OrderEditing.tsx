import { faPlaneSlash, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Area, PlannedActivityGeometry } from '@serge/custom-types'
import { Feature } from 'geojson'
import L, { LatLng, Layer, PM, Point } from 'leaflet'
import 'leaflet-notifications'
import _, { get } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v4'
import AssetIcon from '../../../asset-icon'
import Item from '../../../map-control/helpers/item'
import styles from '../styles.module.scss'
import { Select } from '../typings'
import StandardAreaMenu from './StandardAreaMenu'

interface OrderEditingProps {
  /** user has finished. Undefined value
   * means user has cancelled
   */
  saved: { (activity: PlannedActivityGeometry[] | undefined): void }
  /** the activity to edit */
  activityBeingEdited: PlannedActivityGeometry[] | undefined
  // set of standard areas
  areas?: Area[]
}

interface GLayerObject {
  feature: Feature
  _latlngs: LatLng[] | Array<LatLng[]>
  _latlng: LatLng

}

const switchLayer = (val: LatLng): [number, number] => {
  return [val.lng, val.lat]
}

const layerToGeoJSON = (layer: GLayerObject): Feature | undefined => {
  const feature: Feature = layer.feature
  const res = feature // deep copy?
  let coords
  switch (layer.feature.geometry.type) {
    case 'LineString': {
      const data = layer._latlngs as LatLng[]
      coords = data.map((val: LatLng) => switchLayer(val))
      break
    }
    case 'Point': {
      coords = switchLayer(layer._latlng)
      break
    }
    case 'Polygon': {
      const data = layer._latlngs as Array<LatLng[]>
      coords = data.map((pt: LatLng[]): number[][] => {
        return pt.map((pt2: LatLng): number[] => switchLayer(pt2))
      })
      const points = coords[0]
      if (!_.isEqual(points[0], points[points.length - 1])) {
        points.push(points[0])
      }
      break
    }
    default:
      console.warn('OrderEditing - feature type not handled:', layer.feature.geometry.type)
  }
  const geomAny = feature.geometry as any
  if (coords) {
    geomAny.coordinates = coords
  }
  return res
}

/* Render component */
export const OrderEditing: React.FC<OrderEditingProps> = ({ saved, activityBeingEdited, areas }) => {
  const [drawOptions, setDrawOptions] = useState<PM.ToolbarOptions>({})
  const [globalOptions, setGlobalOptions] = useState<PM.GlobalOptions>({})
  const [editLayer, setEditLayer] = useState<Layer | undefined>(undefined)

  const standardAreaBtn = useRef<Select>()

  const map = useMap()

  const saveDrawing = (): void => {
    // push the data item
    const asAny = editLayer as any
    // layers is a dictionary
    const layers = asAny._layers as Record<string, unknown>
    if (!layers) {
      console.warn('layers object not constructed as expected')
      return
    } else {
      // convert data
      const newData = Object.values(layers).map((layer: any) => layerToGeoJSON(layer)) as Feature[]
      // put the updated data back into the activities
      const res = activityBeingEdited && activityBeingEdited.map((val) => {
        const newGeom = newData.find((feat) => feat.id === val.uniqid)
        if (newGeom) {
          val.geometry = newGeom
        }
        return val
      })
      // save data
      saved(res)
    }
    // clean up
    cleanUp()
  }

  useEffect(() => {
    if (activityBeingEdited && activityBeingEdited.length && map) {
      map.pm.disableDraw()
      const items = activityBeingEdited.map((plan) => plan.geometry)
      // create a layer for the activites
      const layerToEdit = L.geoJSON(items)
      layerToEdit.addTo(map)

      layerToEdit.on('pm:edit', e => {
        const pointsOnLine = get(e, 'layer._rings[0]') as Point[]
        const preventRemove = !!(
          (e.shape.toLowerCase() === 'line' && pointsOnLine.length <= 2) ||
          (e.shape.toLowerCase() === 'polygon' && pointsOnLine.length <= 3)
        )
        const options = get(e, 'layer.pm.options')
        const newOptions = {
          ...options,
          preventMarkerRemoval: preventRemove
        };
        (e.layer as any).pm.disable();
        (e.layer as any).pm.enable(newOptions)
      })

      const getAssetIcon = (imageSrc: string): string => {
        return (
          ReactDOMServer.renderToString(<AssetIcon imageSrc={imageSrc} />)
        )
      }

      const icon = L.divIcon({
        iconSize: [30, 30],
        html: getAssetIcon('/images/marker-icon-2x.png'),
        className: styles['marker-icon']
      })
      map.pm.setGlobalOptions({ markerStyle: { icon } })

      // // note: we may have empty planning geometries for non-spatial
      // if (activity && currentGeometry >= 0 && planningGeometries.length > 0) {
      //   // configure the drawing tool
      //   const current = planningGeometries[currentGeometry]
      const globalOpts: PM.GlobalOptions = {
        layerGroup: layerToEdit,
        continueDrawing: false,
        editable: true,
        allowCutting: false,
        allowRemoval: false,
        allowRotation: false,
        markerStyle: { icon },
        allowSelfIntersectionEdit: false
      }
      setGlobalOptions(globalOpts)

      // switch off all controls
      const toolbarOpts: PM.ToolbarOptions = {
        position: 'bottomright',
        drawControls: false,
        editControls: false
      }

      setDrawOptions(toolbarOpts)

      layerToEdit.options.pmIgnore = false // Specialy needed for LayerGroups
      L.PM.reInitLayer(layerToEdit) // Make the LayerGroup accessable for Geoman
      const editOptions: PM.EditModeOptions = {
        allowRemoval: false,
        allowCutting: false,
        draggable: true
      }
      layerToEdit.pm.enable(editOptions)

      setEditLayer(layerToEdit)
    }
  }, [activityBeingEdited])

  const cleanUp = (): void => {
    if (map) {
      if (editLayer) {
        editLayer.remove()
        setEditLayer(undefined)
      }
      map.pm.disableDraw()
      // also ditch the lines
      const layers = map.pm.getGeomanDrawLayers()
      if (layers.length) {
        layers.forEach((layer: Layer) => layer.remove())
      }
      if (standardAreaBtn.current) {
        standardAreaBtn.current.remove()
      }
    }
  }

  const cancelDrawing = (): void => {
    cleanUp()
    saved(undefined)
  }

  const useStandardArea = (area: Area) => {
    const coords = area.polygon.coordinates
    const res: any = {
      _latLngs: coords[0]
    }

    // TODO with res
    console.log(res)
  }

  const onMount = (controlButton: Select) => {
    standardAreaBtn.current = controlButton
  }

  return (
    <> {(editLayer) &&
      <>
        <div className='leaflet-top leaflet-left'>
          <div className='leaflet-control'>
            <Item onClick={cancelDrawing}><FontAwesomeIcon title='Cancel editing' size={'lg'} icon={faPlaneSlash} /></Item>
            <Item onClick={saveDrawing}><FontAwesomeIcon title='Save locations' size={'lg'} icon={faSave} /></Item>
          </div>
          <StandardAreaMenu
            areas={areas}
            showControl={!!(areas && areas.length > 0)}
            handler={useStandardArea}
            onMount={onMount}
            additionalClass='select-control-order-editing'
          />
        </div>
        <GeomanControls
          options={drawOptions}
          globalOptions={globalOptions}
        />
      </>
    }
    </>
  )
}

export default OrderEditing
