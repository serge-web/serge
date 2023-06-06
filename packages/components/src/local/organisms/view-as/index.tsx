import cx from 'classnames'
import React from 'react'

import PublicIcon from '@material-ui/icons/Public'
import { UMPIRE_FORCE } from '@serge/config'
import Item from '../../p9legacy/map-control/helpers/item'
import PropTypes from './types/props'

export const ViewAs: React.FC<PropTypes> = ({
  forces = [],
  viewAsCallback,
  viewAsForce,
  isUmpire
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
    {isUmpire && forces.length > 0 && <div className={cx('leaflet-control')} data-tour="certain-force">
      { forces.filter((force) => force.umpire || (force.assets && force.assets.length)).map((force: any): React.ReactElement => (
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
