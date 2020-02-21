import { Participant } from './participant.interface'

export interface Channel {
  name: string,
  participants: Array<Participant>
}