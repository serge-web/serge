import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button } from '@material-ui/core'
import Slide from '@mui/material/Slide'
import { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import L, { LatLng, PM } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { cloneDeep, flatten, get, unionBy } from 'lodash'
import React, { useEffect, useState } from 'react'
import { LayerGroup, MapContainer, TileLayer } from 'react-leaflet-v4'
import { Panel, PanelGroup } from 'react-resizable-panels'
import { INFO_MESSAGE_CLIPPED, MAPPING_MESSAGE, MAPPING_MESSAGE_DELTA } from 'src/config'
import { BaseRenderer, CoreProperties, MappingMessage, MappingMessageDelta, Message, MessageCustom, MessageDetails, PropertyTypes, RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'
import MappingPanel from '../mapping-panel'
import ResizeHandle from '../mapping-panel/helpers/resize-handler'
import circleToPolygon from './helper/circle-to-linestring'
import { CoreRendererHelper } from './helper/core-renderer-helper'
import { applyPatch, generatePatch } from './helper/feature-collection-helper'
import MapControls from './helper/map-controls'
import { loadDefaultMarker } from './helper/marker-helper'
import styles from './styles.module.scss'
import PropTypes, { CoreRendererProps } from './types/props'

const CoreMapping: React.FC<PropTypes> = ({ messages, channel, playerForce, playerRole, currentTurn, currentPhase, openPanelAsDefault, postBack }) => {
  const [featureCollection, setFeatureCollection] = useState<FeatureCollection>()
  const [lastMessage, setLastMessage] = useState<MappingMessage>()
  const [renderers, setRenderers] = useState<React.FunctionComponent<CoreRendererProps>[]>([])
  const [pendingCreate, setPendingCreate] = useState<PM.ChangeEventHandler | null>(null)
  const [checked, setChecked] = useState<boolean>(openPanelAsDefault)

  // const bounds = L.latLngBounds(channel.constraints.bounds)
  const bounds = L.latLngBounds(L.latLng(51.405, -0.02), L.latLng(51.605, -0.13))

  useEffect(() => {
    loadDefaultMarker()
  }, [])

  useEffect(() => {
    // sort out the mapping messages, since we actually may also receive turn markers
    const mappingMessages = messages.filter((message: Message) => {
      if (message.messageType !== INFO_MESSAGE_CLIPPED) {
        const custMessage = message as MessageCustom
        return custMessage.details.messageType === MAPPING_MESSAGE || custMessage.details.messageType === MAPPING_MESSAGE_DELTA
      } else return false
    })
    if (mappingMessages.length) {
      const mappingMessage = mappingMessages.find((msg: Message) => msg.messageType === MAPPING_MESSAGE)
      if (mappingMessage) {
        if (mappingMessage.details.messageType === MAPPING_MESSAGE) {
          const baseMappingMessage = mappingMessage as MappingMessage
          // keep the mapping message as original for generating patch later
          if (!lastMessage) {
            setLastMessage(cloneDeep(baseMappingMessage))
          }
          const basedFeatureCollection = (lastMessage || baseMappingMessage).featureCollection
          // find latest delta message based on mapping message id
          const deltaMessages: MappingMessageDelta = mappingMessages.find((msg: Message) => msg.messageType === MAPPING_MESSAGE_DELTA && get(msg, 'since', '') === baseMappingMessage._id)
          if (deltaMessages) {
            // apply latest delta message into original mapping message's feature collection
            baseMappingMessage.featureCollection = applyPatch(cloneDeep(basedFeatureCollection), deltaMessages as MappingMessageDelta)
          }
          setFeatureCollection(baseMappingMessage.featureCollection)
        }
      }
    } else {
      setFeatureCollection(undefined)
    }
  }, [messages])

  useEffect(() => {
    if (channel) {
      const rendererObjects: Array<BaseRenderer> = channel.renderers
      const renList = rendererObjects.map((baseMessage: BaseRenderer) => CoreRendererHelper.from(baseMessage.type))
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
          const cloneFeatureCollection = cloneDeep(featureCollection)
          cloneFeatureCollection.features.push(feature)
          saveNewMessage(cloneFeatureCollection)
        }
      }
      setPendingCreate(null) 
    }
  }, [pendingCreate])
  
  const saveNewMessage = (newFeatureCollection: FeatureCollection<Geometry, GeoJsonProperties>) => {
    if (newFeatureCollection) {
      const timestamp = new Date().toISOString()
      const details: MessageDetails = {
        channel: channel.uniqid,
        from: {
          force: playerForce.name,
          forceColor: playerForce.color,
          roleId: playerRole.uniqid,
          roleName: playerRole.name,
          iconURL: ''
        },
        messageType: MAPPING_MESSAGE,
        timestamp: timestamp,
        turnNumber: 1
      }

      if (lastMessage) {
        // generating path from original message with latest feature collection
        const delta = generatePatch(lastMessage.featureCollection, newFeatureCollection)
        const deltaMessage: MappingMessageDelta = {
          _id: new Date().toISOString(),
          messageType: MAPPING_MESSAGE_DELTA,
          details,
          since: lastMessage._id,
          delta
        }
        console.log('delta', deltaMessage)
        postBack(deltaMessage)
      } else {
        const mappingMessage: MappingMessage = {
          _id: new Date().toISOString(),
          messageType: MAPPING_MESSAGE,
          details,
          featureCollection: newFeatureCollection
        }
        console.log('mapping message', mappingMessage)
        postBack(mappingMessage)
      }
    }
  }

  const mapEventToFeatures = (e: PM.ChangeEventHandler): Feature | null => {
    const shapeType = (e as any).shape
    const commonProps = {
      id: (e as any).layer._leaflet_id,
      phase: currentPhase,
      label: playerForce.name,
      turn: currentTurn,
      force: playerForce.uniqid,
      category: 'Civilian',
      color: playerForce.color
    }

    switch (shapeType) {
      case 'Line': {
        const locs = (e as any).layer._latlngs as L.LatLng[]
        const reverseLocs = locs.map((item: L.LatLng) => {
          return [item.lng, item.lat]
        })
        const props: CoreProperties = {
          _type: RENDERER_CORE,
          ...commonProps
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
          _type: RENDERER_CORE,
          ...commonProps
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
            _type: RENDERER_MILSYM,
            sidc: 'SFG-UCI----D',
            size: 'M',
            ...commonProps
          },
          geometry: {
            coordinates: [loc.lng, loc.lat],
            type: 'Point'
          }
        }
      }
      case 'Text': {
        const loc = (e as any).layer._latlng as L.LatLng
        return {
          type: 'Feature',
          properties: {
            _type: RENDERER_MILSYM,
            _externalType: 'Text', // GeoJsonObject does not have geometry.type = 'Text' so adding an indicator in property
            textValue: get(e, 'target.options.text', ''), // store value
            ...commonProps
          },
          geometry: { // remove this makes the pointToLayer broken 
            coordinates: [loc.lng, loc.lat],
            type: 'Point'
          }
        }
      }
      case 'Circle': {
        const centre = (e as any).layer._latlng as L.LatLng
        const mRadius = (e as any).layer._mRadius as number
        const coordinates: [number, number] = [centre.lng, centre.lat] // [lon, lat]
        const radius = mRadius // in meters
        const options = { numberOfEdges: 32 }
        const polygon = circleToPolygon(coordinates, radius, options)
        const props: CoreProperties = {
          _type: RENDERER_CORE,
          ...commonProps
        }
        return {
          type: 'Feature',
          properties: props,
          geometry: {
            coordinates: polygon.coordinates,
            type: polygon.type
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
      const cloneFeatureCollection = cloneDeep(featureCollection)
      saveNewMessage(cloneFeatureCollection)
    }
  }

  const onEdited = (id: number | string, value: string) => {
    if (featureCollection && featureCollection.features) {
      const cloneFeatureCollection = cloneDeep(featureCollection)
      const idx = cloneFeatureCollection.features.findIndex(f => f.properties?.id === id)
      if (idx !== -1 && value) {
        const feature = cloneFeatureCollection.features[idx]
        if (feature.properties) {
          feature.properties.textValue = value
          saveNewMessage(cloneFeatureCollection)
        }
      }
    }
  }

  const onDragged = (id: number | string, latLngs: LatLng | LatLng[] | LatLng[][]) => {
    if (featureCollection && featureCollection.features) {
      const cloneFeatureCollection = cloneDeep(featureCollection)
      const idx = cloneFeatureCollection.features.findIndex(f => f.properties?.id === id)
      if (idx !== -1 && latLngs) {
        const feature = cloneFeatureCollection.features[idx]
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
        saveNewMessage(cloneFeatureCollection)
      }
    }
  }

  const getExtraFilterProps = (): PropertyTypes[] => {
    const rendererObjects: BaseRenderer[] = channel.renderers
    const flatMap = flatten(rendererObjects.map(r => [...r.baseProps, ...r.additionalProps]))
    return unionBy(flatMap, 'id')
  }

  return <Box className={styles.container}>
    {!checked && <Button variant='contained' onClick={() => setChecked(true)}>
      <FontAwesomeIcon icon={faCircleArrowRight} />
    </Button>}
    <Slide direction='right' in={checked} mountOnEnter timeout={500}>
      <Box className={styles['slide-container']}>
        <PanelGroup direction="horizontal" >
          <Panel
            collapsible={true}
            defaultSizePercentage={35}
            minSizePercentage={35}
            style={{ pointerEvents: 'all' }}
          >
            <MappingPanel onClose={() => setChecked(false)} features={featureCollection} extraFilterProps={getExtraFilterProps()} onSave={saveNewMessage} />
          </Panel>
          <ResizeHandle direction='horizontal' className={styles['resize-handler']} />
          <Panel
            collapsible={true}
            defaultSizePercentage={65}
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
        {featureCollection && renderers.map((Component, idx) => <Component onRemoved={onRemoved} key={idx + featureCollection.features.length} features={featureCollection} onDragged={onDragged} onEdited={onEdited} />) }
      </LayerGroup>
    </MapContainer>
  </Box>
}

export default CoreMapping
