import { TemplateBody } from 'src/custom-types'

const messageTemplatesMock: TemplateBody[] = [
  {
    completed: false,
    details: {
      schema: {
        type: 'object',
        title: 'State of World (laydown 2)',
        properties: {
          completed: {
            title: 'completed',
            type: 'boolean'
          },
          Reference: {
            title: 'Reference',
            type: 'string'
          },
          Title: {
            title: 'Title',
            type: 'string'
          },
          Forces: {
            items: {
              type: 'object',
              properties: {
                Forces: {
                  enum: [
                    'Blue',
                    'Red',
                    'Green'
                  ],
                  type: 'string',
                  title: 'Forces'
                }
              },
              dependencies: {},
              required: []
            },
            title: 'Forces',
            type: 'array'
          }
        },
        dependencies: {},
        required: []
      },
      uischema: {
        Forces: {
          items: {
            'ui:order': [
              'Forces'
            ]
          }
        },
        'ui:order': [
          'completed',
          'Reference',
          'Title',
          'Forces'
        ]
      },
      title: 'State of World L'
    },
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'State of World L',
    _id: 'k16eedkp',
    _rev: '1-612d7dc5d10fc81bc7459b2801c66816'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Chat',
    details: {
      schema: {
        type: 'object',
        properties: {
          Chat: {
            title: 'Chat',
            type: 'string',
            description: 'content',
            default: 'type the text '
          }
        },
        dependencies: {},
        required: []
      },
      uischema: {
        Chat: {
          'ui:widget': 'textarea'
        },
        'ui:order': [
          'Chat'
        ]
      },
      title: 'Chat'
    },
    completed: false,
    _id: 'k16eedkl',
    _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Daily intentions',
    details: {
      schema: {
        type: 'object',
        properties: {
          TurnNumber: {
            title: 'Turn',
            type: 'string'
          },
          OverallIntentions: {
            title: 'Overall intentions',
            type: 'string'
          },
          orders: {
            items: {
              type: 'object',
              title: '',
              properties: {
                Unit: {
                  title: 'Unit',
                  type: 'string'
                },
                Tasking: {
                  title: 'Tasking',
                  type: 'string'
                },
                'Search Policy': {
                  title: 'Search Policy',
                  type: 'string'
                },
                'Action on Contact': {
                  enum: [
                    'Ignore',
                    'Evade',
                    'Covert Trail',
                    'Overt Trail',
                    'Harass'
                  ],
                  title: 'Action on Contact',
                  type: 'string',
                  enumNames: null
                },
                'Any other comments': {
                  title: 'Any other comments',
                  type: 'string'
                }
              },
              dependencies: {},
              required: []
            },
            title: 'orders',
            type: 'array'
          }
        },
        dependencies: {},
        required: []
      },
      uischema: {
        orders: {
          items: {
            Tasking: {
              'ui:widget': 'textarea'
            },
            'Search Policy': {
              'ui:widget': 'textarea'
            },
            'Any other comments': {
              'ui:widget': 'textarea'
            },
            'ui:order': [
              'Unit',
              'Tasking',
              'Search Policy',
              'Action on Contact',
              'Any other comments'
            ]
          }
        },
        'ui:order': [
          'TurnNumber',
          'OverallIntentions',
          'orders'
        ]
      },
      title: 'Daily Intent'
    },
    completed: false,
    _id: 'k16eedkn',
    _rev: '1-cc8e8cdb01447959c266761066448382'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Link',
    details: {
      title: 'Link',
      schema: {
        type: 'object',
        properties: {
          Title: {
            title: 'Title',
            type: 'string'
          },
          URL: {
            title: 'URL',
            type: 'string'
          }
        },
        dependencies: {},
        required: [],
        title: 'Link'
      },
      uischema: {
        'ui:order': [
          'Title',
          'URL'
        ]
      }
    },
    completed: false,
    _id: 'k16eedkm',
    _rev: '1-7fa1e6dd6b4ac5b6afc45b596ee7af61'
  },
  {
    completed: false,
    details: {
      title: 'COA',
      schema: {
        type: 'object',
        properties: {
          Reference: {
            title: 'Reference (sys generated)',
            type: 'string'
          },
          Title: {
            title: '*COA / Op Name',
            type: 'string'
          },
          LOCATION: {
            title: '*Location of activities in this turn',
            type: 'object',
            properties: {
              region: {
                enum: [
                  'Asia Pacific',
                  'Europe',
                  'Americas'
                ],
                title: 'Region',
                type: 'string'
              },
              Europe: {
                enum: [
                  'United Kingdom',
                  'Germany'
                ],
                title: 'Country',
                type: 'string'
              }
            },
            dependencies: {},
            required: []
          },
          PRESCRIPTED: {
            title: '*Is this a pre-scripted activity? E.g. DXP',
            type: 'boolean',
            default: true
          },
          VISIBILITY: {
            enum: [
              'Overt',
              'Covert',
              'Clandestine',
              'Complex'
            ],
            title: '*Intended visibility to adversary',
            type: 'string'
          },
          COA_SUPPORTS_AS: {
            items: {
              type: 'string'
            },
            title: '*This COA supports / uses an AS plan / effect',
            type: 'array'
          },
          TARGET: {
            title: '*Target(s) – Adversary, Ally, specific audience within Adversary or allied polity etc',
            type: 'string'
          },
          STRAT_COMMS: {
            title: 'Outline of associated Strategic Communications',
            type: 'string'
          },
          OBJECTIVES_TURN: {
            title: 'Objectives in this turn',
            type: 'string'
          },
          OBJECTIVES_OVERALL: {
            title: 'Overall Objectives',
            type: 'string'
          },
          TARGET_CENTRE_OF_GRAVITY: {
            title: 'Target’s Centre of Gravity',
            type: 'string'
          },
          DESIRED_ENDSTATE_TURN: {
            title: '*Desired Endstate in this turn',
            type: 'string'
          },
          DESIRED_ENDSTATE_OVERALL: {
            title: 'Desired Endstate Overall, if NOT in this turn',
            type: 'string'
          },
          EFFECTS_AND_ACTIONS: {
            title: '*Effects and actions',
            type: 'string'
          },
          SEQUENCING_AND_PHASES: {
            title: 'Sequencing and phases',
            type: 'string'
          },
          ADVERSARY_UNDERSTANDING: {
            title: 'What would my adversary see / understand of this activity / messaging?',
            type: 'string'
          },
          ADVERSARY_REACTION_COUNTER_ACTION: {
            title: 'Adversary reaction & counter-action',
            type: 'object',
            properties: {
              ADVERSARY_MLCOA: {
                title: 'Adversary MLCOA',
                type: 'string'
              },
              MLCOA_RESPONSE: {
                title: 'Own Response',
                type: 'string'
              },
              ADVERSARY_MDCOA: {
                title: 'Adversary MDCOA',
                type: 'string'
              },
              MDCOA_RESPONSE: {
                title: 'Own Response',
                type: 'string'
              }
            },
            dependencies: {},
            required: []
          },
          ORBAT: {
            items: {
              type: 'object',
              properties: {
                FEName: {
                  enum: [
                    'Tank',
                    'Infantry',
                    'Plane',
                    'Submarine',
                    'other'
                  ],
                  title: 'FE Name',
                  type: 'string'
                },
                Readiness: {
                  enum: [
                    'Level-1',
                    'Level-2',
                    'Level-3',
                    'Level-4',
                    'Level-5'
                  ],
                  type: 'string'
                },
                Number: {
                  type: 'string'
                },
                StartDate: {
                  format: 'date',
                  title: 'Start date',
                  type: 'string'
                },
                EndDate: {
                  format: 'date',
                  title: 'End date',
                  type: 'string'
                }
              },
              dependencies: {},
              required: []
            },
            title: '*ORBAT – FEs used (Inc logistics and enablers)',
            type: 'array'
          },
          TIMINGS: {
            title: 'Timings',
            type: 'object',
            properties: {
              START_PLANNING: {
                format: 'date',
                title: 'Start planning',
                type: 'string'
              },
              START_DEPLOYMENT: {
                format: 'date',
                title: 'Start deployment',
                type: 'string'
              },
              START_OPERATION: {
                format: 'date',
                title: 'Start Operation',
                type: 'string'
              },
              END_OPERATION: {
                format: 'date',
                title: 'End Operation',
                type: 'string'
              },
              END_RECOVERY: {
                format: 'date',
                title: 'End recovery',
                type: 'string'
              }
            },
            dependencies: {},
            required: []
          },
          CONTINUES_INTO_NEXT_TURN: {
            title: '*Will this activity continue into next turn?',
            type: 'boolean',
            default: true
          },
          DEPENDENCIES: {
            title: 'Dependencies on Allied capability: Please indicate which allies (if any) and which of their capabilities you are dependent on. E.g. US Space capabilities, Allied ABO',
            type: 'string'
          },
          AdjudicationSupport: {
            items: {
              enum: [
                'Space',
                'CEMA',
                'Influence',
                'Logistics'
              ],
              type: 'string'
            },
            title: 'Adjudication support',
            type: 'array'
          },
          PEER_REVIEW: {
            title: 'Peer Review by',
            type: 'string'
          },
          INSIGHT: {
            title: 'Insight – What would you have done differently with other policies / permissions / risk appetite?',
            type: 'string'
          }
        },
        dependencies: {},
        required: [
          'Reference',
          'Title',
          'PRESCRIPTED',
          'COA_SUPPORTS_AS',
          'STRAT_COMMS',
          'OBJECTIVES_TURN',
          'OBJECTIVES_OVERALL',
          'TARGET_CENTRE_OF_GRAVITY',
          'DESIRED_ENDSTATE_TURN',
          'DESIRED_ENDSTATE_OVERALL',
          'EFFECTS_AND_ACTIONS',
          'SEQUENCING_AND_PHASES',
          'ADVERSARY_REACTION_COUNTER_ACTION',
          'ORBAT',
          'PEER_REVIEW',
          'INSIGHT'
        ]
      },
      uischema: {
        LOCATION: {
          'ui:order': [
            'region',
            'Europe'
          ]
        },
        ADVERSARY_REACTION_COUNTER_ACTION: {
          'ui:order': [
            'ADVERSARY_MLCOA',
            'MLCOA_RESPONSE',
            'ADVERSARY_MDCOA',
            'MDCOA_RESPONSE'
          ]
        },
        ORBAT: {
          items: {
            'ui:order': [
              'FEName',
              'Readiness',
              'Number',
              'StartDate',
              'EndDate'
            ]
          }
        },
        TIMINGS: {
          'ui:order': [
            'START_PLANNING',
            'START_DEPLOYMENT',
            'START_OPERATION',
            'END_OPERATION',
            'END_RECOVERY'
          ]
        },
        DEPENDENCIES: {
          'ui:widget': 'textarea'
        },
        AdjudicationSupport: {
          items: {}
        },
        PEER_REVIEW: {
          'ui:widget': 'textarea'
        },
        INSIGHT: {
          'ui:widget': 'textarea'
        },
        'ui:order': [
          'Reference',
          'Title',
          'LOCATION',
          'PRESCRIPTED',
          'VISIBILITY',
          'COA_SUPPORTS_AS',
          'TARGET',
          'STRAT_COMMS',
          'OBJECTIVES_TURN',
          'OBJECTIVES_OVERALL',
          'TARGET_CENTRE_OF_GRAVITY',
          'DESIRED_ENDSTATE_TURN',
          'DESIRED_ENDSTATE_OVERALL',
          'EFFECTS_AND_ACTIONS',
          'SEQUENCING_AND_PHASES',
          'ADVERSARY_UNDERSTANDING',
          'ADVERSARY_REACTION_COUNTER_ACTION',
          'ORBAT',
          'TIMINGS',
          'CONTINUES_INTO_NEXT_TURN',
          'DEPENDENCIES',
          'AdjudicationSupport',
          'PEER_REVIEW',
          'INSIGHT'
        ]
      }
    },
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'COA',
    _id: 'k16eedkk',
    _rev: '1-4c3969d57f8cf470858dd1819ee5c2e8'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'RFI',
    details: {
      schema: {
        type: 'object',
        properties: {
          '': {
            title: '',
            type: 'object',
            properties: {
              'Reference (sys generated)': {
                title: 'Reference (sys generated)',
                type: 'string'
              },
              Title: {
                title: 'Title',
                type: 'string'
              }
            },
            dependencies: {},
            required: []
          },
          RFI: {
            title: 'RFI',
            type: 'string'
          },
          newInput1: {
            title: 'RFI',
            type: 'object',
            properties: {
              Priority: {
                enum: [
                  'High',
                  'Medium',
                  'Low'
                ],
                title: 'Priority',
                type: 'string'
              },
              FAO: {
                enum: [
                  'J2',
                  'SME - CEMA',
                  'SME - Space',
                  'SME - Logs & Med',
                  'SME - IO',
                  'SME - White',
                  'Actor - White',
                  'Actor - Red',
                  'Other'
                ],
                title: 'FAO',
                type: 'string'
              },
              'Response required by': {
                enum: [
                  'Within in hour',
                  'NlT 1300',
                  'NLT 1600',
                  'Not Urgent'
                ],
                title: 'Response required by',
                type: 'string'
              }
            },
            dependencies: {},
            required: []
          }
        },
        dependencies: {},
        required: []
      },
      uischema: {
        '': {
          'ui:order': [
            'Reference (sys generated)',
            'Title'
          ]
        },
        RFI: {
          'ui:widget': 'textarea'
        },
        newInput1: {
          'ui:order': [
            'Priority',
            'FAO',
            'Response required by'
          ]
        },
        'ui:order': [
          '',
          'RFI',
          'newInput1'
        ]
      },
      title: 'RFI'
    },
    completed: false,
    _id: 'k16eedkj',
    _rev: '1-683379b9418a2ba688eb4a8dfec4de11'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Message',
    details: {
      schema: {
        type: 'object',
        properties: {
          title: {
            title: 'title',
            type: 'string'
          },
          content: {
            title: 'content',
            type: 'string'
          }
        },
        dependencies: {},
        required: []
      },
      uischema: {
        content: {
          'ui:widget': 'textarea'
        },
        'ui:order': [
          'title',
          'content'
        ]
      },
      title: 'Message'
    },
    completed: false,
    _id: 'k16eedki',
    _rev: '1-7de33e447b392eeaf7164f4ec331bc57'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Weather forecast',
    details: {
      schema: {
        type: 'object',
        properties: {
          'Weather forecast': {
            title: 'Weather forecast',
            type: 'object',
            properties: {
              Title: {
                title: 'Title',
                type: 'string'
              }
            },
            dependencies: {},
            required: []
          },
          Location: {
            title: 'Location',
            type: 'object',
            properties: {
              Lat: {
                title: 'Lat',
                type: 'number'
              },
              'Lat Hemi': {
                enum: [
                  'N/S',
                  'N',
                  'S'
                ],
                title: 'Lat Hemi',
                type: 'string'
              },
              Long: {
                title: 'Long',
                type: 'number'
              },
              'Long Hemi': {
                title: 'Long Hemi',
                type: 'number'
              }
            },
            dependencies: {},
            required: []
          },
          'Valid from': {
            format: 'date',
            title: 'Valid from',
            type: 'string'
          },
          'Valid until': {
            format: 'date',
            title: 'Valid until',
            type: 'string'
          },
          Forecast: {
            title: 'Forecast',
            type: 'string'
          }
        },
        dependencies: {},
        required: []
      },
      uischema: {
        'Weather forecast': {
          'ui:order': [
            'Title'
          ]
        },
        Location: {
          'ui:order': [
            'Lat',
            'Lat Hemi',
            'Long',
            'Long Hemi'
          ]
        },
        Forecast: {
          'ui:widget': 'textarea'
        },
        'ui:order': [
          'Weather forecast',
          'Location',
          'Valid from',
          'Valid until',
          'Forecast'
        ]
      },
      title: 'Weather Forecast'
    },
    completed: false,
    _id: 'k16eedkh',
    _rev: '1-f332e0104a371b590346b66dc8e9fa2b'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.704Z',
    title: 'Machinery failure',
    details: {
      schema: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          Date: {
            format: 'date',
            title: 'Date',
            type: 'string'
          },
          Status: {
            enum: [
              'Minor',
              'Major',
              'Critical'
            ],
            title: 'Status',
            type: 'string'
          },
          Description: {
            title: 'Description',
            type: 'string'
          }
        },
        dependencies: {},
        required: [],
        description: '',
        title: 'Machinery failure'
      },
      uischema: {
        Description: {
          'ui:widget': 'textarea'
        },
        'ui:order': [
          'title',
          'Date',
          'Status',
          'Description'
        ]
      },
      title: 'Machinery Failure'
    },
    completed: false,
    _id: 'k16eedkg',
    _rev: '1-80fc0c1feca8eb6d812d3fa2068ffe89'
  },
  {
    completed: false,
    details: {
      schema: {
        type: 'object',
        properties: {
          Forces: {
            items: {
              type: 'string'
            },
            title: 'Forces',
            type: 'array',
            minItems: 1
          }
        },
        dependencies: {},
        required: []
      },
      uischema: {
        Forces: {
          items: {}
        },
        'ui:order': [
          'Forces'
        ]
      },
      title: 'State of World (Full 2)'
    },
    lastUpdated: '2019-12-20T15:57:11.519Z',
    title: 'State of world (full 2)',
    _id: '2019-12-20T15:57:11.519Z',
    _rev: '1-4bd7b0b5488182f39f10d5203bb1fad8'
  }
]

export default messageTemplatesMock
