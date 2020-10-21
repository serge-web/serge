import React, { useState } from 'react'

/* Import component files */
import AdminLayout from './index'
import Overview, { WargameOverview } from '../overview'
import PlatformTypes, { PlatformType } from '../platform-types'
import Forces, { ForceData } from '../forces'
import Channels, { ChannelData } from '../channels'

// import Forces from '../forces'

import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { WargameExportedMock, MessageTemplatesMock, adminTabs, platformType as platformTypeMock } from '@serge/mocks'

import { Wargame } from '@serge/custom-types'
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
  ...WargameExportedMock,
  data: {
    ...WargameExportedMock.data,
    platformTypes: platformTypeMock
  }
}

export const Default: React.FC = () => {
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
    setChangedOverview(nextOverview)
    setWargameChanged(true)
  }

  const onPlatformChange = (nextPlatformType: PlatformType): void => {
    setChangedPlatformType(nextPlatformType)
    setWargameChanged(true)
  }

  const onForcesChange = (nextForces: Array<ForceData>): void => {
    setChangedForces(nextForces)
    setWargameChanged(true)
  }

  const onChannelsChange = (nextChannels: Array<ChannelData>): void => {
    setChangedChannels(nextChannels)
    setWargameChanged(true)
  }

  return (
    <AdminLayout wargame={wargame} tabs={adminTabs} onTabChange={onTabChange} wargameChanged={wargameChanged}>
      <Content>
        {activeTab === 0 && <Overview overview={changedOverview} onChange={onOverviewChange} onSave={handleSave} />}
        {activeTab === 1 && <PlatformTypes platformType={changedPlatformType} onChange={onPlatformChange} onSave={handleSave} />}
        {activeTab === 2 && <Forces forces={changedForces} onChange={onForcesChange} onSave={handleSave} />}
        {activeTab === 3 && <Channels
          channels={changedChannels}
          onChange={onChannelsChange}
          onSave={handleSave}
          forces={wargame.data.forces.forces}
          messages={MessageTemplatesMock}
        />}
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
