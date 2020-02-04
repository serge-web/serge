import React, { useState } from 'react'
import Body from './orderContent'
import './styles.scss'
import { ADJUDICATION_PHASE, UMPIRE_FORCE } from '../../../../consts'

const OrdersPanel = ({ selectedForce, allForces, phase, onSendClick, planingNow }) => {
  const [active, setActive] = useState(true)

  /** only show the orders panel if we're umpire in adjudication, or anyone in planning phase */
  const showOrders = () => {
    if (phase === ADJUDICATION_PHASE) {
      return selectedForce === UMPIRE_FORCE
    } else {
      return true
    }
  }

  const panelTitle = () => {
    if (phase === ADJUDICATION_PHASE && selectedForce === UMPIRE_FORCE) {
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
            className={`orders-panel__toggler ${active && 'orders-panel__toggler--active'}`}
            onClick={() => { setActive(!active) } }
          />
        </div>
      </div>
      {active && <Body
        selectedForce={selectedForce}
        planingNow={planingNow}
        allForces={allForces}
        onSendClick={onSendClick}
      />}
    </div>
  )
}

export default OrdersPanel
