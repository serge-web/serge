import { ChannelUI, ForceData } from 'src/custom-types'
import { CoreParticipant } from 'src/custom-types/participant'

export const updateForceIcons = (thisChannel: ChannelUI, participants: CoreParticipant[] | undefined, allForces: ForceData[]): void => {
  // force icons
  const forceIcons = participants?.map((participant) => {
    const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
    return (force && force.iconURL) || force?.icon
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
