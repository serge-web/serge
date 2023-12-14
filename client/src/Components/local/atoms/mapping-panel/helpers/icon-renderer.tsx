import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import React from 'react'
import styles from '../styles.module.scss'

type IconRendererProps = {
  feature: Feature<Geometry, GeoJsonProperties>
}

const IconRenderer: React.FC<IconRendererProps> = ({ feature }) => {
  return <div className={styles.listItem}>{feature.geometry.type}</div>
}

export default IconRenderer
