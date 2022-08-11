import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const PlanningMessagesList: React.FC<PropTypes> = ({
  messages
}: PropTypes) => {
  return (
    <div>
      Render planning messages in table here. Message count:{messages.length}
    </div>
  )
}

export default PlanningMessagesList
