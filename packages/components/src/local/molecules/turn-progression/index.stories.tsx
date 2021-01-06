import React, { useState } from 'react'
import moment from 'moment'
import { PLANNING_PHASE, ADJUDICATION_PHASE } from '@serge/config'

// Import component files
import TurnProgression from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/TurnProgression',
  component: TurnProgression,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <TurnProgression
    adjudicationStartTime="2019-09-30T14:13:22+01:00"
    turnEndTime="0"
    timeWarning={60000}
    currentTurn={1}
    phase={ADJUDICATION_PHASE}
    gameDate="2019-10-01T02:02"
    isGameControl={false}
  />
)

export const Planning: React.FC = () => (
  <TurnProgression
    adjudicationStartTime="2019-09-30T14:13:22+01:00"
    turnEndTime={moment(new Date()).add(1.1, 'm').toString()}
    timeWarning={60000}
    currentTurn={1}
    phase={PLANNING_PHASE}
    gameDate="2019-10-01T02:02"
    isGameControl={false}
  />
)

export const WithGameControl: React.FC = () => {
  const [state, setState] = useState({
    phase: PLANNING_PHASE,
    currentTurn: 1
  })
  const updateState = (): void => {
    setState({
      phase: ADJUDICATION_PHASE,
      currentTurn: 2
    })
  }
  return (
    <TurnProgression
      adjudicationStartTime="2019-09-30T14:13:22+01:00"
      turnEndTime={moment(new Date()).add(1.1, 'm').toString()}
      timeWarning={60000}
      currentTurn={state.currentTurn}
      phase={state.phase}
      gameDate="2019-10-01T02:02"
      isGameControl={true}
      onNextTurn={updateState}
    />
  )
}
