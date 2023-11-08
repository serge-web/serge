import { AnnotationMarkerData, ForceData, IconOption, PlatformType, PlatformTypeData } from 'src/custom-types'
import { Item } from '../../molecules/sortable-list'
import AdminLayoutProps from '../../../organisms/admin-layout/types/props'
import { ChannelTypes } from '../../../organisms/setting-channels'
import { MessageTemplate } from '../../../organisms/setting-channels/types/props'
import { WargameOverview } from '../../../organisms/setting-overview'

export default interface Props extends AdminLayoutProps {
  /**
   * Game overview, retrieved from database
   */
  overview: WargameOverview
  /**
   * Platform types, retrieved from database
   */
  platformTypes?: PlatformType
  /**
   * Forces, retrieved from database
   */
  forces: Array<ForceData>
  /**
   * Channels, retrieved from database
   */
  channels: Array<ChannelTypes>
  /**
  * annotation types, retrieved from database
  */
  annotation?: AnnotationMarkerData
  /**
   * Callback on overview setting change events
   */
  onOverviewChange: (overview: WargameOverview) => void
  /**
   * Callback on platform types setting change events
   */
  onPlatformTypesChange: (platformType: PlatformType) => void
  /**
   * Callback on platform type delete button click events
   */
  onDeletePlatformType?: (item: PlatformType) => void
  /**
   * Callback on platform type duplicate button click events
   */
  onDuplicatePlatformType?: (item: PlatformType) => void
  /**
   * Callback on forces setting change events
   */
  onForcesChange: (updates: { forces: ForceData[] }) => void
  /**
   * Callback on forces Add button click events
   */
  onCreateForce?: () => void
  /**
   * Callback on forces delete button click events
   */
  onDeleteForce?: () => void
  /**
   * Callback on forces duplicate button click events
   */
  onDuplicateForce?: () => void
  /**
   * Callback on forces' sidebar click events
   */
  onSidebarForcesClick?: (force: ForceData) => void
  /**
   * Selected force to indicate which force should be active
   * in forces setting tab
   */
  selectedForce?: ForceData
  /**
   * Callback on channels setting change events
   */
  onChannelsChange: (updates: { channels: ChannelTypes[] }) => void
  /**
   * Callback on channel' sidebar click events
   */
  onSidebarChannelsClick?: (channel: ChannelTypes) => void
  /**
   * Callback on channels Add button click events
   */
  onCreateChannel?: (buttonText: string | undefined) => void
  /**
   * Callback on channels delete button click events
   */
  onDeleteChannel?: () => void
  /**
   * Callback on channels delete button click events
   */
  onDuplicateChannel?: () => void
  /**
   * Selected channel to indicate which channel should be active
   * in channels setting tab
   */
  selectedChannel?: ChannelTypes
  /**
   * Callback on each of the game setup tab save events
   */
  onSave: (updates: any) => void
  /**
   * Message templates to be shown on channel setting
   */
  messageTemplates: Array<MessageTemplate>
  /**
   * Handle game title save event
   */
  onSaveGameTitle?: (update: string) => void
  /**
   * Handle wargame being initiated
   */
  onWargameInitiate: () => void

  availablePlatformTypes?: PlatformTypeData[]

  /**
   * Handle back button event
   */
  iconUploadUrl?: string
  onPressBack?: (e) => void
  /**
   * Handler for when user tries to delete role with Game Control privileges
   */
  customDeleteHandler?: (NewItems: Item[], key: number, handleChange: (changedItems: Item[]) => void) => void
  onDeleteAsset?: () => void
  /**
  * Callback on annotation types setting change events
  */
  onAnnotationChange: (annotation: AnnotationMarkerData) => void
  /**
  * Callback on annotation type delete button click events
  */
  onDeleteAnnotation?: (annotation: IconOption) => void
  /**
  * Callback on annotation type duplicate button click events
  */
  onDuplicateAnnotation?: (annotation: IconOption) => void

}
