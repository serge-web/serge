import { Wargame } from '@serge/custom-types';

export default interface PropTypes {
  /* half section title */
  type?: 'submit' | 'reset' | 'button'
  size?: 's' | 'm'
  onClick?: any
  disabled?: boolean
  wargame?: Wargame
  tabs?: Array<string>
}
