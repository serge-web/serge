import { MessageMap } from ".";

export default interface Postback {
    (messageType: string, payload: MessageMap, channelID?: string | number | undefined): void
}