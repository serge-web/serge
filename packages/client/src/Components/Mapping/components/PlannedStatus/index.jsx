import React, { useState } from 'react'

const PlannedStatus = ({ store, onStoreUpdate, callbackFunction }) => {
  const [currentMarker] = useState(store.currentMarker)
  const [markerStatus, setMarkerStatus] = useState(store.currentMarkerStatus)
  const [markerSpeed, setMarkerSpeed] = useState(store.currentMarkerSpeed)
  const [turnsInThisState, setTurnsInThisState] = useState(store.turnsInThisState)
  const [isMobile, setIsMobile] = useState(store.currentMarkerIsMobile)
  const [isDeploying, setIsDeploying] = useState(store.currentMarkerIsDeploying)

  // Get all of the possible states and speeds
  const { states, speedKts } = currentMarker.platformTypeDetail

  // A copy of the store to capture the updates
  const newStore = store

  // TODO: The functions below are used in another component too and are almost identical. This can defintiely be refactored
  const handleSubmit = (e) => {
    e.preventDefault()
    newStore.formType = 'planned-status'
    callbackFunction(newStore)
  }

  const handleStatusChange = ({ target }) => {
    const status = states.find(state => state.name === target.value)
    const isMobileCheck = status.mobile
    const isDeployingCheck = status.deploying
    setMarkerStatus(target.value)
    setIsMobile(isMobileCheck)
    setIsDeploying(!!isDeployingCheck)

    newStore.currentMarkerStatus = target.value
    newStore.currentMarkerIsMobile = isMobileCheck
    newStore.currentMarkerIsDeploying = isDeployingCheck
    if (!isMobileCheck || isDeployingCheck) {
      setMarkerSpeed(null)
      newStore.currentMarkerSpeed = null
    }
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleSpeedChange = ({ target }) => {
    const val = parseInt(target.value)
    setMarkerSpeed(val)
    newStore.currentMarkerSpeed = val
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handleMobileChange = ({ target }) => {
    const val = parseInt(target.value)
    setTurnsInThisState(val)
    newStore.turnsInThisState = val
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const submitDisabled = () => {
    if (isDeploying) {
      return false
    } else if (!isMobile) {
      return false
    } else if (!speedKts || speedKts.length === 0) {
      return false
    } else {
      return !(speedKts && speedKts.length && markerSpeed)
    }
  }

  const buttonLabel = () => {
    if (!isMobile) {
      return 'Save'
    } else if (isDeploying) {
      return 'Deploy asset'
    } else {
      return 'Plan route'
    }
}

  return (
    <div>
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
      { (speedKts && speedKts.length && isMobile && !isDeploying) &&
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
      {
        !isMobile &&
        <div className="input-container short-number">
          <label>
            For
            <input onChange={handleMobileChange} type="number" value={turnsInThisState} />
            turns
          </label>
        </div>
      }
      <button onClick={handleSubmit} disabled={submitDisabled()}>{buttonLabel()}</button>
    </div>
  )
}

export default PlannedStatus
