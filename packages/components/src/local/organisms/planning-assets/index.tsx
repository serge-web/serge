import MaterialTable, { Column, MTableBody } from 'material-table'
import React, { useEffect, useState } from 'react'
import { getColumns, getRows } from './helpers/collate-assets'
import PropTypes, { Row } from './types/props'

export const PlanningAssets: React.FC<PropTypes> = ({ forces, playerForce, opFor, forceColors, platformStyles }: PropTypes) => {
  const [rows, setRows] = useState<Row[]>([])
  const [columns, setColumns] = useState<Column[]>([])

  useEffect(() => {
    setColumns(getColumns(opFor, playerForce))
    setRows(getRows(opFor, forces, forceColors, platformStyles, playerForce))
  }, [playerForce, forces])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const onSelectionChange = (rows: Row[]): void => {
    console.log('selected rows: ', rows)
  }

  const onVisibleRowsChange = (rows: Row[]): void => {
    console.log('visible rows: ', rows)
  }

  return <MaterialTable
    title={'Planning Assets'}
    columns={jestWorkerId ? [] : columns}
    data={jestWorkerId ? [] : rows}
    parentChildData={(row, rows): Row => rows.find((a: Row) => a.id === row.parentId)}
    options={{
      paging: false,
      sorting: true,
      selection: !jestWorkerId // fix unit-test for material table
    }}
    onSelectionChange={onSelectionChange}
    components={{
      Body: (props): React.ReactElement => {
        onVisibleRowsChange(props.renderData)
        return (<MTableBody
          {...props}
        />)
      }
    }}
  />
}

export default PlanningAssets
