import React from 'react'
import './styles.scss'
import OrderAsset from './orderAsset'

const OrderPanelContent = ({ selectedForce, allForces, onSendClick, planingNow }) => {
  let selectedForceData = { assets: [] }

  if (selectedForce === 'umpire') {
    for (const force of allForces) {
      if (force && force.assets && force.assets.length) {
        selectedForceData.assets = [
          ...selectedForceData.assets,
          ...force.assets
        ]
      }
    }
  } else {
    selectedForceData = allForces.find(force => force.uniqid === selectedForce)
  }

  return (
    <div className="orders-panel__content">
      <ul className="orders-panel__list">
        {selectedForceData && selectedForceData.assets && selectedForceData.assets.map(asset => (
          <li key={asset.uniqid}>
            <OrderAsset
              data={asset}
              force={selectedForceData}
              plannedRoute={planingNow && planingNow.plannedRoutes.find(({ uniqid }) => (uniqid === asset.uniqid))}
              allForces={allForces}
            />
          </li>
        ))}
      </ul>
      <div className="orders-panel__footer">
        <button onClick={() => {
          if (planingNow) onSendClick(planingNow)
        }} className="btn btn-action">SEND</button>
      </div>
    </div>
  )
}

export default OrderPanelContent
