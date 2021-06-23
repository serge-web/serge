import { ChannelData, Role } from '@serge/custom-types'

export interface RequestForInformation {
  /**
   * Unique ID
   */
  id: string
  /**
   * Channel name
   */
  channel: ChannelData['name']
  /**
   * Role of requester
   */
  roleName: Role['name']

  roleId: Role['roleId']
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
