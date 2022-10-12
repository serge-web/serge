import React from 'react'

// Import component files
import Groups from './index'
import { GroupItem } from '@serge/custom-types'
import docs from './README.md'
import { withKnobs, boolean } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/helper-elements/Groups',
  component: Groups,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const items: Array<GroupItem> = [
  { uniqid: 1, name: 'Item 1', comprising: [{ uniqid: 7, name: 'item 7' }, { uniqid: 8, name: 'item 8' }] },
  { uniqid: 2, name: 'Item 2' },
  { uniqid: 3, name: 'Item 3' },
  { uniqid: 4, name: 'Item 4', comprising: [{ uniqid: 9, name: 'item 9' }] },
  { uniqid: 5, name: 'Item 5' },
  { uniqid: 6, name: 'Item 6' }
]

export const Default: React.FC = () => <Groups canOrganise={boolean('Player can organise assets', true)} items={items} />

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
