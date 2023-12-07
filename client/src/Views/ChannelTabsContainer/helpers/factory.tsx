import React from 'react'
import { TabNode, TabSetNode } from 'flexlayout-react'
import _ from 'lodash'
import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM } from 'src/config'
import { ChannelTypes, ChannelUI, PlayerUi } from 'src/custom-types'
import ChatChannel from '../../../Components/ChatChannel'
import CollabChannel from '../../../Components/CollabChannel'

type Factory = (node: TabNode) => React.ReactNode

/** convert phase as a string to the enum type
 * Note: we were using Phase[state.phase], but it only
 * accepted the capitalised value. That's why this 
 * convenience function was created.
 */

const factory = (state: PlayerUi): Factory => {  
  return (node: TabNode): React.ReactNode => {
    /** helper to determine if the specified channel should be rendered */
    const renderThisChannel = (channelData?: ChannelUI): boolean => {
      if (channelData) {
        // always render the special channels, since the user may have
        // a partially completed form/document in it - we don't want to
        // lose that content.  Note: there _Shouldn't_ be a performance
        // hit, since the content in those channels won't be changing
        const cType = channelData.cData.channelType
        if (cType === CHANNEL_COLLAB || cType === CHANNEL_CUSTOM || cType === CHANNEL_CHAT) {
          return true
        }
      }
      return node.isVisible()
    }

    /**
     * If a maximized tabset exists but the current tabset node is not this one
     * Do not render it
     */
    const hasMaximizeTab = node.getModel().getMaximizedTabset()
    const tabSetNode = node.getParent() as TabSetNode
    if (hasMaximizeTab && !tabSetNode.isMaximized()) {
      return
    }
    
    if (_.isEmpty(state.channels)) return
    const channel = state.channels[node.getId()]
    if (!channel || !renderThisChannel(channel)) {
      return null
    }
    // const allTemplates = Object.values(state.allTemplatesByKey)
    const channelData: ChannelTypes = channel.cData
    const isV3 = !!channelData.channelType
    if (isV3) {
      switch (channelData.channelType) {
        case CHANNEL_COLLAB:
          return <CollabChannel channelId={channel.uniqid} />
        case CHANNEL_CHAT:
          return <ChatChannel channelId={channel.uniqid} />
        case CHANNEL_CUSTOM:
          return <ChatChannel isCustomChannel={true} channelId={channel.uniqid} />
        default:
          console.log('not yet handling', channelData)
          return null
      }
    } else {
      return <>This is a legacy channel. It is not being rendered.</>
    }
  }
}

export default factory
