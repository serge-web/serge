import Participant from './participant'

export default interface ChannelData {
  name: string,
  participants: Array<Participant>
}