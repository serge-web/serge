import { ActivityLogsInterface } from "../../api/wargames_api/types";

export type PlayerLogAction = {
  type: string,
  payload: ActivityLogsInterface
}
