import Tab from './tab.interface'

export default interface Props {
  /**
   * The data for all of the tabs
   */
  tabs: Array<Tab>
  /**
   * The current tab
   */
  currentTab: string
}
