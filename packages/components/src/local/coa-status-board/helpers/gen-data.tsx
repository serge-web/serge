import React from 'react'
import { MessageCustom, ForceData, ForceRole, TemplateBodysByKey, ChannelData } from '@serge/custom-types'
import { isMessageReaded, setMessageState } from '@serge/helpers'
import { RowWithCollapsibleType } from '../../organisms/data-table/types/props'
import { ForceColor } from '..'
import ChannelCoaMessageDetail from '../../molecules/channel-coa-message-detail'
import getColumns from './get-columns'
import { Badge } from '../../atoms/badge'
import { ROW_WITH_COLLAPSIBLE_TYPE } from '../../organisms/data-table'
import { CollaborativeMessageStates } from '@serge/config'
import getAssignees from './assignees'
import getKey from './get-key'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Stylesheet */
import styles from '../styles.module.scss'

/** helper to provide legible version of force & role */
export const formatRole = (role: ForceRole): string => {
  return role.forceName + '-' + role.roleName
}

const statusColors: { [property: string]: string } = {
  [CollaborativeMessageStates.Unallocated]: '#B10303',
  [CollaborativeMessageStates.PendingReview]: '#434343',
  [CollaborativeMessageStates.Finalized]: '#007219',
  [CollaborativeMessageStates.Released]: '#007219',
  [CollaborativeMessageStates.Closed]: '#ff0000',
  [CollaborativeMessageStates.BeingEdited]: '#ffc107',
  [CollaborativeMessageStates.Pending]: '#0366d6'
}

interface GenData {
  data: RowWithCollapsibleType[]
  unreadMessagesCount: number
}

export const genData = (
  messages: MessageCustom[],
  forces: ForceData[],
  role: ForceRole,
  currentWargame: string,
  templates: TemplateBodysByKey,
  isUmpire: boolean,
  channel: ChannelData,
  canCollaborate: boolean,
  canReleaseMessages: boolean,
  canUnClaimMessages: boolean,
  gameDate: string,
  isCollaborating: boolean,
  isObserver: boolean,
  onChange: (msg: MessageCustom) => void,
  handleOpenCollapsible: () => void
): GenData => {
  let unreadMessagesCount = 0

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

    const messageStateKey = getKey(message, canCollaborate, canReleaseMessages, canUnClaimMessages, isFinalised, isCollabEditChannel, isObserver)
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

    const cells = [
      {
        component: <><FontAwesomeIcon color={isReaded ? '#838585' : '#69c'}icon={isReaded ? faEnvelopeOpen : faEnvelope} />&nbsp;
          {message.message.Reference || message._id}</>,
        label: message.message.Reference || message._id
      },
      {
        component: <Badge customBackgroundColor={message.details.from.forceColor} label={message.details.from.roleName} />,
        label: message.details.from.roleName
      },
      message.message.Title,
      {
        component: <Badge customBackgroundColor={status ? statusColors[status] : '#434343'} label={status} />,
        label: status
      },
      {
        component: ownerComposite ? <Badge customBackgroundColor={ownerColor} customSize={myDocument ? 'large' : undefined} label={isCollaborating && ownerComposite} /> : null,
        label: ''
      },
      lastUpdated
    ]

    // extra cols?
    if (channel.collabOptions && channel.collabOptions.extraColumns) {
      const extraCols = getColumns(message, channel.collabOptions.extraColumns)
      const cols: string[][] = extraCols
      const newCols = cols.map((entries: string[]) => {
        return entries.map((entry: string) => {
          // todo: try to return a `Badge` like above for each country   
          return entry + ' '
        })
      })
      cells.push(...newCols)
    }

    const rowKey = `${message.message.Reference}`

    return {
      type: ROW_WITH_COLLAPSIBLE_TYPE,
      rowKey,
      collapsible,
      cells: cells
    }
  })

  return { data, unreadMessagesCount }
}

export default genData
