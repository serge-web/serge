import { Role } from './role.interface'

export interface Participant {
  force: string,
  forceUniqid: string,
  roles: Array<Role>,
  subscriptionId: string,
  templates: Array<any>
}