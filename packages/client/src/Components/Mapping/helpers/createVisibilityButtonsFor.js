import createButton from './createDebugButton'
import { UMPIRE_FORCE } from '../../../consts'

/** create a set of buttons that allow the visibiltiy of this asset to be changed
 */
export default function getVisibilityButtonsFor (/* object */asset, /* function */ callback, /* array */ existingButtons,
  /* array string */ forceNames, /* object */ map) {
  // clear out any existing ones
  if (existingButtons) {
    existingButtons.forEach(button => button.remove())
  }
  const allBtns = [] // maintain full list of buttons, in case UI wants to..

  const clearThese = (buttons) => {
    buttons.forEach(button => button.remove())
  }

  const sendVis = (/* string  */ assetId, /* string */ forcePerceivedBy, /* new vis */ newVis) => {
    const newItem = { assetId: assetId, by: forcePerceivedBy, newVis: newVis }
    const payload = { payload: [newItem] }
    callback(payload)
  }

  // put in the header button
  const header = createButton(false, 'Visibility of [' + asset.name + ']').addTo(map)
  allBtns.push(header)

  const perceptions = asset.perceptions

  // loop through the force names
  forceNames.forEach(fName => {
    if (fName !== UMPIRE_FORCE) {
      if (fName !== asset.force) {
        // do we have perception?
        const isVis = !!(perceptions[fName])
        const title = isVis ? 'Set non-vis to ' + fName : 'Set vis to ' + fName

        // also add a cancel button
        const thisBtn = createButton(true, title, e => {
          sendVis(asset.uniqid, fName, !isVis)
          clearThese(allBtns)
        }).addTo(map)
        allBtns.push(thisBtn)
      }
    }
  })

  // also add a cancel button
  const cancelBtn = createButton(true, 'Cancel', e => {
    clearThese(allBtns)
  }).addTo(map)
  allBtns.push(cancelBtn)

  return allBtns
}
