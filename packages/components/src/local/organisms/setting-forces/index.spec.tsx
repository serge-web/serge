import React from 'react'
import renderer from 'react-test-renderer'
import { forces } from '@serge/mocks'
import SettingForces from './index'
import { ForceData } from './types/props'

const onChange = (_forces: Array<ForceData>): void => { console.log(_forces) }

describe('SettingForces component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SettingForces onChange={onChange} forces={forces}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
