import { ActivityLogsInterface } from '@serge/custom-types'

export type PlayerLogAction = {
  type: string,
  payload: ActivityLogsInterface
}
