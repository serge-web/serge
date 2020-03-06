import React, { useState } from 'react'

/* Import Types */
import Props from './types/props.interface'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Helpers */
import clickHandler from './helpers/click-handler'

/* Render component */
export const MarkerName: React.FunctionComponent<Props> = ({ currentMarkerName, currentMarkerForce, currentForce, perception }: Props) => {
  const [clicked, setClicked] = useState(false)
  const [perceived, setPerceived] = useState(perception)

  const handleClick = (): Function => clickHandler(currentForce, currentMarkerForce, setClicked)

  const name = perceived && perceived.name ? perceived.name : currentMarkerName

  return (<>
    <h2 key="header" className={styles['marker-name']} onClick={handleClick}>{name}</h2>
  </>
  )
}

export default MarkerName
