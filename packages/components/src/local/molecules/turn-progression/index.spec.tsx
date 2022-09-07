/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { TurnFormats } from '@serge/config'

import TurnProgression from './index'

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
          gameDate="2019-10-01T02:02+01:00"
          isGameControl={false}
          showTimeRemaining={true}
          wargameInitiated={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
