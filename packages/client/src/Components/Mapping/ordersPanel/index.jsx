import React, { useState } from 'react'
import Body from './orderContent'
import './styles.scss'

const OrdersPanel = ({ selectedForce, allForces, onSendClick }) => {
  const [active, setActive] = useState(true)

  return (
    <div className="orders-panel">
      <div className="orders-panel__header">
        <div className="orders-panel__title">ORDERS</div>
        <div className="orders-panel__actions">
          <div
            className={`orders-panel__toggler ${active && 'orders-panel__toggler--active'}`}
            onClick={() => { setActive(!active) } }
          />
        </div>
      </div>
      {active && <Body
        selectedForce={selectedForce}
        allForces={allForces}
        onSendClick={onSendClick}
      />}
    </div>
  )
}

export default OrdersPanel
