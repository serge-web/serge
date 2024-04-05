import { Wargame } from 'src/custom-types'

export interface GameInfo {
  description: string
  imageUrl: string
  imageUrlSet: boolean
  showAccessCodes: boolean
  title: string
}

export interface StateProps {
  wargame: Wargame
  gameInfo: GameInfo
  dbLoading: any
}

export interface Props extends StateProps {
  checkPasswordFail: () => void
  wargameIsInvalid: () => void
  loadData: () => void
}

export default Props
