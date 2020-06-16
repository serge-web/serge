import React from 'react'

// Import component files
import WorldState from './index'
import docs from './README.md'
import { RouteStore } from '@serge/custom-types'
import { ADJUDICATION_PHASE } from '@serge/config'

export default {
  title: 'local/WorldState',
  component: WorldState,
  decorators: [],
  isUmpire: false,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const store: RouteStore = { routes: [] }

export const Default: React.FunctionComponent = () => <WorldState phase={ADJUDICATION_PHASE} isUmpire={false} store={store} name="World State" />
