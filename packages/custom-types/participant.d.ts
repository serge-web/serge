import Role from './role'

export default interface Participant {
  force: string,
  forceUniqid: string,
  // TODO: switch roles to ne a list of uniqid values, not structures. Retrieve strucutre using uniqid
  roles: Array<Role>,
  subscriptionId: string,
  templates: Array<any>,
  icon?: any // TODO: Check it
}
