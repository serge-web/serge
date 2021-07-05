import FlexLayout, { TabNode } from 'flexlayout-react'
import { PlayerUi } from '@serge/custom-types'
import _ from 'lodash'
import findChannelByName from './findChannelByName'

const tabRender = (state: PlayerUi): (node: TabNode) => void  => {
  return (node: TabNode): void => {
    let channel;

    const setUnreadClassName = (className: string): void => {
      if(node.getClassName() !== className) {
        setTimeout(() => {
          node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), { className }))
        }, 0);
      }
    };

    if (!_.isEmpty(state.channels)) {
      const matchedChannel = findChannelByName(state.channels, node.getName())

      channel = matchedChannel && matchedChannel.length > 1 ? matchedChannel[1] : undefined

      if (channel !== undefined) {
        if (channel.unreadMessageCount === 0) {
          setUnreadClassName('');
        } else if (channel.unreadMessageCount || 0 < 9) {
          setUnreadClassName(`unread-${channel.unreadMessageCount}`)
        } else {
          setUnreadClassName(`unread-${channel.unreadMessageCount}plus`)
        }
      }
    }
  }
}
export default tabRender
