import React from 'react'

import { WargameData } from '@serge/custom-types/wargame-data.interface'

import styles from './styles.module.scss'

interface Props {
  data: WargameData
  currentTab: string
}

const getClassName = (entry: object, currentTab: string): string => {
  let c = styles.indicator
  // Check if the current entry key matches the currentTab value in the wargame
  if (entry[0] === currentTab) c = styles.active
  // Check if current entry is complete
  if (entry[1].complete) c = styles.complete

  return c
}

const createIndicators = (data: WargameData, currentTab: string): Array<any> =>
  Object.entries(data)
    .map(entry => <div key={entry[0]} className={getClassName(entry, currentTab)} />)

const ProgressIndicator: React.FunctionComponent<Props> = ({ data, currentTab }: Props) =>
  <div className={styles.progress}>
    {createIndicators(data, currentTab)}
  </div>

export default ProgressIndicator
