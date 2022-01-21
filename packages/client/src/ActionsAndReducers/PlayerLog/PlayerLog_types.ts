export type PlayerLogAction = {
  type: string,
  payload: PlayerActivity
}

// single record of recent player activity
export type PlayerActivity = {
  wargame: string
  role: string
  updatedAt?: number
}