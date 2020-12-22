import State from './state'

export default interface PlatformTypeData {
  name: string,
  conditions: Array<string>,
  icon: string,
  speedKts: Array<number>,
  states: Array<State>
  travelMode: string
}
