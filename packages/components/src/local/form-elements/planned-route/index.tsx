import React from 'react'
import { Button } from '../../atoms/button'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const PlannedRoute: React.FC<PropTypes> = ({ name, status, updateState }) => {
  const handleChange = (name: string, value: string): void => {
    updateState({
      name,
      value
    })
  }

  return <div className={styles['planned-route']}>

    { status === 'pending' && <Button size="small" onClick={(): void => handleChange(name, 'accepted')}>Accept</Button> }
    { status === 'pending' && <Button size="small" onClick={(): void => handleChange(name, 'rejected')}>Reject</Button> }
    { status === 'rejected' && <Button size="small" onClick={(): void => handleChange(name, 'planning')}>Plan Route</Button> }
    { (status !== 'pending') && <Button size="small" onClick={(): void => handleChange(name, 'pending')}>Revert</Button> }

  </div>
}

export default PlannedRoute
