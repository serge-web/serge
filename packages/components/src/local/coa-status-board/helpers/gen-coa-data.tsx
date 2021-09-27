import React from 'react'
import { MessageCustom, ForceData, ForceRole } from '@serge/custom-types'
import { isMessageReaded, setMessageState } from '@serge/helpers'
import { RowWithCollapsibleType, Column } from '../../organisms/data-table/types/props'
import { ForceColor } from '..'
import ChannelCoaMessageDetail from '../../molecules/channel-coa-message-detail'

import { ROW_WITH_COLLAPSIBLE_TYPE } from '../../organisms/data-table'
import { CollaborativeMessageStates, EMPTY_CELL, SpecialChannelColumns } from '@serge/config'
import getAssignees from './assignees'
import { getKeyCOA } from './get-key'

import { capitalize } from 'lodash'

/* Import Stylesheet */
import styles from '../styles.module.scss'
import { PropsCOA, GenData } from '../types/props'
import getCoaPermissions from './get-coa-perrmisions'

import { genColumnDataCoa } from './gen-column-data'
import { genCellsDataCoa } from './gen-cells.data'

/** helper to provide legible version of force & role */
export const formatRole = (role: ForceRole): string => {
  return role.forceName + '-' + role.roleName
}

export const genCOAData = (
  props: PropsCOA,
  handleOpenCollapsible: () => void
): GenData => {
  let unreadMessagesCount = 0

  const { messages, forces, role, currentWargame, templates, isUmpire, channel, gameDate, onChange } = props
  const isObserver = isUmpire
  const { canCollaborate, canReleaseMessages, canUnClaimMessages } = getCoaPermissions(channel, role)
  // whether this user should see metadata about the message being edited
  const isCollaborating = canCollaborate || canReleaseMessages || isUmpire

  const assignees: ForceRole[] = getAssignees(channel.participants, forces)

  const isCollabEditChannel = !!channel.collabOptions && channel.collabOptions.mode === 'edit'

  const data: RowWithCollapsibleType[] = messages.map((message): RowWithCollapsibleType => {
    const collab = message.details.collaboration
    const ownerRole = (collab && collab.owner) || undefined

    const ownerForce: ForceData | undefined = ownerRole && forces.find((force: ForceColor) => force.uniqid === ownerRole.forceId)

    const ownerColor: string = ownerForce ? ownerForce.color : '#f00'
    // generate the owner of this document
    const ownerComposite: string | undefined = ownerRole ? formatRole(ownerRole) : undefined
    // am I the owner?
    const myDocument: boolean = ownerComposite === formatRole(role)
    const lastUpdated = collab ? collab.lastUpdated : 'Pending'
    const status = collab ? collab.status : 'Unallocated'

    // flag for if we tell original sender of RFI that it has been responded to
    const isFinalised = status === CollaborativeMessageStates.Closed ||
      status === CollaborativeMessageStates.Finalized ||
      status === CollaborativeMessageStates.Released

    const messageStateKey = getKeyCOA(message, canCollaborate, canReleaseMessages, canUnClaimMessages, isFinalised, isCollabEditChannel, isObserver)
    const isReaded = isMessageReaded(currentWargame, role.forceName, role.roleName, messageStateKey)

    if (!isReaded) unreadMessagesCount++

    const collapsible = (onChangeCallback?: () => void): React.ReactElement => {
      // if expanded && message haven't readed status set it as readed
      const handleRead = (): void => {
        setMessageState(currentWargame, role.forceName, role.roleName, messageStateKey)
        handleOpenCollapsible()
      }

      return (
        <div className={styles['rfi-form']}>
          <ChannelCoaMessageDetail
            isReaded={isReaded}
            onRead={handleRead}
            templates={templates}
            message={message}
            role={role}
            isUmpire={isUmpire}
            channel={channel}
            canCollaborate={canCollaborate}
            canReleaseMessages={canReleaseMessages}
            canUnClaimMessages={canUnClaimMessages}
            assignees={assignees}
            onChange={(newMeesage: MessageCustom): void => {
              onChange && onChange(newMeesage)
            }}
            collapseMe={(): void => {
              typeof onChangeCallback === 'function' && onChangeCallback()
            }}
            gameDate={gameDate}
          />
        </div>
      )
    }

    const cells = genCellsDataCoa(channel, isReaded, message, ownerComposite, ownerColor, myDocument, isCollaborating, lastUpdated, status)

    const rowKey = `${message.message.Reference}`

    return {
      type: ROW_WITH_COLLAPSIBLE_TYPE,
      rowKey,
      collapsible,
      cells: cells
    }
  })

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

  // collate list of message owners
  const filtersOwners = getListOfOwners(messages)

  // collate list of sources (From) for messages
  const filtersRoles = getListOfSources(messages)

  // collate list of sources (Status) for messages
  const filtersStatus = getListOfStatus(messages)

  // collate list of extra column LOCATION for messages
  const filtersLocations = getListOfExtraColumn(messages, 'LOCATION')

  const columnHeaders = genColumnDataCoa(filtersOwners, filtersRoles, filtersStatus)

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

  return {
    dataTableProps: {
      data,
      sort: true,
      columns: columnHeaders
    },
    unreadMessagesCount
  }
}
