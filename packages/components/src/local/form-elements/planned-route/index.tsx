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

  const buttonsFor = (status: string, isMobile: boolean): React.ReactNode => {
    switch(status) {
      case PlanningStates.Pending:
        return <><Button onClick={(): void => handleChange(name, PlanningStates.Accepted)}>Accept</Button>
        <Button onClick={(): void => handleChange(name, PlanningStates.Rejected)}>Reject</Button> </>
      case PlanningStates.Rejected:
        if(isMobile) {
          return <><Button onClick={(): void => handleChange(name, PlanningStates.Planning)}>Plan Route</Button>
          <Button onClick={(): void => handleChange(name, PlanningStates.Pending)}>Revert</Button> </>
        } else {
          return <><Button onClick={(): void => handleChange(name, PlanningStates.Accepted)}>Accept</Button>
          <Button onClick={(): void => handleChange(name, PlanningStates.Pending)}>Revert</Button> </>
        }
      case PlanningStates.Planning:
        return <Button onClick={(): void => handleChange(name, PlanningStates.Rejected)}>Cancel Planning</Button>
      case PlanningStates.Planned:
        return <><Button onClick={(): void => handleChange(name, PlanningStates.Accepted)}>Accept</Button>
        <Button onClick={(): void => handleChange(name, PlanningStates.Rejected)}>Revert</Button> </>
      case PlanningStates.Accepted:
        return <span>Nothing to see</span>
      default: 
        return <></>
      }

  }

  return <div className={styles['planned-route']}>
    { buttonsFor(status, isMobile) }
  </div>
}

export default PlannedRoute
