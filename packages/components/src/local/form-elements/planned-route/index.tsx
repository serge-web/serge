import React from 'react'

import InputContainer from '../../input-container'
import { Button } from '@material-ui/core'

/* Render component */
export const PlannedRoute: React.FC = () =>
  <InputContainer label="Planned Route">
    <Button>Accept</Button>
    <Button>Reject</Button>
  </InputContainer>

export default PlannedRoute
