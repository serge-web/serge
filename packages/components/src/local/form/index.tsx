import React from 'react'
import { kebabCase } from 'lodash'
import cx from 'classnames'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import FormHeader from '../form-header'

/* Render component */
export const Form: React.FC<PropTypes> = ({ children, type, headerText, formClassName, formHeaderClassName }) => {
  const typeClass = kebabCase(type) || 'default'
  return (
    <div className={cx(styles.form, styles[typeClass], formClassName)}>
      <FormHeader string={headerText} className={formHeaderClassName} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Form
