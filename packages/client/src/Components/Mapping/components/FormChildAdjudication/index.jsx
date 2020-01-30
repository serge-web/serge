import React, { useState } from 'react'
import _ from 'lodash'

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
  const [prevSpeed, setPrevSpeed] = useState(store.currentMarkerSpeed)

  // Get all of the possible states and speeds
  const { states, speedKts } = currentMarker.platformTypeDetail

  // A copy of the store to capture the updates
  const newStore = store

  newStore.formType = 'adjudication'

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

    if (target.value !== 'Working') {
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

  const visibilityChecked = markerVisibleTo.map(force => force)

  const handleVisibilityChange = ({ target }) => {
    const { checked, value } = target

    checked ? visibilityChecked.push(value) : visibilityChecked.pop(value)

    console.log(visibilityChecked)
    setMarkerVisibleTo(visibilityChecked)
    newStore.currentMarkerVisibleTo = visibilityChecked
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleRejection = e => {
    e.preventDefault()
    setPlanStatus('rejected')
    newStore.planStatus = 'rejected'
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleAcceptance = e => {
    e.preventDefault()
    setPlanStatus('accepted')
    newStore.planStatus = 'accepted'
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
    <form action="" className="form-adjudication">
      { planStatus && <span className={`plan-${planStatus}`}>{_.capitalize(planStatus)}</span> }
      <h2>{currentMarker.name}</h2>
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
          { planStatus && <button onClick={handleRevert}>Revert</button>}

        </div>
        <div className="input-container radio">
          <label htmlFor="state">Status</label>
          <ul>
            {
              states.map(status =>
                <li key={status.name}>
                  <label>
                    {status.name}
                    <input onChange={handleStatusChange} name="state" type="radio" value={status.name} checked={markerStatus === status.name}/>
                  </label>
                </li>
              )
            }
          </ul>
        </div>
        { speedKts.length && isMobile &&
        <div className="input-container radio">
          <label htmlFor="speed">Speed (kts)</label>
          <ul>
            {
              speedKts.map(speed =>
                <li key={speed}>
                  <label>
                    {speed}
                    <input onChange={handleSpeedChange} name="speed" type="radio" value={speed} checked={markerSpeed === speed} />
                  </label>
                </li>
              )
            }
          </ul>
        </div>
        }
      </fieldset>
      <fieldset className="visibility">
        <div className="input-container checkbox">
          <label htmlFor="visibility">Visible to</label>
          <ul>
            {
              allForces.map(force => {
                if (force.name !== 'White' && force.name !== currentMarkerForce) {
                  return (
                    <li key={force.uniqid}>
                      <label>
                        <input onChange={handleVisibilityChange} name="visibility" type="checkbox" value={force.name} checked={markerVisibleTo.includes(force.name) }/>
                        {force.name} cell
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
    </form>
  )
}

export default Adjudication
