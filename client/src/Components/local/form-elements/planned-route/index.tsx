import React from 'react'
import { Button } from '../../atoms/button'

/* Import proptypes */
import PropTypes from './types/props'
import { PlanningStates, PlanningCommands } from 'src/config'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const PlannedRoute: React.FC<PropTypes> = ({ status, handleCommand, isMobile }) => {
  const buttonsFor = (status: string, isMobile: boolean): React.ReactNode => {
    switch (status) {
      case PlanningStates.Pending:
        return <><Button onClick={(): void => handleCommand(PlanningCommands.Accept)}>Accept</Button>
          <Button onClick={(): void => handleCommand(PlanningCommands.Reject)}>Reject</Button> </>
      case PlanningStates.Rejected:
        if (isMobile) {
          return <><Button onClick={(): void => handleCommand(PlanningCommands.PlanRoute)}>Plan Route</Button>
            <Button onClick={(): void => handleCommand(PlanningCommands.Revert)}>Revert</Button> </>
        } else {
          return <><Button onClick={(): void => handleCommand(PlanningCommands.Save)}>Save</Button>
            <Button onClick={(): void => handleCommand(PlanningCommands.Revert)}>Revert</Button> </>
        }
      case PlanningStates.Planning:
        return <Button onClick={(): void => handleCommand(PlanningCommands.Cancel)}>Cancel Planning</Button>
      case PlanningStates.Planned:
        return <><Button onClick={(): void => handleCommand(PlanningCommands.Save)}>Save</Button>
          <Button onClick={(): void => handleCommand(PlanningCommands.ClearRoute)}>Clear Route</Button> </>
      case PlanningStates.Saved:
        return <Button onClick={(): void => handleCommand(PlanningCommands.Revert)}>Revert</Button>
      default:
        return <></>
    }
  }

  return <div className={styles['planned-route']}>
    { buttonsFor(status, isMobile) }
  </div>
}

export default PlannedRoute
