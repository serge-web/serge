import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const DialogueHeader: React.FunctionComponent<PropTypes> = ({ string }: PropTypes) =>
  <h2 className={styles['dialogue-header']}>
    {string}
  </h2>

export default DialogueHeader
