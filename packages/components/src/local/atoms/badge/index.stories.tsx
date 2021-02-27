import React from 'react'

// Import component files
import Badge from './index'
import BadgePropTypes from './types/props'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'local/atoms/Badge',
  component: Badge,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'warning',
          'charcoal'
        ]
      }
    },
    allCaps: {
      control: {
        type: 'boolean'
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'default'
        ]
      }
    },
    size: {
      control: {
        type: 'select',
        options: [
          'small',
          'medium'
        ]
      }
    },
    customSize: {
      control: {
        type: 'select',
        options: [
          'large'
        ]
      }
    },
    customBackgroundColor: {
      control: {
        type: 'color'
      }
    },
    customColor: {
      control: {
        type: 'color'
      }
    }
  }
}

const Template: Story<BadgePropTypes> = (args) => {
  const { ...props } = args
  return <Badge {...props} />
}
export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Warning',
  type: 'warning'
}

export const Charcoal = Template.bind({})
Charcoal.args = {
  label: 'Charcoal',
  type: 'charcoal'
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
  label: 'Custom color',
  customBackgroundColor: '#F94248'
}

export const customSize = Template.bind({})
customSize.args = {
  label: 'Custom size',
  customSize: 'large'
}

export const noCapital = Template.bind({})
noCapital.args = {
  label: 'No Capital',
  allCaps: false,
  customBackgroundColor: '#666'
}
