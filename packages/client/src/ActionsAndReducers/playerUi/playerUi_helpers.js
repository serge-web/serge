export const matchedForce = (p, selectedForce) => p.forceUniqid === selectedForce
export const matchedRole = (role, selectedRole) => role.value === selectedRole
export const matchedForceAndRole = (p, { selectedForce, selectedRole }) => {
  return matchedForce(p, selectedForce) && p.roles.some(p => matchedRole(p, selectedRole))
}

// should be isObserver function ??
export const matchedAllRoles = (p, selectedForce) => {
  return matchedForce(p, selectedForce) && p.roles.length === 0
}

export const checkParticipantStates = (channel, newState) => {
  const participatingRole = channel.participants.find(p => matchedForceAndRole(p, newState))
  const participatingForce = channel.participants.find(p => matchedForce(p, newState.selectedForce))
  if (!participatingForce && !newState.isObserver) return {}

  const isParticipant = !!participatingRole

  // is this badly named? allRolesInclu8ded?
  const allRolesIncluded = channel.participants.find(p => matchedAllRoles(p, newState.selectedForce))
  return {
    isParticipant,
    participatingRole,
    allRolesIncluded
  }
}

export const getParticipantStates = (channel, newState) => {    
  let chosenTemplates
  let templates
  let observing = false
  const { isParticipant, participatingRole, allRolesIncluded } = checkParticipantStates(channel, newState)
  if (participatingRole) {
    chosenTemplates = participatingRole.templates
  } else if (allRolesIncluded) {
    chosenTemplates = allRolesIncluded.templates
  } else {
    chosenTemplates = []
  }
  if (isParticipant || allRolesIncluded) {
    if (chosenTemplates.length === 0) {
      templates = newState.allTemplates.filter((template) => template.title === 'Chat')
    } else {
      templates = chosenTemplates.map((template) => template.value)
    }
  }

  if (newState.isObserver && !isParticipant && !allRolesIncluded) {
    observing = true
    templates = []
  }
  return { isParticipant, allRolesIncluded, observing, templates }
}
