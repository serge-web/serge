import React, { useState } from 'react'

import { Phase, TurnFormats } from '@serge/config'
import { Story } from '@storybook/react/types-6-0'
// Import component files
import TurnProgression from './index'
import TurnPropTypes from './types/props'

import { GameTurnLength } from '@serge/custom-types'
import { incrementGameTime } from '@serge/helpers'
import moment from 'moment-timezone'
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
      name: 'Is Game Control',
      control: {
        defaultValue: true
      }
    },
    showTimeRemaining: {
      name: 'Show time remaining',
      control: {
        defaultValue: true
      }
    },
    wargameInitiated: {
      name: 'Is Wargame Initiated',
      control: {
        defaultValue: true
      }
    }
  }

}

const stepTime = 20000


const Template: Story<TurnPropTypes> = (args) => {
  const { ...props } = args
  const [state, setState] = useState({
    phase: props.phase,
    currentTurn: args.currentTurn,
    adjudicationStartTime: args.adjudicationStartTime,
    turnEndTime: args.turnEndTime,
    gameDate: args.gameDate
  })
  const updateState = (): void => {
    const newTime = state.phase === Phase.Planning ? state.gameDate : incrementGameTime(state.gameDate, args.gameTurnLength)
    setState({
      phase: state.phase === Phase.Planning ? Phase.Adjudication : Phase.Planning,
      currentTurn: state.phase === Phase.Planning ? state.currentTurn : ++state.currentTurn,
      adjudicationStartTime: moment().toString(),
      turnEndTime: moment().add(stepTime).toString(),
      gameDate: newTime
    })
  }
  return <TurnProgression
    {...props}
    onNextTurn={updateState}
    wargameInitiated={args.wargameInitiated}
    isGameControl={args.isGameControl}
    turnPresentation={args.turnPresentation}
    turnEndTime={state.turnEndTime}
    adjudicationStartTime={state.adjudicationStartTime}
    currentTurn={state.currentTurn}
    gameDate={state.gameDate}
    timeWarning={10000}
    phase={state.phase} />
}

const turnMillis: GameTurnLength = {unit: 'millis', millis: 172800000 }
const turnMonths: GameTurnLength = {unit: 'months', months: 1 }

export const WithPhases = Template
WithPhases.args = {
  adjudicationStartTime: moment().toISOString(),
  turnEndTime: moment().add(stepTime).toISOString(),
  currentTurn: 0,
  phase: Phase.Planning,
  timeWarning: 60000,
  isGameControl: true,
  wargameInitiated: true,
  gameDate: '2019-10-01T00:00',
  gameTurnLength: turnMillis,
  turnPresentation: TurnFormats.Natural
}

export const MonthsSteps = Template
MonthsSteps.args = {
  adjudicationStartTime: moment().toISOString(),
  turnEndTime: moment().add(stepTime).toISOString(),
  currentTurn: 0,
  phase: Phase.Planning,
  timeWarning: 60000,
  isGameControl: true,
  wargameInitiated: true,
  gameDate: '2019-10-01T00:00',
  gameTurnLength: turnMonths,
  turnPresentation: TurnFormats.Natural
}
