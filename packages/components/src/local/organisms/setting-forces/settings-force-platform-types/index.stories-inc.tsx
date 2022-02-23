import React, { useState } from 'react'

// Import component files
import AssetsAccordion from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { smallScaleForces as forcesMock, platformTypes as platformTypesMock } from '@serge/mocks'
import { ForceData } from '@serge/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingForces/AssetsAccordion',
  component: AssetsAccordion,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
export const Default: React.FC = () => {
  const [force, setForce] = useState(forcesMock[1])
  const updateForce = (nextForce: ForceData): void => {
    if(nextForce.uniqid !== force.uniqid) {
      setForce(nextForce)
    }
  }
  return <AssetsAccordion
    selectedForce={force}
    forcesData={forcesMock}
    platformTypes={platformTypesMock}
    onChangeHandler={(nextForce): void => { updateForce(nextForce)}}
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
