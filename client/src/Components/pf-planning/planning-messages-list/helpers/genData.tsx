import { Column } from '@material-table/core'
import { isEqual } from 'lodash'
import moment from 'moment'

import { OrderRow } from '../types/props'
export const roles: string[] = []
export const forces: string[] = []

/** custom date formatter, for compact date/time display */

export const shortDate = (value?: string): string => {
  return value ? moment.utc(value).format('MMM DDHHmm[Z]').toUpperCase() : ''
}

// eslint-disable-next-line no-unused-vars
export const needToUpdate = (oldColumnsData: (Column<OrderRow>)[], newColumnData: (Column<OrderRow>)[]): boolean => {
  const oldLookup = oldColumnsData.filter(col => col.lookup)
  const newLookup = newColumnData.filter(col => col.lookup)
  if (oldLookup.length !== newLookup.length) {
    return true
  }
  return newLookup.some((lookup, idx) => !isEqual(lookup.lookup, oldLookup[idx].lookup))
}
