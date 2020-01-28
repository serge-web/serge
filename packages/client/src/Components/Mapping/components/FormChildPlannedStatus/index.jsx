import React, { useState } from 'react'

const PlannedStatus = ({ store, onStoreUpdate, callbackFunction }) => {
  const [currentMarker] = useState(store.currentMarker)
  const [markerStatus, setMarkerStatus] = useState(store.currentMarkerStatus)
  const [markerSpeed, setMarkerSpeed] = useState(store.currentMarkerSpeed)

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
    setMarkerStatus(target.value)
    newStore.currentMarkerStatus = target.value
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

  return (
    <form action="">
      <h2>{currentMarker.name}</h2>
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
      { speedKts.length &&
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
      <button onClick={handleSubmit}>Plan route</button>
    </form>
  )
}

export default PlannedStatus
