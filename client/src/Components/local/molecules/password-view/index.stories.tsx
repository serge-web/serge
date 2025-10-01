import React, { useState } from 'react'
import { StoryFC } from 'src/custom-types'
// Import component files
import PasswordView from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/PasswordView',
  component: PasswordView,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: StoryFC = () => {
  const [value, setValue] = useState('Password')
  const onChange = (nextValue: string): void => {
    setValue(nextValue)
  }
  return <PasswordView value={value} onChange={onChange}>Title</PasswordView>
}

Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
