import { Role } from './role.interface'

export interface Force {
  name: string,
  uniqid: string,
  overview: string,
  roles: Array<Role>,
  icon: string,
  color: string,
  umpire: boolean,
  dirty: boolean
}