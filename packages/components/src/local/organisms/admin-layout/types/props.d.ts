import StatusBarTypes from '../../../molecules/statusbar/types/props'

export default interface PropTypes extends StatusBarTypes {
  /* half section title */
  type?: 'submit' | 'reset' | 'button'
  size?: 's' | 'm'
  onTabChange?: (tab: string, key: number, e: any) => void
  onPressBack?: () => void
  disabled?: boolean
  tabs?: Array<string>
  wargameChanged?: boolean
  activeTab?: string
}
