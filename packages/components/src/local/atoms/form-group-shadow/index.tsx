import React from 'react'

/* Import proptypes */
import PropTypes from './types/props'

/* Import styles */
import styles from './styles.module.scss'

/* Render component */
export const FormGroupShadow: React.FC<PropTypes> = ({ placeholder, children }) => (
  <div className={styles.main}>
    <div className={styles.placeholder}>{placeholder}</div>
    <div className={styles.content}>{children}</div>
  </div>
)

export default FormGroupShadow
