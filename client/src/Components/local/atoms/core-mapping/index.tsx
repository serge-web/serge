import { Feature, FeatureCollection } from 'geojson'
import { PM } from 'leaflet'
import { cloneDeep } from 'lodash'
import React, { useEffect, useState } from 'react'
import { LayerGroup, MapContainer, TileLayer } from 'react-leaflet-v4'
import { Phase } from 'src/config'
import { BaseRenderer, CoreMappingMessage, CoreProperties, RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'
import { CoreRendererHelper } from './helper/core-renderer-helper'
import MapControls from './helper/map-controls'
import { loadDefaultMarker } from './helper/marker-helper'
import styles from './styles.module.scss'
import PropTypes, { CoreRendererProps } from './types/props'

const CoreMapping: React.FC<PropTypes> = ({ messages, channel, bounds }) => {
  const [features, setFeatures] = useState<FeatureCollection>()
  const [renderers, setRenderers] = useState<React.ComponentClass<CoreRendererProps>[]>([])
  // const featuresRef = useRef<FeatureCollection | undefined>()

  useEffect(() => {
    loadDefaultMarker()
  }, [])

  // useEffect(() => {
  //   featuresRef.current = features
  // }, [features])

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage: CoreMappingMessage = messages[messages.length - 1]
      setFeatures(lastMessage.features)
    } else {
      setFeatures(undefined)
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

  const onCreate = (e: PM.ChangeEventHandler) => {
    const feature = mapEventToFeatures(e)
    if (feature) {
      const cloneFeatures = cloneDeep(features)
      cloneFeatures?.features.push(feature)
      setFeatures(cloneFeatures)
      console.log('xx> cloneFeatures: ', cloneFeatures?.features.length)
    }  
    // only add new feature
    // if (!featuresRef.current?.features.find(f => f.properties?.id === feature.properties?.id)) {
    //   featuresRef.current?.features.push(feature)
    //   const cloneFeatures = cloneDeep(featuresRef.current)
    //   setFeatures(cloneFeatures)
    // }
  }

  const onChange = (e: PM.ChangeEventHandler) => {
    console.log('onChange Event Fired', e)
  }

  const onRemoved = (e: PM.ChangeEventHandler) => {
    console.log('onRemoved Event Fired', e)
    // if (featuresRef.current) {
    // remove feature from the list
    // featuresRef.current.features = featuresRef.current?.features.filter(f => f.properties?.id !== (e as any).layer._leaflet_id)
    // }
  }
  
  return <MapContainer bounds={bounds} zoom={13} scrollWheelZoom={false} className={styles.container}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> 
    <MapControls onCreate={onCreate} onChange={onChange} onRemoved={onRemoved}/>
    <LayerGroup>
      {features && renderers.map((Component, idx) => <Component key={idx} features={features} />) }
    </LayerGroup>
  </MapContainer>
}

export default CoreMapping
