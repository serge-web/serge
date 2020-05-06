import React from 'react'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const InputContainer: React.FunctionComponent<PropTypes> = ({ children, label }) =>
  <section className={styles['input-container']}>
    {label && <h2>{label}</h2>}
    {children}
  </section>

export default InputContainer
