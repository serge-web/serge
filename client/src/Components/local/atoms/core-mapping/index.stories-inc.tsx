import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CoreMapping from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/CoreMapping',
  component: CoreMapping,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  return (
    <CoreMapping />
  )
}
