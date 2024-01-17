import { Role } from '.'

export default interface ForceData {
  name: string
  readonly uniqid: string
  overview: string
  roles: Array<Role>
  /**
   * @deprecated use iconURL instead
   */
  iconURL: string
  color: string
  /** if a CSS class is used to define the force color, provide it here */
  cssClass?: string
  dirty: boolean
  /** list of force IDs that can see assets of this force.
   *  todo - eventually move to force ids, rather than names
   */
  visibleTo?: Array<ForceData['uniqid']>
  /** 
   * whether this is an umpire force 
   */
  umpire?: boolean
}
