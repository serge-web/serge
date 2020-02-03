import React, { useState, useEffect } from 'react'

// import custom styles for child component
import './styles.scss'

const MarkerName = ({ store, onStoreUpdate, callbackFunction }) => {
  const [clicked, setClicked] = useState(false)
  const [currentMarker] = useState(store.currentMarker)
  const [currentForce] = useState(store.currentForce)
  const [perception] = useState(store.perception)
  const [currentMarkerName, setCurrentMarkerName] = useState(store.currentMarkerName)
  const [nameCorrect, setNameCorrect] = useState(null)

  // A copy of the store to capture the updates
  const newStore = store

  // Set the marker name when the component loads
  useEffect(() => {
    if (perception && perception.name) {
      if (perception.name === currentMarker.name) {
        // Name is correct set the perceivedName to the markers name and disable the rename function
        setCurrentMarkerName(currentMarker.name)
        setNameCorrect(true)
      } else {
        // Name is not correct set perceived name to the incorrect marker name, enable the rename function
        setCurrentMarkerName(perception.name)
        setNameCorrect(false)
      }
    } else {
      setCurrentMarkerName(currentMarker.contactId)
      setNameCorrect(false)
    }
  }, [])

  const clickHander = () => {
    return (!nameCorrect && currentForce !== 'umpire') && setClicked(true)
  }

  const handleRename = ({ target }) => {
    setCurrentMarkerName(target.value)
    newStore.currentMarkerName = target.value
    onStoreUpdate(newStore)
  }

  const handleSubmit = e => {
    e && e.preventDefault()
    callbackFunction(newStore)
  }

  const handleRevert = e => {
    e.preventDefault()
    const revertName = (perception.name) ? perception.name : currentMarker.contactId
    setCurrentMarkerName(revertName)
    newStore.currentMarkerName = revertName
    onStoreUpdate(newStore)
    handleSubmit()
  }

  if (clicked) {
    return (
      <div className="input-container marker-name">
        <label>
          Update asset name
          <input key="marker-name" id="marker-name" name="marker-name" onChange={handleRename} type="text" value={currentMarkerName} />
        </label>
        <button onClick={handleSubmit}>Rename</button>
        <button onClick={handleRevert}>Revert</button>
      </div>
    )
  } else {
    return <h2 key="header" onClick={clickHander}>{currentMarkerName}</h2>
  }
}

export default MarkerName
