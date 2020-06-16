import React from 'react'
import cx from 'classnames'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const InputContainer: React.FunctionComponent<PropTypes> = ({ children, label, disableOffset, className }) =>
  <section className={cx(styles['input-container'], disableOffset && styles['disable-offset'], className)}>
    {label && <h2>{label}</h2>}
    {children}
  </section>

export default InputContainer
