import cx from 'classnames'
import React from 'react'

import PropTypes from './types/props'
import Item from '../../map-control/helpers/item'
import FilterIcon from '@material-ui/icons/Filter'

export const ApplyFilter: React.FC<PropTypes> = ({
  setFilterApplied,
  filterApplied
}) => {
  return <>
    <div className={cx('leaflet-control')} data-tour="filter-applied">
      <Item title="Match table filters" onClick={(): void => { setFilterApplied(!filterApplied) }}
        contentTheme={!filterApplied ? 'dark' : 'light'} >
        <FilterIcon />
      </Item>
    </div>
  </>
}

export default ApplyFilter
