import { Template } from '@serge/custom-types'

type TemplateValue = Template['value']

export interface ListItem extends TemplateValue {
  details: {
    title: string
  }
}

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
   * Selected list item that is active on click
   */
  selected?: string
  /**
   * Callback on list item click event
   */
  setSelected: (item: ListItem) => void
}
