export const coreTemplate = {
  Reference: {
    type: 'string',
    title: 'Reference (locked)',
    readonly: 'readonly',
    propertyOrder: 15,
    options: {
      grid_columns: 4
    }
  },
  title: {
    type: 'string',
    propertyOrder: 20,
    options: {
      grid_columns: 8
    }
  },
  startDate: {
    format: 'datetime-local',
    type: 'string',
    title: 'Start date',
    propertyOrder: 30,
    options: {
      grid_columns: 4
    }
  },
  endDate: {
    format: 'datetime-local',
    type: 'string',
    propertyOrder: 40,
    title: 'End date',
    options: {
      grid_columns: 4
    }
  },
  activity: {
    title: 'Activity',
    propertyOrder: 45,
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
  intent: {
    format: 'textarea',
    propertyOrder: 50,
    options: {
      grid_columns: 12
    },
    type: 'string'
  },
  ownAssets: {
    type: 'array',
    format: 'table',
    minItems: 0,
    propertyOrder: 80,
    title: 'Own Assets',
    options: {
      grid_columns: 6,
    },
    items: {
      type: 'object',
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
          type: 'string',
          format: 'number'
        }
      }
    }
  },
  otherAssets: {
    type: 'array',
    propertyOrder: 90,
    format: 'table',
    minItems: 0,
    title: 'Subject(s) of orders',
    options: {
      grid_columns: 6,
    },
    items: {
      title: 'Asset',
      type: 'string',
      enum: [
        'ra',
        'rb',
        'rc',
        'da'
      ],
      options: {
        enum_titles: [
          'Boat A',
          'Bike B',
          'Band C',
          'Plane A'
        ]
      }
    }
  },
  actionsOn: {
    format: 'textarea',
    title: 'Actions on',
    propertyOrder: 100,
    options: {
      grid_columns: 12
    },
    type: 'string'
  },
  synchronisedWith: {
    format: 'text',
    title: 'Sync with',
    propertyOrder: 110,
    options: {
      grid_columns: 4
    },
    type: 'string'
  },
  supports: {
    format: 'textarea',
    title: 'Supports High-Level',
    propertyOrder: 100,
    options: {
      grid_columns: 4
    },
    type: 'string'
  },
  activityCard: {
    format: 'text',
    title: 'Activity Card',
    propertyOrder: 100,
    options: {
      grid_columns: 4
    },
    type: 'string'
  },
  activityDescription: {
    format: 'textarea',
    title: 'Activity Description',
    propertyOrder: 100,
    options: {
      grid_columns: 12
    },
    type: 'string'
  }
}
