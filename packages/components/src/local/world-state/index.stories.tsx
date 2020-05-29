import React from 'react'

// Import component files
import WorldState from './index'
import docs from './README.md'
import { RouteStore } from '@serge/custom-types'

export default {
  title: 'local/WorldState',
  component: WorldState,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const store: RouteStore = { routes: [] }

export const Default: React.FunctionComponent = () => <WorldState store={store} name="World State" />
