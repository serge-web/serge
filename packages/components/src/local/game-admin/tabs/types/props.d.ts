export default interface PropTypes {
  /* half section title */
  href?: string
  onChange?: (selectedTab: string, e?: any) => void
  disabled?: boolean
  className?: string
  tabs: Array<string>
}
