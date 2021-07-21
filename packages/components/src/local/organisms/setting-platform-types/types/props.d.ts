import { PlatformType } from '@serge/custom-types'

export default interface PropTypes {
  platformType?: PlatformType
  onChange: (platformType: PlatformType) => void
  onSave?: (platformType: PlatformType) => void
  iconUploadUrl?: string
}
