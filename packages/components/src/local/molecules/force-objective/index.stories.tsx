import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'

// Import component files
import ForceObjective from './index'
import AdminPanelFooter from '../admin-panel-footer'
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

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  height: '50vh',
  borderRadius: '2px',
  position: 'relative'
})

export const Default: React.FC = () => (
  <BlueContainer>
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
  </BlueContainer>
)

export const ColorVariation: React.FC = () => (
  <BlueContainer>
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
  </BlueContainer>
)

export const Implementation: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const force = {
    color: '#2b900f',
    name: 'Green',
    icon: 'http://localhost:8080/default_img/forceDefault.png',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, praesentium sed! Animi atque incidunt maiores nisi vel voluptate? Adipisci architecto aspernatur earum error incidunt laborum magni neque odio repellendus, voluptate!'
  }
  const role = 'Comms'
  const toggleVisibility = (): void => setVisible(!visible)
  return (
    <BlueContainer>
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
          selectedRole={role}
          byPassUrl="http://localhost:3000/?wargame=wargame-k16fadm4&access=pk16ffhn3"
          onIconClick={toggleVisibility}
        />
      </Box>
    </BlueContainer>
  )
}
