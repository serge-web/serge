import React, { useState } from 'react'

// Import component files
import PlatformTypes from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

import { platformType as platformTypeMock } from '@serge/mocks'
import { PlatformType } from '@serge/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/PlatformTypes',
  component: PlatformTypes,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [platformType, setPlatformType] = useState<PlatformType>(platformTypeMock)

  const onChange = (netPlatformType: PlatformType): void => {
    setPlatformType(netPlatformType)
  }

  return <PlatformTypes platformType={platformType} onChange={onChange} />
}

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
