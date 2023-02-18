import { dropDownObject } from "./p9-helpers"

export const emconState = dropDownObject('Emcon State', ['Electronic Silence', 'Radio Silence', 'Normal Operations', 'No restrictions'], 3, 220)
export const rulesOfEngagement = dropDownObject('Rules of Engagement', ['Weapons Free', 'Weapons Tight', 'Weapons Held'], 3, 210)

export const coreTemplate = {
  Reference: {
    type: 'string',
    title: 'Reference (locked)',
    readonly: 'readonly',
    propertyOrder: 10,
    options: {
      grid_columns: 2
    }
  },
  title: {
    type: 'string',
    title: 'Title',
    propertyOrder: 20,
    options: {
      grid_columns: 10
    }
  },
  startDate: {
    format: 'datetime-local',
    type: 'string',
    propertyOrder: 40,
    title: 'Start Date',
    options: {
      grid_columns: 4,
      inputAttributes: {
        placeholder: 'Enter date'
      },
      flatpickr: {
        time_24hr: true,
        dateFormat: 'Z',
        enableTime: true
      }
    }
  },
  endDate: {
    format: 'datetime-local',
    type: 'string',
    propertyOrder: 45,
    title: 'End Date',
    options: {
      grid_columns: 4,
      inputAttributes: {
        placeholder: 'Enter date'
      },
      flatpickr: {
        time_24hr: true,
        dateFormat: 'Z',
        enableTime: true
      }
    }
  },
  activity: {
    title: 'Activity',
    propertyOrder: 50,
    readonly: 'readonly',
    type: 'string',
    enum: [
      'transit',
      'kinetic',
      'asymmetric'
    ],
    options: {
      grid_columns: 4,
      enum_titles: [
        'Transit1',
        'Kinetic1',
        'Asymmetric1'
      ]
    }
  },
  activityDescription: {
    format: 'textarea',
    title: 'Activity Description',
    propertyOrder: 55,
    options: {
      grid_columns: 8
    },
    type: 'string'
  },
  intent: {
    format: 'textarea',
    title: 'Intent',
    propertyOrder: 60,
    options: {
      grid_columns: 6
    },
    type: 'string'
  },
  ownAssets: {
    type: 'array',
    format: 'table',
    minItems: 0,
    propertyOrder: 70,
    title: 'Own Assets',
    options: {
      grid_columns: 6,
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
          title: 'Asset',
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
        number: {
          title: 'Quantity',
          type: 'number',
          options: {
            grid_columns: 2
          },
          format: 'number'
        }
      }
    }
  },
  otherAssets: {
    type: 'array',
    propertyOrder: 80,
    format: 'table',
    minItems: 0,
    title: 'Subject(s) of orders',
    options: {
      grid_columns: 6,
      disable_array_reorder: true
    },
    items: {
      type: 'object',
      format: 'grid',
      title: 'Asset',
      required: [
        'asset'
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
              'Opp Tank A',
              'Opp Tank B',
              'Opp Tank C',
              'Opp Plane A'
            ]
          }
        }
      }
    }
  },
  actionsOn: {
    format: 'textarea',
    title: 'Actions on',
    propertyOrder: 90,
    options: {
      grid_columns: 12
    },
    type: 'string'
  },
  synchronisedWith: {
    type: 'array',
    propertyOrder: 100,
    format: 'table',
    minItems: 0,
    title: 'Synchronised with',
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
  supports: {
    format: 'textarea',
    title: 'High-level Activity Supported',
    propertyOrder: 110,
    options: {
      grid_columns: 6
    },
    type: 'string'
  },
  activityCard: {
    title: 'Associated Cyber/Space Activity Ref#',
    propertyOrder: 120,
    type: 'string',
    enum: [
      'Card - 1',
      'Card - 2',
      'Card - 3'
    ],
    options: {
      grid_columns: 3,
    }
  }
}
