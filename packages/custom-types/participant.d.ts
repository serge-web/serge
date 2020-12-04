import Role from './role'

export default interface Participant {
  force: string,
  forceUniqid: string,
  roles: Array<Role>,
  subscriptionId: string,
  templates: Array<any>,
  icon?: any // TODO: Check it
}
