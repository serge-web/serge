import React from 'react'
import './styles.scss'
import OrderAsset from './orderAsset'

const OrderPanelContent = ({ selectedForce, allForces, onSendClick }) => {
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
        <li>
          {selectedForceData && selectedForceData.assets && selectedForceData.assets.map(asset => (
            <OrderAsset
              key={asset.uniqid}
              data={asset}
              force={selectedForceData}
              allForces={allForces}
              onClick={() => {
                console.log(onSendClick)
                // onSendClick()
              }}
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
