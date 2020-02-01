import createButton from './createDebugButton'

/** create a button that can be used to trigger UI interactions, such as when a
 * change in state is triggered from elsewhere in the application
 */
export default function createStateButtonsFor (/* object */pType, /* string */ name, /* object */ context, /* function */ callback, /* array */ existingButtons) {
  if (existingButtons) {
    existingButtons.forEach(button => button.remove)
  }
  const allBtns = [] // maintain full list of buttons, in case UI wants to..
  // drop out of setting state

  const stateBtns = []
  if (Array.isArray(pType.states)) {
    const btn = createButton(false, 'State for [' + name + ']', null).addTo(context.map)
    allBtns.push(btn)

    //
    // STATE BUTTONS
    //
    pType.states.forEach(pState => {
      const btn = createButton(true, pState.name, () => {
        // ok, remove state buttons, we've done that
        stateBtns.forEach(button => button.remove())
        const speedList = pType.speedKts
        if (pState.mobile && speedList && speedList.length) {
          // special case - if there's only one speed, we can jump right in
          if (speedList.length === 1) {
            // ok, remove buttons (prob just title button)
            allBtns.forEach(button => button.remove())
            // just fire the callback - there's only one item
            callback(pState.name, pType.speedKts[0], context)
          } else {
            //
            // SPEED BUTTONS
            //
            speedList.forEach(speed => {
              const speedBtn = createButton(true, speed + ' kts', () => {
                // ok, remove button
                allBtns.forEach(button => button.remove())

                // share good news
                callback(pState.name, speed, context)
              }).addTo(context.map)
              allBtns.push(speedBtn)
            })
            // also add a cancel button
            const cancelSpeedBtn = createButton(true, 'Cancel', e => {
              allBtns.forEach(btn => btn.remove())
            }).addTo(context.map)
            allBtns.push(cancelSpeedBtn)
          }
        } else {
          // ok, remove buttons (prob just title button)
          allBtns.forEach(button => button.remove())
          // don't need speed, go for it
          callback(pState.name, null, context)
        }
      }).addTo(context.map)
      stateBtns.push(btn)
      allBtns.push(btn)
    })
    // also add a cancel button
    const cancelStateBtn = createButton(true, 'Cancel', e => {
      allBtns.forEach(btn => btn.remove())
    }).addTo(context.map)
    stateBtns.push(cancelStateBtn)
    allBtns.push(cancelStateBtn)
  } else {
    console.error('Platform types is using legacy non-array structure')
  }

  return allBtns
}
