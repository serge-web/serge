import { faPlaneSlash, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PlannedActivityGeometry } from '@serge/custom-types'
import { Feature } from 'geojson'
import L, { LatLng, Layer, PM } from 'leaflet'
import 'leaflet-notifications'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v3'
import AssetIcon from '../../../asset-icon'
import Item from '../../../map-control/helpers/item'
import styles from '../styles.module.scss'

interface OrderEditingProps {
  /** user has finished. Undefined value
   * means user has cancelled
   */
  saved: { (activity: PlannedActivityGeometry[] | undefined): void}
  /** the activity to edit */
  activityBeingEdited: PlannedActivityGeometry[] | undefined
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
export const OrderEditing: React.FC<OrderEditingProps> = ({ saved, activityBeingEdited }) => {
  const [drawOptions, setDrawOptions] = useState<PM.ToolbarOptions>({})
  const [globalOptions, setGlobalOptions] = useState<PM.GlobalOptions>({})

  const [editLayer, setEditLayer] = useState<Layer | undefined>(undefined)

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
    cancelDrawing()
  }

  useEffect(() => {
    if (activityBeingEdited && activityBeingEdited.length && map) {
      map.pm.disableDraw()
      const items = activityBeingEdited.map((plan) => plan.geometry)
      // create a layer for the activites
      const layerToEdit = L.geoJSON(items)
      layerToEdit.addTo(map)

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

  const cancelDrawing = (): void => {
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
    }
    saved(undefined)
  }

  return (
    <> {(editLayer) &&
      <>
        <div className='leaflet-top leaflet-left'>
          <div className='leaflet-control'>
            <Item onClick={cancelDrawing}><FontAwesomeIcon title='Cancel editing' size={'lg'} icon={faPlaneSlash} /></Item>
            <Item onClick={saveDrawing}><FontAwesomeIcon title='Save locations' size={'lg'} icon={faSave} /></Item>
          </div>
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
