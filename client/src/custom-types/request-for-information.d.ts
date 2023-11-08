import { ChannelTypes, Role } from '.'

export interface RequestForInformation {
  /**
   * Unique ID
   */
  id: string
  /**
   * Channel name
   */
  channel: ChannelTypes['name']
  /**
   * Role of requester
   */
  role: Role['name']
  /**
   * Request title
   */
  title: string
  /**
   * Request description
   */
  description: string
  /**
   * Request status
   */
  status: 'Unallocated' | 'In progress' | 'Pending review' | 'Released'
  /**
   * Request owner
   */
  owner: string
}

export default RequestForInformation
