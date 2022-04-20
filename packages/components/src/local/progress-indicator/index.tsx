/* Import Dependencies */
import React from 'react'
/* Import Helpers */
import getClassName from './helpers/getClassName'
/* Import Styles */
import styles from './styles.module.scss'
/* Import Interfaces */
import PropTypes from './types/props'

/* Render component */
export const ProgressIndicator: React.FC<PropTypes> = ({ tabs, currentTab }: PropTypes) =>
  <div className={styles.progress}>
    {tabs.map((tab: any) => {
      return <div key={tab.name} className={styles[getClassName(tab, currentTab)]} />
    })}
  </div>

/* export component */
export default ProgressIndicator
