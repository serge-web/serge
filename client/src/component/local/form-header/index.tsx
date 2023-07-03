import React from 'react'
/* Import Types */
import PropTypes from './types/props'
import cx from 'classnames'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { capitalize } from 'lodash'

/* Render component */
export const FormHeader: React.FunctionComponent<PropTypes> = ({ string, className }: PropTypes) =>
  <h2 className={cx(styles['form-header'], className)}>
    {capitalize(string)}
  </h2>

export default FormHeader
