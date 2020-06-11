import React from 'react'

// Import component files
import Button from './index'
import docs from './README.md'
import { withKnobs, boolean } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/form-elements/Button',
  component: Button,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onClick = () => {
  console.log('clicked')
}

export const Default: React.FC = () => <Button 
  onClick={onClick} 
  disabled={boolean('Disabled', false)} >Title</Button>


// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
};