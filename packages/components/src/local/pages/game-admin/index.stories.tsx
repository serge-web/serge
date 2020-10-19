import React from 'react'

// Import component files
import GameAdmin from './index'
import docs from './README.md'

import { PlayerStateProvider } from '@serge/store'

import { AdminMessagesMock } from '@serge/mocks'

export default {
  title: 'local/pages/GameAdmin',
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
  <PlayerStateProvider>
    <GameAdmin wargameTitle="title" chatChannel={AdminMessagesMock} selectedForce={force} selectedRole="Game Control" />
  </PlayerStateProvider>
)
