import { booleanObject, textAreaObject, textObject } from './p9-helpers'

let order = 200
export const otherTemplate = {
  discussedWithSMEs: booleanObject('Has this been discussed with SMEs?', 3, order++),
  isPreadjudicated: booleanObject('Is this pre-adjudicated?', 3, order++),
  standaloneActivity: booleanObject('Stand-Alone Activity?', 3, order++),
  requiresAS: booleanObject('Does this require AS Discussion?', 3, order++),
  supportsOther: textObject('Supporting Another Activity?', 3, order++),
  activityDesc: textAreaObject('Activity Description', 6, order++),
  effectDesc: textAreaObject('Effect Description', 6, order++)
}
