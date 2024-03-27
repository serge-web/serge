import { PropertyType } from 'src/custom-types'

export type SelectedProps = {
  [key: string]: any
}

export type ProppertiesPanelProps = {
  selectedProp: SelectedProps
  onPropertiesChange: (key: string, value: string) => void
  onRemoveFilter?: (filter: string) => void
  /** whether fields called "id" should be disabled */
  disableIdEdit: boolean
  checkSidc?: boolean
  /** property definitions for this feature type (only for props viewer) */
  rendererProps?: PropertyType[]
  multipleSelect?: boolean
}
