
export type AdjudicationRow = {
  id: string
  reference: string
  complete: boolean
  /** turn when adjudication generated */
  turn: number
  /** whether outcome is flagged as important */
  important: string
  owner: string
  order1: string
  order2: string
  activity: string
  period: string
  tableData?: { showDetailPanel: any }
}
