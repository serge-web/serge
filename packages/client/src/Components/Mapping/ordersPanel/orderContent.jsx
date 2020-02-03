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

  const messageFor = (uniqid) => {
    // do we have planning data?
    if (planingNow) {
      // is it state of world?
      if (planingNow.detail && planingNow.detail.type === 'StateOfWorld') {
        var res = null
        planingNow.detail.data.find(force => {
          const assets = force.assets
          if (assets) {
            res = assets.find(asset => asset.uniqid === uniqid)
            return res
          } else {
            return false
          }
        })
        return res.newState ? 'Accepted' : ''
      } else if (planingNow.plannedRoutes) {
        // ok, it's planning orders. Sort out if this asset has a planned route
        let status = null
        const plannedRoute = planingNow.plannedRoutes.find(route => (route.uniqid === uniqid))
        if (plannedRoute && plannedRoute.plannedTurns && plannedRoute.plannedTurns.length) {
          status = `${plannedRoute.plannedTurns.length} Turns planned`
        }
        return status
      } else {
        console.warning('OrderContent has received unexpected message type')
      }
    }
  }

  return (
    <div className="orders-panel__content">
      <ul className="orders-panel__list">
        {selectedForceData && selectedForceData.assets && selectedForceData.assets.map(asset => (
          <li key={asset.uniqid}>
            <OrderAsset
              data={asset}
              force={selectedForceData}
              message={messageFor(asset.uniqid)}
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
