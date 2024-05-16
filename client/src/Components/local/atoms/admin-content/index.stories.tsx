import React from 'react'

// Import component files
import { AdminContent, LeftSide, RightSide } from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/atoms/Content',
  component: AdminContent,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <AdminContent>
    <LeftSide>Menu</LeftSide>
    <RightSide>Content</RightSide>
  </AdminContent>
)
export const Main: React.FC = () => <AdminContent>Content</AdminContent>
export const Left: React.FC = () => <LeftSide>Menu</LeftSide>
export const Right: React.FC = () => <RightSide>Content</RightSide>

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
