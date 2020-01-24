import createButton from './createDebugButton'
import { UMPIRE_FORCE } from '../../../consts'

/** create a button that can be used to trigger UI interactions, such as when a
 * change in state is triggered from elsewhere in the application
 */
export default function createPerceivedStateButtonsFor (/* object */asset, /* string */ myForce, /* array strings */ allForces,
  /* array string */ platformTypes, /* object */ context, /* function */ callback, /* array */ existingButtons) {
  if (existingButtons) {
    existingButtons.forEach(button => button.remove())
  }
  const allBtns = [] // maintain full list of buttons, in case UI wants to..

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
