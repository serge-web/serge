import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const OrdersPanelContent: React.FunctionComponent<Props> = ({ name, colour }: Props) =>
  <div className={styles[colour]}>
    This is an example component, the name provided to it was {name}
  </div>

export default OrdersPanelContent
