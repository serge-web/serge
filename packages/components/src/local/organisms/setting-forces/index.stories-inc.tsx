import React from 'react'

// Import component files
import SettingForces from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { forces as forcesMock, platformTypes as platformTypesMock } from '@serge/mocks'
import { ForceData } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingForces',
  component: SettingForces,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
export const Default: React.FC = () => {
  const onChange = (updates: {forces: Array<ForceData>}): void => {
    console.log(updates)
  }
  const onSave = (forces: ForceData[]): void => {
    console.log('Your save logic', forces)
  }

  const onRejectedIcon = (rejected: any): void => {
    console.log(rejected)
  }

  return <SettingForces forces={forcesMock} onChange={onChange} onSave={onSave} platformTypes={platformTypesMock} onRejectedIcon={onRejectedIcon} />
}

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
