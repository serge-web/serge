import React, { useState } from 'react'

/* Import component files */
import AdminLayout from './index'
import SettingOverview, { WargameOverview } from '../setting-overview'
import SettingForces from '../setting-forces'
import { WargameExportedMock, adminTabs, MessageTemplatesMock } from 'src/mocks'
import SettingChannels, { ChannelTypes } from '../setting-channels'
import TemplateEditor from '../setting-templates'

import docs from './README.md'
// import { withKnobs } from '@storybook/addon-knobs'
import { ForceData, Wargame, TemplateBody } from 'src/custom-types'
import { AdminContent } from '../../atoms/admin-content'

const wrapper: React.FC = (storyFn: any) => <div>{storyFn()}</div>

export default {
  title: 'local/organisms/AdminLayout',
  component: AdminLayout,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const wargameInit: Wargame = WargameExportedMock

wargameInit.data.templates.templates = MessageTemplatesMock

export const Default: React.FC = (args) => {
  const [wargame, setWargame] = useState<Wargame>(wargameInit)
  const [wargameChanged, setWargameChanged] = useState<boolean>(false)
  const [changedOverview, setChangedOverview] = useState<WargameOverview>(wargame.data.overview)
  const [changedForces, setChangedForces] = useState<Array<ForceData>>(wargame.data.forces.forces)
  const [changedChannels, setChangedChannels] = useState<Array<ChannelTypes>>(wargame.data.channels.channels || [])
  const [changedTemplates, setChangedTemplates] = useState<Array<TemplateBody>>(wargame.data.templates.templates)
  const [activeTab, setActiveTab] = useState<number>(0)

  const onTabChange = (_tab: string, key: number, _e: any): void => {
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

  const handleSave = (): void => {
    setWargame({
      ...wargame,
      data: {
        ...wargame.data,
        overview: changedOverview,
        forces: {
          ...wargame.data.forces,
          forces: changedForces
        },
        channels: {
          ...wargame.data.channels,
          channels: changedChannels
        },
        templates: {
          ...wargame.data.templates,
          templates: changedTemplates
        }
      }
    })
    setWargameChanged(false)
  }

  const onOverviewChange = (nextOverview: WargameOverview): void => {
    console.log(nextOverview)
  }

  const onForcesChange = (updates: { forces: Array<ForceData> }): void => {
    console.log(updates.forces)
  }

  const onChannelsChange = (updates: { channels: Array<ChannelTypes> }): void => {
    setChangedChannels(updates.channels)
    setWargameChanged(true)
  }

  const onTemplateChange = (updates: { templates: Array<TemplateBody> }) => {
    setChangedTemplates(updates.templates)
    setWargameChanged(true)
  }

  const handleInitiateWargame = (): void => {
    // TODO: handler for this event
    setWargameChanged(true)
  }

  console.log(activeTab)

  return (
    <AdminLayout wargame={wargame} activeTab={adminTabs[activeTab]} tabs={adminTabs} onTabChange={onTabChange} wargameChanged={wargameChanged}>
      <AdminContent>
        {
          activeTab === 0 &&
          <SettingOverview wargameInitiated overview={changedOverview} onChange={onOverviewChange} onSave={handleSave} initiateWargame={handleInitiateWargame} {...args} />
        }
        {activeTab === 1 && <SettingForces forces={wargame.data.forces.forces} 
          onChange={onForcesChange} onSave={handleSave} />}
        {activeTab === 2 && <SettingChannels
          channels={changedChannels}
          onChange={onChannelsChange}
          onSave={handleSave}
          forces={wargame.data.forces.forces}
          messageTemplates={changedTemplates}
        />}
        {activeTab === 3 && <TemplateEditor
          templates={changedTemplates}
          onChange={onTemplateChange}
          onSave={handleSave}
        />}
      </AdminContent>
    </AdminLayout>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
