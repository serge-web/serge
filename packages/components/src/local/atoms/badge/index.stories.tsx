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

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const Warning = Template.bind({})
Warning.args = {
  label: 'Warning',
  type: 'warning'
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const Charcoal = Template.bind({})
Charcoal.args = {
  label: 'Charcoal',
  type: 'charcoal'
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
  label: 'Custom color',
  customBackgroundColor: '#F94248'
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const customSize = Template.bind({})
customSize.args = {
  label: 'Custom size',
  customSize: 'large'
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const noCapital = Template.bind({})
noCapital.args = {
  label: 'No Capital',
  allCaps: false,
  customBackgroundColor: '#666'
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const tooltip = Template.bind({})
tooltip.args = {
  label: 'Badge with tooltip',
  allCaps: false,
  title: 'The content of the tooltip'
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const outlined = Template.bind({})
outlined.args = {
  label: 'Outline badge',
  allCaps: false,
  outline: true
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const outlinedCustomColor = Template.bind({})
outlinedCustomColor.args = {
  label: 'Outline with custom color',
  allCaps: false,
  customColor: '#228',
  outline: true
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const filledCustomColor = Template.bind({})
filledCustomColor.args = {
  label: 'Filled with custom color',
  allCaps: false,
  customColor: '#cfa'
}
