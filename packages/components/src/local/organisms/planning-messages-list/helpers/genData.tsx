import { MessagePlanning, PlanningMessageStructureCore } from '@serge/custom-types'
import moment from 'moment'
import React from 'react'
import { arrToDict, collateActivities } from '../../planning-assets/helpers/collate-assets'
import { Column } from 'material-table'

import { OrderRow } from '../types/props'
export const roles: string[] = []

/** custom date formatter, for compact date/time display */

const shortDate = (value?: string): string => {
  return value ? moment(value).format('DDHHmm[Z]') : ''
}

const trimActivity = (forceId: string, activity?: string): string => {
  if (!activity) {
    return 'N/A'
  } else {
    const len = forceId.length
    return activity.slice(len + 1)
  }
}

export const toRow = (message: MessagePlanning, playerForceId: string): OrderRow => {
  const author = message.details.from.roleName
  if (!roles.includes(author)) {
    roles.push(author)
  }
  const plan = message.message as PlanningMessageStructureCore

  const row: OrderRow = {
    id: message._id,
    reference: message.message.Reference + ' (Turn ' + message.details.turnNumber + ')',
    title: plan.title,
    role: author,
    activity: trimActivity(playerForceId, plan.activity),
    startDate: shortDate(plan.startDate),
    endDate: shortDate(plan.endDate)
  }
  return row
}

export const toColumn = (message: MessagePlanning[], playerForceId: string): Column[] => {
  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end
  const activities = collateActivities(message)
  const trimmedActivities = activities.map((item) => trimActivity(playerForceId, item))

  const smallPadding: React.CSSProperties = {
    paddingLeft: '10px',
    paddingRight: '10px'
  }
  const narrowCell: React.CSSProperties = {
    ...smallPadding, width: '80px'
  }
  const mediumCell: React.CSSProperties = {
    ...smallPadding, width: '120px'
  }

  const columnData: Column[] = jestWorkerId ? [] : [
    { title: 'Reference', field: 'reference', cellStyle: mediumCell, headerStyle: mediumCell },
    { title: 'Author', field: 'role', lookup: arrToDict(roles), cellStyle: narrowCell, headerStyle: narrowCell },
    { title: 'Title', field: 'title', cellStyle: smallPadding, headerStyle: smallPadding },
    { title: 'Activity', field: 'activity', lookup: arrToDict(trimmedActivities), cellStyle: smallPadding, headerStyle: smallPadding },
    { title: 'Start Date', field: 'startDate', cellStyle: narrowCell, headerStyle: narrowCell },
    { title: 'Finish Date', field: 'endDate', cellStyle: narrowCell, headerStyle: narrowCell }
  ]

  return columnData
}