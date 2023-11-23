import { FeatureCollection } from 'geojson'
import { LatLngExpression } from 'leaflet'
import { flatMap } from 'lodash'
import React, { ReactElement, useEffect, useState } from 'react'
import { LayerGroup, MapContainer, TileLayer } from 'react-leaflet-v4'
import { BaseRenderer, CoreMappingMessage } from 'src/custom-types'
import { CoreRendererHelper } from './helper/core-renderer-helper'
import { loadDefaultMarker } from './helper/marker-helper'
import styles from './styles.module.scss'
import PropTypes from './types/props'

const CoreMapping: React.FC<PropTypes> = ({ messages, channel }) => {
  const [features, setFeatures] = useState<FeatureCollection | undefined>(undefined)
  const [renderers, setRenderers] = useState<Array<ReactElement>>([])

  const position: LatLngExpression = [51.505, -0.09]

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
    if (channel && features) {
      const rendererObjects: Array<BaseRenderer> = channel.renderers
      const renList: ReactElement[][] = rendererObjects.map((obj: BaseRenderer) => {
        const renderer = CoreRendererHelper.from(obj.type, features)
        return renderer.render()
      })
      setRenderers(flatMap(renList))
    } else {
      setRenderers([])
    }
  }, [channel, features])

  return <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={styles.container}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> 
    <LayerGroup>
      { renderers }
    </LayerGroup>
  </MapContainer>
}

export default CoreMapping
