import React from 'react'

const Perception = () => {
  return (
    <form action="">
      <h2>Vessel Name</h2>
      <div className="input-container checkbox">
        <label htmlFor="force">Percieved force</label>
        <ul>
          <li>
            <label>
                Blue
              <input name="force" type="radio"/>
              <span className="force-colour blue"></span>
            </label>
          </li>
          <li>
            <label>
                Red
              <input name="force" type="radio"/>
              <span className="force-colour red"></span>
            </label>
          </li>
          <li>
            <label>
                Green
              <input name="force" type="radio"/>
              <span className="force-colour green"></span>
            </label>
          </li>
        </ul>
      </div>
      <div className="input-container">
        <label htmlFor="type">Perceived type</label>
        <select name="type">
          <option value="">Fishing Vessel</option>
          <option value="">Fishing Vessel</option>
          <option value="">Fishing Vessel</option>
          <option value="">Fishing Vessel</option>
        </select>
      </div>
      <button>Save</button>
    </form>
  )
}

export default Perception
