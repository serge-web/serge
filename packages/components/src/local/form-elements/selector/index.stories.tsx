import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
// Import component files
import Selector from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/Selector',
  component: Selector,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const options = ['item1', 'item2', 'item3']
const isNative = 'Native'
const isNativeValue = false

export const WithSelector: React.FC = () => <Selector native={boolean(isNative, isNativeValue)} name="test" label="test" options={options} selected="item2" />

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
WithSelector.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
