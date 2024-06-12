import { faShapes, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormControlLabel, Radio } from '@material-ui/core'
import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import { get } from 'lodash'
import ms from 'milsymbol'
import React, { ChangeEvent, useMemo } from 'react'
import { calculateHealthColor } from '../../../../../Helpers'
import { RENDERER_CORE } from '../../../../../custom-types'
import styles from '../styles.module.scss'

type IconRendererProps = {
  feature: Feature<Geometry, GeoJsonProperties>
  checked: boolean
  disabled?: boolean
  onClick: (id: string[], checked: boolean) => void
  onPan: () => void
  color: string
}

const IconRenderer: React.FC<IconRendererProps> = ({ feature, checked, color, onPan, onClick, disabled = false }) => {
  const iconElm = useMemo(() => {
    if (!feature) {
      return
    }
    const icon = new ms.Symbol(feature.properties?.sidc, { size: 20 })
    const health = feature.properties?.health

    const healthColor = calculateHealthColor(health)

    return <div className={styles['asset-icon']}>
      {get(feature, 'properties._type') === RENDERER_CORE
        ? <FontAwesomeIcon icon={faShapes} color={color} fontSize={25} />
        : <>
          <img src={icon.toDataURL()} />
          <div className={styles['health-bar']} style={{ backgroundColor: healthColor }}></div>
        </>
      }
    </div>
  }, [feature])

  return <div className={styles.listItem}>
    <FormControlLabel
      control={
        <Radio
          checked={checked}
          disabled={disabled}
          onChange={(_: ChangeEvent<HTMLInputElement>, checked: boolean) => onClick([feature.properties?.id], checked)}
          size="small"
        />
      }
      
      label={<span className={styles.lblCbx}>{feature.properties?.label || feature.properties?.id}</span>}
      value={feature.properties?.id}
    />
    <FontAwesomeIcon onClick={onPan} icon={faMagnifyingGlassLocation} color={'#000'} fontSize={25} />
    {iconElm}
  </div>
}

export default IconRenderer
