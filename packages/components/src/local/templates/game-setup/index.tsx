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
  onPressBack,
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
  onSidebarChannelsClick,
  onCreateChannel,
  onDeleteChannel,
  onDuplicateChannel,
  selectedChannel,
  onSave,
  messageTemplates,
  onSaveGameTitle,
  onWargameInitiate,
  iconUploadUrl,
  onRoleDelete
}: Props) => {
  const currentActiveTab = wargame?.currentTab || activeTab

  return (
    <AdminLayout onSave={onSaveGameTitle} wargame={wargame} activeTab={currentActiveTab} onPressBack={onPressBack} tabs={tabs} onTabChange={onTabChange} wargameChanged={wargameChanged}>
      <AdminContent>
        {
          currentActiveTab === 'overview' && (
            <SettingOverview
              overview={overview}
              onChange={onOverviewChange}
              onSave={onSave}
              initiateWargame={onWargameInitiate}
              wargameInitiated={wargame.wargameInitiated}
            />
          )
        }
        {
          currentActiveTab === 'platform_types' && (
            <SettingPlatformTypes
              iconUploadUrl={iconUploadUrl}
              platformType={platformTypes}
              onChange={onPlatformTypesChange}
              onSave={onSave}
            />
          )
        }
        {
          currentActiveTab === 'forces' && (
            <SettingForces
              iconUploadUrl={iconUploadUrl}
              forces={forces}
              onChange={onForcesChange}
              onSave={onSave}
              onSidebarClick={onSidebarForcesClick}
              onCreate={onCreateForce}
              onDelete={onDeleteForce}
              selectedForce={selectedForce}
              platformTypes={platformTypes?.platformTypes}
              onRoleDelete={onRoleDelete}
            />
          )
        }
        {
          currentActiveTab === 'channels' && (
            <SettingChannels
              channels={channels}
              onChange={onChannelsChange}
              onSave={onSave}
              onSidebarClick={onSidebarChannelsClick}
              onCreate={onCreateChannel}
              onDelete={onDeleteChannel}
              onDuplicate={onDuplicateChannel}
              forces={forces}
              selectedChannel={selectedChannel}
              messageTemplates={messageTemplates}
            />
          )
        }
      </AdminContent>
    </AdminLayout>
  )
}

export default GameSetup
