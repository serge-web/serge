import React, { useState } from 'react'

/* Import component files */
import AdminLayout from './index'
import SettingOverview, { WargameOverview } from '../setting-overview'
import SettingPlatformTypes from '../setting-platform-types'
import SettingForces from '../setting-forces'
import { platformTypes as platformTypesMock, WargameExportedMock, MessageTemplatesMock, adminTabs, platformType as platformTypeMock } from '@serge/mocks'
import SettingChannels, { ChannelData } from '../setting-channels'

import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

import { ForceData, PlatformType, Wargame } from '@serge/custom-types'
import { AdminContent } from '../../atoms/admin-content'

const wrapper: React.FC = (storyFn: any) => <div>{storyFn()}</div>

export default {
  title: 'local/organisms/AdminLayout',
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
  ...WargameExportedMock,
  data: {
    ...WargameExportedMock.data,
    platformTypes: platformTypeMock
  }
}

export const Default: React.FC = (args) => {
  const [wargame, setWargame] = useState<Wargame>(wargameInit)
  const [wargameChanged, setWargameChanged] = useState<boolean>(false)
  const [changedOverview, setChangedOverview] = useState<WargameOverview>(wargame.data.overview)
  const [changedPlatformType, setChangedPlatformType] = useState<PlatformType | undefined>(wargame.data.platformTypes)
  const [changedForces, setChangedForces] = useState<Array<ForceData>>(wargame.data.forces.forces)
  const [changedChannels, setChangedChannels] = useState<Array<ChannelData>>(wargame.data.channels.channels || [])
  const [activeTab, setActiveTab] = useState<number>(0)

  const onTabChange = (_tab: string, key: number, _e: any): void => {
    setActiveTab(key)
    setChangedPlatformType(wargame.data.platformTypes)
    setChangedOverview(wargame.data.overview)
    setChangedForces(wargame.data.forces.forces)
    setChangedChannels(wargame.data.channels.channels || [])
    setWargameChanged(false)
    setWargame({
      ...wargame,
      currentTab: adminTabs[key]
    })
  }

  const handleSave = (): void => {
    setWargame({
      ...wargame,
      data: {
        ...wargame.data,
        overview: changedOverview,
        platformTypes: changedPlatformType,
        forces: {
          ...wargame.data.forces,
          forces: changedForces
        },
        channels: {
          ...wargame.data.channels,
          channels: changedChannels
        }
      }
    })
    setWargameChanged(false)
  }

  const onOverviewChange = (nextOverview: WargameOverview): void => {
    console.log(nextOverview)
  }

  const onPlatformChange = (nextPlatformType: PlatformType): void => {
    setChangedPlatformType(nextPlatformType)
    setWargameChanged(true)
  }

  const onForcesChange = (updates: {forces: Array<ForceData>}): void => {
    console.log(updates.forces)
  }

  const onChannelsChange = (updates: { channels: Array<ChannelData> }): void => {
    setChangedChannels(updates.channels)
    setWargameChanged(true)
  }

  const handleInitiateWargame = (): void => {
    // TODO: handler for this event
    console.log('wargame initiated')
    setWargameChanged(true)
  }

  return (
    <AdminLayout wargame={wargame} activeTab={adminTabs[activeTab]} tabs={adminTabs} onTabChange={onTabChange} wargameChanged={wargameChanged}>
      <AdminContent>

        { // @ts-ignore we're using knobs to provide wargameInitiated, prevent compiler complaining about it
          activeTab === 0 && <SettingOverview overview={changedOverview} onChange={onOverviewChange} onSave={handleSave} initiateWargame={handleInitiateWargame} {...args}/>}
        {activeTab === 1 && <SettingPlatformTypes platformType={changedPlatformType} onChange={onPlatformChange} onSave={handleSave} />}
        {activeTab === 2 && <SettingForces forces={wargame.data.forces.forces} platformTypes={platformTypesMock} onChange={onForcesChange} onSave={handleSave} />}
        {activeTab === 3 && <SettingChannels
          channels={changedChannels}
          onChange={onChannelsChange}
          onSave={handleSave}
          forces={wargame.data.forces.forces}
          messageTemplates={MessageTemplatesMock}
        />}
      </AdminContent>
    </AdminLayout>
  )
}

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  },
  args: {
    wargameInitiated: false
  }
}
