import { Asset, Role } from '.';

export default interface ForceData {
  name: string,
  readonly uniqid: string,
  overview: string,
  roles: Array<Role>,
  icon: string,
  color: string,
  /** if a CSS class is used to define the force color, provide it here */
  cssClass?: string,
  umpire: boolean,
  dirty: boolean,
  assets?: Array<Asset>,
  /* todo - eventually move to force ids, rather than names */
  controlledBy?: Array<string>
  /** list of force IDs that can see assets of this force.
   *  todo - eventually move to force ids, rather than names
   */
  visibleTo?: Array<string>
}
