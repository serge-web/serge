import FlexLayout, { TabNode } from 'flexlayout-react'
import { ChannelUI, PlayerUi } from 'src/custom-types'
import _ from 'lodash'
import findChannelByID from './findChannelByID'
import { CHANNEL_MAPPING } from 'src/config'

const tabRender = (state: PlayerUi): (node: TabNode) => void => {
  return (node: TabNode): void => {
    setTimeout(() => {
      const tabLayout = document.getElementsByClassName('flexlayout__layout')[0]
      const tabSetHeaderElms = tabLayout.getElementsByClassName('flexlayout__tabset')
      const tabSetContentElms = tabLayout.getElementsByClassName('flexlayout__tab')

      let maximizedTabIdx = -1
      Array.from(tabSetHeaderElms).forEach((layout, idx) => {
        const style = layout.attributes.getNamedItem('style')
        if (!style) return

        if (node.getModel().getMaximizedTabset()) {
          /**
           * If a maximized tabset exists, hide other tabsets that is not the maximized one
           * maximized tabset has `z-index: 100`, the rest is not so we check and hide it
           */
          if (style.value.indexOf('z-index: 100') === -1) {
            layout.classList.add('hide')
          } else {
            /**
             * Found the maximized tabset idx
             */
            maximizedTabIdx = idx
          }
        } else {
          /**
           * there is no maximized tabset, get all visible
           */
          layout.classList.remove('hide')

          /**
           * Reset default value
           */
          maximizedTabIdx = -1
        }
      })

      /**
       * Make the tabset background color transaparent
       */
      Array.from(tabSetContentElms).forEach((elm, idx) => {
        /**
         * Do not handle the maximized tabset
         */
        if (maximizedTabIdx === idx) return

        /**
         * If a maximized tabset exists, make the background color transparent of all the tabsets that is not the maximized one
         */
        if (node.getModel().getMaximizedTabset()) {
          elm.classList.add('hide')
        } else {
          /**
           * There is no maximized tabset, get all visible
           */
          elm.classList.remove('hide')
        }
      })
    })

    let channel: ChannelUI | undefined

    const addMenuItemMsgCount = (className: string) => {
      if (!className) return
      const overflowBtn = document.getElementsByClassName('flexlayout__tab_button_overflow')
      if (overflowBtn.length) {
        overflowBtn[0].addEventListener('click', () => {
          setTimeout(() => {
            const menuItems = document.getElementsByClassName('flexlayout__popup_menu_item')
            Array.from(menuItems).forEach((menuItem: Element) => {
              if (menuItem.textContent === node.getName()) {
                menuItem.classList.add(className)
              }
            })
          })
        })
      }
    }

    const setUnreadClassName = (className: string): void => {
      if (node.getClassName() !== className) {
        node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), { className }))
      }
    }

    if (!_.isEmpty(state.channels)) {
      const matchedChannel = findChannelByID(state.channels, node.getId())
      channel = matchedChannel && matchedChannel.length > 1 ? matchedChannel[1] : undefined

      if (channel !== undefined) {
        // check it's not a channel type where we ignore unread (mapping)
        // list of channel types where we don't show unread message count
        const excludedChannels = [CHANNEL_MAPPING]
        if (excludedChannels.includes(channel.cData.channelType)) {
          // clear the message counter
          setTimeout(() => {
            const className = ''
            setUnreadClassName(className)
            addMenuItemMsgCount(className)
          })  
        } else {
          const unreadMessageCount: number | undefined = channel.unreadMessageCount
          let className = ''
  
          if (typeof unreadMessageCount === 'number' && unreadMessageCount > 0) {
            className = unreadMessageCount < 9 ? `unread-${unreadMessageCount}` : 'unread-9plus'
          }
  
          setTimeout(() => {
            setUnreadClassName(className)
            addMenuItemMsgCount(className)
          })  
        }
      }
    }
  }
}
export default tabRender
