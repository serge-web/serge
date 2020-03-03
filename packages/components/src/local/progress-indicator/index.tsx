import React from 'react'
import styles from './styles.module.scss'

interface Tab {
  name: string
  complete: boolean
}

interface Props {
  /**
   * The data from the wargame
   */
  tabs: Array<Tab>
  /**
   * The current tab
   */
  currentTab: string
}

const getClassName = (tab: Tab, currentTab: string): string => {
  let c = styles.indicator
  // Check if the current entry key matches the currentTab value in the wargame
  if (tab.name === currentTab) c = styles.active
  // Check if current entry is complete
  if (tab.complete) c = styles.complete

  return c
}

const createIndicators = (tabs: Array<Tab>, currentTab: string): Array<any> =>
  tabs.map(tab => <div key={tab.name} className={getClassName(tab, currentTab)} />)

export const ProgressIndicator: React.FunctionComponent<Props> = ({ tabs, currentTab }: Props) =>
  <div className={styles.progress}>
    {createIndicators(tabs, currentTab)}
  </div>

export default ProgressIndicator
