export type Props = {
  isOpen: boolean
  onClose: VoidFunction
  onSave: (data: any) => void
  data: AttributeEditorData[]
}
