import React from 'react'
import { ChannelData,MessageCustom } from '@serge/custom-types'
import { isMessageReaded, setMessageState } from '@serge/helpers'
import DataTableProps, { RowWithCollapsibleType } from '../../organisms/data-table/types/props'
import styles from '../styles.module.scss'
import ChannelRFIMessageDetail from '../../molecules/channel-rfi-message-detail'
import { ROW_WITH_COLLAPSIBLE_TYPE }  from '../../organisms/data-table/index'
import { PropsRFI } from '../types/props'
import { getKeyRFI } from '../helpers/get-key'
import { GenData } from '../types/props'
import { genColumnDataRfi } from './gen-column-data'
import { genCellsDataRfi } from './gen-cells.data'

export const genRFIData = (
  props: PropsRFI,
  handleUpdateUnreadCount: (nexCount?: number) => boolean
  // onChange?: (nextMessage: MessageCustom) => void,
): GenData => {

  const {channels, rfiMessages, roles, isRFIManager, isUmpire, currentWargame, role, onChange} = props
  
  const channelDict = new Map<string, string>()
  channels.forEach((channel: ChannelData) => channelDict.set(channel.uniqid, channel.name))

  const columnHeaders = genColumnDataRfi(channelDict, rfiMessages, roles)

  let unreadMessagesCount = 0
  const dataTableProps: DataTableProps = {
    columns: columnHeaders,
    data: rfiMessages.map((message): RowWithCollapsibleType => {

      const status = message.details.collaboration ? message.details.collaboration.status : 'Unallocated'
      const owner = message.details.collaboration && message.details.collaboration.owner ? message.details.collaboration.owner.roleName : undefined

      const messageStateKey = getKeyRFI(message, isRFIManager)
      const isReaded = isMessageReaded(currentWargame, role.forceName, role.roleName, messageStateKey)
      if (!isReaded) unreadMessagesCount++

      const collapsible = (onChangeCallback?: () => void): React.ReactElement => {
        // if expanded && message haven't readed status set it as readed
        const handleRead = (): void => {
          setMessageState(currentWargame, role.forceName, role.roleName, messageStateKey)
          handleUpdateUnreadCount()
        }

        return (
          <div className={styles['rfi-form']}>
            <ChannelRFIMessageDetail
              isReaded={isReaded}
              onRead={handleRead}
              isRFIManager={isRFIManager}
              message={message}
              role={role}
              isUmpire={isUmpire}
              onChange={(newMeesage: MessageCustom): void => {
                onChange && onChange(newMeesage)
                typeof onChangeCallback === 'function' && onChangeCallback()
              }}
            />
          </div>
        )
      }

      const rowKey = `${message.message.Reference}`

      return {
        type: ROW_WITH_COLLAPSIBLE_TYPE,
        rowKey,
        collapsible,
        cells: genCellsDataRfi(isReaded, message, channelDict, status, owner)
      }
    })
  }

  return { dataTableProps, unreadMessagesCount }
}
