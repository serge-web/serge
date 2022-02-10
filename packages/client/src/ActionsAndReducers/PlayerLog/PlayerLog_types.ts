export type PlayerLogAction = {
  type: string,
  payload: PlayerActivity
}

// single record of recent player activity
export type PlayerActivity = {
  // id of current wargame
  wargame: string
  // id of current role
  role: string
  // time of last event
  updatedAt: number
  // what happened at last event
  event: string
}