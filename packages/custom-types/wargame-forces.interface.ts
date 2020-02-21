import { Force } from './force.interface'

export interface WargameForces {
  name: string,
  forces: Force,
  selectedForce: string,
  complete: boolean,
  dirty: boolean
}