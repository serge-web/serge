export type Props = {
  /**
   * button label
   */
  label: string

  /**
   * options lists
   */
  options: string[]

  /**
   * callback function
   */
  onClick: (item: string) => void
}
