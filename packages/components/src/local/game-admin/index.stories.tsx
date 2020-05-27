import React from 'react'

// Import component files
import GameAdmin from './index'
import docs from './README.md'

import { PlayerStateProvider } from '@serge/store'

export default {
  title: 'local/GameAdmin',
  component: GameAdmin,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <PlayerStateProvider>
  <GameAdmin />
</PlayerStateProvider>

