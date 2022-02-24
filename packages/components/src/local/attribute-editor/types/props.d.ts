export type Props = {
  /** whether to display dialog */
  isOpen: boolean
  /** close handler */
  onClose: VoidFunction
  /** save handler */
  onSave: (data: AttributeEditorData[]) => void
  /** data to be edited */
  data: AttributeEditorData[]
}
