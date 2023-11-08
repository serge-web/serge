import React from 'react'

// Import component files
import GameAdmin from './index'
import docs from './README.md'

import { AdminMessagesMock } from 'src/mocks'

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
  icon: '',
  iconURL: ''
}

export const Default: React.FC = () => (
  <GameAdmin turnNumber={1} wargameTitle="title" chatChannel={AdminMessagesMock} selectedForce={force} selectedRoleName="Game Control" selectedRole="r234" />
)
