import { TemplateBodysByKey } from '@serge/custom-types'

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
  templates: TemplateBody[]
  messages: MessagePlanning[]
  gameDate: string
}
