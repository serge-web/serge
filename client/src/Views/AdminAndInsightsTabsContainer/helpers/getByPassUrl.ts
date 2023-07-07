import { PlayerUi } from 'src/custom-types'

export default ({ currentWargame, selectedForce, selectedRole }: PlayerUi): URL => {
  const currentUrl = new URL(document.location!.href)

  if (selectedForce === undefined) throw new Error('Selected Force not found in allForces')

  const role = selectedForce.roles.find(role => role.roleId === selectedRole)
  if (role === undefined) throw new Error('Selected Role not found in selectedForce')

  const byPassParams = {
    wargame: currentWargame,
    access: role.roleId
  }

  Object.keys(byPassParams).forEach(key => {
    currentUrl.searchParams.set(key, byPassParams[key])
  })

  return currentUrl
}
