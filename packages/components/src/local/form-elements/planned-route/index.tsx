import React from 'react'
import { Button } from '../button'

/* Import proptypes */
import PropTypes from './types/props'
import { PlanningStates } from '@serge/config'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const PlannedRoute: React.FC<PropTypes> = ({ name, status, updateState, isMobile }) => {
  const handleChange = (name: string, value: string): void => {
    console.log('new value', name, value)
    updateState({
      name,
      value
    })
  }

  return <div className={styles['planned-route']}>

    { status === PlanningStates.Pending && <Button onClick={(): void => handleChange(name, PlanningStates.Accepted)}>Accept</Button> }
    { status === PlanningStates.Pending && <Button onClick={(): void => handleChange(name, PlanningStates.Rejected)}>Reject</Button> }
    { status === PlanningStates.Rejected && isMobile && <Button onClick={(): void => handleChange(name, PlanningStates.Planning)}>Plan Route</Button> }
    { status === PlanningStates.Planning && <Button onClick={(): void => handleChange(name, PlanningStates.Pending)}>Cancel Planning</Button> }
    { (status !== PlanningStates.Planning && status !== PlanningStates.Pending) && <Button onClick={(): void => handleChange(name, PlanningStates.Pending)}>Revert</Button> }

  </div>
}

export default PlannedRoute
