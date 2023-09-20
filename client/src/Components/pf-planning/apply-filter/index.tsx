import cx from 'classnames'
import React from 'react'

import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from '../../local/map-control/helpers/item'
import PropTypes from './types/props'

export const ApplyFilter: React.FC<PropTypes> = ({
  setFilterApplied,
  filterApplied
}) => {
  return <>
    <div className={cx('leaflet-control')} data-tour="filter-applied">
      <Item title="Match table filters" onClick={(): void => { setFilterApplied(!filterApplied) }}
        contentTheme={!filterApplied ? 'dark' : 'light'} >
        <FontAwesomeIcon size={'lg'} icon={faFilter} />
      </Item>
    </div>
  </>
}

export default ApplyFilter
