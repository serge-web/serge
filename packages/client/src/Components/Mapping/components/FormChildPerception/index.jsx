import React, { useState } from 'react'
import _ from 'lodash'

const Perception = ({ store, onStoreUpdate, callbackFunction }) => {
  const [currentForce] = useState(store.currentForce)
  const [currentMarkerName] = useState(store.currentMarkerName)
  const [forcePerception, setForcePerception] = useState(store.perception.force)
  const [typePerception, setTypePerception] = useState(store.perception.type)
  const [allForces] = useState(store.allForces)
  const [allPlatforms] = useState(store.allPlatforms)

  const handleSubmit = () => {
    console.log('form submitted')
    // callbackFunction()
  }

  const handleRadioChange = ({ target }) => {
    setForcePerception({ force: target.value })
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate({ force: target.value, forcePerception })
  }

  const handleSelectChange = ({ target }) => {
    setTypePerception(target.value)
    // save data in helper class to not lose it after popup recreate
    // onStoreUpdate({ typePerception: target.value, check })
  }

  return (
    <form action="">
      <h2>{currentMarkerName}</h2>
      <div className="input-container checkbox">
        <label htmlFor="force">Percieved force</label>
        <ul>
          {
            allForces.map(force => {
              if (force.name !== 'White' && force.name !== currentForce) {
                return (
                  <li key={force.uniqid}>
                    <label>
                      {force.name}
                      <input onChange={handleRadioChange} name="force" type="radio" value={force.name}/>
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
        <select name="type" onChange={handleSelectChange}>
          {allPlatforms.map(platform => (<option key={_.kebabCase(platform.name)} value={_.kebabCase(platform.name)}>{platform.name}</option>))}
        </select>
      </div>
      <button onClick={handleSubmit()}>Save</button>
    </form>
  )
}

export default Perception
