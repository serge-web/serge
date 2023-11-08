/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ForceObjective from './index'

it('ForceObjective renders correctly', () => {
  const tree = renderer
    .create(
      <ForceObjective
        force={{
          color: '#3dd0ff',
          name: 'Blue',
          iconURL: 'default_img/forceDefault.png',
          overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, praesentium sed! Animi atque incidunt maiores nisi vel voluptate? Adipisci architecto aspernatur earum error incidunt laborum magni neque odio repellendus, voluptate!'
        }}
        selectedRole="Comms"
        onIconClick={(): any => window.alert('Icon clicked')}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
