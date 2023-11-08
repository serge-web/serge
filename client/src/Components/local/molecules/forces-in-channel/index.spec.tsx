/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ForcesInChannel from './index'

describe('ForcesInChannel component:', () => {
  it('renders correctly', () => {
    const icons = [
      './images/default_img/forceDefault.png'
    ]
    const colors = [
      '#00F'
    ]
    const names = [
      'Blue'
    ]
    const tree = renderer
      .create(
        <ForcesInChannel
          icons={icons}
          colors={colors}
          names={names}
          onMarkAllAsRead={(): void => window.alert('Mark all as read')}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
