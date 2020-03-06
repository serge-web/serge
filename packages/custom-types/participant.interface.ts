import Role from './role.interface'

export default interface Participant {
  force: string,
  forceUniqid: string,
  roles: Array<Role>,
  subscriptionId: string,
  templates: Array<any>
}