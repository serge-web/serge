import React, { useState } from 'react'

// import custom styles for child component
import './styles.scss'

const MarkerName = ({ store, onStoreUpdate, callbackFunction }) => {
  const [clicked, setClicked] = useState(false)
  const [perception, setPerception] = useState(store.perception)
  const [currentMarkerName] = useState(store.currentMarkerName)
  const [currentMarkerForce] = useState(store.currentMarkerForce)
  const [currentForce] = useState(store.currentForce)

  // A copy of the store to capture the updates
  const newStore = store
  // Set the marker name when the component loads

  // Only show the form to non-umpire players who cannot see the correct name
  const clickHander = () =>
    currentForce !== 'umpire' &&
    currentForce !== currentMarkerForce &&
    setClicked(true)

  const handleRename = ({ target }) => {
    setPerception({
      ...perception,
      name: target.value
    })

    newStore.perception.name = target.value
    onStoreUpdate(newStore)
  }

  const handleSubmit = e => {
    e && e.preventDefault()
    callbackFunction(newStore)
  }

  const handleRevert = e => {
    e.preventDefault()
    setPerception({
      ...perception,
      name: null
    })
    newStore.perception.name = null
    onStoreUpdate(newStore)
    handleSubmit()
  }

  return (
    <>
      <h2 key="header" onClick={clickHander}>{perception.name || currentMarkerName}</h2>
      {
        clicked &&
        <div className="input-container marker-name">
          <label>
            Update asset name
            <input key="marker-name" id="marker-name" name="marker-name" onChange={handleRename} type="text" value={perception.name || currentMarkerName} />
          </label>
          <button type="submit" onClick={handleSubmit}>Rename</button>
          <button onClick={handleRevert}>Revert</button>
        </div>
      }
    </>
  )
}

export default MarkerName
