import React, { useState } from 'react'

// Import component files
import RolesAccordion from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { forces as forcesMock } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingForces/RolesAccordion',
  component: RolesAccordion,
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
  return <RolesAccordion
    data={data}
    handleChangeForce={(nextData): void => setData(nextData)}
    forces={forcesMock}
  />
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
