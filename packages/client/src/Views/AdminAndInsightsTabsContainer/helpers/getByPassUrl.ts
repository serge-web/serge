import { PlayerUi } from '@serge/custom-types'

export default ({ currentWargame, allForces, selectedForce, selectedRoleId, selectedRoleName }: PlayerUi): URL => {
  const currentUrl = new URL(document.location!.href)

  if (selectedForce === undefined) throw new Error('Selected Force not found in allForces')

  // add get role function here in case legacy role does not have the role id
  const role = selectedForce.roles.find(role => role.roleId === selectedRoleId || role.name === selectedRoleName)
  if (role === undefined) throw new Error('Selected Role not found in selectedForce')

  const byPassParams = {
    wargame: currentWargame,
    access: role.password
  }

  Object.keys(byPassParams).forEach(key => {
    currentUrl.searchParams.set(key, byPassParams[key])
  })

  return currentUrl
}
