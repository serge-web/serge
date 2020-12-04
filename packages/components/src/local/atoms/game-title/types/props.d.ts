import { WargameList } from '@serge/custom-types'

export default interface Props extends WargameList {
  /**
   * Callback on clicking the game title
   */
  onClick?: (title: string) => void
}
