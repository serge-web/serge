import React, { useState } from 'react'
import { StoryFC } from 'src/custom-types'
// Import component files
import { watuWargame } from 'src/mocks'

import { noop } from 'lodash'
import docs from './README.md'
import RolesAccordion from './index'

const forcesMock = watuWargame.data.forces.forces

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingForces/RolesAccordion',
  component: RolesAccordion,
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
  return <RolesAccordion
    data={data}
    handleChangeForce={(nextData): void => setData(nextData)}
    forces={forcesMock}
    onNewRoleAdded={noop}
  />
}

Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
