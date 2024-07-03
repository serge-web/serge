import React from 'react'

// Import component files
import Link from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

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

export const Default: React.FC = () => <Link
  onClick={onClick}
  disabled={false} >Title</Link>

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
