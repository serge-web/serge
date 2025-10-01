import React from 'react'
import Tabs from './index'
import docs from './README.md'
import { StoryFC } from 'src/custom-types'

import { adminTabs } from 'src/mocks'

const wrapper: React.FC = (storyFn: any) => (
  <div style={{ height: '600px' }}>{storyFn()}</div>
)

export default {
  title: 'local/atoms/Tabs',
  component: Tabs,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onChange = (): void => {
  console.log('clicked')
}

export const Default: StoryFC = () => (
  <Tabs onChange={onChange} tabs={adminTabs}>
    Title
  </Tabs>
)

Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
