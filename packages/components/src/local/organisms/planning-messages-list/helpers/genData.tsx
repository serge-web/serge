import { Column } from '@material-table/core'
import { MessagePlanning, PlanningMessageStructureCore } from '@serge/custom-types'
import { isEqual } from 'lodash'
import moment from 'moment'
import { AdjudicationRow } from '../../adjudication-messages-list/types/props'
import { arrToDict, collateActivities } from '../../planning-assets/helpers/collate-assets'

import { OrderRow } from '../types/props'
export const roles: string[] = []
export const forces: string[] = []

/** custom date formatter, for compact date/time display */

export const shortDate = (value?: string): string => {
  return value ? moment.utc(value).format('MMM DDHHmm[Z]').toUpperCase() : ''
}

const trimActivity = (forceId: string, activity?: string): string => {
  if (!activity) {
    return 'N/A'
  } else {
    const len = forceId.length
    return activity.slice((len + 1))
  }
}

export const toRow = (message: MessagePlanning): OrderRow => {
  const author = message.details.from.roleName
  if (!roles.includes(author)) {
    roles.push(author)
  }
  const force = message.details.from.force
  if (!forces.includes(force)) {
    forces.push(force)
  }
  const plan = message.message as PlanningMessageStructureCore

  const row: OrderRow = {
    id: message._id,
    rawRef: message.message.Reference,
    reference: message.message.Reference + ' (Turn ' + message.details.turnNumber + ')',
    force: message.details.from.force,
    title: plan.title,
    role: author,
    activity: trimActivity(message.details.from.forceId || '', plan.activity),
    startDate: shortDate(plan.startDate),
    endDate: shortDate(plan.endDate),
    archived: !!message.details.archived
  }
  return row
}

export const toColumn = (message: MessagePlanning[], isUmpire: boolean): Column<any>[] => {
  const trimmedActivities = collateActivities(message)
  const activityDict = arrToDict(trimmedActivities)
  const fixedColWidth = 150

  const columnData: Column<OrderRow>[] = [
    { title: 'Reference', field: 'reference', width: fixedColWidth, minWidth: fixedColWidth },
    { title: 'Archived', field: 'archived', hidden: false, width: 'auto' },
    { title: 'Force', field: 'force', width: 'auto', hidden: !isUmpire, lookup: arrToDict(forces) },
    { title: 'Author', field: 'role', width: 'auto', lookup: arrToDict(roles) },
    { title: 'Title', field: 'title', width: 'auto' },
    { title: 'Activity', field: 'activity', width: 'auto', lookup: activityDict },
    { title: 'Start Date', field: 'startDate', width: fixedColWidth - 10, minWidth: fixedColWidth - 10 },
    { title: 'Finish Date', field: 'endDate', width: fixedColWidth - 10, minWidth: fixedColWidth - 10 }
  ]

  return columnData
}

export const needToUpdate = (oldColumnsData: (Column<OrderRow> | Column<AdjudicationRow>)[], newColumnData: (Column<OrderRow> | Column<AdjudicationRow>)[]): boolean => {
  const oldLookup = oldColumnsData.filter(col => col.lookup)
  const newLookup = newColumnData.filter(col => col.lookup)
  if (oldLookup.length !== newLookup.length) {
    return true
  }
  return newLookup.some((lookup, idx) => !isEqual(lookup.lookup, oldLookup[idx].lookup))
}
