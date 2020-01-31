import React from 'react'
import './styles.scss'
import OrderAsset from './orderAsset'

const OrderPanelContent = ({ selectedForce, allForces }) => {
  const selectedForceData = allForces.find(force => force.uniqid === selectedForce)

  return (
    <div className="orders-panel__content">
      <ul className="orders-panel__list">
        <li>
          {selectedForceData.assets.map(asset => (
            <OrderAsset
              key={asset.uniqid}
              data={asset}
              force={selectedForceData}
              allForces={allForces}
            />
          ))}
        </li>
      </ul>
      <div className="orders-panel__footer">
        <button className="btn btn-action">SEND</button>
      </div>
    </div>
  )
}

export default OrderPanelContent
