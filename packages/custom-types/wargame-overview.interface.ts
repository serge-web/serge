export default interface WargameOverview {
  name: string,
  gameDescription: string,
  gameTurnTime: number,
  realtimeTurnTime: number,
  timeWarning: number,
  gameDate: string,
  showAccessCodes: boolean,
  complete: boolean,
  dirty: boolean
}