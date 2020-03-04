import React from 'react'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Interfaces */
import Props from './types/props.interface'

/* Import Helpers */
import getClassName from './helpers/getClassName'

/* Render component */
export const ProgressIndicator: React.FunctionComponent<Props> = ({ tabs, currentTab }: Props) =>
  <div className={styles.progress}>
    {tabs.map(tab => <div key={tab.name} className={styles[getClassName(tab, currentTab)]} />)}
  </div>

export default ProgressIndicator
