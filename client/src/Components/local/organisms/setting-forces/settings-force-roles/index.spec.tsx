import { ForceData } from 'src/custom-types'
import { forces } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import RolesAccordion from './index'

const handleChange = (obj: ForceData): void => {
  console.log(obj)
}

describe('RolesAccordion component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <RolesAccordion
          data={forces[0]}
          handleChangeForce={handleChange}
          forces={forces}
          onNewRoleAdded={noop}
        />,
        { createNodeMock: () => document.createElement('textarea') }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
