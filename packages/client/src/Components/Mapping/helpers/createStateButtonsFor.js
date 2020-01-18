import createButton from './createDebugButton'

/** create a button that can be used to trigger UI interactions, such as when a
 * change in state is triggered from elsewhere in the application
 */
export default function createStateButtonsFor (/* object */pType, /* object */ context, /* function */ callback, /* array */ existingButtons) {
  if (existingButtons) {
    existingButtons.forEach(button => button.remove)
  }

  const stateBtns = []
  const speedBtns = []
  if (Array.isArray(pType.states)) {
    pType.states.forEach(state => {
      const btn = createButton(true, state.name, () => {
        // ok, remove button
        stateBtns.forEach(button => button.remove())
        if (state.mobile && pType.speedKts) {
          pType.speedKts.forEach(speed => {
            const speedBtn = createButton(true, speed + ' kts', () => {
              // ok, remove button
              speedBtns.forEach(button => button.remove())

              // share good news
              callback(state, speed, context)
            }).addTo(context.map)
            speedBtns.push(speedBtn)
          })
        } else {
          // don't need speed, go for it
          callback(state, null, context)
        }
      }).addTo(context.map)
      stateBtns.push(btn)
    })
  } else {
    console.error('Platform types is using legacy non-array structure')
    console.log(pType)
  }

  return stateBtns.concat(speedBtns)
}
