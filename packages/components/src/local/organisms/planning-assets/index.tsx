import { Asset } from '@serge/custom-types'
import React, { forwardRef, useEffect, useState } from 'react'
import PropTypes, { Row } from './types/props'

import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import MaterialTable, { Column } from 'material-table'

type TableIcons = {
  [x: string]: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement | null>>
}

// need to wrap it as a component to use for Orders and PlanningAssets
const tableIcons: TableIcons = {
  Add: forwardRef<SVGSVGElement | null>((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef<SVGSVGElement | null>((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef<SVGSVGElement | null>((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef<SVGSVGElement | null>((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef<SVGSVGElement | null>((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef<SVGSVGElement | null>((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef<SVGSVGElement | null>((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef<SVGSVGElement | null>((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef<SVGSVGElement | null>((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef<SVGSVGElement | null>((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef<SVGSVGElement | null>((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef<SVGSVGElement | null>((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef<SVGSVGElement | null>((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef<SVGSVGElement | null>((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef<SVGSVGElement | null>((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef<SVGSVGElement | null>((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef<SVGSVGElement | null>((props, ref) => <ViewColumn {...props} ref={ref} />)
}

export const PlanningAssets: React.FC<PropTypes> = ({ forces, playerForce, render }: PropTypes) => {
  const [rows, setRows] = useState<Row[]>([])

  useEffect(() => {
    const getAssets = (): Asset[] => {
      if (playerForce && playerForce.assets) {
        return playerForce.assets
      }

      return forces.reduce((assets, item) => {
        if (item.assets) {
          assets.push(...item.assets)
        }
        return assets
      }, [] as Asset[])
    }

    const assets = getAssets()
    const tableRows: Row[] = []
    const renderedAsset = assets.map(asset => {
      tableRows.push({
        id: asset.uniqid,
        condition: asset.condition,
        name: asset.name,
        platformType: asset.platformType || '',
        status: asset.status?.state || ''
      })

      return Object.values(asset) as string[]
    })

    setRows(tableRows)
    // need to verify the structure of renderedAsset
    render(renderedAsset)
  }, [playerForce, forces])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const columns: Column[] = [
    { title: 'ID', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Condition', field: 'condition' },
    { title: 'Status', field: 'status' },
    { title: 'Platform-Tyle', field: 'platformType' }
  ]

  return <MaterialTable
    title={'Planning Assets'}
    icons={tableIcons}
    columns={jestWorkerId ? [] : columns}
    data={jestWorkerId ? [] : rows}
    options={{
      sorting: true
    }}
  />
}

export default PlanningAssets
