export type PLayerLogAction = {
  type: string,
  payload: PlayerLogPayload
}

export type PlayerLogPayload = {
  wargame: string
  role: string
  sendAt: number
}