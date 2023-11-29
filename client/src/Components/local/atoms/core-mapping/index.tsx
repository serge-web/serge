import { FeatureCollection } from 'geojson'
import React, { useEffect, useState } from 'react'
import { LayerGroup, MapContainer, TileLayer } from 'react-leaflet-v4'
import { BaseRenderer, CoreMappingMessage } from 'src/custom-types'
import { CoreRendererHelper } from './helper/core-renderer-helper'
import MapControls from './helper/map-controls'
import { PM } from 'leaflet'
import { loadDefaultMarker } from './helper/marker-helper'
import styles from './styles.module.scss'
import PropTypes, { CoreRendererProps } from './types/props'

const CoreMapping: React.FC<PropTypes> = ({ messages, channel, bounds }) => {
  const [features, setFeatures] = useState<FeatureCollection>()
  const [renderers, setRenderers] = useState<React.ComponentClass<CoreRendererProps>[]>([])

  useEffect(() => {
    loadDefaultMarker()
  }, [])

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
  
  const onCreate = (e: PM.ChangeEventHandler) => {
    console.log('onCreate Event Fired', e)
  }

  const onChange = (e: PM.ChangeEventHandler) => {
    console.log('onChange Event Fired', e)
  }
  
  return <MapContainer bounds={bounds} zoom={13} scrollWheelZoom={false} className={styles.container}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> 
    <MapControls onCreate={onCreate} onChange={onChange}/>
    <LayerGroup>
      {features && renderers.map((Component, idx) => <Component key={idx} features={features} />) }
    </LayerGroup>
  </MapContainer>
}

export default CoreMapping
