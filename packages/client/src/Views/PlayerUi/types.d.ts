import { Wargame, Template } from '@serge/custom-types'

export interface GameInfo {
  description: string,
  imageUrl: string,
  imageUrlSet: boolean,
  showAccessCodes: boolean,
  title: string
}

export interface Props {
  wargame: Wargame,
  messageTypes: Template[],
  gameInfo: GameInfo,
  dbLoading: any,
  checkPasswordFail: () => void
  wargameIsInvalid: () => void
  loadData: () => void
}

export default Props
