import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import OrdersPanelContent from '../orders-panel-content'

import { panelTitle } from './helpers'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const OrdersPanel: React.FC<PropTypes> = ({ selectedForce, phase }: PropTypes) => {
  const [active, setActive] = useState(true)
  return (
    <div className={styles['orders-panel']}>
      {/* TODO: The line below my end up being a component */}
      <span className={styles.header}>{panelTitle(phase, selectedForce)}</span>
      <div className={styles.actions}>
        <div
          className={`${styles.toggler} toggler--${active ? 'active' : 'inactive'}`}
          onClick={(): void => { setActive(!active) } }
        />
      </div>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="slideorders"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        { active && <OrdersPanelContent name="test" colour="blue" />}
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default OrdersPanel
