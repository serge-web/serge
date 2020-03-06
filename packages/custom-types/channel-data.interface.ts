import Participant from './participant.interface'

export default interface ChannelData {
  name: string,
  participants: Array<Participant>
}