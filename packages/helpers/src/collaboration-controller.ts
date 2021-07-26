import { ChannelData, Role } from '@serge/custom-types'

/**
 * support utility, supporting collaborative editing
 */
class CollaborationController {
  channel: ChannelData
  role: Role

  /**
   *
   */
  constructor (channel: ChannelData, role: Role) {
    this.channel = channel
    this.role = role
  }

  /**  */
  getTemplates (): Array<string> {
    return this.channel.participants[0].templates
  }
}

export default CollaborationController
