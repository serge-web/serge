import React, { useState } from 'react'
import { DataTable } from '../organisms/data-table'
import { Button } from '@material-ui/core'
import { genRFIData } from './helpers/gen-rfi-data'
import { genCOAData } from './helpers/gen-coa-data'

/* Import Types */
import { Props } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { handleSetAllAsRead } from './helpers/set-messages-readed'

/** combine force id and color
 */
export interface ForceColor {
  uniqid: string
  color: string
}

export const TYPE_COA = 'CoaStatusBoard'
export const TYPE_RFI = 'RFIStatusBoard'

/* Render component */
export const CoaStatusBoard: React.FC<Props> = (props: Props) => {
  const { onMessageRead } = props

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

  const { dataTableProps, unreadMessagesCount } = props.type === TYPE_COA
    ? genCOAData(props, handleUpdateUnreadCount)
    : genRFIData(props, handleUpdateUnreadCount)

  if (handleUpdateUnreadCount(unreadMessagesCount)) {
    return <></>
  }

  const handleMarkAllAsRead = (): void => {
    handleSetAllAsRead(props, handleUpdateUnreadCount)
  }

  return (
    <>
      <div className={styles.btn}><span><Button onClick={handleMarkAllAsRead}>Mark All As Read</Button></span></div>
      <DataTable {...dataTableProps} noExpand />
    </>
  )
}

export default CoaStatusBoard
