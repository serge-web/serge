import GameTitleProps from '../../../atoms/game-title/types/props'
import OptionMenuProps from '../../../molecules/option-menu/types/props'

export default interface Props {
  /**
   * List of war games
   */
  wargames: Array<GameTitleProps>
  /**
   * Menu configuration for each war game that will be shown
   * as the war game context menu
   */
  menuConfig: OptionMenuProps['menus']
  /**
   * Callback on each of war game title click event
   */
  onGameClick: (title: string) => void

  /**
   * toggle menu item action
   */
  toggleAction: (title: string) => void
  /**
   * Workaround to prevent using custom scrollbar in unit tests,
   * since it was failing
   */
  useCustomScroll?: boolean
}
