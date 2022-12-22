import { booleanObject, dropDownObject, numberObject, textAreaObject, textObject } from './p9-helpers'

let order = 300
export const tmplTransit = {
  transitSpeed: numberObject('Transit Speed', 3, order++),
  transitDuration: textObject('Transit Duration', 3, order++)
}

// note: this template is used for a range of types of strike
export const tmplMissileStrike = {
  targetType: textObject('Target Type', 4, order++),
  ownAssets: {
    type: 'array',
    format: 'table',
    minItems: 0,
    propertyOrder: 70,
    title: 'Launchers',
    options: {
      grid_columns: 7,
      enable_array_copy: true,
      disable_array_reorder: true
    },
    items: {
      type: 'object',
      format: 'grid',
      title: 'Asset',
      required: [
        'asset',
        'number'
      ],
      properties: {
        asset: {
          title: 'Launcher',
          type: 'string',
          enum: [
            'ta',
            'tb',
            'tc',
            'pa'
          ],
          options: {
            grid_columns: 2,
            enum_titles: [
              'Tank A',
              'Tank B',
              'Tank C',
              'Plane A'
            ]
          }
        },
        missileType: {
          title: 'Missile Type',
          type: 'string',
          enum: [
            'SRBM',
            'MRBM',
            'IRBM',
            'Standard Cruise',
            'Low Obs Cruise',
            'Propellor OWA UAV',
            'Jet OWA UAV'
          ],
          options: {
            grid_columns: 2
          }
        },
        number: {
          title: 'Quantity',
          type: 'string',
          options: {
            grid_columns: 1
          },
          format: 'number'
        }
      }
    }
  },
  otherAssets: {
    type: 'array',
    format: 'table',
    minItems: 0,
    propertyOrder: 75,
    title: 'Targets',
    options: {
      grid_columns: 7,
      enable_array_copy: true
    },
    items: {
      type: 'object',
      format: 'grid',
      title: 'Asset',
      required: [
        'asset',
        'number'
      ],
      properties: {
        asset: {
          title: 'Target',
          type: 'string',
          enum: [
            'ta',
            'tb',
            'tc',
            'pa'
          ],
          options: {
            grid_columns: 2,
            enum_titles: [
              'Tank A',
              'Tank B',
              'Tank C',
              'Plane A'
            ]
          }
        },
        missileType: {
          title: 'Missile Type',
          type: 'string',
          enum: [
            'SRBM',
            'MRBM',
            'IRBM',
            'Standard Cruise',
            'Low Obs Cruise',
            'Propellor OWA UAV',
            'Jet OWA UAV'
          ],
          options: {
            grid_columns: 2
          }
        },
        number: {
          title: 'Quantity',
          type: 'string',
          options: {
            grid_columns: 1
          },
          format: 'number'
        }
      }
    }
  }
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
  activityType: dropDownObject('Activity Type', ['Raid', 'Capture/Kill', 'Gather Int', 'Deliver Effect'], 4, order++),
  intendedEffect: textAreaObject('Intended Effect', 4, order++)
}

export const tmplCyber = {
  activityType: textObject('Activity Type', 4, order++),
  intendedEffect: textAreaObject('Intended Effect', 4, order++)
}
