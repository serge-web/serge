import React from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'

// Import component files
import ForcesInChannel from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff'
})

export default {
  title: 'local/molecules/ForcesInChannel',
  component: ForcesInChannel,
  decorators: [(story: Function): React.ReactElement => (
    <BlueContainer>{ story() }</BlueContainer>
  )],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const icons = [
    './images/default_img/forceDefault.png'
  ]
  const colors = [
    '#F00'
  ]
  return (
    <ForcesInChannel
      icons={icons}
      colors={colors}
      onMarkAllAsRead={(): void => window.alert('Mark all as read')}
    />
  )
}

export const MultipleForces: React.FC = () => {
  const icons = [
    './images/default_img/forceDefault.png',
    './images/default_img/sergeDefault.png',
    './images/default_img/umpireDefault.png'
  ]
  const colors = [
    '#F00',
    '#0F0',
    '#00F',
  ]
  return (
    <ForcesInChannel
      icons={icons}
      colors={colors}
      onMarkAllAsRead={(): void => window.alert('Mark all as read')}
    />
  )
}
