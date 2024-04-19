import React from 'react'
import { action } from '@storybook/addon-actions'
import SIDCGenerator from './index'
import { Story } from '@storybook/react/types-6-0'
import PropTypes from './PropsTypes/types'

export default {
  title: 'local/molecules/sidc-generator',
  component: SIDCGenerator
}

const Template: Story<PropTypes> = (args) => <SIDCGenerator {...args} />

export const Default = Template.bind({})

Default.args = {
  onClose: action('onClose'),
  onSave: action('onSave')
}
