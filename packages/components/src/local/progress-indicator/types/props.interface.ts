import Tab from './tab.interface'

export default interface PropTypes {
  /**
   * The data for all of the tabs
   */
  tabs: Array<Tab>
  /**
   * The current tab
   */
  currentTab: string
}
