export type OrderRow = {
  id: string
  title: string
  role: string
  activity: string
  startDate: string
  endDate: string
}

export default interface PropTypes {
  columns: OrderColumn[]
  rows: OrderRow[]
  title?: string
  detailPanelFnc: {(rowData: OrderRow): any}
}
