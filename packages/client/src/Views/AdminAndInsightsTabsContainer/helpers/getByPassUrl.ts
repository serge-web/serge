import { PlayerUi } from '@serge/custom-types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ currentWargame, allForces, selectedForce, selectedRole }: PlayerUi): URL => {
  const currentUrl = new URL(document.location?.href)

  if (selectedForce === undefined) throw new Error('Selected Force not found in allForces')

  const role = selectedForce.roles.find(role => role.name === selectedRole)
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
