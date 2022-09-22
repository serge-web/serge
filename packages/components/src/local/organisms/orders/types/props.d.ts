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
  templates: TemplateBody[]
  messages: MessagePlanning[]
  gameDate: string
  /**
   * method to customise the new (or existing) message template
   */
  customiseTemplate?: {(schema: Record<string, any>): Record<string, any>}}
