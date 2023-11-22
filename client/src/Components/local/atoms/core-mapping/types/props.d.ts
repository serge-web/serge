export default interface PropTypes {
  playerForce: ForceData['id']
  playerRole: Role['id']
  currentTurn: number
  currentPhase: Phase
  forces: ForceStyle[]
  channel: CoreMappingChannel 
  messages: CoreMappingMessage[]
}
