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
  onCreateForce,
  onDeleteForce,
  onSidebarForcesClick,
  selectedForce,
  onChannelsChange,
  onSave,
  messageTemplates
}: Props) => {
  const currentActiveTab = wargame?.currentTab || activeTab

  return (
    <AdminLayout wargame={wargame} activeTab={currentActiveTab} tabs={tabs} onTabChange={onTabChange} wargameChanged={wargameChanged}>
      <AdminContent>
        {
          currentActiveTab === 'overview' && (
            <SettingOverview
              overview={overview}
              onChange={onOverviewChange}
              onSave={onSave}
            />
          )
        }
        {
          currentActiveTab === 'platform_types' && (
            <SettingPlatformTypes
              platformType={platformTypes}
              onChange={onPlatformTypesChange}
              onSave={onSave}
            />
          )
        }
        {
          currentActiveTab === 'forces' && (
            <SettingForces
              forces={forces}
              onChange={onForcesChange}
              onSave={onSave}
              onSidebarClick={onSidebarForcesClick}
              onCreate={onCreateForce}
              onDelete={onDeleteForce}
              selectedForce={selectedForce}
            />
          )
        }
        {
          currentActiveTab === 'channels' && (
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
}

export default GameSetup
