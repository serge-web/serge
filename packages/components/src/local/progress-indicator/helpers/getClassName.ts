import Tab from '../types/tab'

export const getClassName = (tab: Tab, currentTab: string): string => {
  let c = 'indicator'
  // Check if the current entry key matches the currentTab value in the wargame
  if (tab.name === currentTab) c = 'active'
  // Check if current entry is complete
  if (tab.complete) c = 'complete'

  return c
}

export default getClassName
