import { EXPORT_ITEM_MESSAGES, EXPORT_ITEM_FORCES } from 'src/config'

export interface ExportItemData {
  title: string
  items: string[][]
}

export interface ExportItemMessages {
  type: typeof EXPORT_ITEM_MESSAGES
  title: string
  wargame: string
  data: ExportItemData[]
}

export interface ExportItemForces {
  type: typeof EXPORT_ITEM_FORCES
  [property: string]: any
}

export type ExportItem = ExportItemMessages | ExportItemForces
