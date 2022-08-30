import React, { forwardRef } from 'react'
import PropTypes from './types/props'

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
import MaterialTable from 'material-table'

type TableIcons = {
  [x: string]: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement | null>>
}

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

export const Orders: React.FC<PropTypes> = ({ columns, rows, title }: PropTypes) => {
  return <MaterialTable
    title={title || 'My Orders'}
    icons={tableIcons}
    columns={columns}
    data={rows}
    options={{
      sorting: true
    }}
  />
}

export default Orders
