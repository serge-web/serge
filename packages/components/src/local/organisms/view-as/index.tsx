import cx from 'classnames'
import React from 'react'

import PropTypes from './types/props'
import PublicIcon from '@material-ui/icons/Public'
import { UMPIRE_FORCE } from '@serge/config'
import Item from '../../map-control/helpers/item'

export const ViewAs: React.FC<PropTypes> = ({
  forces = [],
  viewAsCallback,
  viewAsForce
}) => {
  /* set view as force */
  const viewAs = (force: string): void => {
    viewAsCallback(force)
  }

  /* utilty method for whether to show view-as button as selected  */
  const showAsSelected = (force: string): 'light' | 'dark' | undefined => {
    return viewAsForce !== undefined ? viewAsForce === force ? 'light' : 'dark' : 'dark'
  }

  return <>
    {forces.length > 0 && <div className={cx('leaflet-control')} data-tour="certain-force">
      {forces.map((force: any): React.ReactElement => (
        <Item
          contentTheme={showAsSelected(force.uniqid)}
          key={`k_${force.uniqid}`}
          onClick={(): void => { viewAs(force.uniqid) }}
          title={`View As ${force.name}`}
        >
          <PublicIcon style={{ color: force.uniqid === UMPIRE_FORCE ? '#777' : force.color }} />
        </Item>
      ))}
    </div>}
  </>
}

export default ViewAs
