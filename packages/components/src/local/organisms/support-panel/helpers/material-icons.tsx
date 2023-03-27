import { faChevronRight, faSearch, faSortUp, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { forwardRef } from 'react'

/** centrally provide a set of local icon overrides for the
 * standard icons used in `material-table`
 *
 */
export const materialIcons = {
  Search: forwardRef(() => <FontAwesomeIcon title='Free text search' icon={faSearch} />),
  ResetSearch: forwardRef(() => <FontAwesomeIcon title='Reset search' icon={faTimes} />),
  Check: forwardRef(() => <FontAwesomeIcon title='Reset search' icon={faSquare} />),
  DetailPanel: forwardRef(() => <FontAwesomeIcon title='Reset search' icon={faChevronRight} />),
  SortArrow: forwardRef(() => <FontAwesomeIcon title='Sort' icon={faSortUp} />),
  Filter: forwardRef(() => <FontAwesomeIcon title='Sort' icon={faSearch} />)
}
