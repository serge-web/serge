import React, { useState } from 'react'
import { DataTable } from '../organisms/data-table'
import { MessageCustom } from '@serge/custom-types/message'
import { EMPTY_CELL, SpecialChannelColumns } from '@serge/config'
import { Column } from '../organisms/data-table/types/props'
import { capitalize } from 'lodash'
import { Button } from '@material-ui/core'
import { formatRole, genData } from './helpers/gen-data'
import getKey from './helpers/get-key'
import { setMessageState } from '@serge/helpers'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/** combine force id and color
 */
export interface ForceColor {
  uniqid: string
  color: string
}

const getListOfOwners = (messages: MessageCustom[]): string[] => {
  const roles = messages.reduce((filters: string[], message) => {
    const collab = message.details.collaboration
    if (collab && collab.owner) {
      return [
        ...filters,
        formatRole(collab.owner)
      ]
    } else {
      return filters
    }
  }, [])
  // just the unique sources
  return [...new Set(roles)]
}

const getListOfSources = (messages: MessageCustom[]): string[] => {
  return messages.reduce((filters: any[], message) => {
    if (!message.details.from) {
      console.warn(message, 'message have no from.roleName')
      return filters
    }
    return [...new Set([...filters, message.details.from.roleName])]
  }, [])
}

const getListOfStatus = (messages: MessageCustom[]): string[] => {
  return messages.reduce((filters: any[], message) => {
    if (!message.details.collaboration) {
      console.warn(message, 'message have no collaboration.status')
      return filters
    }
    return [...new Set([...filters, message.details.collaboration.status])]
  }, [])
}

const getListOfExtraColumn = (messages: MessageCustom[], columnName: string): string[] => {
  const values = messages.reduce((filters: any[], message) => {
    if (!message.message[columnName]) {
      return filters
    }
    let fields: any
    switch (columnName) {
      case 'LOCATION': {
        const fieldData = []
        fields = message.message[columnName]
        for (const key of Object.keys(fields)) {
          const location = fields[key].map((item: any) => `${key}-${item.Country}`)
          fieldData.push(...location)
        }
        const newItems: string[] = fieldData.length ? fieldData : [EMPTY_CELL]
        filters.push(...newItems)
        return filters.sort((a, b) => a === EMPTY_CELL ? -1 : a - b)
      }
      default:
        return filters
    }
  }, [])
  // de-dupe & return
  return [...new Set(values)]
}

/* Render component */
export const CoaStatusBoard: React.FC<Props> = ({ templates, messages, channel, isUmpire, onChange, role, forces, gameDate, onMessageRead, currentWargame }: Props) => {
  const [unreadCount, setUnreadCount] = useState<{ count: number }>({ count: -1 })
  const updateUreanMessagesCount = (nextUnreadCount: number) => setUnreadCount(Object.assign({}, unreadCount, { count: nextUnreadCount }))

  const myParticipations = channel.participants.filter((p) => p.force === role.forceName && ((p.roles.includes(role.roleId)) || p.roles.length === 0))
  const canCollaborate = !!myParticipations.find(p => p.canCollaborate)
  const canReleaseMessages = !!myParticipations.find(p => p.canReleaseMessages)
  const canUnClaimMessages = !!myParticipations.find(p => p.canUnClaimMessages)

  // whether this user should see metadata about the message being edited
  const isCollaborating = canCollaborate || canReleaseMessages || isUmpire

  // collate list of message owners
  const filtersOwners = getListOfOwners(messages)

  // collate list of sources (From) for messages
  const filtersRoles = getListOfSources(messages)

  // collate list of sources (Status) for messages
  const filtersStatus = getListOfStatus(messages)

  // collate list of extra column LOCATION for messages
  const filtersLocations = getListOfExtraColumn(messages, 'LOCATION')

  const handleUpdateUnreadCount = (nexCount?: number): boolean => {
    const count = typeof nexCount === 'undefined' ? unreadCount.count - 1 : nexCount
    const shouldBeUpdated = unreadCount.count !== count

    if (shouldBeUpdated) {
      onMessageRead && onMessageRead(count)
      updateUreanMessagesCount(count)
    }
    return shouldBeUpdated
  }

  const { data, unreadMessagesCount } = genData(
    messages,
    forces,
    role,
    currentWargame,
    templates,
    isUmpire,
    channel,
    canCollaborate,
    canReleaseMessages,
    canUnClaimMessages,
    gameDate,
    isCollaborating,
    onChange,
    handleUpdateUnreadCount
  )

  if (handleUpdateUnreadCount(unreadMessagesCount)) {
    return <></>
  }

  const columnHeaders: Column[] = [
    'ID',
    {
      filters: filtersRoles,
      label: 'From'
    },
    'Title',
    {
      filters: filtersStatus,
      label: 'Status'
    },
    {
      filters: filtersOwners,
      label: 'Owner'
    },
    'Updated'
  ]

  if (channel.collabOptions && channel.collabOptions.extraColumns) {
    const newCols = channel.collabOptions.extraColumns.map((col: SpecialChannelColumns): string | Column => {
      if (col === SpecialChannelColumns.LOCATION) {
        return {
          filters: filtersLocations,
          label: capitalize(col)
        }
      }
      return capitalize(col)
    })
    columnHeaders.push(...newCols)
  }

  const handleMarkAllAsRead = (): void => {
    for (const message of messages) {
      const key = getKey(message, canCollaborate, canReleaseMessages, canUnClaimMessages)
      setMessageState(currentWargame, role.forceName, role.roleName, key)
    }
    handleUpdateUnreadCount(0)
  }

  return (
    <>
      <div className={styles['btn']}><span><Button onClick={handleMarkAllAsRead}>Mark All As Read</Button></span></div>
      <DataTable sort={true} columns={columnHeaders} data={data} noExpand />
    </>
  )
}

export default CoaStatusBoard
