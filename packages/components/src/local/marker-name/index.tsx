import React, { useState, useEffect } from 'react'

/* Import Types */
import Props from './types/props.interface'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Helpers */
import clickHandler from './helpers/click-handler'

/* Render component */
export const MarkerName: React.FunctionComponent<Props> = ({ currentMarkerName, currentMarkerForce, currentForce, perception }: Props) => {
  const [clicked, setClicked] = useState(false)
  const [perception, setPerception] = useState(null)

  const handleClick = (): Function => clickHandler(currentForce, currentMarkerForce, setClicked)

  const name = perception && perception.name ? perception.name : currentMarkerName

  return (<>
    <h2 key="header" className={styles['marker-name']} onClick={handleClick}>{name}</h2>
  </>
  )
}

export default MarkerName
