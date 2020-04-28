import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const FormHeader: React.FunctionComponent<PropTypes> = ({ string }: PropTypes) =>
  <h2 className={styles['form-header']}>
    {string}
  </h2>

export default FormHeader
