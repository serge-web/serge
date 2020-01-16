import React, { useState } from 'react'

const TestComp = ({ store, onStoreUpdate, callbackFunction }) => {
  const [test, setTest] = useState(store.count)

  const handleClick = () => {
    const newTest = test + 1
    setTest(newTest)
    onStoreUpdate({ count: newTest })
  }

  const handleCalback = () => {
    callbackFunction({ test })
  }

  return (
    <div>
      <button onClick={handleClick}>{test}</button>
      <button onClick={handleCalback}>Submit</button>
    </div>
  )
}

export default TestComp
