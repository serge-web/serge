import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import DialogueHeader from '../dialogue-header'

/* Render component */
export const Dialogue: React.FC<PropTypes> = ({ type, headerText }: PropTypes) => {
  return (
    <div className={styles[type]}>
      <DialogueHeader string={headerText} />
    </div>
  )
}

export default Dialogue
