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

/** data structure being collated for the
 * modal dialog
 */
export type ModalData = {
  type: string,
  // TODO: constrain this `any` type
  data: any,
  customMessages: {
    title: string,
    message: string
  }
}

export type CurrentModal = {
  /**
   * whether this modal is open
   */
  open: boolean;
  /**
   * type of modal in use
   * TODO: constrain this to a set of fixed strings
   */
  modal: string;
  /**
   *  the data that is being deleted
   */
  data: string | ModalData
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