import React from 'react'
import AdminContent from '../../atoms/admin-content'
import AdminLayout from '../../organisms/admin-layout'
import SettingOverview from '../../organisms/setting-overview'
import SettingPlatformTypes from '../../organisms/setting-platform-types'
import SettingForces from '../../organisms/setting-forces'
import SettingChannels from '../../organisms/setting-channels'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Render component */
export const GameSetup: React.FC<Props> = ({
  overview,
  platformTypes,
  forces,
  channels,
  onTabChange,
  wargame,
  tabs = [],
  wargameChanged,
  activeTab = '',
  onOverviewChange,
  onPlatformTypesChange,
  onForcesChange,
  onChannelsChange,
  onSave,
  messageTemplates
}: Props) => (
  <AdminLayout wargame={wargame} activeTab={tabs[activeTab]} tabs={tabs} onTabChange={onTabChange} wargameChanged={wargameChanged}>
    <AdminContent>
      {
        activeTab === 'overview' && (
          <SettingOverview
            overview={overview}
            onChange={onOverviewChange}
            onSave={onSave}
          />
        )
      }
      {
        activeTab === 'platform_types' && (
          <SettingPlatformTypes
            platformType={platformTypes}
            onChange={onPlatformTypesChange}
            onSave={onSave}
          />
        )
      }
      {
        activeTab === 'forces' && (
          <SettingForces
            forces={forces}
            onChange={onForcesChange}
            onSave={onSave}
          />
        )
      }
      {
        activeTab === 'channels' && (
          <SettingChannels
            channels={channels}
            onChange={onChannelsChange}
            onSave={onSave}
            forces={forces}
            messages={messageTemplates}
          />
        )
      }
    </AdminContent>
  </AdminLayout>
)

export default GameSetup
