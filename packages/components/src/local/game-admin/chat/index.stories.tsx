import React from 'react'

// Import component files
import GameAdminChat from './index'
import docs from './README.md'

import { PlayerStateProvider } from '@serge/store'

import { MessagesMock } from '@serge/mocks'

export default {
  title: 'local/GameAdmin/Chat',
  component: GameAdminChat,
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

export const Default: React.FC = () => <PlayerStateProvider>
  <GameAdminChat wargameTitle="title" chatChannel={MessagesMock} selectedForce={force} selectedRole=""/>
</PlayerStateProvider>
