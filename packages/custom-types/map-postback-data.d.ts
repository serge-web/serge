import { MessageMap } from ".";

/** fire a mapping-related message */
export default interface MapPostBack {
    (messageType: string, payload: MessageMap, channelID?: string | number | undefined): void
}