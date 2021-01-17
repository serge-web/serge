import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import WorldState from './index'
import WorldStatePropTypes from './types/props'
import docs from './README.md'
import { routeCreateStore } from '@serge/helpers'
import { forces, platformTypes } from '@serge/mocks'
import { Phase } from '@serge/config'

import { WorldStatePanels } from './helpers/enums'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/WorldState',
  component: WorldState,
  decorators: [wrapper],
  isUmpire: false,
  parameters: {
    readme: {
      content: docs
    },
    controls: {
      expanded: true
    },
    actions: {
      handles: [
        'click .MuiButton-root'
      ]
    }
  },
  argTypes: {
    canSubmitOrders: {
      description: 'Show other platforms'
    },
    phase: {
      description: 'Game phase',
      control: {
        type: 'radio',
        options: [
          Phase.Planning,
          Phase.Adjudication
        ]
      }
    },
    panel: {
      description: 'Panel Tab',
      control: {
        type: 'radio',
        options: [
          WorldStatePanels.Control,
          WorldStatePanels.Visibility,
          WorldStatePanels.ControlledBy
        ]
      }
    }
  }
}

const Template: Story<WorldStatePropTypes> = (args) => <WorldState {...args} />

export const WithPhases = Template.bind({})
WithPhases.args = {
  panel: WorldStatePanels.Control,
  isUmpire: false,
  plansSubmitted: false,
  canSubmitOrders: true,
  phase: Phase.Planning,
  store: routeCreateStore(undefined, forces, 'Blue', platformTypes, undefined, false, false),
  submitTitle: 'Submit',
  name: 'World State'
}
