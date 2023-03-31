import React from 'react'

// Import component files
import Dropzone from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/helper-elements/Dropzone',
  component: Dropzone,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <div style={{ position: 'relative', height: '600px', paddingLeft: '50px' }}>
    <Dropzone type='group' active={'2'} item={{ uniqid: '1', name: 'g1' }}>Group Type</Dropzone>
    <Dropzone type='empty' active={'2'} item={{ uniqid: '1', name: 'g1' }}>Empty Type</Dropzone>
    <Dropzone type='group' active={'2'} item={{ uniqid: '3', name: 'g2' }}>Group Type</Dropzone>
    <Dropzone type='empty' active={'2'} item={{ uniqid: '3', name: 'g2' }}>Empty Type</Dropzone>
    <Dropzone type='group' active={'2'} item={{ uniqid: '4', name: 'g3' }}>Group Type</Dropzone>
    <Dropzone type='empty' active={'2'} item={{ uniqid: '4', name: 'g3' }}>Empty Type</Dropzone>
    <Dropzone type='group' active={'2'} item={{ uniqid: '5', name: 'g4' }}>Group Type</Dropzone>
    <Dropzone type='empty' active={'2'} item={{ uniqid: '5', name: 'g4' }}>Empty Type</Dropzone>
    <Dropzone type='group-out' active={'2'} item={{ uniqid: '-1' }}>Title</Dropzone>
  </div>
)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
