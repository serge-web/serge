import React, { useState } from 'react'
import _ from 'lodash'

const Perception = ({ store, onStoreUpdate, callbackFunction }) => {
  const [currentForce] = useState(store.currentForce)
  const [currentMarker, setCurrentMarker] = useState(store.currentMarker)
  const [allForces] = useState(store.allForces)
  const [allPlatforms] = useState(store.allPlatforms)

  const handleSubmit = () => {
    console.log('form submitted')
    // callbackFunction({ count: test, input, check })
  }

  // const handleCheckboxChange = ({ target }) => {
  //   setCurrentMarker(target.checked)
  //   // save data in helper class to not lose it after popup recreate
  //   // onStoreUpdate({ count: test, input, check: target.checked })
  // }

  // const handleOnInputChange = ({ target }) => {
  //   // setInput(target.value)
  //   // save data in helper class to not lose it after popup recreate
  //   // onStoreUpdate({ count: test, input: target.value, check })
  // }

  return (
    <form action="">
      <h2>{currentMarker.name}</h2>
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
                      <input name="force" type="radio" value={force.name}/>
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
        <select name="type">
          {allPlatforms.map(platform => (<option key={_.kebabCase(platform.name)} value={_.kebabCase(platform.name)}>{platform.name}</option>))}
        </select>
      </div>
      <button onClick={handleSubmit()}>Save</button>
    </form>
  )
}

export default Perception
