import { faPlaneSlash, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PlannedActivityGeometry } from '@serge/custom-types'
import L, { Layer, PM } from 'leaflet'
import 'leaflet-notifications'
import React, { useEffect, useState } from 'react'
import { GeomanControls } from 'react-leaflet-geoman-v2'
import { useMap } from 'react-leaflet-v4'
import Item from '../../../map-control/helpers/item'

interface OrderEditingProps {
  cancelled: { (): void }
  activityBeingEdited: PlannedActivityGeometry[] | undefined
}

/* Render component */
export const OrderEditing: React.FC<OrderEditingProps> = ({ cancelled, activityBeingEdited }) => {
  const [drawOptions, setDrawOptions] = useState<PM.ToolbarOptions>({})
  const [globalOptions, setGlobalOptions] = useState<PM.GlobalOptions>({})

  const [editLayer, setEditLayer] = useState<Layer | undefined>(undefined)

  const map = useMap()

  useEffect(() => {
    // map.pm.disableDraw()
    if (activityBeingEdited && activityBeingEdited.length && map) {
      const items = activityBeingEdited.map((plan) => plan.geometry)
      // create a layer for the activites
      const layerToEdit = L.geoJSON(items)
      layerToEdit.addTo(map)
      // // cancel drawing
      // map.pm.disableDraw()

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
        allowRotation: false
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
    cancelled()
  }

  const saveDrawing = (): void => {
    // push the data item
    console.log('store', editLayer)

    // TODO: put the geometries back into the relevant parents
    console.log(' save', typeof editLayer, (editLayer as any).getLayers())

    // now clean up
    cancelDrawing()
  }

  return (
    <> {(editLayer) &&
      <>
        <div className='leaflet-top leaflet-left'>
          <div className='leaflet-control'>
            <Item onClick={cancelDrawing}><FontAwesomeIcon title='Cancel editing' size={'lg'} icon={faPlaneSlash} /></Item>
            {
              editLayer &&
              <Item onClick={saveDrawing}><FontAwesomeIcon title='Save' size={'lg'} icon={faSave} /></Item>
            }
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
