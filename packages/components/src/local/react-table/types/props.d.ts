import { TableColumn, TableProps } from 'react-data-table-component'

export type Column = TableColumn & {
  // true if we want to enable filter value for this column
  colFilter?: boolean
}
export type Row = { [x: string], collapsible?: any }

export type ReactTableProps = Omit<TableProps, 'columns'> & {
  columns: Column[]
  rows: Row[]
  customStyles: any
  showArchived?: boolean
  handleArchiveDoc?: () => void
  handleMarkAllAsRead?: () => void
  handleMarkAllAsUnread?: () => void
  tableActivity: (getRoleId: string, activityType: string) => void
  channelName?: string
  filterTheme?: 'dark' | 'light'
}
