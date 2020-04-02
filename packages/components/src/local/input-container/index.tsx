import React from 'react'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const InputContainer: React.FunctionComponent = ({ children }) =>
  <div className={styles['input-container']}>
    {children}
  </div>

export default InputContainer
