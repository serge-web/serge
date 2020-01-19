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
    //
    // FORCE BUTTONS
    //
    const forceBtns = []
    const perceptions = asset.perceptions
    const myPercept = perceptions[myForce]
    allForces.forEach(force => {
      if (canPerceive(force, myForce)) {
        let title
        if (myPercept && myPercept.force === force) {
          title = '[' + force + ']'
        } else {
          title = force
        }
        const thisForce = createButton(true, title, e => {
          clearThese(forceBtns)
          //
          // PLATFORM TYPE BUTTONS
          //
          platformTypes.forEach(pType => {
            let title
            if (myPercept && myPercept.type === pType) {
              title = '[' + pType + ']'
            } else {
              title = pType
            }
            const thisType = createButton(true, title, e => {
              clearThese(forceBtns)
              // we have all our data, fire the callback
              callback(asset, myForce, { force: force, type: pType }, context)
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
  return allBtns
}
