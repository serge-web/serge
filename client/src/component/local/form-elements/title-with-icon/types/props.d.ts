import { ChangeEvent } from 'react'

export default interface PropTypes {
  /**
   * The the force color to get the background
   */
  forceColor: string
  /**
   * the icon file to use (cow.svg)
   */
  icon: string
  /**
   * The title text or node
   */
  children: any

  onTitleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
