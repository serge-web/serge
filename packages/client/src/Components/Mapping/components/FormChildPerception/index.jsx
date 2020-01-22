import React from 'react'
import _ from 'lodash'

const Perception = ({ allForces, allPlatforms }) => {
  return (
    <form action="">
      <h2>Vessel Name</h2>
      <div className="input-container checkbox">
        <label htmlFor="force">Percieved force</label>
        <ul>
          {
            allForces.map(force => {
              if (force.name !== 'White') {
                return (
                  <li key={force.uniqid}>
                    <label>
                      {force.name}
                      <input name="force" type="radio"/>
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
          {allPlatforms.map(platform => (<option key={_.kebabCase(platform.name)} value="">{platform.name}</option>))}
        </select>
      </div>
      <button>Save</button>
    </form>
  )
}

export default Perception
