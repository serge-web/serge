import React from 'react'
import { StoryFC } from 'src/custom-types'

// Import component files
import CollapsibleHeader from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/helper-elements/collapsible/CollapsibleHeader',
  component: CollapsibleHeader,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onClick = (): void => {
  console.log('clicked')
}

export const Default: StoryFC = () => <CollapsibleHeader onClick={onClick}>Header</CollapsibleHeader>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
