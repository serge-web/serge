import Tab from './tab'

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
