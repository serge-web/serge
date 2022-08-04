import React, { useState } from 'react'

// Import component files
import SettingsForceOverview from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { watuWargame } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '300px' }}>{storyFn()}</div>

const forcesMock = watuWargame.data.forces.forces

export default {
  title: 'local/organisms/SettingForces/SettingsForceOverview',
  component: SettingsForceOverview,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
export const Default: React.FC = () => {
  const [data, setData] = useState(forcesMock[0])
  return <SettingsForceOverview data={data} handleChangeForce={(nextData): void => setData(nextData)} />
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
