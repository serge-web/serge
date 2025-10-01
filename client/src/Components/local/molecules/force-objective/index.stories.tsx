import React, { useState } from 'react'
import Box from '@material-ui/core/Box'

// Import component files
import ForceObjective from './index'
import AdminPanelFooter from '../admin-panel-footer'
import docs from './README.md'

const WrapForceObjective = ({ story }: { story: void }): React.ReactElement => (
  <Box style={{
    height: '50vh',
    borderRadius: '2px',
    position: 'relative'
  }}>{story}</Box>
)
WrapForceObjective.displayName = 'WrapForceObjective'

export default {
  title: 'local/molecules/ForceObjective',
  component: ForceObjective,
  decorators: [(story: VoidFunction): React.ReactElement => {
    return <WrapForceObjective story={story()} />
  }],
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
      iconURL: 'http://localhost:8080/default_img/forceDefault.png',
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
      iconURL: 'http://localhost:8080/default_img/forceDefault.png',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, praesentium sed! Animi atque incidunt maiores nisi vel voluptate? Adipisci architecto aspernatur earum error incidunt laborum magni neque odio repellendus, voluptate!'
    }}
    selectedRole="Comms"
    onIconClick={(): any => window.alert('Icon clicked')}
  />
)

export const Implementation: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const force = {
    color: '#2b900f',
    name: 'Green',
    iconURL: 'http://localhost:8080/default_img/forceDefault.png',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, praesentium sed! Animi atque incidunt maiores nisi vel voluptate? Adipisci architecto aspernatur earum error incidunt laborum magni neque odio repellendus, voluptate!'
  }
  const role = 'Comms'
  const toggleVisibility = (): void => setVisible(!visible)
  return (
    <Box style={{
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '325px'
    }}>
      {
        visible && (
          <Box style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 2
          }}>
            <ForceObjective
              force={force}
              selectedRole={role}
              onIconClick={toggleVisibility}
            />
          </Box>
        )
      }
      <AdminPanelFooter
        force={force}
        selectedRoleName={role}
        onIconClick={toggleVisibility}
      />
    </Box>
  )
}
