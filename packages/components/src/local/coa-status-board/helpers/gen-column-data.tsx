import { Column } from 'src/local/organisms/data-table/types/props'

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
