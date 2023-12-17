import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import React, { ChangeEvent } from 'react'
import styles from '../styles.module.scss'
import { Checkbox, FormControlLabel } from '@material-ui/core'

type IconRendererProps = {
  feature: Feature<Geometry, GeoJsonProperties>
  checked: boolean
  onClick: (id: string, checked: boolean) => void
}

const IconRenderer: React.FC<IconRendererProps> = ({ feature, checked, onClick }) => {
  // TODO: render feature icon instead of label
  return <div className={styles.listItem}>
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) => onClick(feature.properties?.id, checked)}
          size="small"
        />
      }
      label={feature.properties?.label}
      value={feature.properties?.id}
    />
  </div>
}

export default IconRenderer
