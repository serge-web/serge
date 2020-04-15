import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import DialogueHeader from '../dialogue-header'

/* Render component */
export const Dialogue: React.FC<PropTypes> = ({ children, type, headerText }) => {
  const typeClass = type || 'default'
  return (
    <div className={`${styles['dialogue']} ${styles[typeClass]}`}>
      <DialogueHeader string={headerText} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Dialogue
