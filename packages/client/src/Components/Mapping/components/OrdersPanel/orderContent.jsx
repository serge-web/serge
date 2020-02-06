import React, { useState, useEffect, useRef } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './styles.scss'
import OrderAsset from './orderAsset'

const OrderPanelContent = ({ selectedForce, allForces, onSendClick, planningNow, turn }) => {
  let selectedForceData = { assets: [] }
  const [sendVisible, setSendVisible] = useState(true)
  const inAdjudication = planningNow && planningNow.detail && planningNow.detail.type === 'StateOfWorld'
  const [phase, setPhase] = useState(null)
  const [activeForces, setActiveForces] = useState([])

  const filteredForces = useRef([])
  const controlledBy = useRef([])

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
          controlledBy.current = force.controlledBy
          if (controlledBy.current.length) {
            if (controlledBy.current.includes('umpire')) {
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

    // don't show Submit button if we're in turn zero adjudication
    if (inAdjudication && turn === 0) {
      setSendVisible(false)
    } else if (!sendVisible) {
      setSendVisible(true)
    }
  }

  const messageFor = (uniqid) => {
    // do we have planning data?
    if (planningNow) {
      // is it state of world?
      if (inAdjudication) {
        var res = null
        planningNow.detail.data.find(force => {
          const assets = force.assets
          if (assets) {
            res = assets.find(asset => asset.uniqid === uniqid)
            return res
          } else {
            return false
          }
        })
        // see if we need to update destroyed
        return res.destroyed ? 'Destroyed' : 'Accepted'
      } else if (planningNow.plannedRoutes) {
        // ok, it's planning orders. Sort out if this asset has a planned route
        let status = null

        const res = planningNow.plannedRoutes.find(asset => asset.uniqid === uniqid)

        if (res.destroyed) {
          status = 'Destroyed'
        } else {
          const plannedRoute = planningNow.plannedRoutes.find(route => (route.uniqid === uniqid))
          if (plannedRoute && plannedRoute.plannedTurns && plannedRoute.plannedTurns.length) {
            status = `${plannedRoute.plannedTurns.length} Turns planned`
          }
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

  const showAllForcesExceptUmpire = () => allForces.filter(force => force.name !== 'White')
  const showAllForcesControlledByUser = () => allForces.filter(force => force.name === selectedForce)
  const getCurrentForceAssets = force => getAssets().filter(asset => asset.force === force.name)

  const getAssets = () => selectedForceData && selectedForceData.assets && selectedForceData.assets

  const isForceActive = forceName => activeForces.includes(forceName)

  const toggleActiveForce = forceName => {
    const af = isForceActive(forceName)
      ? activeForces.filter(force => force !== forceName)
      : [...activeForces, forceName]
    return setActiveForces(af)
  }

  useEffect(() => {
    filteredForces.current = selectedForce === 'umpire'
      ? showAllForcesExceptUmpire()
      : showAllForcesControlledByUser()
    setActiveForces(filteredForces.current.map(f => f.name))
  }, [])

  return (
    <div className="orders-panel__content">
      <ul className="orders-panel__forces-list">
        { filteredForces.current.map(force => {
          return <li key={force.name}>
            {
              (selectedForce === 'umpire' && getCurrentForceAssets(force).length > 0) &&
              <>
                <div
                  className={`orders-panel__toggler orders-panel__toggler--${isForceActive(force.name) ? 'active' : 'inactive'}`}
                  onClick={() => { toggleActiveForce(force.name) } }
                />
                <h3 className="orders-panel__subtitle" style={{ color: force.color }}>{force.name}</h3>
              </>
            }
            <ReactCSSTransitionGroup
              component="div"
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {
                isForceActive(force.name) &&
            <ul className="orders-panel__list">
              { getAssets().map(asset => {
                return asset.force === force.name && <li key={asset.uniqid}>
                  <OrderAsset
                    data={asset}
                    force={selectedForceData}
                    message={messageFor(asset.uniqid)}
                    allForces={allForces}
                  />
                </li>
              }
              )}
            </ul>
              }
            </ReactCSSTransitionGroup>
          </li>
        }
        )
        }
      </ul>
      <div className="orders-panel__footer">
        { sendVisible && <button onClick={() => {
          if (planningNow) wrappedCallback(planningNow)
        }} className="btn btn-action">SUBMIT</button>
        }
      </div>
    </div>
  )
}

export default OrderPanelContent
