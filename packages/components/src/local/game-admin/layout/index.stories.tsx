import React, { useState } from 'react'

// Import component files
import AdminLayout from './index'
import PlatformTypes from '../platform-types'

import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { WargameMock, adminTabs } from '@serge/mocks'
import { platformType as platformTypeMock } from '@serge/mocks'
import { PlatformType, Wargame } from '@serge/custom-types'

import { Content } from '../content'

const wrapper: React.FC = (storyFn: any) => <div>{storyFn()}</div>

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

const wargameInit: Wargame = {
  ...WargameMock,
  data: {
    ...WargameMock.data,
    platformTypes: platformTypeMock
  }
}

export const Default: React.FC = () => {
  const [wargame, setWargame] = useState<Wargame>(wargameInit)
  const [wargameChanged, setWargameChanged] = useState<boolean>(false)
  const [changedPlatformType, setChangedPlatformType] = useState<PlatformType | undefined>(wargame.data.platformTypes)
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleSave = (): void => {
    setWargame({
      ...wargame,
      data: {
        ...wargame.data,
        platformTypes: changedPlatformType
      }
    })
    setWargameChanged(false)
  }

  const onPlatformChange = (nextPlatformType: PlatformType): void => {
    setChangedPlatformType(nextPlatformType)
    setWargameChanged(true)
  }

  const onTabChange = (_tab: string, key: number, _e: any): void => {
    setActiveTab(key)
    setChangedPlatformType(wargame.data.platformTypes)
    setWargameChanged(false)
  }

  return (
    <AdminLayout wargame={wargame} tabs={adminTabs} onTabChange={onTabChange} wargameChanged={wargameChanged}>
      <Content>
        {activeTab === 0 && 'overview'}
        {activeTab === 1 && <PlatformTypes platformType={changedPlatformType} onChange={onPlatformChange} onSave={handleSave} />}
        {activeTab === 2 && 'forces'}
        {activeTab === 3 && 'channels'}
      </Content>
    </AdminLayout>
  )
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
/*


const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

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
*/
