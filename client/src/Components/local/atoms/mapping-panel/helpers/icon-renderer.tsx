import { FormControlLabel, Radio } from '@material-ui/core'
import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import ms from 'milsymbol'
import React, { ChangeEvent, useEffect, useRef } from 'react'
import { calculateHealthColor } from 'src/Helpers'
import styles from '../styles.module.scss'

type IconRendererProps = {
  feature: Feature<Geometry, GeoJsonProperties>
  checked: boolean
  onClick: (id: string, checked: boolean) => void
}

const IconRenderer: React.FC<IconRendererProps> = ({ feature, checked, onClick }) => {
  const iconRef = useRef<HTMLDivElement>(null)
 
  useEffect(() => {
    // TODO: reserch how to render shape in this line
    const icon = new ms.Symbol(feature.properties?.sidc, { size: 20 })
    const health = feature.properties?.health

    const healthColor = calculateHealthColor(health)

    if (iconRef.current) {
      iconRef.current.innerHTML = `
        <div class="${styles['asset-icon']}">
          ${icon.asDOM().outerHTML}
          <div class="${styles['health-bar']}" style="background-color: ${healthColor};"></div>
        </div>
      `
    }
  }, [feature])

  return <div className={styles.listItem}>
    <FormControlLabel
      control={
        <Radio
          checked={checked}
          onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) => onClick(feature.properties?.id, checked)}
          size="small"
        />
      }
      
      label={<span className={styles.lblCbx}>{feature.properties?.label || feature.properties?.id}</span>}
      value={feature.properties?.id}
    />
    <div ref={iconRef} />
  </div>
}

export default IconRenderer
