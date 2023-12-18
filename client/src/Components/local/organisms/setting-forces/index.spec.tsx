import React from 'react'
import renderer from 'react-test-renderer'
import { forces } from 'src/mocks'
import SettingForces from './index'
import { ForceData } from './types/props'

const onChange = (updates: { forces: Array<ForceData> }): void => { console.log(updates) }
const onSave = (): void => {
  console.log('Your save logic', forces)
}
const onRejectedIcon = (rejected: any): void => {
  console.log(rejected)
}

describe('SettingForces component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SettingForces onChange={onChange} onSave={onSave} onRejectedIcon={onRejectedIcon} forces={forces}/>,
        { createNodeMock: () => document.createElement('textarea') }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
