import Participant from './participant'

export default interface ChannelData {
  name: string,
  uniqid?: string,
  participants: Array<Participant>
}
