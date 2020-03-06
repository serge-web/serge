import React, { useState } from 'react'
import _ from 'lodash'

const Perception = ({ store, onStoreUpdate, callbackFunction }) => {
  const [currentForce] = useState(store.currentForce)
  const [forcePerception, setForcePerception] = useState(store.perception.force)
  const [typePerception, setTypePerception] = useState(store.perception.type)
  const [allForces] = useState(store.allForces)
  const [allPlatforms] = useState(store.allPlatforms)

  // A copy of the store to capture the updates
  const newStore = store

  const handleSubmit = (e) => {
    e.preventDefault()
    newStore.formType = 'perception'
    callbackFunction(newStore)
  }

  const handlePlatformForceChange = ({ target }) => {
    setForcePerception(target.value)

    newStore.perception.force = target.value
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  const handlePlatformTypeChange = ({ target }) => {
    setTypePerception(target.value)
    newStore.perception.type = target.value
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate(newStore)
  }

  return (
    <div>
      <div className="input-container radio">
        <label htmlFor="force">Perceived force</label>
        <ul>
          {
            allForces.map(force => {
              if (force.name !== 'White' && force.name !== currentForce) {
                return (
                  <li key={force.uniqid}>
                    <label>
                      {force.name}
                      <input onChange={handlePlatformForceChange} name="force" type="radio" value={force.name} checked={forcePerception === force.name} />
                      <span className={'force-colour'} style={{ backgroundColor: force.color }}></span>
                    </label>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
      <div className="input-container">
        <label htmlFor="type">Perceived type</label>
        <select value={typePerception} name="type" onChange={handlePlatformTypeChange}>
          <option value="unknown">Unknown</option>
          {allPlatforms.map(platform => (<option key={_.kebabCase(platform.name)} value={_.kebabCase(platform.name)}>{platform.name}</option>))}
        </select>
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  )
}

export default Perception
