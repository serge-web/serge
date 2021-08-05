/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'

import AdminPanelFooter from './index'

describe('AdminPanelFooter component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AdminPanelFooter
          force={{ color: '#3dd0ff', name: 'Blue', iconURL: 'http://localhost:8080/default_img/forceDefault.png' }}
          selectedRoleName={'Comms'}
          byPassUrl="http://localhost:3000/?wargame=wargame-k16fadm4&access=pk16ffhn3"
          onIconClick={(): any => window.alert('Icon clicked')}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
