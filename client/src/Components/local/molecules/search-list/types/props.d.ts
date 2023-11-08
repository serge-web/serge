import { Template, Channel, PlatformTypeData, MapAnnotation } from 'src/custom-types'

type TemplateValue = Template['value']

export interface TemplateListItem extends TemplateValue {
  details: {
    title: string
  }
}
export interface Item {
  name?: string
  [property: string]: any
}
export type ListItem = Channel | TemplateListItem | PlatformTypeData | Item | MapAnnotation

export default interface Props {
  /**
   * Search list text input placeholder
   */
  placeholder?: string
  /**
   * Original list of searchable datas
   */
  listData: Array<ListItem>
  /**
   * Callback on list item click event
   */
  setSelected: (item: ListItem) => void
  /**
   * A function to decide active state of a row
   */
  activeRow: (item: ListItem) => boolean
  /**
   * A formatter function to generate row label
   */
  rowLabel: (item: ListItem) => string
  /**
   * A function that will be passed as the filter expression of the list data
   */
  rowFilter: (item: ListItem, query: string) => boolean
  /**
   * Callback on duplicate menu click event
   */
  onDuplicate?: (item: ListItem) => void
  /**
   * Callback on delete menu click event
   */
  onDelete?: (item: ListItem) => void
  /**
   * Whether to show search input text or not
   */
  withSearch?: boolean
}
