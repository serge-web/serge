import { Wargame, MessageTypes } from '@serge/custom-types'

export interface GameInfo {
  description: string,
  imageUrl: string,
  imageUrlSet: boolean,
  showAccessCodes: boolean,
  title: string
}

export interface StateProps {
  wargame: Wargame,
  messageTypes: MessageTypes,
  gameInfo: GameInfo,
  dbLoading: any
}

export interface Props extends StateProps {
  checkPasswordFail: () => void
  wargameIsInvalid: () => void
  loadData: () => void
}

export default Props
