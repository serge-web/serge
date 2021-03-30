import React from 'react'
import { Badge, DataTable, RfiForm } from '@serge/components'
import { MessageCustom, MessageChannel } from '@serge/custom-types/message'
import { CollaborativeMessageStates } from '@serge/config'
import { ActionPayload } from '@serge/components/src/local/molecules/rfi-form/types/props'
import { submitRFI, rejectRFI } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiDispatch } from '../Store/PlayerUi'

const RfiStatusBoard = ({ rfiMessages }: { rfiMessages: MessageCustom[] }) => {
  const dispatch = usePlayerUiDispatch()
  const data = rfiMessages.map(message => [
    // TODO: Assign appropriate RFI Ids
    message._id,
    message.details.channel,
    message.details.from.role,
    message.details.from.forceColor,
    message.message.title,
    message.details.collaboration ? message.details.collaboration.status : '',
    message.details.collaboration ? message.details.collaboration.owner : ''
  ])
  const filtersChannel = rfiMessages.reduce((filters: any[], message) => {
    return [
      ...filters,
      message.details.channel
    ]
  }, [])
  const filtersRoles = rfiMessages.reduce((filters: any[], message) => {
    return [
      ...filters,
      message.details.from.role
    ]
  }, [])
  const dataTableProps = {
    columns: [
      'ID',
      {
        filters: [...new Set(filtersChannel)],
        label: 'Channel'
      },
      {
        filters: [...new Set(filtersRoles)],
        label: 'From'
      },
      'Title',
      {
        filters: [
          CollaborativeMessageStates.Unallocated,
          CollaborativeMessageStates.InProgress,
          CollaborativeMessageStates.PendingReview,
          CollaborativeMessageStates.Released,
          CollaborativeMessageStates.Rejected
        ],
        label: 'Status'
      },
      {
        filters: [
          'Fuel specialist',
          'Aeronautic specialist',
          'Weapons specialist'
        ],
        label: 'Owner'
      }
    ],
    data: data.map((row, rowIndex): any => {
      const [id, channel, role, forceColor, content, status, owner] = row
      const statusColors = {
        [CollaborativeMessageStates.Unallocated]: '#B10303',
        [CollaborativeMessageStates.InProgress]: '#E7740A',
        [CollaborativeMessageStates.PendingReview]: '#434343',
        [CollaborativeMessageStates.Released]: '#007219',
        [CollaborativeMessageStates.Rejected]: '#434343'
      }
      const onRFISubmit = (message: MessageChannel, payload: ActionPayload): void => {
        dispatch(submitRFI(message.details.channel, message, payload))
      }
      const onRFIReject = (message: MessageChannel, payload: ActionPayload): void => {
        dispatch(rejectRFI(message.details.channel, message, payload))
      }
      return {
        collapsible: (
          <RfiForm onSubmit={onRFISubmit} onReject={onRFIReject} message={(rfiMessages[rowIndex] as MessageCustom)} />
        ),
        cells: [
          id,
          channel,
          {
            component: <Badge customBackgroundColor={forceColor} label={role}/>,
            label: role
          },
          content,
          {
            component: <Badge customBackgroundColor={status ? statusColors[status] : '#434343'} customSize="large" label={status}/>,
            label: status
          },
          {
            component: owner ? <Badge customBackgroundColor="#434343" label={owner}/> : null,
            label: owner
          }
        ]
      }
    })
  }

  return (
    <DataTable {...dataTableProps} />
  )
}

export default RfiStatusBoard
