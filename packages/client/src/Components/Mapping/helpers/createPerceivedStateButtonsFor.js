import createButton from './createDebugButton'
import { UMPIRE_FORCE } from '../../../consts'

/** create a button that can be used to trigger UI interactions, such as when a
 * change in state is triggered from elsewhere in the application
 */
export default function createPerceivedStateButtonsFor (/* object */asset, /* string */ myForce, /* array strings */ allForces, 
  /* array string */ platformTypes, /* object */ context, /* function */ callback, /* array */ existingButtons) {
  if (existingButtons) {
    existingButtons.forEach(button => button.remove)
  }
  const allBtns = [] // maintain full list of buttons, in case UI wants to..

  // put in the header button
  const header = createButton(false, 'Perception of [' + asset.name + ']').addTo(context.map)
  allBtns.push(header)

  const canPerceive = (force, myForce) => {
    return force !== UMPIRE_FORCE && force !== myForce
  }

  if (canPerceive(asset.force, myForce)) {
    const clearThese = (buttons) => {
      buttons.forEach(button => button.remove())
    }
    // ok show it for this force
    console.log(asset)
    const forceBtns = []
    const perceptions = asset.perceptions
    const myPercept = perceptions[myForce]
    // ok, do the perceived force
    allForces.forEach(force => {
      if (canPerceive(force, myForce)) {
        console.log('force', force)
        let title
        if (myPercept && myPercept.force === force) {
          title = '[' + force + ']'
        } else {
          title = force
        }
        const thisForce = createButton(true, title, e => {
          clearThese(forceBtns)
          // now the type
          platformTypes.forEach(pType => {
            let title
            if (myPercept && myPercept.type === pType) {
              title = '[' + pType + ']'
            } else {
              title = pType
            }
            const thisType = createButton(true, title, e => {
              clearThese(forceBtns)
              callback(asset, myForce, { force: force, type: pType }, context)
              // callback
            }).addTo(context.map)
            forceBtns.push(thisType)
            allBtns.push(thisType)
          })
          // also add a cancel button
          const cancelBtn = createButton(true, 'Cancel', e => {
            clearThese(allBtns)
          }).addTo(context.map)
          allBtns.push(cancelBtn)

        }).addTo(context.map)
        forceBtns.push(thisForce)
        allBtns.push(thisForce)
      }
    })
    // also add a cancel button
    const cancelBtn2 = createButton(true, 'Cancel', e => {
      clearThese(allBtns)
      // callback
    }).addTo(context.map)
    allBtns.push(cancelBtn2)
    forceBtns.push(cancelBtn2)
  }
  

  // first the force

  // const stateBtns = []
  // if (Array.isArray(pType.states)) {
  //   const btn = createButton(false, 'State for [' + name + ']', null).addTo(context.map)
  //   allBtns.push(btn)

  //   pType.states.forEach(state => {
  //     const btn = createButton(true, state.name, () => {
  //       // ok, remove state buttons, we've done that
  //       stateBtns.forEach(button => button.remove())
  //       const speedList = pType.speedKts
  //       if (state.mobile && speedList && speedList.length) {
  //         // special case - if there's only one speed, we can jump right in
  //         if (speedList.length === 1) {
  //           // ok, remove buttons (prob just title button)
  //           allBtns.forEach(button => button.remove())
  //           // just fire the callback - there's only one item
  //           callback(state, pType.speedKts[0], context)
  //         } else {
  //           speedList.forEach(speed => {
  //             const speedBtn = createButton(true, speed + ' kts', () => {
  //               // ok, remove button
  //               allBtns.forEach(button => button.remove())

  //               // share good news
  //               callback(state, speed, context)
  //             }).addTo(context.map)
  //             allBtns.push(speedBtn)
  //           })
  //         }
  //       } else {
  //         // ok, remove buttons (prob just title button)
  //         allBtns.forEach(button => button.remove())
  //         // don't need speed, go for it
  //         callback(state, null, context)
  //       }
  //     }).addTo(context.map)
  //     stateBtns.push(btn)
  //     allBtns.push(btn)
  //   })
  // } else {
  //   console.error('Platform types is using legacy non-array structure')
  // }

  return allBtns
}
