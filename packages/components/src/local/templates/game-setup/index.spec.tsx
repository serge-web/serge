/* global it expect */
import React, { useState } from 'react'
import renderer from 'react-test-renderer'
import GameSetup from './index'
import {
  WargameExportedMock,
  MessageTemplatesMock,
  adminTabs,
  platformType as platformTypeMock
} from '@serge/mocks'
import {
  ChannelData,
  ForceData,
  PlatformType,
  Wargame,
  WargameOverview
} from '@serge/custom-types'

const Component = () => {
  const initialWargame: Wargame = {
    ...WargameExportedMock,
    data: {
      ...WargameExportedMock.data,
      platformTypes: platformTypeMock
    }
  }

  const [wargame, setWargame] = useState<Wargame>(initialWargame)
  const [isWargameChanged, setWargameChanged] = useState<boolean>(false)
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

  const onSave = (): void => {
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

  const onPlatformTypesChange = (nextPlatformType: PlatformType): void => {
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
    <GameSetup
      activeTab={adminTabs[activeTab]}
      tabs={adminTabs}
      wargame={wargame}
      wargameChanged={isWargameChanged}
      onTabChange={onTabChange}
      overview={changedOverview}
      platformTypes={changedPlatformType}
      forces={changedForces}
      channels={changedChannels}
      onOverviewChange={onOverviewChange}
      onPlatformTypesChange={onPlatformTypesChange}
      onForcesChange={onForcesChange}
      onChannelsChange={onChannelsChange}
      onSave={onSave}
      messageTemplates={MessageTemplatesMock}
    />
  )
}

describe('GameSetup component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Component />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
