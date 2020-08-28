export default interface Postback {
    (messageType: string, payload: any, channelID?: string | number | undefined): void
}