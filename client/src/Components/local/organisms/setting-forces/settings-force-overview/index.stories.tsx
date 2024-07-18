import React, { useState } from 'react'
import { StoryFC } from 'src/custom-types'

// Import component files
import SettingsForceOverview from './index'
import docs from './README.md'

import { watuWargame } from 'src/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '300px' }}>{storyFn()}</div>

const forcesMock = watuWargame.data.forces.forces

export default {
  title: 'local/organisms/SettingForces/SettingsForceOverview',
  component: SettingsForceOverview,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
export const Default: StoryFC = () => {
  const [data, setData] = useState(forcesMock[0])
  return <SettingsForceOverview data={data} handleChangeForce={(nextData): void => setData(nextData)} />
}

Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
