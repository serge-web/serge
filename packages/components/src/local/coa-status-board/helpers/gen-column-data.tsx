import { CollaborativeMessageStates } from '@serge/config'
import { MessageCustom } from '@serge/custom-types'
import { Column } from 'src/local/organisms/data-table/types/props'

export const genColumnDataRfi = (channelDict: Map<string, string>, messages: MessageCustom[], roles: string[]): Column[] => {
  const filtersChannel = []
  const filtersRoles = []

  for (const message of messages) {
    const channelId = channelDict.get(message.details.channel)
    if (typeof channelId === 'string') filtersChannel.push(channelId)
    filtersRoles.push(message.details.from.roleName)
  }

  const columnHeaders = [
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
        CollaborativeMessageStates.Closed
      ],
      label: 'Status'
    },
    {
      filters: roles,
      label: 'Owner'
    }
  ]
  return columnHeaders
}

export const genColumnDataCoa = (filtersOwners: string[], filtersRoles: string[], filtersStatus: string[]): Column[] => {
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
  return columnHeaders
}
