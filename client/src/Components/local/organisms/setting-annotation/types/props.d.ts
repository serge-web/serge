import { AnnotationMarkerData, IconOption } from '@serge/custom-types'

export default interface PropTypes {
  annotation?: AnnotationMarkerData
  onChange: (marker: AnnotationMarkerData) => void
  onSave?: (marker: AnnotationMarkerData) => void
  onDelete?: (marker: IconOption) => void
  onDuplicate?: (marker: IconOption) => void
  iconUploadUrl?: string
}
