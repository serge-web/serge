/* Import Dependencies */
import React from 'react'

/* Import Interfaces */
import PropTypes from './types/props.interface'

/* Import Helpers */
import getClassName from './helpers/getClassName'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const ProgressIndicator: React.FunctionComponent<PropTypes> = ({ tabs, currentTab }: PropTypes) =>
  <div className={styles.progress}>
    {tabs.map(tab => <div key={tab.name} className={styles[getClassName(tab, currentTab)]} />)}
  </div>

/* export component */
export default ProgressIndicator
