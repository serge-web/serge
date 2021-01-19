import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Body from './orderContent'
import './styles.scss'
import { ADJUDICATION_PHASE, UMPIRE_FORCE } from '../../../../consts'

const OrdersPanel = ({ selectedForce, allForces, phase, onSendClick, planningNow, turn }) => {
  const [active, setActive] = useState(true)

  /** only show the orders panel if we're umpire in adjudication, or anyone in planning phase */
  const showOrders = () => {
    if (phase === ADJUDICATION_PHASE) {
      return selectedForce.uniqid === UMPIRE_FORCE && turn !== 0
    } else {
      return true
    }
  }

  const panelTitle = () => {
    if (phase === ADJUDICATION_PHASE && selectedForce.uniqid === UMPIRE_FORCE) {
      return 'State of World'
    } else {
      return 'Planning Orders'
    }
  }

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
          selectedForce={selectedForce.uniqid}
          planningNow={planningNow}
          allForces={allForces}
          onSendClick={onSendClick} />
        }
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default OrdersPanel
