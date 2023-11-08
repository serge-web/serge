/* global it expect */

import { TurnFormats } from 'src/config'
import React from 'react'
import renderer from 'react-test-renderer'

import { GameTurnLength } from 'src/custom-types'
import TurnProgression from './index'

const turnMillis: GameTurnLength = { unit: 'millis', millis: 172800000 }

describe('TurnProgression component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <TurnProgression
          adjudicationStartTime="2019-09-30T14:13:22+01:00"
          turnEndTime="0"
          timeWarning={60000}
          currentTurn={1}
          turnPresentation={TurnFormats.Natural}
          phase="adjudication"
          gameDate="2019-09-30T00:00:00+01:00"
          gameTurnLength={turnMillis}
          isGameControl={false}
          showTimeRemaining={false}
          wargameInitiated={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
