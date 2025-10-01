/* global it expect */
import React, { useState } from 'react'
import renderer from 'react-test-renderer'
import GameSetup from './index'
import {
  WargameExportedMock,
  MessageTemplatesMock,
  adminTabs
} from 'src/mocks'
import {
  ChannelTypes,
  ForceData,
  Wargame,
  WargameOverview
} from 'src/custom-types'

const Component = (): React.ReactElement => {
  const initialWargame: Wargame = {
    ...WargameExportedMock,
    data: {
      ...WargameExportedMock.data
    }
  }

  const [wargame, setWargame] = useState<Wargame>(initialWargame)
  const [isWargameChanged, setWargameChanged] = useState<boolean>(false)
  const [changedOverview, setChangedOverview] = useState<WargameOverview>(wargame.data.overview)
  const [changedForces, setChangedForces] = useState<Array<ForceData>>(wargame.data.forces.forces)
  const [changedChannels, setChangedChannels] = useState<Array<ChannelTypes>>(wargame.data.channels.channels || [])
  const [activeTab, setActiveTab] = useState<number>(0)

  const onTabChange = (_tab: string, key: number, _e: any): void => {
    setActiveTab(key)
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
    console.log(updates)
  }

  const onOverviewChange = (nextOverview: WargameOverview): void => {
    setChangedOverview(nextOverview)
    setWargameChanged(true)
  }

  const onForcesChange = (updates: { forces: Array<ForceData> }): void => {
    setChangedForces(updates.forces)
    setWargameChanged(true)
  }

  const onChannelsChange = (updates: { channels: Array<ChannelTypes> }): void => {
    setChangedChannels(updates.channels)
    setWargameChanged(true)
  }

  const onWargameInitiated = (): void => {
    setWargame({
      ...wargame,
      wargameInitiated: true
    })
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
      forces={changedForces}
      channels={changedChannels}
      onOverviewChange={onOverviewChange}
      onForcesChange={onForcesChange}
      onChannelsChange={onChannelsChange}
      onSave={onSave}
      messageTemplates={MessageTemplatesMock}
      onWargameInitiate={onWargameInitiated}
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
