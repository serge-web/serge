/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import AdminPanelFooter from './index'

describe('AdminPanelFooter component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AdminPanelFooter
          force={{ color: '#3dd0ff', name: 'Blue', iconURL: 'default_img/forceDefault.png' }}
          selectedRoleName={'Comms'}
          onIconClick={(): any => window.alert('Icon clicked')}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
