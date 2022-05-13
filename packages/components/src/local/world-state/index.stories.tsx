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
    },
    viewAs: {
      name: 'View As',
      defaultValue: 'Blue',
      control: {
        type: 'radio',
        options: [
          'White',
          'Blue',
          'Red'
        ]
      }
    }
  }
}

const Template: Story<WorldStatePropTypes> = (args) => {
  // @ts-ignore: Add custom property for storybook
  const { viewAs, store, ...props } = args
  const forceNames = {
    White: 'umpire',
    Blue: 'Blue',
    Red: 'Red'
  }
  const forceName = forceNames[viewAs]
  const storeProp = store || routeCreateStore(undefined, Phase.Adjudication, forces, forceName, platformTypes, false, false)
  return <WorldState store={{ ...storeProp }} {...props} />
}

export const WithPhases = Template
WithPhases.args = {
  panel: WorldStatePanels.Control,
  isUmpire: false,
  plansSubmitted: false,
  canSubmitOrders: true,
  turnNumber: 1,
  phase: Phase.Planning,
  submitTitle: 'Submit',
  name: 'World State'
}
