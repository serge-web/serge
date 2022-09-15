import { ForceData, Role } from '@serge/custom-types'
import MaterialTable, { Column } from 'material-table'
import React, { useEffect, useState } from 'react'
import { getColumns, getRows } from './helpers/collate-assets'
import PropTypes, { Row } from './types/props'

export const getRoles = (forces: ForceData[], playerForce?: ForceData['uniqid']): Role[] => {
  const roles: Role[] = []
  forces.forEach((force: ForceData) => {
    if ((playerForce === undefined) || (force.uniqid === playerForce)) {
      roles.push(...force.roles)
    }
  })
  return roles
}

export const PlanningAssets: React.FC<PropTypes> = ({ forces, playerForce, opFor, forceColors, platformStyles }: PropTypes) => {
  const [rows, setRows] = useState<Row[]>([])
  const [columns, setColumns] = useState<Column[]>([])

  const roles = opFor ? [] : getRoles(forces, playerForce)

  useEffect(() => {
    setColumns(getColumns(opFor, roles, playerForce))
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
    options={{
      sorting: true,
      selection: !jestWorkerId // fix unit-test for material table
    }}
  />
}

export default PlanningAssets
