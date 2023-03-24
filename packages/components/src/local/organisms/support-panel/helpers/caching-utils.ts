/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SUPPORT_PANEL_LAYOUT } from '@serge/config'

export type FilterStateByKey = { [x: string]: boolean }
export type FilterObject = { [x: string]: { id: number, filterValue: string[] }[] }

export const getIsFilterState = (panelState: any): FilterStateByKey => {
  const showFilterFromCache = panelState[SUPPORT_PANEL_LAYOUT.IS_FILTER]
  if (showFilterFromCache) {
    return JSON.parse(showFilterFromCache)
  }
  return {}
}

export const getFilterApplied = (panelState: any): { [x: string]: { id: number, filterValue: string[] }[] } => {
  const filterFromCache = panelState[SUPPORT_PANEL_LAYOUT.FILTER_APPLIED]
  if (filterFromCache) {
    return JSON.parse(filterFromCache)
  }
  return {}
}
