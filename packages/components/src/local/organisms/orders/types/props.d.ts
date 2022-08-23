
export type OrderRow = {
  id: string
  title: string
  role: string
  status: string
  startDate: string
  endDate: string
}

export default interface PropTypes {
  columns: OrderColumn[]
  rows: OrderRow[]
  title?: string
}
