import GameTitleProps from '../../../../atoms/game-title/types/props'
import OptionMenuProps from '../../../../molecules/option-menu/types/props'

export interface ContentProps {
  key: number
  id: number
  game: GameTitleProps
  menuConfig: OptionMenuProps['menus']
  wargameMenuOpen: string
  onGameClick: (title: string) => void
  setWargameMenuOpen: (title: string) => void
  scrollPos: any
}
