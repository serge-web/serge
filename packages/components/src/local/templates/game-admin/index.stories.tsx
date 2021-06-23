import React from 'react'

// Import component files
import GameAdmin from './index'
import docs from './README.md'

import { AdminMessagesMock } from '@serge/mocks'

export default {
  title: 'local/templates/GameAdmin',
  component: GameAdmin,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: ''
}

export const Default: React.FC = () => (
  <GameAdmin wargameTitle="title" chatChannel={AdminMessagesMock} selectedForce={force} selectedRoleId="" selectedRoleName="Game Control" />
)
