import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Body from './orderContent'
import './styles.scss'
import { ADJUDICATION_PHASE, UMPIRE_FORCE } from '../../../../consts'

const OrdersPanel = ({ selectedForce, allForces, phase, onSendClick, planningNow, turn }) => {
  const [active, setActive] = useState(true)

  return showOrders() && (
    <div className="orders-panel">
      <div className="orders-panel__header">
        <div className="orders-panel__title">{panelTitle()}</div>
        <div className="orders-panel__actions">
          <div
            className={`orders-panel__toggler orders-panel__toggler--${active ? 'active' : 'inactive'}`}
            onClick={() => { setActive(!active) } }
          />
        </div>
      </div>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="slideorders"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        { active &&
        <Body
          selectedForce={selectedForce}
          planningNow={planningNow}
          allForces={allForces}
          onSendClick={onSendClick} />
        }
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default OrdersPanel
