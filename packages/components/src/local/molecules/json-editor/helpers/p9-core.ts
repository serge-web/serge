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
    propertyOrder: 20,
    options: {
      grid_columns: 10
    }
  },
  startDate: {
    format: 'serge-date',
    type: 'string',
    title: 'Start date',
    propertyOrder: 30,
    options: {
      grid_columns: 3
    }
  },
  endDate: {
    format: 'serge-date',
    type: 'string',
    propertyOrder: 40,
    title: 'End date',
    options: {
      grid_columns: 3
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
      grid_columns: 6,
      enum_titles: [
        'Transit1',
        'Kinetic1',
        'Asymmetric1'
      ]
    }
  },
  intent: {
    format: 'textarea',
    title: 'Intent',
    propertyOrder: 60,
    options: {
      grid_columns: 12
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
      grid_columns: 6
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
            grid_columns: 3,
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
      grid_columns: 6
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
    propertyOrder: 90,
    options: {
      grid_columns: 12
    },
    type: 'string'
  },
  synchronisedWith: {
    format: 'text',
    title: 'Sync with',
    propertyOrder: 100,
    options: {
      grid_columns: 4
    },
    type: 'string'
  },
  supports: {
    format: 'textarea',
    title: 'Supports High-Level',
    propertyOrder: 110,
    options: {
      grid_columns: 4
    },
    type: 'string'
  },
  activityCard: {
    format: 'text',
    title: 'Activity Card',
    propertyOrder: 120,
    options: {
      grid_columns: 4
    },
    type: 'string'
  },
  activityDescription: {
    format: 'textarea',
    title: 'Activity Description',
    propertyOrder: 130,
    options: {
      grid_columns: 12
    },
    type: 'string'
  }
}
