import React, { forwardRef } from 'react'

import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import FilterList from '@material-ui/icons/FilterList'
import Search from '@material-ui/icons/Search'

/** centrally provide a set of local icon overrides for the
 * standard icons used in `material-table`
 *
 */
export const materialIcons = {
  Search: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
  Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <Check {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <ArrowDownward {...props} ref={ref} />),
  Filter: forwardRef((props, ref: React.Ref<SVGSVGElement>) => <FilterList {...props} ref={ref} />)
}
