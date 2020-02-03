import React, { useState, useEffect } from 'react'

// import custom styles for child component
import './styles.scss'

const MarkerName = ({ store, onStoreUpdate, callbackFunction }) => {
  const [clicked, setClicked] = useState(false)
  const [currentMarker] = useState(store.currentMarker)
  const [currentForce] = useState(store.currentForce)
  const [perception] = useState(store.perception)
  const [currentName, setCurrentName] = useState(null)
  const [nameCorrect, setNameCorrect] = useState(null)

  // A copy of the store to capture the updates
  const newStore = store

  const isNameCorrect = () => {
    if (!currentName) {
      if (perception.name === currentMarker.name) {
        setNameCorrect(true)
        setCurrentName(currentMarker.name)
        newStore.currentMarkerName = currentMarker.name
      } else {
        const nameToSet = perception.name || currentMarker.contactId
        setNameCorrect(false)
        newStore.currentMarkerName = nameToSet
        setCurrentName(nameToSet)
      }
    }
  }

  // Set the marker name when the component loads
  useEffect(() => {
    perception && isNameCorrect()
  }, [])

  // Only show the form to non-umpire players who cannot see the correct name
  const clickHander = () =>
    !nameCorrect && currentForce !== 'umpire' && setClicked(true)

  const handleRename = ({ target }) => {
    setCurrentName(target.value)
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
    setCurrentName(revertName)
    newStore.currentMarkerName = revertName
    onStoreUpdate(newStore)
    handleSubmit()
  }

  if (clicked) {
    return (
      <div className="input-container marker-name">
        <label>
          Update asset name
          <input key="marker-name" id="marker-name" name="marker-name" onChange={handleRename} type="text" value={currentName} />
        </label>
        <button onClick={handleSubmit}>Rename</button>
        <button onClick={handleRevert}>Revert</button>
      </div>
    )
  } else {
    return <h2 key="header" onClick={clickHander}>{currentName}</h2>
  }
}

export default MarkerName
