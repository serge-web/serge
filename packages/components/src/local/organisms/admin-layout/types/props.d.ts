import StatusBarTypes from '../../../molecules/statusbar/types/props'
import { PlatformType } from '@serge/custom-types'

type PlatformTypes = Array<PlatformTypeData>

export default interface PropTypes extends StatusBarTypes {
  /* half section title */
  type?: 'submit' | 'reset' | 'button'
  size?: 's' | 'm'
  onTabChange?: (tab: string, key: number, e: any) => void
  disabled?: boolean
  tabs?: Array<string>
  wargameChanged?: boolean
  activeTab?: string
  platformTypes?: PlatformType[]
}
