import { ForceData, PlannedActivityGeometry } from 'src/custom-types'

export type OrderRow = {
  id: string
  // the raw reference value
  rawRef: string
  // the combined reference and turn number
  reference: string
  force: ForceData['name']
  assets: string
  excluded: boolean
  title: string
  role: string
  activity: string
  startDate: string
  endDate: string
  /* note - the tableData object is
  injected by material-table */
  tableData?: { checked: boolean }
}

export type LocationEditCallbackHandler = { (plans: PlannedActivityGeometry[], callback: { (newValue: PlannedActivityGeometry[]): void }): void }
