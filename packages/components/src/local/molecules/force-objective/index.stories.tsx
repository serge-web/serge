import React from 'react'

// Import component files
import ForceObjective from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/ForceObjective',
  component: ForceObjective,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <ForceObjective
    force={{
      color: '#3dd0ff',
      name: 'Blue',
      icon: 'http://localhost:8080/default_img/forceDefault.png',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, praesentium sed! Animi atque incidunt maiores nisi vel voluptate? Adipisci architecto aspernatur earum error incidunt laborum magni neque odio repellendus, voluptate!'
    }}
    selectedRole="Comms"
    onIconClick={(): any => window.alert('Icon clicked')}
  />
)

export const ColorVariation: React.FC = () => (
  <ForceObjective
    force={{
      color: '#2b900f',
      name: 'Green',
      icon: 'http://localhost:8080/default_img/forceDefault.png',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, praesentium sed! Animi atque incidunt maiores nisi vel voluptate? Adipisci architecto aspernatur earum error incidunt laborum magni neque odio repellendus, voluptate!'
    }}
    selectedRole="Comms"
    onIconClick={(): any => window.alert('Icon clicked')}
  />
)
