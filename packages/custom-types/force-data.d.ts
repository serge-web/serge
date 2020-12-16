import Role from './role'

export default interface ForceData {
  name: string,
  uniqid: string,
  overview: string,
  roles: Array<Role>,
  icon: string,
  color: string,
  umpire: boolean,
  dirty: boolean,
  assets?: any
}
