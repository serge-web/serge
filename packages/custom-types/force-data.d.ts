import { Asset, Role } from '.';

export default interface ForceData {
  name: string,
  // TODO: make uniqid readonly
  uniqid: string,
  overview: string,
  roles: Array<Role>,
  icon: string,
  color: string,
  umpire: boolean,
  dirty: boolean,
  assets?: Array<Asset>,
  controlledBy?: Array<string>
}
