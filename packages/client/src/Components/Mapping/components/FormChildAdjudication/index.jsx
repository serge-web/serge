import React, { useState } from 'react'
import _ from 'lodash'

// import custom styles for child component
import './styles.scss'

const Adjudication = ({ store, onStoreUpdate, callbackFunction }) => {
  const [currentMarker] = useState(store.currentMarker)
  const [allForces] = useState(store.allForces)
  const [allPlatforms] = useState(store.allPlatforms)
  const [markerStatus, setMarkerStatus] = useState(store.currentMarkerStatus)
  const [markerSpeed, setMarkerSpeed] = useState(store.currentMarkerSpeed)

  // Get all of the possible states and speeds
  const { states, speedKts } = currentMarker.platformTypeDetail

  // A copy of the store to capture the updates
  const newStore = store

  const handleSubmit = (e) => {
    e.preventDefault()
    callbackFunction(newStore)
  }

  const handlePlatformForceChange = ({ target }) => {
    // setForcePerception(target.value)

    // newStore.perception.force = target.value
    // // save data in helper class to not lose it after popup recreate
    // onStoreUpdate(newStore)
  }

  const handlePlatformTypeChange = ({ target }) => {
    // setTypePerception(target.value)
    // newStore.perception.type = target.value
    // // save data in helper class to not lose it after popup recreate
    // onStoreUpdate(newStore)
  }

  return (
    <form action="" className="form-adjudication">
      <h2>{currentMarker.name}</h2>
      <fieldset className="planned-routes">
        <div className="input-container button-group">
          <span className="label">Planned</span>
          <button>Reject</button>
          <button>Accept</button>
        </div>
        <div className="input-container radio">
          <label htmlFor="state">Status</label>
          <ul>
            {
              states.map(status =>
                <li key={status.name}>
                  <label>
                    {status.name}
                    <input name="state" type="radio" value={status.name} checked={markerStatus === status.name}/>
                  </label>
                </li>
              )
            }
          </ul>
        </div>
        { (speedKts && speedKts.length && markerStatus !== 'Moored') &&
        <div className="input-container radio">
          <label htmlFor="speed">Speed (kts)</label>
          <ul>
            {
              speedKts.map(speed =>
                <li key={speed}>
                  <label>
                    {speed}
                    <input name="speed" type="radio" value={speed} checked={markerSpeed === speed} />
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
                if (force.name !== 'White') {
                  return (
                    <li key={force.uniqid}>
                      <label>
                        <input onChange={handlePlatformForceChange} name="visibility" type="checkbox" value={force.name} />
                        {force.name} cell <div className="platform-meta">{_.startCase(currentMarker.platformType)}, <span style={{ backgroundColor: currentMarker.force }}></span></div>
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
                    <input onChange={handlePlatformForceChange} name="visibility" type="radio" value={condition} />
                  </label>
                </li>
              )

            }
          </ul>
        </div>
      </fieldset>
    </form>
  )
}

export default Adjudication
