import React, { useState } from 'react'

// Import component files
import SettingForces from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { watuWargame } from 'src/mocks'
import { ForceData } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const forcesMock = watuWargame.data.forces.forces

export default {
  title: 'local/organisms/SettingForces',
  component: SettingForces,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

export const Default: React.FC = () => {
  const [data, setData] = useState(forcesMock)

  const onChange = (updates: { forces: Array<ForceData> }): void => {
    console.log('change', updates.forces[0].roles[1])
  }
  const onSave = (forces: ForceData[]): void => {
    console.log('Save data', forces[0].roles[1])
    setData(forces)
  }

  const onRejectedIcon = (rejected: any): void => {
    console.log(rejected)
  }

  return <SettingForces forces={data} onChange={onChange} onSave={onSave} onRejectedIcon={onRejectedIcon} />
}
