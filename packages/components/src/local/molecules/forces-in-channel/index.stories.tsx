import React from 'react'

// Import component files
import ForcesInChannel from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/ForcesInChannel',
  component: ForcesInChannel,
  decorators: [],
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
  const names = [
    'Blue'
  ]
  return (
    <ForcesInChannel
      icons={icons}
      colors={colors}
      names={names}
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
    '#00F'
  ]
  const names = [
    'Red',
    'Green',
    'Blue'
  ]
  return (
    <ForcesInChannel
      icons={icons}
      colors={colors}
      names={names}
      onMarkAllAsRead={(): void => window.alert('Mark all as read')}
    />
  )
}
