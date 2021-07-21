import { Asset, Role } from '.';

export default interface ForceData {
  name: string,
  readonly uniqid: string,
  overview: string,
  roles: Array<Role>,
  /**
   * @deprecated use iconURL instead
   */
  icon?: string,
  iconURL: string,
  color: string,
  /** if a CSS class is used to define the force color, provide it here */
  cssClass?: string,
  /** is this classed as an umpire force? */
  umpire: boolean,
  dirty: boolean,
  /** collection of assets (ships in maritime context) for this force */
  assets?: Array<Asset>,
  /* todo - eventually move to force ids, rather than names */
  controlledBy?: Array<string>
  /** list of force IDs that can see assets of this force.
   *  todo - eventually move to force ids, rather than names
   */
  visibleTo?: Array<string>
}
