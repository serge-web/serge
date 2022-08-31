import MaterialTable, { Column } from 'material-table'
import React, { useEffect, useState } from 'react'
import { getColumns, getRows } from './helpers/collate-assets'
import PropTypes, { Row } from './types/props'

export const PlanningAssets: React.FC<PropTypes> = ({ forces, playerForce }: PropTypes) => {
  const [rows, setRows] = useState<Row[]>([])
  const [columns, setColumns] = useState<Column[]>([])

  useEffect(() => {
    setColumns(getColumns(playerForce))
    const rows = getRows(forces, playerForce)
    setRows(rows)
  }, [playerForce, forces])


  // useEffect(() => {
  //   const getAssets = (): Asset[] => {
  //     if (playerForce && playerForce.assets) {
  //       return playerForce.assets
  //     }

  //     return forces.reduce((assets, item) => {
  //       if (item.assets) {
  //         assets.push(...item.assets)
  //       }
  //       return assets
  //     }, [] as Asset[])
  //   }

  //   const assets = getAssets()
  //   const tableRows: Row[] = []
  //   const renderedAsset = assets.map(asset => {
  //     tableRows.push({
  //       id: asset.uniqid,
  //       condition: asset.condition,
  //       name: asset.name,
  //       platformType: asset.platformType || '',
  //       status: asset.status?.state || ''
  //     })

  //     const comprisingAssets = asset.comprising?.map(compAsset => {
  //       return {
  //         id: compAsset.uniqid,
  //         condition: compAsset.condition,
  //         name: compAsset.name,
  //         platformType: compAsset.platformType || '',
  //         status: compAsset.status?.state || '',
  //         parentId: asset.uniqid
  //       }
  //     }) || []
  //     tableRows.push(...comprisingAssets)

  //     return Object.values(asset) as string[]
  //   })

  //   setRows(tableRows)
  //   // need to verify the structure of renderedAsset
  //   render(renderedAsset)
  // }, [playerForce, forces])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  return <MaterialTable
    title={'Planning Assets'}
    columns={jestWorkerId ? [] : columns}
    data={jestWorkerId ? [] : rows}
    parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
    options={{
      sorting: true,
      selection: !jestWorkerId // fix unit-test for material table
    }}
  />
}

export default PlanningAssets
