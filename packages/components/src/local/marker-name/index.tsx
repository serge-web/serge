import React, { useState } from 'react'

/* Import Types */
import Props from './types/props.interface'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const MarkerName: React.FunctionComponent<Props> = ({ currentMarkerName, currentMarkerForce, currentForce, perception }: Props) => {
  const [clicked, setClicked] = useState(false)
  const [perceived, setPerceived] = useState(perception)

  const handleClick = (): void => {
    const val = currentForce !== 'umpire' && currentForce !== currentMarkerForce
    setClicked(val)
  }

  const name = perceived && perceived.name ? perceived.name : currentMarkerName

  return (<>
    <h2 key="header" className={styles['marker-name']} onClick={handleClick}>{name}</h2>
  </>
  )
}

export default MarkerName
