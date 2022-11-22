import { booleanObject, dropDownObject, numberObject, textAreaObject, textObject } from './p9-helpers'

let order = 300
export const tmplTransit = {
  transitSpeed: numberObject('Transit Speed', 3, order++),
  transitDuration: textObject('Transit Duration', 3, order++)
}

// note: this template is used for a range of types of strike
export const tmplMissileStrike = {
  missileType: textObject('Missile Type', 4, order++),
  missilesFired: numberObject('Missiles Fired', 4, order++),
  targetType: textObject('Target Type', 4, order++)
}

export const tmplPatrol = {
  patrolType: textObject('Patrol Type', 4, order++)
}

export const tmplISTAR = {
  method: textObject('Observation Method', 4, order++),
  duration: numberObject('Duration (hrs)', 4, order++)
}

/** note: used for offensive and defensive operations */
export const tmplDuration = {
  duration: numberObject('Duration (hrs)', 4, order++)
}

export const tmplTST = {
  duration: numberObject('Duration (hrs)', 4, order++),
  targetPriority: textAreaObject('Target Type Priority', 4, order++)
}

export const tmplMineLaying = {
  duration: numberObject('Duration (hrs)', 4, order++),
  density: numberObject('Minefield Priority', 4, order++),
  covert: booleanObject('Covert', 4, order++)
}

export const tmplASWBarrier = {
  duration: numberObject('Duration (hrs)', 4, order++),
  active: booleanObject('Active?', 4, order++)
}

export const tmplEWAttack = {
  effect: textObject('Effect Type', 4, order++)
}

export const tmplSOFAttack = {
  activityType: dropDownObject('Activity Type', ['Raid', 'Capture/Kill', 'Gather Int', 'Deliver Errect'], 4, order++),
  intendedEffect: textAreaObject('Intended Effect', 4, order++)
}

export const tmplCyber = {
  activityType: textObject('Activity Type', 4, order++),
  intendedEffect: textAreaObject('Intended Effect', 4, order++)
}
