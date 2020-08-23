import React from 'react'

// Import component files
import AdminLayout from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div>{storyFn()}</div>
import { WargameMock as wargame } from '@serge/mocks'
import { adminTabs } from '@serge/mocks'

export default {
  title: 'local/GameAdmin/AdminLayout',
  component: AdminLayout,
  decorators: [withKnobs, wrapper],
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

export const Default: React.FC = () => <AdminLayout wargame={wargame} tabs={adminTabs} onClick={onClick}>Content</AdminLayout>

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
