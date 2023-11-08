import { AttributeEditorData, AttributeTypes, AttributeValues } from 'src/custom-types'

export type Props = {
  /** whether to display dialog */
  isOpen: boolean
  /** close handler */
  onClose: VoidFunction
  /** save handler */
  onSave: (data: AttributeValues) => void
  /** data to be edited */
  data: AttributeEditorData[]
  /**
   * attribute type data
   */
  attributeTypes?: AttributeTypes
  /** whether the data is being edited in adjudication phase,
   * which means we can ignore the `playerCanEditData` value
   */
  inAdjudication?: boolean
}
