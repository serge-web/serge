import React, { useState } from 'react'
import {
  WargameExportedMock,
  MessageTemplatesMock,
  adminTabs,
  platformType as platformTypeMock
} from '@serge/mocks'
import {
  ChannelTypes,
  ForceData,
  PlatformType,
  Wargame,
  WargameOverview,
  AnnotationMarkerData
} from '@serge/custom-types'

// Import component files
import GameSetup from './index'
import docs from './README.md'
import { iconUploaderPath } from '@serge/config'

export default {
  title: 'local/templates/GameSetup',
  component: GameSetup,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
export const Default: React.FC = () => {
  const initialWargame: Wargame = {
    ...WargameExportedMock,
    data: {
      ...WargameExportedMock.data,
      platformTypes: platformTypeMock
    },
    wargameInitiated: false
  }

  const [wargame, setWargame] = useState<Wargame>(initialWargame)
  const [isWargameChanged, setWargameChanged] = useState<boolean>(false)
  const [, setChangedOverview] = useState<WargameOverview>(wargame.data.overview)
  const [changedPlatformType, setChangedPlatformType] = useState<PlatformType | undefined>(wargame.data.platformTypes)
  const [changedForces, setChangedForces] = useState<Array<ForceData>>(wargame.data.forces.forces)
  const [changedChannels, setChangedChannels] = useState<Array<ChannelTypes>>(wargame.data.channels.channels || [])
  const [activeTab, setActiveTab] = useState<number>(0)

  const onTabChange = (_tab: string, key: number, _e?: React.MouseEvent<HTMLDivElement>): void => {
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

  const onSave = (updates: any): void => {
    console.log('GameSetup, updates:', updates)
  }

  const onOverviewChange = (nextOverview: WargameOverview): void => {
    console.log('new overview', nextOverview)
  }

  const onPlatformTypesChange = (nextPlatformType: PlatformType): void => {
    console.log('new platform type', nextPlatformType)
  }

  const onForcesChange = (updates: { forces: Array<ForceData> }): void => {
    console.log('new forces', updates.forces)
  }

  const onChannelsChange = (updates: { channels: Array<ChannelTypes> }): void => {
    console.log('new channels', updates.channels)
  }

  const onSaveGameTitle = (update: string): void => {
    console.log(update)
  }

  const onWargameInitiated = (): void => {
    const updatedWargame = {
      ...wargame,
      wargameInitiated: true
    }
    setWargame(updatedWargame)
  }

  const onAnnotationChange = (nextPlatformType: AnnotationMarkerData): void => {
    console.log('new platform type', nextPlatformType)
  }

  return (
    <GameSetup
      activeTab={adminTabs[activeTab]}
      tabs={adminTabs}
      wargame={wargame}
      wargameChanged={isWargameChanged}
      onTabChange={onTabChange}
      overview={wargame.data.overview}
      platformTypes={changedPlatformType}
      forces={changedForces}
      channels={changedChannels}
      onOverviewChange={onOverviewChange}
      onPlatformTypesChange={onPlatformTypesChange}
      onForcesChange={onForcesChange}
      onChannelsChange={onChannelsChange}
      onSave={onSave}
      messageTemplates={MessageTemplatesMock}
      onSaveGameTitle={onSaveGameTitle}
      onWargameInitiate={onWargameInitiated}
      availablePlatformTypes={platformTypeMock.platformTypes}
      iconUploadUrl={iconUploaderPath}
      onAnnotationChange={onAnnotationChange}
    />
  )
}
