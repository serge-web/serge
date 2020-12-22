import React, { ReactText } from 'react'

import { withKnobs, radios, boolean } from '@storybook/addon-knobs'

// Import component files
import WorldState from './index'
import docs from './README.md'
import { routeCreateStore } from '@serge/helpers'
import { forces, platformTypes } from '@serge/mocks'
import { Phase } from '@serge/config'

import { WorldStatePanels } from './helpers/enums'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/WorldState',
  component: WorldState,
  decorators: [withKnobs, wrapper],
  isUmpire: false,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  options: {
    // We have no addons enabled in this story, so the addon panel should be hidden
    showPanel: false
  }
}

const canSubmitLabel = 'Show other platforms'
const canSubmitDefaultValues = true

const label = 'View As'
const forceNames = {
  White: 'umpire',
  Blue: 'Blue',
  Red: 'Red'
}
const defaultValue = 'Blue'

const phasesPhaseLabel = 'Game phase'
const phasesPhaseNames = {
  Planning: Phase.Planning,
  Adjudication: Phase.Adjudication
}
const phasePhaseValue = Phase.Planning

const panelsLabel = 'Panel Tab'
const panelsNames: Record<ReactText, WorldStatePanels> = {
  Control: WorldStatePanels.Control,
  Visiblity: WorldStatePanels.Visibility,
  Controlled: WorldStatePanels.ControlledBy
}
const panelsValue: WorldStatePanels = WorldStatePanels.Control

export const WithPhases: React.FunctionComponent = () => <WorldState panel={radios<WorldStatePanels>(panelsLabel, panelsNames, panelsValue)}
  isUmpire={boolean('Player is umpire', false)}
  plansSubmitted={false}
  canSubmitOrders={boolean(canSubmitLabel, canSubmitDefaultValues)}
  phase={radios(phasesPhaseLabel, phasesPhaseNames, phasePhaseValue)}
  store={routeCreateStore(undefined, forces, radios(label, forceNames, defaultValue), platformTypes, undefined, false, false)}
  submitTitle='Submit' name="World State" />

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
WithPhases.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
