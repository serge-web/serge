import { faChevronRight, faSearch, faSortUp, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

/** centrally provide a set of local icon overrides for the
 * standard icons used in `material-table`
 *
 */
export const materialIcons = {
  Search: (): any => <FontAwesomeIcon title='Free text search' icon={faSearch} />,
  ResetSearch: (): any => <FontAwesomeIcon title='Reset search' icon={faTimes} />,
  Check: (): any => <FontAwesomeIcon title='Reset search' icon={faSquare} />,
  DetailPanel: (): any => <FontAwesomeIcon title='Reset search' icon={faChevronRight} />,
  SortArrow: (): any => <FontAwesomeIcon title='Sort' icon={faSortUp} />,
  Filter: (): any => <FontAwesomeIcon title='Sort' icon={faSearch} />
}
