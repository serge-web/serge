import { MessageTypes, Wargame } from '.';

export type GameInfo = {
  imageUrlSet: boolean;
  imageUrl: string;
  title: string;
  description: string;
  showAccessCodes: boolean;
}

export type Messages = {
  isLoading: boolean;
  messages: never[];
  messagePreviewId: string;
  messagePreview: {};
}

export type UmpireMenu = {
  selectedSchemaID: string;
  previewSchema: {};
}

export type ExportItems = {
  data: never[];
  loader: boolean;
}

export interface ActivityLogsInterface {
  activityTime: string
  activityType: string
  role: string
  wargame: string
}

export type DBLoadingState = {
  loadingMessageTypes: boolean;
  loadingWargames: boolean;
}

export type CurrentModal = {
  open: boolean;
  modal: string;
  data: any
}

export type RootState = {
  messageTypes: MessageTypes
  messages: Messages
  umpireMenu: UmpireMenu
  currentViewURI: string
  currentModal: CurrentModal
  notifications: any[]
  playerLog: ActivityLogsInterface
  wargame: Wargame
  dbLoading: DBLoadingState
  exportItems: ExportItems
  gameInfo: GameInfo
}