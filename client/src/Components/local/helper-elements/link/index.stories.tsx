import React from 'react'
import { StoryFC } from 'src/custom-types'
// Import component files
import Link from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => (
  <div style={{ height: '600px' }}>{storyFn()}</div>
)

export default {
  title: 'local/helper-elements/link',
  component: Link,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
  console.log('clicked', e)
}

export const Default: StoryFC = () => (
  <Link 
    onClick={onClick} 
    disabled={false}>
    Title
  </Link>
)

// Set the story parameters for the Default story
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
