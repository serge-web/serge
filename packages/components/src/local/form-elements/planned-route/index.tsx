import React from 'react'
import { Button } from '../button'

/* Import proptypes */
import PropTypes from './types/props'
import { PlanningStates } from '@serge/config'

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

    { status === PlanningStates.Pending && <Button onClick={(): void => handleChange(name, PlanningStates.Accepted)}>Accept</Button> }
    { status === PlanningStates.Pending && <Button onClick={(): void => handleChange(name, PlanningStates.Rejected)}>Reject</Button> }
    { status === PlanningStates.Rejected && <Button onClick={(): void => handleChange(name, PlanningStates.Planning)}>Plan Route</Button> }
    { (status !== PlanningStates.Pending) && <Button onClick={(): void => handleChange(name, PlanningStates.Pending)}>Revert</Button> }

  </div>
}

export default PlannedRoute
