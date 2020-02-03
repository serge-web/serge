import React, { useState, useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'

import { PLAN_ACCEPTED, PLAN_REJECTED } from '../../../../consts'

// import custom styles for child component
import './styles.scss'

const Adjudication = ({ store, onStoreUpdate, callbackFunction }) => {
  const [currentMarker] = useState(store.currentMarker)
  const [currentMarkerForce] = useState(store.currentMarkerForce)
  const [allForces] = useState(store.allForces)
  const [allPlatforms] = useState(store.allPlatforms)
  const [planStatus, setPlanStatus] = useState(store.planStatus)
  const [markerStatus, setMarkerStatus] = useState(store.currentMarkerStatus)
  const [markerSpeed, setMarkerSpeed] = useState(store.currentMarkerSpeed)
  const [markerVisibleTo, setMarkerVisibleTo] = useState(store.currentMarkerVisibleTo)
  const [markerCondition, setMarkerCondition] = useState(store.currentMarkerCondition)
  const [isMobile, setIsMobile] = useState(store.currentMarkerIsMobile)
  const [isActive, setIsActive] = useState(null)
  const [prevSpeed, setPrevSpeed] = useState(store.currentMarkerSpeed)

  // Get all of the possible states and speeds
  const { states, speedKts } = currentMarker.platformTypeDetail

  // A copy of the store to capture the updates
  const newStore = store

  newStore.formType = 'adjudication'

  // HACK: This is just for the current wargame, this will need to be replaced with a non text-based comparison

  const checkIfActive = () => {
    const activeArray = ['working', 'full-capability']
    return activeArray.includes(_.kebabCase(markerCondition))
  }

  useEffect(() => {
    setIsActive(checkIfActive())
  }, [markerCondition])

  const handleSubmit = e => {
    e.preventDefault()
    callbackFunction(newStore)
  }

  const handleStatusChange = ({ target }) => {
    const isMobileCheck = states.find(state => state.name === target.value).mobile
    setMarkerStatus(target.value)
    setIsMobile(isMobileCheck)

    newStore.currentMarkerStatus = target.value
    newStore.currentMarkerIsMobile = isMobileCheck
    if (!isMobileCheck) {
      setMarkerSpeed(null)
      newStore.currentMarkerSpeed = null
    } else {
      setMarkerSpeed(prevSpeed)
      newStore.currentMarkerSpeed = prevSpeed
    }
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleSpeedChange = ({ target }) => {
    const val = parseInt(target.value)
    setPrevSpeed(val)
    setMarkerSpeed(val)
    newStore.currentMarkerSpeed = val
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleConditionChange = ({ target }) => {
    setMarkerCondition(target.value)

    if (isActive) {
      setIsMobile(false)
      setMarkerSpeed(null)
      newStore.currentMarkerSpeed = null
    } else {
      setIsMobile(true)
      setMarkerSpeed(prevSpeed)
      newStore.currentMarkerSpeed = prevSpeed
    }

    newStore.currentMarkerCondition = target.value
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  // Make a copy of the markerVisibleTo state

  const handleVisibilityChange = ({ target: { checked, value } }) => {
    // Copy the markerVisible to array and inject all checked values into it whilst filtering out any that are unchecked
    const visibilityChecked = checked
      ? [...markerVisibleTo, value]
      : [...markerVisibleTo].filter(val => val !== value)

    setMarkerVisibleTo(visibilityChecked)
    newStore.currentMarkerVisibleTo = visibilityChecked
    // // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleRejection = e => {
    e.preventDefault()
    setPlanStatus(PLAN_REJECTED)
    newStore.planStatus = PLAN_REJECTED
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleAcceptance = e => {
    e.preventDefault()
    setPlanStatus(PLAN_ACCEPTED)
    newStore.planStatus = PLAN_ACCEPTED
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleRevert = e => {
    e.preventDefault()
    setPlanStatus(null)
    newStore.planStatus = null
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  return (
    <div className="adjudication">
      { planStatus && <span className='plan-reviewed'>Reviewed</span> }
      <div className="platform-meta"><span style={{ backgroundColor: currentMarkerForce }}></span>{_.startCase(currentMarker.platformType)}</div>
      <fieldset className="planned-routes">
        <div className="input-container button-group">
          <span className="label">{ !planStatus ? 'Planned' : 'Actual'}</span>
          { !planStatus &&
          <>
            <button onClick={handleRejection}>Reject</button>
            <button onClick={handleAcceptance}>Accept</button>
          </>
          }
          { planStatus &&
          <>
            <button onClick={handleRevert}>Revert</button>
            <button onClick={handleSubmit}>Plan Route</button>
          </>
          }
        </div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { isActive &&
          <div key={'status'} className="input-container radio status">
            <label htmlFor="state">Status</label>
            <ul>
              {
                states.map(status =>
                  <li key={status.name}>
                    <label className={planStatus !== 'rejected' && 'disabled'}>
                      {status.name}
                      <input onChange={handleStatusChange} name="state" type="radio" disabled={ planStatus !== 'rejected'} value={status.name} checked={markerStatus === status.name}/>
                    </label>
                  </li>
                )
              }
            </ul>
          </div>
          }
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {
            speedKts &&
            isMobile &&
            isActive &&
            <div key={'speed'} className="input-container radio">
              <label htmlFor="speed">Speed (kts)</label>
              <ul>
                {
                  speedKts.map(speed =>
                    <li key={speed}>
                      <label className={planStatus !== 'rejected' && 'disabled'}>
                        {speed}
                        <input onChange={handleSpeedChange} name="speed" type="radio" disabled={ planStatus !== 'rejected'} value={speed} checked={markerSpeed === speed} />
                      </label>
                    </li>
                  )
                }
              </ul>
            </div>
          }
        </ReactCSSTransitionGroup>
      </fieldset>
      <fieldset className="visibility">
        <div className="input-container checkbox">
          <span className="label">Visible to</span>
          <ul>
            {
              allForces.map(force => {
                if (force.name !== 'White' && force.name !== currentMarkerForce) {
                  return (
                    <li key={force.uniqid}>
                      <label>
                        <input onChange={handleVisibilityChange} name={`visibility-${_.kebabCase(force.name)}`} type="checkbox" value={force.name} checked={markerVisibleTo.includes(force.name) }/>
                        {force.name} force
                      </label>
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </fieldset>
      <fieldset className="condition">
        <div className="input-container radio">
          <label htmlFor="condition">Condition</label>
          <ul>
            {
              allPlatforms[0].conditions.map(condition =>
                <li key={condition}>
                  <label>
                    {condition}
                    <input onChange={handleConditionChange} name="condition" type="radio" value={condition} checked={markerCondition === condition}/>
                  </label>
                </li>
              )

            }
          </ul>
        </div>
      </fieldset>
      <button onClick={handleSubmit}>Save</button>
    </div>
  )
}

export default Adjudication
