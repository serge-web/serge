import React from 'react'

// Import component files
import HeartbeatChecker from './index'
import PropTypes from './types/props'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'local/atoms/HeartbeatChecker',
  component: HeartbeatChecker,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    enableHeartbeat: {
      control: {
        type: 'boolean'
      }
    },
    animate: {
      control: {
        type: 'boolean'
      }
    }
  }
}

const Template: Story<PropTypes> = (args) => {
  const { ...props } = args
  return <HeartbeatChecker {...props} />
}

export const ToggleHeartbeatChecker = Template.bind({})
ToggleHeartbeatChecker.args = {
  enableHeartbeat: true,
  animate: true
}
