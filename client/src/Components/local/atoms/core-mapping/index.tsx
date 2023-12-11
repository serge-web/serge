import { Box, Button } from '@material-ui/core'
import Slide from '@mui/material/Slide'
import { Feature, FeatureCollection } from 'geojson'
import { LatLng, PM } from 'leaflet'
import { cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'
import { LayerGroup, MapContainer, TileLayer } from 'react-leaflet-v4'
import { Panel, PanelGroup } from 'react-resizable-panels'
import { Phase } from 'src/config'
import { BaseRenderer, CoreMappingMessage, CoreProperties, RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'
import MappingPanel from '../mapping-panel'
import ResizeHandle from '../mapping-panel/helpers/ResizeHandle'
import { CoreRendererHelper } from './helper/core-renderer-helper'
import MapControls from './helper/map-controls'
import { loadDefaultMarker } from './helper/marker-helper'
import styles from './styles.module.scss'
import PropTypes, { CoreRendererProps } from './types/props'

const CoreMapping: React.FC<PropTypes> = ({ messages, channel, bounds }) => {
  const [featureCollection, setFeatureCollection] = useState<FeatureCollection>()
  const [renderers, setRenderers] = useState<React.FunctionComponent<CoreRendererProps>[]>([])
  const [pendingCreate, setPendingCreate] = useState<PM.ChangeEventHandler | null>(null)
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    loadDefaultMarker()
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage: CoreMappingMessage = messages[messages.length - 1]
      setFeatureCollection(lastMessage.features)
    } else {
      setFeatureCollection(undefined)
    }
  }, [messages])

  useEffect(() => {
    if (channel) {
      const rendererObjects: Array<BaseRenderer> = channel.renderers
      const renList = rendererObjects.map((obj: BaseRenderer) => CoreRendererHelper.from(obj.type))
      setRenderers(renList)
    } else {
      setRenderers([])
    }
  }, [channel])

  const onCreate = (e: PM.ChangeEventHandler) => {
    setPendingCreate(e)
  }

  useEffect(() => {
    if (pendingCreate) {
      const feature = mapEventToFeatures(pendingCreate)
      if (feature && featureCollection && featureCollection.features) {
        const found = featureCollection.features.find(f => f.properties?.id === feature.properties?.id)
        if (!found) {
          featureCollection.features.push(feature)
          setFeatureCollection(cloneDeep(featureCollection))
        }
      }
      setPendingCreate(null) 
    }
  }, [pendingCreate])
  
  const mapEventToFeatures = (e: PM.ChangeEventHandler): Feature | null => {
    const shapeType = (e as any).shape
    // console.log(e)
    switch (shapeType) {
      case 'Line': {
        const locs = (e as any).layer._latlngs as L.LatLng[]
        const reverseLocs = locs.map((item: L.LatLng) => {
          return [item.lng, item.lat]
        })
        const props: CoreProperties = {
          id: (e as any).layer._leaflet_id,
          _type: RENDERER_CORE,
          phase: Phase.Planning,
          label: 'Headquarters Building',
          turn: 1,
          force: 'f-red',
          category: 'Civilian',
          color: '#CCF'
        }
        return {
          type: 'Feature',
          properties: props,
          geometry: {
            coordinates: reverseLocs,
            type: 'LineString'
          }
        }
      }
      case 'Polygon':
      case 'Rectangle': {
        const locs = (e as any).layer._latlngs as L.LatLng[][]
        const reverseLocs = locs[0].map((item: L.LatLng) => {
          return [item.lng, item.lat]
        })
        const props: CoreProperties = {
          id: (e as any).layer._leaflet_id,
          _type: RENDERER_CORE,
          phase: Phase.Planning,
          label: 'Headquarters Building',
          turn: 1,
          force: 'f-red',
          category: 'Civilian',
          color: '#CCF'
        }
        return {
          type: 'Feature',
          properties: props,
          geometry: {
            coordinates: [reverseLocs],
            type: 'Polygon'
          }
        }
      }
      case 'Marker': {
        const loc = (e as any).layer._latlng as L.LatLng
        return {
          type: 'Feature',
          properties: {
            id: (e as any).layer._leaflet_id,
            _type: RENDERER_MILSYM,
            phase: Phase.Planning,
            label: 'Headquarters Building',
            turn: 1,
            force: 'f-red',
            sidc: 'SFG-UCI----D',
            category: 'Civilian',
            size: 'M'
          },
          geometry: {
            coordinates: [loc.lng, loc.lat],
            type: 'Point'
          }
        }
      }
      default: {
        console.warn('Feature creator not present for ' + shapeType)
        return null
      }
    }
  }

  const onChange = (id: number, latlng: LatLng) => {
    console.log('onChange Event Fired', id, latlng)
    if (featureCollection && featureCollection.features) {
      const idx = featureCollection.features.findIndex(f => f.properties?.id === id)
      if (idx !== -1 && latlng) {
        (featureCollection.features[idx].geometry as any).coordinates = [latlng.lng, latlng.lat]
        setFeatureCollection(cloneDeep(featureCollection))
      }
    }  
  }

  const onRemoved = (id: number) => {
    if (featureCollection && featureCollection.features) {
      const filterFeatures = featureCollection.features.filter(f => f.properties?.id !== id)
      featureCollection.features = filterFeatures
      setFeatureCollection(cloneDeep(featureCollection))
    }
  }

  const onDragged = (id: number | string, latLngs: LatLng | LatLng[] | LatLng[][]) => {
    if (featureCollection && featureCollection.features) {
      const idx = featureCollection.features.findIndex(f => f.properties?.id === id)
      if (idx !== -1 && latLngs) {
        const feature = featureCollection.features[idx]
        switch (feature.geometry.type) {
          case 'Polygon': {
            const coords = latLngs as LatLng[][]
            const newCoords = coords[0].map((pos: LatLng) => {
              return [pos.lng, pos.lat]
            })
            feature.geometry.coordinates = [newCoords]
            break
          }
          case 'LineString': {
            const coords = latLngs as LatLng[]
            const newCoords = coords.map((pos: LatLng) => {
              return [pos.lng, pos.lat]
            })
            feature.geometry.coordinates = newCoords
            break
          }
          case 'Point': {
            const coord = latLngs as LatLng
            feature.geometry.coordinates = [coord.lng, coord.lat]
            break
          }
          default: {
            console.warn('Drag handler not implemented for ' + feature.geometry.type)
          }
        }
        setFeatureCollection(cloneDeep(featureCollection))
      }
    }
  }

  return <Box className={styles.container}>
    <Button variant='contained' onClick={() => setChecked(!checked)}>{checked ? '<' : '>'}</Button>
    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
      <Box className={styles['slide-container']}>
        <PanelGroup direction="horizontal">
          <Panel
            collapsible={true}
            defaultSizePercentage={30}
            minSizePercentage={30}
            style={{ pointerEvents: 'all' }}
          >
            <MappingPanel />
          </Panel>
          <ResizeHandle direction='horizontal' className={styles['resize-handler']} />
          <Panel
            collapsible={true}
            defaultSizePercentage={70}
            style={{ pointerEvents: 'none' }}
          >
          </Panel>
        </PanelGroup>
      </Box>
    </Slide>
    <MapContainer bounds={bounds} zoom={13} scrollWheelZoom={false} className={styles['map-container']}>
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      <MapControls onCreate={onCreate} onChange={onChange}/>
      <LayerGroup>
        {featureCollection && renderers.map((Component, idx) => <Component onRemoved={onRemoved} key={idx + featureCollection.features.length} features={featureCollection} onDragged={onDragged} />) }
      </LayerGroup>
    </MapContainer>
  </Box>
}

export default CoreMapping
