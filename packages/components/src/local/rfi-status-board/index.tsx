import React, { useState } from 'react'
import { MessageCustom } from '@serge/custom-types/message'
import { Button } from '@material-ui/core'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

import { DataTable } from '../organisms/data-table'
import { setMessageState } from '@serge/helpers'
import { genData } from './moveLogick'

export const getKey = (message: MessageCustom, isRfiManager: boolean): string => {
  return isRfiManager ? message._id + '-' + message.message.Reference : message._id
}

/* Render component */
export const RfiStatusBoard: React.FC<Props> = ({ rfiMessages, roles, channels, isRFIManager, isUmpire, onChange, role, onMessageRead, currentWargame }: Props) => {
  // produce dictionary of channels
  const [unreadCount, setUnreadCount] = useState<{ count: number }>({ count: -1 })
  const updateUreanMessagesCount = (nextUnreadCount: number): void => setUnreadCount(Object.assign({}, unreadCount, { count: nextUnreadCount }))

  const handleUpdateUnreadCount = (nexCount?: number): boolean => {
    const count = typeof nexCount === 'undefined' ? unreadCount.count - 1 : nexCount
    const shouldBeUpdated = unreadCount.count !== count

    if (shouldBeUpdated) {
      onMessageRead && onMessageRead(count)
      updateUreanMessagesCount(count)
    }
    return shouldBeUpdated
  }

  const { dataTableProps, unreadMessagesCount } = genData(
    channels,
    rfiMessages,
    roles,
    isRFIManager,
    currentWargame,
    isUmpire,
    role,
    handleUpdateUnreadCount,
    onChange
  )

  if (handleUpdateUnreadCount(unreadMessagesCount)) {
    return <></>
  }

  const handleMarkAllAsRead = (): void => {
    for (const message of rfiMessages) {
      const key = getKey(message, isRFIManager)
      setMessageState(currentWargame, role.forceName, role.roleName, key)
    }
    handleUpdateUnreadCount(0)
  }

  return (
    <>
      <div className={styles.btn}><span><Button onClick={handleMarkAllAsRead}>Mark All As Read</Button></span></div>
      <DataTable {...dataTableProps} noExpand />
    </>
  )
}

export default RfiStatusBoard
