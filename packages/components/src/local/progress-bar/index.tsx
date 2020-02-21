import React from 'react'

import styles from './styles.module.scss'

const ProgressBar: React.FunctionComponent = ({ children }) =>
  <div className={styles.progress}>
    {children}
  </div>


export default ProgressBar