import Role from './role.interface'

export default interface ForceData {
  name: string,
  uniqid: string,
  overview: string,
  roles: Array<Role>,
  icon: string,
  color: string,
  umpire: boolean,
  dirty: boolean
}
