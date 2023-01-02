import { booleanObject, textAreaObject } from './p9-helpers'

let order = 200
export const otherTemplate = {
  discussedWithSMEs: booleanObject('Has this been discussed with SMEs?', 3, order++),
  isPreadjudicated: booleanObject('Is this pre-adjudicated?', 3, order++),
  standaloneActivity: booleanObject('Stand-Alone Activity?', 3, order++),
  requiresAS: booleanObject('Does this require AS Discussion?', 3, order++),
  supportsOther: {
    type: 'array',
    propertyOrder: order++,
    format: 'table',
    minItems: 0,
    title: 'Supports another activity',
    options: {
      grid_columns: 6
    },
    items: {
      title: 'Order',
      type: 'string',
      enum: [
        'o-a',
        'o-b',
        'o-c',
        'o-d'
      ],
      options: {
        enum_titles: [
          'Orders A',
          'Orders B',
          'Orders C',
          'Orders D'
        ]
      }
    }
  },
  activityDesc: textAreaObject('Activity Description', 6, order++),
  effectDesc: textAreaObject('Effect Description', 6, order++)
}
