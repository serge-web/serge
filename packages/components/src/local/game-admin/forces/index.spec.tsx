import React from 'react'
import renderer from 'react-test-renderer'

import Forces from './index'

import { ForceData } from './types/props'

import { forces } from '@serge/mocks'

const onChange = (_forces: Array<ForceData>): void => { console.log(_forces) }

it('forces renders correctly', () => {
  const tree = renderer
    .create(<Forces onChange={onChange} forces={forces}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
