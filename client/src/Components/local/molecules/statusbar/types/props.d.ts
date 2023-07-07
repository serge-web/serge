import { Wargame } from 'src/custom-types'

export default interface PropTypes {
  /* half section title */
  href?: string
  onChange?: (e?: any) => void
  onSave?: (update: string) => void
  wargame: Wargame
  tabsOrder?: Array<string>
}
