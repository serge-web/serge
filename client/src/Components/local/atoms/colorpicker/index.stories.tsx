import React, { useState } from 'react'

// Import component files
import Colorpicker from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/atoms/Colorpicker',
  component: Colorpicker,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [value, setValue] = useState('orange')
  const handleChange = (nextColor: string): void => {
    setValue(nextColor)
  }

  return <Colorpicker value={value} onChange={handleChange} />
}
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
