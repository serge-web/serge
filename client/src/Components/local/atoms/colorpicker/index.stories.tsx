import React, { useState } from 'react'
import { StoryFC } from 'src/custom-types'

// Import component files
import Colorpicker from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/atoms/Colorpicker',
  component: Colorpicker,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: StoryFC = () => {
  const [value, setValue] = useState('orange')
  const handleChange = (nextColor: string): void => {
    setValue(nextColor)
  }

  return <Colorpicker value={value} onChange={handleChange} />
}

Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
