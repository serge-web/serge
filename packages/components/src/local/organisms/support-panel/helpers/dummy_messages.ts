
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'

export const dummyMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
  {
    messageType: 'InteractionMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Logs',
        roleId: 'rk116f5e',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      interaction: {
        id: 'some long string',
        startTime: '2022-11-15T00:00:00.000Z',
        endTime: '2022-11-15T05:30:00.000Z',
        orders1: 'm_F-Blue_12',
        orders2: 'm_F-Red_27'
      },
      timestamp: '2022-09-23T14:47:47.015Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-21',
      locationOutcomes: [],
      perceptionOutcomes: [],
      healthOutcomes: [],
      narrative: '',
      messageType: 'AdjudicationOutcomes'
    },
    hasBeenRead: false,
    _id: 'adjud_23423',
    _rev: 'm_F-Red_27'
  },
  {
    messageType: 'InteractionMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Logs',
        roleId: 'rk116f5e',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      interaction: {
        id: 'some other long string',
        complete: true,
        startTime: '2022-11-15T04:00:00.000Z',
        endTime: '2022-11-15T06:30:00.000Z',
        orders1: 'm_F-Blue_24',
        orders2: 'm_F-Red_30'
      },
      timestamp: '2022-09-23T14:41:47.015Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-15',
      locationOutcomes: [],
      perceptionOutcomes: [],
      healthOutcomes: [],
      narrative: '',
      messageType: 'AdjudicationOutcomes'
    },
    hasBeenRead: false,
    _id: 'adjud_23111',
    _rev: 'm_F-Red_34'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Mar-4',
        roleId: 'rk116f53',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-29T08:51:37.924Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-6',
      title: 'Order item 6',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T00:55:00.000Z',
      location: [
        {
          uniqid: 'aa7',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Transit//Route',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668470700000,
              endTime: 1668473700000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  149.1973,
                  -10.6215
                ],
                [
                  145.62,
                  -14.82
                ],
                [
                  142.41,
                  -19.65
                ],
                [
                  142.1253,
                  -19.3355
                ]
              ]
            }
          }
        }
      ],
      activity: 'Transit',
      ownAssets: [
        {
          asset: 'a179',
          number: 0
        }
      ],
      otherAssets: [
        'a111',
        'a157',
        'a109'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_6',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'Logs',
        roleId: 'rkr226f5a',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-22T21:06:20.164Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-9',
      title: 'Order item 9',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T04:55:00.000Z',
      location: [
        {
          uniqid: 'a11',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route in',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'F-Red',
              startTime: 1668470700000,
              endTime: 1668473700000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  142.9809,
                  -20.6715
                ],
                [
                  144.01,
                  -17.87
                ],
                [
                  143.95,
                  -14.17
                ],
                [
                  145.16,
                  -11.19
                ],
                [
                  145.67,
                  -8.92
                ],
                [
                  145.878,
                  -8.4283
                ]
              ]
            }
          }
        },
        {
          uniqid: 'a12',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Target Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T03:15:00.000Z',
              force: 'F-Red',
              startTime: 1668473700000,
              endTime: 1668482100000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                145.878,
                -8.4283
              ]
            }
          }
        },
        {
          uniqid: 'a13',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route out',
              startDate: '2022-11-15T03:15:00.000Z',
              endDate: '2022-11-15T04:55:00.000Z',
              force: 'F-Red',
              startTime: 1668482100000,
              endTime: 1668488100000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  145.878,
                  -8.4283
                ],
                [
                  144.92,
                  -12.86
                ],
                [
                  144.06,
                  -16.21
                ],
                [
                  142.49,
                  -20.26
                ],
                [
                  142.9809,
                  -20.6715
                ]
              ]
            }
          }
        }
      ],
      activity: 'Point Reconnaisance',
      ownAssets: [
        {
          asset: 'a128',
          number: 2
        },
        {
          asset: 'a157',
          number: 0
        },
        {
          asset: 'a147',
          number: 5
        },
        {
          asset: 'a153',
          number: 1
        }
      ],
      otherAssets: [
        'a168'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_9',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Air-3',
        roleId: '3rk116f53',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-29T07:05:03.194Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-12',
      title: 'Order item 12',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T00:55:00.000Z',
      location: [
        {
          uniqid: 'aa7',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Transit//Route',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668470700000,
              endTime: 1668473700000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  149.1973,
                  -10.6215
                ],
                [
                  142.55,
                  -11.36
                ],
                [
                  135,
                  -13.03
                ],
                [
                  127.72,
                  -13.41
                ],
                [
                  128.2265,
                  -13.8618
                ]
              ]
            }
          }
        }
      ],
      activity: 'Transit',
      ownAssets: [
        {
          asset: 'a196',
          number: 4
        }
      ],
      otherAssets: [
        'a111',
        'a157'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_12',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Logs',
        roleId: 'blue-logs',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-23T14:47:47.015Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-15',
      title: 'Order item 15',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T05:35:00.000Z',
      location: [
        {
          uniqid: 'aa4',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Strike//Route in',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668470700000,
              endTime: 1668473700000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  149.2994,
                  -10.1887
                ],
                [
                  132.98,
                  -15.26
                ],
                [
                  116.96,
                  -21.03
                ],
                [
                  116.7521,
                  -20.9262
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa5',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Strike//Target Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T03:05:00.000Z',
              force: 'F-Blue',
              startTime: 1668473700000,
              endTime: 1668481500000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    112.89633071233679,
                    -17.198743389873794
                  ],
                  [
                    112.89633071233679,
                    -24.562737456048836
                  ],
                  [
                    120.80225783113329,
                    -24.562737456048836
                  ],
                  [
                    120.80225783113329,
                    -17.198743389873794
                  ],
                  [
                    112.89633071233679,
                    -17.198743389873794
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa6',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Strike//Route out',
              startDate: '2022-11-15T03:05:00.000Z',
              endDate: '2022-11-15T05:35:00.000Z',
              force: 'F-Blue',
              startTime: 1668481500000,
              endTime: 1668490500000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  116.7521,
                  -20.9262
                ],
                [
                  128.08,
                  -17.05
                ],
                [
                  138.45,
                  -14.14
                ],
                [
                  149.1,
                  -9.95
                ],
                [
                  149.2994,
                  -10.1887
                ]
              ]
            }
          }
        }
      ],
      activity: 'Area Strike',
      ownAssets: [
        {
          asset: 'a196',
          number: 4
        }
      ],
      otherAssets: [
        'a111',
        'a157'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_15',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Mar-4',
        roleId: 'rk116f53',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-22T12:14:31.627Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-18',
      title: 'Order item 18',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T03:55:00.000Z',
      location: [
        {
          uniqid: 'aa8',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Route in',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668470700000,
              endTime: 1668473700000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.3171,
                  -8.0633
                ],
                [
                  130.1,
                  -13.4
                ],
                [
                  120.22,
                  -18.4
                ],
                [
                  120.4755,
                  -18.6674
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9a',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Flight Box',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T01:05:00.000Z',
              force: 'F-Blue',
              startTime: 1668473700000,
              endTime: 1668474300000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    118.41572292732938,
                    -16.683001434113105
                  ],
                  [
                    118.41572292732938,
                    -20.628816633025632
                  ],
                  [
                    122.58377391994813,
                    -20.628816633025632
                  ],
                  [
                    122.58377391994813,
                    -16.683001434113105
                  ],
                  [
                    118.41572292732938,
                    -16.683001434113105
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9b',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Target Area',
              startDate: '2022-11-15T01:05:00.000Z',
              endDate: '2022-11-15T03:25:00.000Z',
              force: 'F-Blue',
              startTime: 1668474300000,
              endTime: 1668482700000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    118.53362421231826,
                    -16.79833018586864
                  ],
                  [
                    118.53362421231826,
                    -20.516070918772964
                  ],
                  [
                    122.46042379583633,
                    -20.516070918772964
                  ],
                  [
                    122.46042379583633,
                    -16.79833018586864
                  ],
                  [
                    118.53362421231826,
                    -16.79833018586864
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'a10',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Route out',
              startDate: '2022-11-15T03:25:00.000Z',
              endDate: '2022-11-15T03:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668482700000,
              endTime: 1668484500000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  120.4755,
                  -18.6674
                ],
                [
                  130.04,
                  -13.51
                ],
                [
                  139.04,
                  -7.93
                ],
                [
                  139.3171,
                  -8.0633
                ]
              ]
            }
          }
        }
      ],
      activity: 'Area Reconnaisance',
      ownAssets: [
        {
          asset: 'a179',
          number: 1
        },
        {
          asset: 'a185',
          number: 5
        },
        {
          asset: 'a197',
          number: 1
        }
      ],
      otherAssets: [
        'a111',
        'a157'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_18',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Air-1',
        roleId: '1rk116f53',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-25T23:25:17.028Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-21',
      title: 'Order item 21',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T06:55:00.000Z',
      location: [
        {
          uniqid: 'a11',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route in',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668470700000,
              endTime: 1668473700000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  144.648,
                  -9.6247
                ],
                [
                  135.13,
                  -13.43
                ],
                [
                  125.67,
                  -17.18
                ],
                [
                  116.49,
                  -20.65
                ],
                [
                  116.7521,
                  -20.9262
                ]
              ]
            }
          }
        },
        {
          uniqid: 'a12',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Target Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T04:05:00.000Z',
              force: 'F-Blue',
              startTime: 1668473700000,
              endTime: 1668485100000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                116.7521,
                -20.9262
              ]
            }
          }
        },
        {
          uniqid: 'a13',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route out',
              startDate: '2022-11-15T04:05:00.000Z',
              endDate: '2022-11-15T06:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668485100000,
              endTime: 1668495300000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  116.7521,
                  -20.9262
                ],
                [
                  144.29,
                  -9.58
                ],
                [
                  144.648,
                  -9.6247
                ]
              ]
            }
          }
        }
      ],
      activity: 'Point Reconnaisance',
      ownAssets: [
        {
          asset: 'a185',
          number: 4
        },
        {
          asset: 'a180',
          number: 5
        }
      ],
      otherAssets: [
        'a111'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_21',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Mar-2',
        roleId: 'rk116f51',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-25T16:20:03.221Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-24',
      title: 'Order item 24',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T03:45:00.000Z',
      location: [
        {
          uniqid: 'aa1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Route in',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668470700000,
              endTime: 1668473700000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  141.6774,
                  -8.4284
                ],
                [
                  136.44,
                  -10.4
                ],
                [
                  130.66,
                  -11.94
                ],
                [
                  130.7986,
                  -11.9046
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Target Location',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T02:35:00.000Z',
              force: 'F-Blue',
              startTime: 1668473700000,
              endTime: 1668479700000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                130.7986,
                -11.9046
              ]
            }
          }
        },
        {
          uniqid: 'aa3',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Route out',
              startDate: '2022-11-15T02:35:00.000Z',
              endDate: '2022-11-15T03:45:00.000Z',
              force: 'F-Blue',
              startTime: 1668479700000,
              endTime: 1668483900000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  130.7986,
                  -11.9046
                ],
                [
                  136.64,
                  -10.52
                ],
                [
                  141.89,
                  -8.73
                ],
                [
                  141.6774,
                  -8.4284
                ]
              ]
            }
          }
        }
      ],
      activity: 'Precision Strike',
      ownAssets: [
        {
          asset: 'a171',
          number: 1
        }
      ],
      otherAssets: [
        'a111',
        'a157',
        'a109'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_24',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'Comms',
        roleId: 'rkr226f5b',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-21T14:58:50.204Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-27',
      title: 'Order item 27',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T00:05:00.000Z',
      location: [],
      activity: 'Non spatial cyber',
      ownAssets: [
        {
          asset: 'a130',
          number: 5
        }
      ],
      otherAssets: [
        'a168',
        'a197'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_27',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'CO',
        roleId: 'rkr226f5e',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-22T03:21:37.977Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-30',
      title: 'Order item 30',
      startDate: '2022-11-15T00:10:00.000Z',
      endDate: '2022-11-15T05:40:00.000Z',
      location: [
        {
          uniqid: 'aa8',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Route in',
              startDate: '2022-11-15T00:10:00.000Z',
              endDate: '2022-11-15T01:00:00.000Z',
              force: 'F-Red',
              startTime: 1668471000000,
              endTime: 1668474000000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  125.2749,
                  -17.6467
                ],
                [
                  132.72,
                  -14.79
                ],
                [
                  140.44,
                  -12.66
                ],
                [
                  147.45,
                  -10.25
                ],
                [
                  147.5097,
                  -9.88
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9a',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Flight Box',
              startDate: '2022-11-15T01:00:00.000Z',
              endDate: '2022-11-15T01:50:00.000Z',
              force: 'F-Red',
              startTime: 1668474000000,
              endTime: 1668477000000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    145.1244671906956,
                    -7.506769661073324
                  ],
                  [
                    145.1244671906956,
                    -12.23620394136901
                  ],
                  [
                    149.92948214888057,
                    -12.23620394136901
                  ],
                  [
                    149.92948214888057,
                    -7.506769661073324
                  ],
                  [
                    145.1244671906956,
                    -7.506769661073324
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9b',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Target Area',
              startDate: '2022-11-15T01:50:00.000Z',
              endDate: '2022-11-15T04:00:00.000Z',
              force: 'F-Red',
              startTime: 1668477000000,
              endTime: 1668484800000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    143.49503928774186,
                    -5.86231276762047
                  ],
                  [
                    143.49503928774186,
                    -13.84898279563646
                  ],
                  [
                    151.62310435478463,
                    -13.84898279563646
                  ],
                  [
                    151.62310435478463,
                    -5.86231276762047
                  ],
                  [
                    143.49503928774186,
                    -5.86231276762047
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'a10',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Route out',
              startDate: '2022-11-15T04:00:00.000Z',
              endDate: '2022-11-15T05:40:00.000Z',
              force: 'F-Red',
              startTime: 1668484800000,
              endTime: 1668490800000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  147.5097,
                  -9.88
                ],
                [
                  135.98,
                  -13.38
                ],
                [
                  124.9,
                  -17.45
                ],
                [
                  125.2749,
                  -17.6467
                ]
              ]
            }
          }
        }
      ],
      activity: 'Area Reconnaisance',
      ownAssets: [
        {
          asset: 'a114',
          number: 5
        },
        {
          asset: 'a143',
          number: 1
        },
        {
          asset: 'a131',
          number: 5
        }
      ],
      otherAssets: [
        'a168',
        'a197'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_30',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'Comms',
        roleId: 'rkr226f5b',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-27T05:28:26.541Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-33',
      title: 'Order item 33',
      startDate: '2022-11-15T00:30:00.000Z',
      endDate: '2022-11-15T02:50:00.000Z',
      location: [
        {
          uniqid: 'a11',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route in',
              startDate: '2022-11-15T00:30:00.000Z',
              endDate: '2022-11-15T01:20:00.000Z',
              force: 'F-Red',
              startTime: 1668472200000,
              endTime: 1668475200000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  131.5532,
                  -12.4334
                ],
                [
                  137.61,
                  -11.32
                ],
                [
                  143.83,
                  -11.05
                ],
                [
                  149.33,
                  -10.5
                ],
                [
                  149.3719,
                  -10.3237
                ]
              ]
            }
          }
        },
        {
          uniqid: 'a12',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Target Area',
              startDate: '2022-11-15T01:20:00.000Z',
              endDate: '2022-11-15T01:20:00.000Z',
              force: 'F-Red',
              startTime: 1668475200000,
              endTime: 1668475200000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                149.3719,
                -10.3237
              ]
            }
          }
        },
        {
          uniqid: 'a13',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route out',
              startDate: '2022-11-15T01:20:00.000Z',
              endDate: '2022-11-15T02:50:00.000Z',
              force: 'F-Red',
              startTime: 1668475200000,
              endTime: 1668480600000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  149.3719,
                  -10.3237
                ],
                [
                  144.82,
                  -10.66
                ],
                [
                  140.14,
                  -11.13
                ],
                [
                  135.76,
                  -12.3
                ],
                [
                  131.65,
                  -12.2
                ],
                [
                  131.5532,
                  -12.4334
                ]
              ]
            }
          }
        }
      ],
      activity: 'Point Reconnaisance',
      ownAssets: [
        {
          asset: 'a134',
          number: 0
        },
        {
          asset: 'a152',
          number: 4
        },
        {
          asset: 'a131',
          number: 3
        },
        {
          asset: 'a126',
          number: 1
        }
      ],
      otherAssets: [
        'a168',
        'a197',
        'a190'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_33',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Mar-3',
        roleId: 'rk116f52',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-28T13:19:15.896Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-36',
      title: 'Order item 36',
      startDate: '2022-11-15T00:45:00.000Z',
      endDate: '2022-11-15T02:15:00.000Z',
      location: [],
      activity: 'Non spatial cyber',
      ownAssets: [
        {
          asset: 'a176',
          number: 0
        },
        {
          asset: 'a185',
          number: 2
        },
        {
          asset: 'a161',
          number: 0
        }
      ],
      otherAssets: [
        'a111',
        'a157'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_36',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'White Goods',
        roleId: 'rkr226f5c',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-26T02:54:06.041Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-39',
      title: 'Order item 39',
      startDate: '2022-11-15T00:45:00.000Z',
      endDate: '2022-11-15T01:35:00.000Z',
      location: [
        {
          uniqid: 'aa7',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Transit//Route',
              startDate: '2022-11-15T00:45:00.000Z',
              endDate: '2022-11-15T01:35:00.000Z',
              force: 'F-Red',
              startTime: 1668473100000,
              endTime: 1668476100000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  126.579,
                  -14.574
                ],
                [
                  131.3,
                  -12.47
                ],
                [
                  135.24,
                  -10.15
                ],
                [
                  139.47,
                  -8.54
                ],
                [
                  139.3171,
                  -8.0633
                ]
              ]
            }
          }
        }
      ],
      activity: 'Transit',
      ownAssets: [
        {
          asset: 'a148',
          number: 3
        },
        {
          asset: 'a150',
          number: 4
        },
        {
          asset: 'a110',
          number: 4
        },
        {
          asset: 'a146',
          number: 4
        }
      ],
      otherAssets: [
        'a168',
        'a197'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_39',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'White Goods',
        roleId: 'rkr226f5c',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-28T06:12:56.977Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-42',
      title: 'Order item 42',
      startDate: '2022-11-15T00:50:00.000Z',
      endDate: '2022-11-15T03:10:00.000Z',
      location: [],
      activity: 'Non spatial cyber',
      ownAssets: [
        {
          asset: 'a146',
          number: 2
        },
        {
          asset: 'a139',
          number: 2
        },
        {
          asset: 'a149',
          number: 4
        }
      ],
      otherAssets: [
        'a168'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_42',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Mar-2',
        roleId: 'rk116f51',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-26T15:15:48.703Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-45',
      title: 'Order item 45',
      startDate: '2022-11-15T01:10:00.000Z',
      endDate: '2022-11-15T04:00:00.000Z',
      location: [
        {
          uniqid: 'a11',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route in',
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'F-Blue',
              startTime: 1668474600000,
              endTime: 1668477600000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  147.4089,
                  -10.3741
                ],
                [
                  133.02,
                  -13.57
                ],
                [
                  132.9811,
                  -13.2215
                ]
              ]
            }
          }
        },
        {
          uniqid: 'a12',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Target Area',
              startDate: '2022-11-15T02:00:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'F-Blue',
              startTime: 1668477600000,
              endTime: 1668477600000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                132.9811,
                -13.2215
              ]
            }
          }
        },
        {
          uniqid: 'a13',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route out',
              startDate: '2022-11-15T02:00:00.000Z',
              endDate: '2022-11-15T04:00:00.000Z',
              force: 'F-Blue',
              startTime: 1668477600000,
              endTime: 1668484800000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  132.9811,
                  -13.2215
                ],
                [
                  140.36,
                  -11.81
                ],
                [
                  147.1,
                  -10.06
                ],
                [
                  147.4089,
                  -10.3741
                ]
              ]
            }
          }
        }
      ],
      activity: 'Point Reconnaisance',
      ownAssets: [
        {
          asset: 'a171',
          number: 0
        },
        {
          asset: 'a199',
          number: 1
        },
        {
          asset: 'a200',
          number: 2
        },
        {
          asset: 'a173',
          number: 3
        }
      ],
      otherAssets: [
        'a111',
        'a157'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_45',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'Logs',
        roleId: 'rkr226f5a',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-29T14:02:41.219Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-48',
      title: 'Order item 48',
      startDate: '2022-11-15T01:10:00.000Z',
      endDate: '2022-11-15T03:30:00.000Z',
      location: [],
      activity: 'Non spatial cyber',
      ownAssets: [
        {
          asset: 'a119',
          number: 1
        },
        {
          asset: 'a153',
          number: 2
        },
        {
          asset: 'a146',
          number: 0
        },
        {
          asset: 'a154',
          number: 5
        }
      ],
      otherAssets: [
        'a168',
        'a197',
        'a199'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_48',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Logs',
        roleId: 'blue-logs',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-28T18:33:34.526Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-51',
      title: 'Order item 51',
      startDate: '2022-11-15T01:10:00.000Z',
      endDate: '2022-11-15T05:10:00.000Z',
      location: [
        {
          uniqid: 'aa1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Route in',
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'F-Blue',
              startTime: 1668474600000,
              endTime: 1668477600000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.8303,
                  -8.5197
                ],
                [
                  136.74,
                  -9.5
                ],
                [
                  134.5,
                  -11.65
                ],
                [
                  131.54,
                  -12.51
                ],
                [
                  127.87,
                  -14.09
                ],
                [
                  128.2265,
                  -13.8618
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Target Location',
              startDate: '2022-11-15T02:00:00.000Z',
              endDate: '2022-11-15T03:30:00.000Z',
              force: 'F-Blue',
              startTime: 1668477600000,
              endTime: 1668483000000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                128.2265,
                -13.8618
              ]
            }
          }
        },
        {
          uniqid: 'aa3',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Route out',
              startDate: '2022-11-15T03:30:00.000Z',
              endDate: '2022-11-15T05:10:00.000Z',
              force: 'F-Blue',
              startTime: 1668483000000,
              endTime: 1668489000000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  128.2265,
                  -13.8618
                ],
                [
                  134.45,
                  -11.41
                ],
                [
                  140,
                  -8.64
                ],
                [
                  139.8303,
                  -8.5197
                ]
              ]
            }
          }
        }
      ],
      activity: 'Precision Strike',
      ownAssets: [
        {
          asset: 'a197',
          number: 2
        },
        {
          asset: 'a174',
          number: 3
        }
      ],
      otherAssets: [
        'a111',
        'a157',
        'a109'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_51',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'CO',
        roleId: 'rkr226f5e',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-24T04:48:28.624Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-54',
      title: 'Order item 54',
      startDate: '2022-11-15T01:10:00.000Z',
      endDate: '2022-11-15T05:40:00.000Z',
      location: [
        {
          uniqid: 'aa8',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Route in',
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'F-Red',
              startTime: 1668474600000,
              endTime: 1668477600000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  117.0214,
                  -20.7848
                ],
                [
                  124.03,
                  -16.78
                ],
                [
                  132.3,
                  -12.53
                ],
                [
                  138.86,
                  -7.99
                ],
                [
                  139.3171,
                  -8.0633
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9a',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Flight Box',
              startDate: '2022-11-15T02:00:00.000Z',
              endDate: '2022-11-15T04:20:00.000Z',
              force: 'F-Red',
              startTime: 1668477600000,
              endTime: 1668486000000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    136.15868133061835,
                    -4.904274807362774
                  ],
                  [
                    136.15868133061835,
                    -11.19777128728832
                  ],
                  [
                    142.5250770548468,
                    -11.19777128728832
                  ],
                  [
                    142.5250770548468,
                    -4.904274807362774
                  ],
                  [
                    136.15868133061835,
                    -4.904274807362774
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9b',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Target Area',
              startDate: '2022-11-15T04:20:00.000Z',
              endDate: '2022-11-15T04:40:00.000Z',
              force: 'F-Red',
              startTime: 1668486000000,
              endTime: 1668487200000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    137.79355475813242,
                    -6.5468686647126155
                  ],
                  [
                    137.79355475813242,
                    -9.574062978838011
                  ],
                  [
                    140.85209303260868,
                    -9.574062978838011
                  ],
                  [
                    140.85209303260868,
                    -6.5468686647126155
                  ],
                  [
                    137.79355475813242,
                    -6.5468686647126155
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'a10',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Route out',
              startDate: '2022-11-15T04:40:00.000Z',
              endDate: '2022-11-15T05:40:00.000Z',
              force: 'F-Red',
              startTime: 1668487200000,
              endTime: 1668490800000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.3171,
                  -8.0633
                ],
                [
                  116.82,
                  -20.92
                ],
                [
                  117.0214,
                  -20.7848
                ]
              ]
            }
          }
        }
      ],
      activity: 'Area Reconnaisance',
      ownAssets: [
        {
          asset: 'a105',
          number: 4
        },
        {
          asset: 'a121',
          number: 3
        }
      ],
      otherAssets: [
        'a168',
        'a197',
        'a174'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_54',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'White Goods',
        roleId: 'rkr226f5c',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-24T04:47:23.512Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-57',
      title: 'Order item 57',
      startDate: '2022-11-15T01:20:00.000Z',
      endDate: '2022-11-15T05:00:00.000Z',
      location: [
        {
          uniqid: 'aa1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Route in',
              startDate: '2022-11-15T01:20:00.000Z',
              endDate: '2022-11-15T02:10:00.000Z',
              force: 'F-Red',
              startTime: 1668475200000,
              endTime: 1668478200000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  117.0214,
                  -20.7848
                ],
                [
                  124.37,
                  -14.38
                ],
                [
                  130.93,
                  -7.79
                ],
                [
                  137.76,
                  -1.91
                ],
                [
                  137.6034,
                  -1.484
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Target Location',
              startDate: '2022-11-15T02:10:00.000Z',
              endDate: '2022-11-15T05:00:00.000Z',
              force: 'F-Red',
              startTime: 1668478200000,
              endTime: 1668488400000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                137.6034,
                -1.484
              ]
            }
          }
        },
        {
          uniqid: 'aa3',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Precision Strike//Route out',
              startDate: '2022-11-15T05:00:00.000Z',
              endDate: '2022-11-15T05:00:00.000Z',
              force: 'F-Red',
              startTime: 1668488400000,
              endTime: 1668488400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  137.6034,
                  -1.484
                ],
                [
                  127.41,
                  -11.37
                ],
                [
                  116.71,
                  -20.77
                ],
                [
                  117.0214,
                  -20.7848
                ]
              ]
            }
          }
        }
      ],
      activity: 'Precision Strike',
      ownAssets: [
        {
          asset: 'a146',
          number: 0
        },
        {
          asset: 'a153',
          number: 5
        },
        {
          asset: 'a119',
          number: 2
        },
        {
          asset: 'a159',
          number: 1
        }
      ],
      otherAssets: [
        'a168',
        'a197'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_57',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Red Force',
        forceColor: '#F00',
        roleName: 'Furnishing',
        roleId: 'rkr226f5d',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Red'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-28T18:30:19.191Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red Force-60',
      title: 'Order item 60',
      startDate: '2022-11-15T01:30:00.000Z',
      endDate: '2022-11-15T07:50:00.000Z',
      location: [
        {
          uniqid: 'a11',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route in',
              startDate: '2022-11-15T01:30:00.000Z',
              endDate: '2022-11-15T02:20:00.000Z',
              force: 'F-Red',
              startTime: 1668475800000,
              endTime: 1668478800000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  146.1087,
                  -20.2046
                ],
                [
                  145.45,
                  -13.52
                ],
                [
                  144.11,
                  -6.52
                ],
                [
                  144.4062,
                  -6.8859
                ]
              ]
            }
          }
        },
        {
          uniqid: 'a12',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Target Area',
              startDate: '2022-11-15T02:20:00.000Z',
              endDate: '2022-11-15T05:10:00.000Z',
              force: 'F-Red',
              startTime: 1668478800000,
              endTime: 1668489000000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                144.4062,
                -6.8859
              ]
            }
          }
        },
        {
          uniqid: 'a13',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route out',
              startDate: '2022-11-15T05:10:00.000Z',
              endDate: '2022-11-15T07:50:00.000Z',
              force: 'F-Red',
              startTime: 1668489000000,
              endTime: 1668498600000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  144.4062,
                  -6.8859
                ],
                [
                  144.64,
                  -10.01
                ],
                [
                  144.8,
                  -13.22
                ],
                [
                  145.23,
                  -17.15
                ],
                [
                  145.96,
                  -19.79
                ],
                [
                  146.1087,
                  -20.2046
                ]
              ]
            }
          }
        }
      ],
      activity: 'Point Reconnaisance',
      ownAssets: [
        {
          asset: 'a159',
          number: 5
        },
        {
          asset: 'a146',
          number: 2
        },
        {
          asset: 'a116',
          number: 2
        },
        {
          asset: 'a148',
          number: 2
        }
      ],
      otherAssets: [
        'a168'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Red_60',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Air-3',
        roleId: '3rk116f53',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-29T13:57:15.660Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-63',
      title: 'Order item 63',
      startDate: '2022-11-15T01:50:00.000Z',
      endDate: '2022-11-15T02:30:00.000Z',
      location: [],
      activity: 'Non spatial cyber',
      ownAssets: [
        {
          asset: 'a193',
          number: 0
        },
        {
          asset: 'a187',
          number: 4
        },
        {
          asset: 'a191',
          number: 1
        }
      ],
      otherAssets: [
        'a111',
        'a157',
        'a109'
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_63',
    _rev: '2'
  }
]
