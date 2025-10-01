import { Role } from '.'

export default interface ForceData {
  name: string
  readonly uniqid: string
  overview: string
  roles: Array<Role>
  iconURL: string
  color: string
  dirty: boolean
  /** list of force IDs that can see assets of this force.
   *  TODO - concept of assets now embedded in Renderers, we should
   *  TODO - probably handle visibility there.
   */
  visibleTo?: Array<ForceData['uniqid']>
  /** 
   * whether this is an umpire force 
   */
  umpire?: boolean
}
