import { Wargame, Template } from '@serge/custom-types'

interface GameInfo {
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
  checkPasswordFail: () => void
  loadData: () => void
}

export default Props
