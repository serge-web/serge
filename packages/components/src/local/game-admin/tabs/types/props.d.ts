export default interface PropTypes {
  /* half section title */
  onChange?: (selectedTab: string, e?: any) => void
  tabs: Array<string>
  activeTab?: string
}
