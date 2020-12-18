export default interface PropTypes {
  /* half section title */
  onChange?: (selectedTab: string, key: number, e?: any) => void
  tabs: Array<string>
  activeTab?: string
  changed?: boolean
}
