import { PlatformType } from 'src/custom-types'

export default interface PropTypes {
  platformType?: PlatformType
  onChange: (platformType: PlatformType) => void
  onSave?: (platformType: PlatformType) => void
  onDelete?: (platformType: PlatformType) => void
  onDuplicate?: (platformType: PlatformType) => void
  iconUploadUrl?: string
}
