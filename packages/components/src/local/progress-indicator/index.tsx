/* Import Dependencies */
import React from 'react'

/* Import Interfaces */
import Props from './types/props'

/* Import Helpers */
import getClassName from './helpers/getClassName'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const ProgressIndicator: React.FunctionComponent<Props> = ({ tabs, currentTab }: Props) =>
  <div className={styles.progress}>
    {tabs.map(tab => <div key={tab.name} className={styles[getClassName(tab, currentTab)]} />)}
  </div>

/* export component */
export default ProgressIndicator
