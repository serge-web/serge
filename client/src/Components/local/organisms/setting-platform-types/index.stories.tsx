import React from 'react'

// Import component files
import SettingPlatformTypes from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { platformType as platformTypeMock } from '@serge/mocks'
import { PlatformType } from 'src/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingPlatformTypes',
  component: SettingPlatformTypes,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const onChange = (netPlatformType: PlatformType): void => {
    console.log('p-type change', netPlatformType)
  }

  const onSave = (netPlatformType: PlatformType): void => {
    console.log('p-type save', netPlatformType)
  }

  return <SettingPlatformTypes platformType={platformTypeMock} onChange={onChange} onSave={onSave} />
}

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
