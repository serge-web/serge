import React, { useState } from 'react'

/* Import component files */
import AdminLayout from './index'
import SettingOverview, { WargameOverview } from '../setting-overview'
import SettingPlatformTypes from '../setting-platform-types'
import SettingForces from '../setting-forces'
import SettingAnnotations from '../setting-annotation'
import { platformTypes as platformTypesMock, WargameExportedMock, adminTabs, platformType as platformTypeMock, annotationMarkerData } from '@serge/mocks'
import SettingChannels, { ChannelTypes } from '../setting-channels'

import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { ForceData, PlatformType, Wargame, AnnotationMarkerData } from '@serge/custom-types'
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
    platformTypes: platformTypeMock,
    annotationIcons: annotationMarkerData
  }
}

export const Default: React.FC = (args) => {
  const [wargame, setWargame] = useState<Wargame>(wargameInit)
  const [wargameChanged, setWargameChanged] = useState<boolean>(false)
  const [changedOverview, setChangedOverview] = useState<WargameOverview>(wargame.data.overview)
  const [changedPlatformType, setChangedPlatformType] = useState<PlatformType | undefined>(wargame.data.platformTypes)
  const [changedAnnotation, setChangedAnnotation] = useState<AnnotationMarkerData | undefined>(wargame.data.annotationIcons)
  const [changedForces, setChangedForces] = useState<Array<ForceData>>(wargame.data.forces.forces)
  const [changedChannels, setChangedChannels] = useState<Array<ChannelTypes>>(wargame.data.channels.channels || [])
  const [activeTab, setActiveTab] = useState<number>(0)

  const onTabChange = (_tab: string, key: number, _e: any): void => {
    setActiveTab(key)
    setChangedPlatformType(wargame.data.platformTypes)
    setChangedAnnotation(wargame.data.annotationIcons)
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
        },
        annotationIcons: changedAnnotation
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

  const onForcesChange = (updates: { forces: Array<ForceData> }): void => {
    console.log(updates.forces)
  }

  const onChannelsChange = (updates: { channels: Array<ChannelTypes> }): void => {
    setChangedChannels(updates.channels)
    setWargameChanged(true)
  }

  const onAnnotationChange = (nextAnnotation: AnnotationMarkerData): void => {
    setChangedAnnotation(nextAnnotation)
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

        {
          activeTab === 0 &&
          <SettingOverview wargameInitiated overview={changedOverview} onChange={onOverviewChange} onSave={handleSave} initiateWargame={handleInitiateWargame} {...args} />
        }
        {activeTab === 1 && <SettingPlatformTypes platformType={changedPlatformType} onChange={onPlatformChange} onSave={handleSave} />}
        {activeTab === 2 && <SettingForces forces={wargame.data.forces.forces} platformTypes={platformTypesMock} onChange={onForcesChange} onSave={handleSave} />}
        {activeTab === 3 && <SettingChannels
          channels={changedChannels}
          onChange={onChannelsChange}
          onSave={handleSave}
          forces={wargame.data.forces.forces}
          messageTemplates={wargame.data.templates.templates}
        />}
        {activeTab === 4 && <SettingAnnotations annotation={changedAnnotation} onChange={onAnnotationChange} onSave={handleSave} />}
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
