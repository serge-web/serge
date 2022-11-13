import { faChevronRight, faSearch, faSortUp, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icons } from 'material-table'
import React from 'react'

/** centrally provide a set of local icon overrides for the
 * standard icons used in `material-table`
 *
 */
export const materialIcons: Icons = {
  Search: () => <FontAwesomeIcon title='Free text search' icon={faSearch} />,
  ResetSearch: () => <FontAwesomeIcon title='Reset search' icon={faTimes} />,
  Check: () => <FontAwesomeIcon title='Reset search' icon={faSquare} />,
  DetailPanel: () => <FontAwesomeIcon title='Reset search' icon={faChevronRight} />,
  SortArrow: () => <FontAwesomeIcon title='Sort' icon={faSortUp} />,
  Filter: () => <FontAwesomeIcon title='Sort' icon={faSearch} />
}
