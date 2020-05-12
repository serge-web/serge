import React from 'react'

import InputContainer from '../../input-container'
import { Button } from '@material-ui/core'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const PlannedRoute: React.FC<PropTypes> = ({ name, status, updateState }) => {
  const handleChange = (name: string, value: string): void => {
    updateState({
      name,
      value
    })
  }

  console.log(status)

  return <InputContainer label="Planned Route">
    { status === 'pending' && <Button onClick={(): void => handleChange(name, 'accepted')}>Accept</Button> }
    { status === 'pending' && <Button onClick={(): void => handleChange(name, 'rejected')}>Reject</Button> }
    { status === 'rejected' && <Button onClick={(): void => handleChange(name, 'planning')}>Plan Route</Button> }
    { (status !== 'pending') && <Button onClick={(): void => handleChange(name, 'pending')}>Revert</Button> }

  </InputContainer>
}

export default PlannedRoute
