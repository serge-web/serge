import { TemplateBody } from 'src/custom-types'

const messageTemplatesMock: TemplateBody[] = [
  {
    completed: false,
    details: {
      schema: '{"title":"State of World (laydown 2)","type":"object","properties":{"completed":{"type":"boolean","title":"Completed"},"Reference":{"type":"string","title":"Reference","format":"text"},"Title":{"type":"string","title":"Title","format":"text"},"Forces":{"type":"array","title":"Forces","minItems":1,"items":{"type":"object","properties":{"force":{"type":"string","enum":["Blue","Red","Green"]}}}},"newInput1":{"title":"New Input 1","type":"string"}},"dependencies":{},"required":[]}',
      uischema: '{"completed":{"ui:widget":"checkbox"},"Reference":{"ui:placeholder":"Enter reference"},"Title":{"ui:placeholder":"Enter title"},"Forces":{"ui:options":{"orderable":false},"items":{"force":{"ui:widget":"select"}}},"ui:order":["completed","Reference","Title","Forces","newInput1"]}',
      title: 'State of World L'
    },
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'State of World L',
    _id: 'k16eedkp',
    _rev: '1-612d7dc5d10fc81bc7459b2801c66816'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Daily intentions',
    details: {
      type: 'object',
      properties: {
        TurnNumber: {
          title: 'Turn',
          type: 'string',
          format: 'number'
        },
        OverallIntentions: {
          title: 'Overall intentions',
          type: 'string',
          format: 'textarea'
        },
        Orders: {
          items: {
            properties: {
              Unit: {
                title: 'Unit',
                type: 'string',
                format: 'text'
              },
              Tasking: {
                title: 'Tasking',
                type: 'string',
                format: 'textarea'
              },
              SearchPolicy: {
                title: 'Search Policy',
                type: 'string',
                format: 'textarea'
              },
              ActionOnContact: {
                title: 'Action on Contact',
                type: 'string',
                enum: [
                  'Ignore',
                  'Evade',
                  'Covert Trail',
                  'Overt Trail',
                  'Harass'
                ]
              },
              AnyOtherComments: {
                title: 'Any other comments',
                type: 'string',
                format: 'textarea'
              }
            },
            type: 'object'
          },
          title: 'Orders',
          type: 'array',
          format: 'table',
          minItems: 1
        }
      },
      title: 'Daily Intent',
      required: [
        'OverallIntentions',
        'Orders'
      ]
    },
    completed: false,
    _id: 'k16eedkn',
    _rev: '1-cc8e8cdb01447959c266761066448382'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Link',
    details: {
      type: 'object',
      properties: {
        Title: {
          type: 'string',
          format: 'text'
        },
        URL: {
          type: 'string',
          format: 'url'
        }
      },
      title: 'Link',
      format: 'grid'
    },
    completed: false,
    _id: 'k16eedkm',
    _rev: '1-7fa1e6dd6b4ac5b6afc45b596ee7af61'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Chat',
    details: {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          format: 'textarea',
          options: {
            inputAttributes: {
              placeholder: 'type the text'
            }
          }
        }
      },
      title: 'Chat',
      format: 'grid'
    },
    completed: false,
    _id: 'k16eedkl',
    _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
  },
  {
    completed: false,
    details: {
      title: 'COA',
      type: 'object',
      format: 'grid',
      required: [
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
        'DEPENDENCIES',
        'AdjudicationSupport',
        'PEER_REVIEW',
        'INSIGHT'
      ],
      properties: {
        Reference: {
          type: 'string',
          title: 'Reference (sys generated)',
          readonly: 'readonly'
        },
        Title: {
          type: 'string',
          title: '*COA / Op Name',
          format: 'textarea'
        },
        LOCATION: {
          title: '*Location of activities in this turn',
          type: 'object',
          properties: {
            region: {
              title: 'Region',
              type: 'string',
              enum: [
                'Asia Pacific',
                'Europe',
                'Americas'
              ],
              default: 'Europe'
            },
            Europe: {
              title: 'Country',
              type: 'string',
              enum: [
                'United Kingdom',
                'Germany'
              ],
              options: {
                dependencies: {
                  region: 'Europe'
                }
              }
            },
            Americas: {
              title: 'Country',
              type: 'string',
              enum: [
                'United State of America',
                'Brazil'
              ],
              options: {
                dependencies: {
                  region: 'Americas'
                }
              }
            },
            AsiaPacific: {
              title: 'Country',
              type: 'string',
              enum: [
                'India',
                'China'
              ],
              options: {
                dependencies: {
                  region: 'Asia Pacific'
                }
              }
            }
          }
        },
        PRESCRIPTED: {
          type: 'boolean',
          format: 'checkbox',
          title: '*Is this a pre-scripted activity? E.g. DXP',
          default: 'Yes',
          items: {
            type: 'string',
            enum: [
              'Yes',
              'No'
            ]
          }
        },
        VISIBILITY: {
          type: 'string',
          title: '*Intended visibility to adversary',
          enum: [
            'Overt',
            'Covert',
            'Clandestine',
            'Complex'
          ]
        },
        COA_SUPPORTS_AS: {
          type: 'boolean',
          format: 'checkbox',
          title: '*This COA supports / uses an AS plan / effect',
          default: 'Yes',
          items: {
            type: 'string',
            enum: [
              'Yes',
              'No'
            ]
          }
        },
        TARGET: {
          type: 'string',
          title: '*Target(s) – Adversary, Ally, specific audience within Adversary or allied polity etc',
          format: 'textarea',
          notEmpty: true
        },
        STRAT_COMMS: {
          type: 'string',
          title: 'Outline of associated Strategic Communications',
          format: 'textarea'
        },
        OBJECTIVES_TURN: {
          type: 'string',
          title: 'Objectives in this turn',
          format: 'textarea'
        },
        OBJECTIVES_OVERALL: {
          type: 'string',
          title: 'Overall Objectives',
          format: 'textarea'
        },
        TARGET_CENTRE_OF_GRAVITY: {
          type: 'string',
          title: 'Target’s Centre of Gravity',
          format: 'textarea'
        },
        DESIRED_ENDSTATE_TURN: {
          type: 'string',
          title: '*Desired Endstate in this turn',
          format: 'textarea'
        },
        DESIRED_ENDSTATE_OVERALL: {
          type: 'string',
          title: 'Desired Endstate Overall, if NOT in this turn',
          format: 'textarea'
        },
        EFFECTS_AND_ACTIONS: {
          type: 'string',
          title: '*Effects and actions',
          format: 'textarea'
        },
        SEQUENCING_AND_PHASES: {
          type: 'string',
          title: 'Sequencing and phases',
          format: 'textarea'
        },
        ADVERSARY_UNDERSTANDING: {
          type: 'string',
          title: 'What would my adversary see / understand of this activity / messaging?',
          format: 'textarea'
        },
        ADVERSARY_REACTION_COUNTER_ACTION: {
          properties: {
            ADVERSARY_MLCOA: {
              title: 'Adversary MLCOA',
              type: 'string',
              format: 'textarea'
            },
            MLCOA_RESPONSE: {
              title: 'Own Response',
              type: 'string',
              format: 'textarea'
            },
            ADVERSARY_MDCOA: {
              title: 'Adversary MDCOA',
              type: 'string',
              format: 'textarea'
            },
            MDCOA_RESPONSE: {
              title: 'Own Response',
              type: 'string',
              format: 'textarea'
            }
          },
          title: 'Adversary reaction & counter-action',
          type: 'object'
        },
        ORBAT: {
          type: 'array',
          format: 'table',
          minItems: 1,
          title: '*ORBAT – FEs used (Inc logistics and enablers)',
          items: {
            type: 'object',
            title: 'FE',
            properties: {
              FEName: {
                type: 'string',
                title: 'FE Name',
                enum: [
                  'Tank',
                  'Infantry',
                  'Plane',
                  'Submarine',
                  'other'
                ]
              },
              Readiness: {
                type: 'string',
                enum: [
                  'Level-1',
                  'Level-2',
                  'Level-3',
                  'Level-4',
                  'Level-5'
                ]
              },
              Number: {
                type: 'number'
              },
              StartDate: {
                type: 'string',
                title: 'Start date',
                format: 'date',
                options: {
                  flatpickr: {
                    wrap: false,
                    time_24hr: true,
                    dateFormat: 'd/m/Y'
                  }
                }
              },
              EndDate: {
                type: 'string',
                title: 'End date',
                format: 'date',
                options: {
                  flatpickr: {
                    wrap: false,
                    time_24hr: true,
                    dateFormat: 'd/m/Y'
                  }
                }
              }
            }
          }
        },
        TIMINGS: {
          properties: {
            START_PLANNING: {
              title: 'Start planning',
              type: 'string',
              format: 'date',
              options: {
                flatpickr: {
                  wrap: false,
                  time_24hr: true,
                  dateFormat: 'd/m/Y'
                }
              }
            },
            START_DEPLOYMENT: {
              title: 'Start deployment',
              type: 'string',
              format: 'date',
              options: {
                flatpickr: {
                  wrap: false,
                  time_24hr: true,
                  dateFormat: 'd/m/Y'
                }
              }
            },
            START_OPERATION: {
              title: 'Start Operation',
              type: 'string',
              format: 'date',
              options: {
                flatpickr: {
                  wrap: false,
                  time_24hr: true,
                  dateFormat: 'd/m/Y'
                }
              }
            },
            END_OPERATION: {
              title: 'End Operation',
              type: 'string',
              format: 'date',
              options: {
                flatpickr: {
                  wrap: false,
                  time_24hr: true,
                  dateFormat: 'd/m/Y'
                }
              }
            },
            END_RECOVERY: {
              title: 'End recovery',
              type: 'string',
              format: 'date',
              options: {
                flatpickr: {
                  wrap: false,
                  time_24hr: true,
                  dateFormat: 'd/m/Y'
                }
              }
            }
          },
          title: 'Timings',
          type: 'object',
          format: 'grid'
        },
        CONTINUES_INTO_NEXT_TURN: {
          type: 'boolean',
          format: 'checkbox',
          title: '*Will this activity continue into next turn?',
          default: 'Yes',
          items: {
            type: 'string',
            enum: [
              'Yes',
              'No'
            ]
          }
        },
        DEPENDENCIES: {
          type: 'string',
          title: 'Dependencies on Allied capability: Please indicate which allies (if any) and which of their capabilities you are dependent on. E.g. US Space capabilities, Allied ABO',
          format: 'textarea'
        },
        AdjudicationSupport: {
          type: 'array',
          format: 'checkbox',
          title: 'Adjudication support',
          uniqueItems: true,
          items: {
            type: 'string',
            enum: [
              'Space',
              'CEMA',
              'Influence',
              'Logistics'
            ]
          },
          options: {
            grid_columns: 12
          }
        },
        PEER_REVIEW: {
          type: 'string',
          title: 'Peer Review by',
          format: 'textarea'
        },
        INSIGHT: {
          type: 'string',
          title: 'Insight – What would you have done differently with other policies / permissions / risk appetite?',
          format: 'textarea'
        }
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
      format: 'grid',
      properties: {
        Reference: {
          readonly: 'readonly',
          title: 'Reference (sys generated)',
          options: {
            grid_columns: 4
          },
          type: 'string'
        },
        Title: {
          format: 'text',
          options: {
            grid_columns: 8
          },
          title: 'Title',
          type: 'string'
        },
        RFI: {
          format: 'textarea',
          options: {
            grid_columns: 12
          },
          title: 'RFI',
          type: 'string'
        },
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
            'SME – CEMA',
            'SME – Space',
            'SME – Logs & Med',
            'SME – IO',
            'SME – White',
            'Actor – White',
            'Actor – Red',
            'Other'
          ],
          title: 'FAO',
          type: 'string'
        },
        ResponseRequiredBy: {
          enum: [
            'Within an hour',
            'NLT 1300',
            'NLT 1600',
            'Not urgent'
          ],
          title: 'Response required by',
          type: 'string'
        }
      },
      required: [
        'Reference',
        'Title',
        'FAO',
        'RFI',
        'Priority',
        'ResponseRequiredBy'
      ],
      title: 'RFI',
      type: 'object'
    },
    completed: false,
    _id: 'k16eedkj',
    _rev: '1-683379b9418a2ba688eb4a8dfec4de11'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Message',
    details: {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        content: {
          type: 'string',
          format: 'textarea'
        }
      },
      title: 'Message',
      format: 'grid'
    },
    completed: false,
    _id: 'k16eedki',
    _rev: '1-7de33e447b392eeaf7164f4ec331bc57'
  },
  {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Weather forecast',
    details: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          title: 'Title'
        },
        Location: {
          type: 'object',
          properties: {
            Lat: {
              type: 'number'
            },
            'Lat Hemi': {
              type: 'string',
              enum: [
                'N',
                'S'
              ]
            },
            Long: {
              type: 'number'
            },
            'Long Hemi': {
              type: 'string',
              enum: [
                'E',
                'W'
              ]
            }
          },
          format: 'grid'
        },
        'Valid from': {
          type: 'string',
          format: 'datetime-local',
          options: {
            flatpickr: {
              wrap: true,
              time_24hr: true,
              allowInput: true
            }
          }
        },
        'Valid until': {
          type: 'string',
          format: 'datetime-local',
          options: {
            flatpickr: {
              wrap: true,
              time_24hr: true,
              allowInput: true
            }
          }
        },
        Forecast: {
          type: 'string',
          format: 'textarea'
        }
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
      type: 'object',
      properties: {
        title: {
          type: 'string',
          Title: 'Title'
        },
        Date: {
          type: 'string',
          format: 'datetime-local',
          options: {
            flatpickr: {
              wrap: true,
              time_24hr: true,
              allowInput: true
            }
          }
        },
        Status: {
          type: 'string',
          enum: [
            'Minor',
            'Major',
            'Critical'
          ]
        },
        Description: {
          type: 'string',
          format: 'textarea'
        }
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
      properties: {
        Forces: {
          format: 'table',
          items: {
            minItems: 1,
            properties: {
              //   items: {
              //     properties: {
              //       history: {
              //         format: 'table',
              //         items: {
              //           properties: {
              //             Route: {
              //               format: 'table',
              //               items: {
              //                 properties: {
              //                   Location: {
              //                     maxLength: 3,
              //                     type: 'string'
              //                   }
              //                 }
              //               },
              //               minItems: 1,
              //               propertyOrder: 400,
              //               type: 'array'
              //             },
              //             Speed: {
              //               propertyOrder: 300,
              //               type: 'number'
              //             },
              //             State: {
              //               propertyOrder: 200,
              //               type: 'string'
              //             },
              //             Turn: {
              //               propertyOrder: 100,
              //               type: 'string'
              //             }
              //           }
              //         },
              //         minItems: 1,
              //         type: 'array'
              //       },
              //       name: {
              //         propertyOrder: 100,
              //         type: 'string'
              //       },
              //       planned: {
              //         format: 'table',
              //         items: {
              //           properties: {
              //             Route: {
              //               format: 'table',
              //               items: {
              //                 properties: {
              //                   Location: {
              //                     maxLength: 3,
              //                     type: 'string'
              //                   }
              //                 }
              //               },
              //               minItems: 1,
              //               propertyOrder: 400,
              //               type: 'array'
              //             },
              //             Speed: {
              //               propertyOrder: 300,
              //               type: 'number'
              //             },
              //             State: {
              //               propertyOrder: 200,
              //               type: 'string'
              //             },
              //             Turn: {
              //               propertyOrder: 100,
              //               type: 'string'
              //             }
              //           }
              //         },
              //         minItems: 1,
              //         propertyOrder: 2000,
              //         type: 'array'
              //       },
              //       visibleTo: {
              //         format: 'table',
              //         items: {
              //           properties: {
              //             Force: {
              //               enum: [
              //                 'Blue',
              //                 'Red',
              //                 'Green'
              //               ],
              //               type: 'string'
              //             }
              //           }
              //         },
              //         propertyOrder: 300,
              //         type: 'array'
              //       }
              //     }
              //   },
              //   minItems: 1,
              //   type: 'array'
              // },
              force: {
                enum: [
                  'Blue',
                  'Red',
                  'Green'
                ],
                propertyOrder: 100,
                type: 'string'
              }
            }
          },
          minItems: 1,
          type: 'array'
        }
      },
      title: 'State of World (Full 2)',
      type: 'object'
    },
    lastUpdated: '2019-12-20T15:57:11.519Z',
    title: 'State of world (full 2)',
    _id: '2019-12-20T15:57:11.519Z',
    _rev: '1-4bd7b0b5488182f39f10d5203bb1fad8'
  }
]

export default messageTemplatesMock
