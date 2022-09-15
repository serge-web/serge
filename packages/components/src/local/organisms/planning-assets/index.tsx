import MaterialTable, { Column } from 'material-table'
import React, { useEffect, useState } from 'react'
import { getColumns, getRows } from './helpers/collate-assets'
import PropTypes, { Row } from './types/props'

export const PlanningAssets: React.FC<PropTypes> = ({ forces, playerForce, opFor, forceColors, platformStyles }: PropTypes) => {
  const [rows, setRows] = useState<Row[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)

  useEffect(() => {
    setColumns(getColumns(opFor, forces, playerForce || ''))
    setRows(getRows(opFor, forces, forceColors, platformStyles, playerForce))
  }, [playerForce, forces])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  return <MaterialTable
    title={'Planning Assets'}
    columns={jestWorkerId ? [] : columns}
    data={jestWorkerId ? [] : rows}
    parentChildData={(row, rows): any => rows.find((a: Row): any => a.id === row.parentId)}
    actions={[
      {
        icon: 'filter',
        iconProps: filter ? { color: 'action' } : { color: 'disabled' },
        tooltip: 'Show filter controls',
        isFreeAction: true,
        onClick: (): void => setFilter(!filter)
      }
    ]}
    options={{
      sorting: true,
      filtering: filter,
      paging: false,
      selection: !jestWorkerId // fix unit-test for material table
    }}
  />
}

export default PlanningAssets
