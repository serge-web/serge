import { LatLngExpression } from 'leaflet'
import React, { useState, useEffect, ReactElement } from 'react'
import { MapContainer, TileLayer, GeoJSON, LayerGroup } from 'react-leaflet-v4'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { FeatureCollection, GeoJsonObject } from 'geojson'
import { BaseRenderer, CoreMappingMessage, RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'

const CoreMapping: React.FC<PropTypes> = ({ messages, channel }) => {
  const [features, setFeatures] = useState<FeatureCollection | undefined>(undefined)
  const [renderers, setRenderers] = useState<Array<ReactElement>>([])

  const position: LatLngExpression = [51.505, -0.09]

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage: CoreMappingMessage = messages[messages.length - 1]
      setFeatures(lastMessage.features)
    } else {
      setFeatures(undefined)
    }
  }, [messages])

  useEffect(() => {
    const rendererObjects: Array<BaseRenderer> = channel.renderers
    const renList: ReactElement[] = []
    rendererObjects.forEach((obj: BaseRenderer) => {
      switch (obj.type) {
        case RENDERER_CORE: {
          const coreR = <GeoJSON filter={(feature): boolean => feature.properties._type === RENDERER_CORE}
            data={features as GeoJsonObject} key={'feature_no_contact' + Math.random()} />
          renList.push(coreR)
          break
        }
        case RENDERER_MILSYM: {
          const coreR = <GeoJSON filter={(feature): boolean => feature.properties._type === RENDERER_MILSYM}
            data={features as GeoJsonObject} key={'feature_no_contact' + Math.random()} />
          renList.push(coreR)
        }
      }
    })
    setRenderers(renList)
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
