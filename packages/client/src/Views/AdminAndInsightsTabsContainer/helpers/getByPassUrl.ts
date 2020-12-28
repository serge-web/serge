import { PlayerUi } from '@serge/custom-types'

export default ({ currentWargame, allForces, selectedForce, selectedRole }: PlayerUi): URL => {
  const currentUrl = new URL(document.location!.href)

  const force = allForces.find(force => force.uniqid === selectedForce)
  if (force === undefined) throw new Error('Selected Force not found in allForces')

  const role = force.roles.find(role => role.name === selectedRole)
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
