import { Role, ForceRole } from '@serge/custom-types'

export default function forceRole (forceName: string, forceId: string, role: Role): ForceRole {
  const res: ForceRole = {
    forceId: forceId,
    forceName: forceName,
    roleId: role.roleId,
    roleName: role.name
  }
  return res
}
