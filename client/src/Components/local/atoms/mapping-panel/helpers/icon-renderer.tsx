import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import React from 'react'
import styles from '../styles.module.scss'

type IconRendererProps = {
  feature: Feature<Geometry, GeoJsonProperties>
}

const IconRenderer: React.FC<IconRendererProps> = ({ feature }) => {
  // render feature here
  return <div className={styles.listItem}>{feature.properties?.label}</div>
}

export default IconRenderer
