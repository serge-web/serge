import React, { useState } from 'react'
import {
  WargameExportedMock,
  MessageTemplatesMock,
  adminTabs
} from 'src/mocks'
import {
  ChannelTypes,
  ForceData,
  TemplateBody,
  Wargame,
  WargameOverview
} from 'src/custom-types'

// Import component files
import GameSetup from './index'
import docs from './README.md'
import { iconUploaderPath } from 'src/config'

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
    wargameInitiated: false
  }

  initialWargame.data.templates.templates = MessageTemplatesMock

  const [wargame, setWargame] = useState<Wargame>(initialWargame)
  const [isWargameChanged, setWargameChanged] = useState<boolean>(false)
  const [, setChangedOverview] = useState<WargameOverview>(wargame.data.overview)
  const [changedForces, setChangedForces] = useState<Array<ForceData>>(wargame.data.forces.forces)
  const [changedChannels, setChangedChannels] = useState<Array<ChannelTypes>>(wargame.data.channels.channels || [])
  const [changedTemplates, setChangedTemplates] = useState<Array<TemplateBody>>(wargame.data.templates.templates || [])

  const [activeTab, setActiveTab] = useState<number>(0)

  const onTabChange = (_tab: string, key: number, _e?: React.MouseEvent<HTMLDivElement>): void => {
    setActiveTab(key)
    setChangedOverview(wargame.data.overview)
    setChangedForces(wargame.data.forces.forces)
    setChangedChannels(wargame.data.channels.channels || [])
    setChangedTemplates(wargame.data.templates.templates)
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

  const onForcesChange = (updates: { forces: Array<ForceData> }): void => {
    console.log('new forces', updates.forces)
  }

  const onChannelsChange = (updates: { channels: Array<ChannelTypes> }): void => {
    console.log('new channels', updates.channels)
  }

  const onTemplatesChange = (updates: { templates: Array<TemplateBody> }): void => {
    setChangedTemplates(updates.templates)
    setWargameChanged(true)
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

  return (
    <GameSetup
      activeTab={adminTabs[activeTab]}
      tabs={adminTabs}
      wargame={wargame}
      wargameChanged={isWargameChanged}
      onTabChange={onTabChange}
      overview={wargame.data.overview}
      forces={changedForces}
      channels={changedChannels}
      onOverviewChange={onOverviewChange}
      onForcesChange={onForcesChange}
      onChannelsChange={onChannelsChange}
      onTemplateChange={onTemplatesChange}
      onSave={onSave}
      templates={changedTemplates}
      onSaveGameTitle={onSaveGameTitle}
      onWargameInitiate={onWargameInitiated}
      iconUploadUrl={iconUploaderPath}
    />
  )
}
