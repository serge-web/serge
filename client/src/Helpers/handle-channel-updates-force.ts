import { ChannelUI, ForceData } from 'src/custom-types'
import { CoreParticipant } from 'src/custom-types/participant'

export const updateForceIcons = (thisChannel: ChannelUI, participants: CoreParticipant[] | undefined, allForces: ForceData[]): void => {
  // force icons
  const forceIcons = participants?.map((participant) => {
    const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
    return force && force.iconURL 
  })

  if (forceIcons !== thisChannel.forceIcons) {
    thisChannel.forceIcons = forceIcons
  }
}
  
export const updateForceColors = (thisChannel: ChannelUI, participants: CoreParticipant[] | undefined, allForces: ForceData[]): void => {
  // force colors
  const forceColors = participants?.map((participant) => {
    const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
    return (force && force.color) || '#FFF'
  })
  
  if (forceColors !== thisChannel.forceColors) {
    thisChannel.forceColors = forceColors
  }
}
  
export const updateForceNames = (thisChannel: ChannelUI, participants: CoreParticipant[] | undefined, allForces: ForceData[]): void => {
  // force names
  const forceNames = participants?.map((participant) => {
    const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
    return (force && force.name) || 'pending'
  })
  
  if (forceNames !== thisChannel.forceNames) {
    thisChannel.forceNames = forceNames
  }
}

// Builds arrays of force icons, colors, and names based on participant force uniqids.
export const buildForceIconsColorsNames = (
  participants: { forceUniqid: string }[],
  allForces: ForceData[]
): { forceIcons: any[], forceColors: string[], forceNames: string[] } => {
  const forceIcons: any[] = []
  const forceColors: string[] = []
  const forceNames: string[] = []

  for (const { forceUniqid } of participants) {
    const force = allForces.find((force) => force.uniqid === forceUniqid)
    forceIcons.push(force && force.iconURL)
    forceColors.push((force && force.color) || '#FFF')
    forceNames.push((force && force.name) || 'PENDING')
  }

  return { forceIcons, forceColors, forceNames }
}
