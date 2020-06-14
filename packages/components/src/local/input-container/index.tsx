import React from 'react'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import proptypes */
import PropTypes from './types/props'

import cx from 'classnames'

/* Render component */
export const InputContainer: React.FunctionComponent<PropTypes> = ({ children, label, className }) =>
  <section className={cx(styles['input-container'], className)}>
    {label && <h2>{label}</h2>}
    {children}
  </section>

export default InputContainer
