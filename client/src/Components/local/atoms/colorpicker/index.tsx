import React, { useState, CSSProperties } from 'react'
import { SketchPicker, ColorResult } from 'react-color'
// import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const Colorpicker: React.FC<PropTypes> = ({ onChange, value }) => {
  const [active, setActive] = useState(false)

  const handleClick = (): void => {
    setActive(!active)
  }

  const handleChange = (color: ColorResult): void => {
    onChange(color.hex)
  }

  const colorStyles: CSSProperties = {
    backgroundColor: value || '#fff'
  } as CSSProperties

  return (
    <div>
      <div className={styles.swatch} onClick={handleClick}>
        <div key={value} className={styles.color} style={colorStyles} />
      </div>
      {active && <div className={styles.popover} >
        <div className={styles.cover} onClick={handleClick}/>
        <SketchPicker color={value} onChange={handleChange}/>
      </div>}

    </div>
  )
}

export default Colorpicker
