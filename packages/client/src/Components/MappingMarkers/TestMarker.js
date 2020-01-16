import React, { useState } from 'react'

const TestComp = ({ store, onStoreUpdate, callbackFunction }) => {
  const [test, setTest] = useState(store.count)
  const [input, setInput] = useState(store.input)
  const [check, setCheck] = useState(store.check)

  const handleClick = () => {
    const newTest = test + 1
    setTest(newTest)
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate({ count: newTest, input, check })
  }

  const handleCalback = () => {
    callbackFunction({ count: test, input, check })
  }

  const handleCheckboxChange = ({ target }) => {
    setCheck(target.checked)
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate({ count: test, input, check: target.checked })
  }

  const handleOnInputChange = ({ target }) => {
    setInput(target.value)
    // save data in helper class to not lose it after popup recreate
    onStoreUpdate({ count: test, input: target.value, check })
  }

  return (
    <div>
      <input defaultValue={input} onChange={handleOnInputChange} type='text' />
      <input checked={check} onChange={handleCheckboxChange} type="checkbox"/>
      <button onClick={handleClick}>{test}</button>
      <button onClick={handleCalback}>Submit</button>
    </div>
  )
}

export default TestComp
