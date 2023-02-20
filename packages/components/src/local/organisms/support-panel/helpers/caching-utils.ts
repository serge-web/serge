import { expiredStorage, SUPPORT_PANEL_LAYOUT } from '@serge/config'

export type FilterStateByKey = { [x: string]: boolean }
export type FilterObject = { [x: string]: { id: number, filterValue: string[] }[] }

export const getIsFilterState = (): FilterStateByKey | undefined => {
  const showFilterFromCache = expiredStorage.getItem(SUPPORT_PANEL_LAYOUT.IS_FILTER)
  if (showFilterFromCache) {
    return JSON.parse(showFilterFromCache)
  }
  return undefined
}

export const getFilterApplied = (): { [x: string]: { id: number, filterValue: string[] }[] } | undefined => {
  const filterFromCache = expiredStorage.getItem(SUPPORT_PANEL_LAYOUT.FILTER_APPLIED)
  if (filterFromCache) {
    return JSON.parse(filterFromCache)
  }
  return undefined
}
