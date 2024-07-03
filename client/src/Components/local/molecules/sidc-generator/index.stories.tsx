import React from 'react'
import { action } from '@storybook/addon-actions'
import SIDCGenerator from './index'
import { StoryFn } from '@storybook/react'
import PropTypes from './PropsTypes/types'
import { CUSTOM_SIDC } from 'src/config'

export default {
  title: 'local/molecules/sidc-generator',
  component: SIDCGenerator
}

const Template: StoryFn<PropTypes> = (args) => <SIDCGenerator {...args} />

export const Default = Template.bind({})

Default.args = {
  sidcValue: CUSTOM_SIDC,
  onClose: action('onClose'),
  onSave: action('onSave')
}
