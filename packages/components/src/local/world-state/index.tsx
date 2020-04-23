import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const WorldState: React.FC<PropTypes> = ({ name }: PropTypes) =>
  <div className={styles['world-state']}>
    This is an example component, It will eventually become {name}
  </div>

export default WorldState
