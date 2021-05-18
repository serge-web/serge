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
  controlledBy?: Array<string>
}
