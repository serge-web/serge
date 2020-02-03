import React, { useState } from 'react'
import './styles.scss'
import OrderAsset from './orderAsset'

const OrderPanelContent = ({ selectedForce, allForces, onSendClick, planingNow }) => {
  let selectedForceData = { assets: [] }
  const [sendVisible, setSendVisible] = useState(true)
  const inAdjudication = planingNow && planingNow.detail && planingNow.detail.type === 'StateOfWorld'
  const [phase, setPhase] = useState(null)

  if (selectedForce === 'umpire') {
    if (inAdjudication) {
      // collate a list of all forces for adjudication
      for (const force of allForces) {
        if (force && force.assets && force.assets.length) {
          selectedForceData.assets = [
            ...selectedForceData.assets,
            ...force.assets
          ]
        }
      }
    } else {
      // in planning, umpire only needs forces controlled by him
      for (const force of allForces) {
        if (force && force.controlledBy) {
          const list = force.controlledBy
          if (list.length) {
            if (list.includes('umpire')) {
              // include this force assets
              selectedForceData.assets = [
                ...selectedForceData.assets,
                ...force.assets
              ]
            }
          }
        }
      }
    }
  } else {
    selectedForceData = allForces.find(force => force.uniqid === selectedForce)
  }

  // has phase changed?
  if (phase !== inAdjudication) {
    // remember this one
    setPhase(inAdjudication)
    // do we need to reveal send button?
    if (!sendVisible) {
      setSendVisible(true)
    }
  }

  const messageFor = (uniqid) => {
    // do we have planning data?
    if (planingNow) {
      // is it state of world?
      if (inAdjudication) {
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

  const wrappedCallback = (payload) => {
    onSendClick(payload)
    setSendVisible(false)
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
        { sendVisible && <button onClick={() => {
          if (planingNow) wrappedCallback(planingNow)
        }} className="btn btn-action">SEND</button>
        }
      </div>
    </div>
  )
}

export default OrderPanelContent
