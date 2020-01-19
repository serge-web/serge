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

    pType.states.forEach(state => {
      const btn = createButton(true, state.name, () => {
        // ok, remove state buttons, we've done that
        stateBtns.forEach(button => button.remove())
        const speedList = pType.speedKts
        if (state.mobile && speedList) {
          // special case - if there's only one speed, we can jump right in
          if (speedList.length === 1) {
            // just fire the callback - there's only one item
            callback(state, pType.speedKts[0], context)
          } else {
            speedList.forEach(speed => {
              const speedBtn = createButton(true, speed + ' kts', () => {
                // ok, remove button
                allBtns.forEach(button => button.remove())

                // share good news
                callback(state, speed, context)
              }).addTo(context.map)
              allBtns.push(speedBtn)
            })
          }
        } else {
          // don't need speed, go for it
          callback(state, null, context)
        }
      }).addTo(context.map)
      stateBtns.push(btn)
      allBtns.push(btn)
    })
  } else {
    console.error('Platform types is using legacy non-array structure')
    console.log(pType)
  }

  return allBtns
}
