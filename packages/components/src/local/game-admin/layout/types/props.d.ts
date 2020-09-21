import { Wargame } from '@serge/custom-types'

export default interface PropTypes {
  /* half section title */
  type?: 'submit' | 'reset' | 'button'
  size?: 's' | 'm'
  onTabChange?: (tab: string, key: number, e:any) => void
  disabled?: boolean
  wargame?: Wargame
  tabs?: Array<string>
  wargameChanged?: boolean
}
