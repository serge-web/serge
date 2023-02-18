import { booleanObject, dropDownObject, multiSelectDropDownObject, numberObject, textAreaObject, textObject } from './p9-helpers'

let order = 300
export const tmplTransit = {
  transitSpeed: numberObject('Transit Speed', 3, order++),
  transitDuration: textObject('Transit Duration', 3, order++),
  transitPosture: dropDownObject('Transit Posture', ['Rapid', 'Standard', 'Slow'], 4, order++)
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
              'Battery A',
              'Battery B',
              'Battery C',
              'Battery D'
            ]
          }
        },
        missileType: {
          title: 'Missile Type',
          type: 'string',
          enum: [
            '###Ballistic',
            'SRBM',
            'MRBM',
            'IRBM',
            '###Cruise',
            'Standard Cruise',
            'Low Obs Cruise',
            '###UAV',
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
              'Opp Site A',
              'Opp Site B',
              'Opp Site C',
              'Opp Site D'
            ]
          }
        },
        missileType: {
          title: 'Missile Type',
          type: 'string',
          enum: [
            '###Ballistic',
            'SRBM',
            'MRBM',
            'IRBM',
            '###Cruise',
            'Standard Cruise',
            'Low Obs Cruise',
            '###UAV',
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
  domain: multiSelectDropDownObject('Target Domains', ['Maritime', 'Air', 'Land'], 2, order++),
  covert: booleanObject('Covert', 1, order++),
  method: textObject('Observation Method', 4, order++)
}

/** note: used for offensive and defensive operations */
export const tmplDuration = {
  duration: numberObject('Duration (hrs)', 4, order++)
}

export const tmplTST = {
  targetPriority: textAreaObject('Target Type Priority', 4, order++)
}

export const tmplASWBarrier = {
  active: booleanObject('Active?', 4, order++)
}

export const tmplEWAttack = {
  effect: textObject('Effect Type', 4, order++)
}

export const tmplSOFAttack = {
  activityType: dropDownObject('Activity Type', ['Support & Influence', 'Special Reconnaisance', 'Direct Action'], 4, order++),
  intendedEffect: textAreaObject('Intended Effect', 4, order++)
}

// for generic cyber activities
export const tmplActivity = {
  discussedWithSMEs: booleanObject('Has this been discussed with SMEs?', 3, order++),
  isPreadjudicated: booleanObject('Is this pre-adjudicated?', 3, order++),
  standaloneActivity: booleanObject('Stand-Alone Activity?', 3, order++),
  requiresAS: booleanObject('Does this require AS Discussion?', 3, order++),
  effectDesc: textAreaObject('Effect Description', 6, order++)
}

export const tmplAirToAir = {
  otherAssets: {
    type: 'array',
    readonly: 'readonly',
    options: {
      hidden: true
    },
    id: 'hiddenAssets'
  }
}
