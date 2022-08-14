import React from 'react'
import PropTypes from './types/props'
import styles from './styles.module.scss'

export const PlanningMessagesList: React.FC<PropTypes> = ({ messages }: PropTypes) => {
  return (
    <div className={styles['messages-list']}>
      Render planning messages in table here. Message count:{messages.length}
    </div>
  )
}

export default PlanningMessagesList
