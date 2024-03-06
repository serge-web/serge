import { AdminTabs } from 'src/config'
import React from 'react'
import AdminContent from '../../atoms/admin-content'
import AdminLayout from '../../organisms/admin-layout'
import SettingChannels from '../../organisms/setting-channels'
import SettingForces from '../../organisms/setting-forces'
import SettingOverview from '../../organisms/setting-overview'
import SettingTemplate from '../../organisms/setting-templetes'
import Props from './types/props'

/* Render component */
export const GameSetup: React.FC<Props> = ({
  overview,
  forces,
  channels,
  onTabChange,
  onPressBack,
  wargame,
  tabs = [],
  wargameChanged,
  activeTab = '',
  onOverviewChange,
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
  onCreateTemplete,
  onDeleteTemplete,
  onDuplicateTemplete,
  onTemplateChange,
  selectedTemplate,
  onSidebarTemplatesClick,
  selectedChannel,
  onSave,
  messageTemplates,
  onSaveGameTitle,
  onWargameInitiate,
  iconUploadUrl,
  customDeleteHandler
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
              customDeleteHandler={customDeleteHandler}
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
          currentActiveTab === AdminTabs.Templates && (
            <SettingTemplate
              templates={messageTemplates}
              onSidebarClick={onSidebarTemplatesClick}
              onChange={onTemplateChange}
              onSave={onSave}
              onCreate={onCreateTemplete}
              onDelete={onDeleteTemplete}
              onDuplicate={onDuplicateTemplete}
              selectedTemplate={selectedTemplate}
            />
          )
        }
      </AdminContent>
    </AdminLayout>
  )
}

export default GameSetup
