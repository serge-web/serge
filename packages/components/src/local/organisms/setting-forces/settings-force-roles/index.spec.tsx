import React from 'react'
import renderer from 'react-test-renderer'
import { forces } from '@serge/mocks'
import { ForceData } from '@serge/custom-types'
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
        />,
        { createNodeMock: () => document.createElement('textarea') }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
