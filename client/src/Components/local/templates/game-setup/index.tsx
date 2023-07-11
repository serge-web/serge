import { AdminTabs } from 'src/config'
import React from 'react'
import AdminContent from '../../atoms/admin-content'
import AdminLayout from '../../organisms/admin-layout'
import SettingChannels from '../../organisms/setting-channels'
import SettingForces from '../../organisms/setting-forces'
import SettingOverview from '../../organisms/setting-overview'
import SettingPlatformTypes from '../../organisms/setting-platform-types'
import SettingAnnotations from '../../organisms/setting-annotation'
import Props from './types/props'

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
  onDeletePlatformType,
  onDuplicatePlatformType,
  onForcesChange,
  onCreateForce,
  onDeleteForce,
  onDuplicateForce,
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
  customDeleteHandler,
  onDeleteAsset,
  annotation,
  onAnnotationChange,
  onDeleteAnnotation,
  onDuplicateAnnotation
}: Props) => {
  const currentActiveTab = wargame?.currentTab || activeTab
  return (
    <AdminLayout onSave={onSaveGameTitle} wargame={wargame} activeTab={currentActiveTab} onPressBack={onPressBack} tabs={tabs} onTabChange={onTabChange} wargameChanged={wargameChanged}>
      <AdminContent>
        {
          currentActiveTab === AdminTabs.Overview && (
            <SettingOverview
              overview={overview}
              onChange={onOverviewChange}
              onSave={onSave}
              initiateWargame={onWargameInitiate}
              wargameInitiated={!!wargame.wargameInitiated}
            />
          )
        }
        {
          currentActiveTab === AdminTabs.PlatformTypes && (
            <SettingPlatformTypes
              iconUploadUrl={iconUploadUrl}
              platformType={platformTypes}
              onChange={onPlatformTypesChange}
              onSave={onSave}
              onDelete={onDeletePlatformType}
              onDuplicate={onDuplicatePlatformType}
            />
          )
        }
        {
          currentActiveTab === AdminTabs.Forces && (
            <SettingForces
              iconUploadUrl={iconUploadUrl}
              forces={forces}
              onChange={onForcesChange}
              onSave={onSave}
              onSidebarClick={onSidebarForcesClick}
              onCreate={onCreateForce}
              onDelete={onDeleteForce}
              onDuplicate={onDuplicateForce}
              selectedForce={selectedForce}
              platformTypes={platformTypes?.platformTypes}
              customDeleteHandler={customDeleteHandler}
              onDeleteAsset={onDeleteAsset}
            />
          )
        }
        {
          currentActiveTab === AdminTabs.Channels && (
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
        {
          currentActiveTab === AdminTabs.Annotations && (
            <SettingAnnotations
              iconUploadUrl={iconUploadUrl}
              annotation={annotation}
              onChange={onAnnotationChange}
              onSave={onSave}
              onDelete={onDeleteAnnotation}
              onDuplicate={onDuplicateAnnotation}
            />
          )
        }
      </AdminContent>
    </AdminLayout>
  )
}

export default GameSetup
