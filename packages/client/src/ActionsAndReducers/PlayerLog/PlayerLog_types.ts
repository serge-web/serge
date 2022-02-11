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
  activityTime: string
  // what happened at last event
  activityType: string
}