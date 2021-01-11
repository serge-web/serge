import { Participant, PlayerUi, Role } from '@serge/custom-types';

export const matchedForceFilter = (
  participant: Participant,
  selectedForce: string
): boolean => (
  participant.forceUniqid === selectedForce
)
const matchedRole = (role: Role, selectedRole: string): boolean => {
  return role.name === selectedRole
}

export const matchedForceAndRoleFilter = (
  participant: Participant,
  { selectedForce, selectedRole }: PlayerUi
): boolean => (
  matchedForceFilter(participant, selectedForce) &&
  participant.roles.some(role => matchedRole(role, selectedRole))
)

export const matchedAllRolesFilter = (
  participant: Participant,
  selectedForce:string
): boolean => (
  matchedForceFilter(participant, selectedForce) && participant.roles.length === 0
)
