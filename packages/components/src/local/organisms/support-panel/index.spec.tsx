/* global it expect */
import { WargameExportedMock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import SupportPanel from './index'

describe('Support Panel component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<SupportPanel
        forceIcons={[]}
        forceColors={[]}
        forceNames={[]}
        hideForcesInChannel={false}
        messages={[]}
        selectedForce={WargameExportedMock.data.forces.forces[0]}
        selectedRole={WargameExportedMock.data.forces.forces[0].roles[0].roleId}
        forces={[WargameExportedMock.data.forces]}
        onUnread={noop}
        onReadAll={noop}
        onRead={noop}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
