import React from 'react'

// Import component files
import RCB from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/RCB',
  component: RCB,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Checkbox: React.FC = () => <RCB type="checkbox" label="Visible to" options={['Red', 'Blue']}/>
export const Radio: React.FC = () => <RCB type="radio" label="Visible to" options={['Red', 'Blue']}/>
