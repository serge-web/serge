import React from 'react'

import { withKnobs, radios, boolean } from '@storybook/addon-knobs'

// Import component files
import WorldState from './index'
import docs from './README.md'
import { routeCreateStore } from '@serge/helpers'
import { forces, platformTypes } from '@serge/mocks'
import { ADJUDICATION_PHASE, Phase } from '@serge/config'

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

/**
 * VIEW WITH MULTIPLE ASSETS
 */
const showOthersLabel = 'Show other platforms'
const showOthersDefaultValues = false

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

export const WithPhases: React.FunctionComponent = () => <WorldState showOtherPlatforms={boolean(showOthersLabel, showOthersDefaultValues)}
  isUmpire={boolean('Player is umpire', false)}
  plansSubmitted={false}
  phase={radios(phasesPhaseLabel, phasesPhaseNames, phasePhaseValue)}
  store={routeCreateStore(undefined, forces, radios(label, forceNames, defaultValue),
    radios(phasesPhaseLabel, phasesPhaseNames, phasePhaseValue) === ADJUDICATION_PHASE, platformTypes, undefined, false, false)}
  submitTitle='Submit' name="World State" />

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
WithPhases.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
