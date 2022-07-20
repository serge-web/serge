import React, { useState } from 'react'

import { Phase, TurnFormats } from '@serge/config'
import { Story } from '@storybook/react/types-6-0'
// Import component files
import TurnProgression from './index'
import TurnPropTypes from './types/props'

import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/TurnProgression',
  component: TurnProgression,
  decorators: [wrapper],
  parameters: {
    readme: {
      content: docs
    },
    options: {
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    phase: {
      name: 'Game phase',
      control: {
        type: 'radio',
        defaultValue: Phase.Planning,
        options: [
          Phase.Planning,
          Phase.Adjudication
        ]
      }
    },
    turnPresentation: {
      name: 'Turn format',
      control: {
        type: 'radio',
        defaultValue: TurnFormats.Natural,
        options: [
          TurnFormats.Natural,
          TurnFormats.TurnPairNumbers,
          TurnFormats.TurnPairLetters
        ]
      }
    },
    isGameControl: {
      name: 'Is Game Control'
    },
    wargameInitiated: {
      name: 'Is Wargame Initiated'
    }
  }

}

const Template: Story<TurnPropTypes> = (args) => {
  // @ts-ignore: Add custom property for storybook
  const { ...props } = args
  const [state, setState] = useState({
    phase: props.phase,
    currentTurn: args.currentTurn
  })
  const updateState = (): void => {
    setState({
      phase: state.phase === Phase.Planning ? Phase.Adjudication : Phase.Planning,
      currentTurn: state.phase === Phase.Planning ? state.currentTurn : ++state.currentTurn
    })
  }
  return <TurnProgression
    {...props}
    onNextTurn={updateState}
    wargameInitiated={args.wargameInitiated}
    isGameControl={args.isGameControl}
    currentTurn={state.currentTurn}
    turnPresentation={args.turnPresentation}
    phase={state.phase} />
}

export const WithPhases = Template
WithPhases.args = {
  adjudicationStartTime: '2019-09-30T14:13:22+01:00',
  turnEndTime: '0',
  currentTurn: 0,
  phase: Phase.Planning,
  timeWarning: 60000,
  isGameControl: true,
  wargameInitiated: true,
  gameDate: '2019-10-01T02:02',
  turnPresentation: TurnFormats.Natural
}
