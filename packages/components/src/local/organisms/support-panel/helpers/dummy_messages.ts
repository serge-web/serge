
import { MessagePlanning } from '@serge/custom-types'

export const dummyMessages: MessagePlanning[] = [
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
      title: 'Order item 6 Transit',
      startDate: '2022-11-15T00:00:00.000Z',
      endDate: '2022-11-15T04:30:00.000Z',
      location: [
        {
          uniqid: 'aa4',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Strike//Route in',
              startDate: '2022-11-15T00:00:00.000Z',
              endDate: '2022-11-15T00:50:00.000Z',
              force: 'F-Blue',
              startTime: 1668470400000,
              endTime: 1668473400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.3171,
                  -8.0633
                ],
                [
                  127.86,
                  -14.53
                ],
                [
                  116.77,
                  -21.64
                ],
                [
                  116.4863,
                  -21.3267
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
              startDate: '2022-11-15T00:50:00.000Z',
              endDate: '2022-11-15T02:50:00.000Z',
              force: 'F-Blue',
              startTime: 1668473400000,
              endTime: 1668480600000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    115.80145984954203,
                    -20.68461466370769
                  ],
                  [
                    115.80145984954203,
                    -21.965987864645918
                  ],
                  [
                    117.1771461162646,
                    -21.965987864645918
                  ],
                  [
                    117.1771461162646,
                    -20.68461466370769
                  ],
                  [
                    115.80145984954203,
                    -20.68461466370769
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
              startDate: '2022-11-15T02:50:00.000Z',
              endDate: '2022-11-15T04:30:00.000Z',
              force: 'F-Blue',
              startTime: 1668480600000,
              endTime: 1668486600000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.3171,
                  -8.0633
                ],
                [
                  131.44,
                  -12.85
                ],
                [
                  123.82,
                  -16.41
                ],
                [
                  116.47,
                  -21.68
                ],
                [
                  116.4863,
                  -21.3267
                ]
              ]
            }
          }
        }
      ],
      activity: 'Transit',
      ownAssets: [
        'a179'
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
      title: 'Order item 9 Transit',
      startDate: '2022-11-15T00:00:00.000Z',
      endDate: '2022-11-15T06:40:00.000Z',
      location: [
        {
          uniqid: 'aa8',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Route in',
              startDate: '2022-11-15T00:00:00.000Z',
              endDate: '2022-11-15T00:50:00.000Z',
              force: 'F-Red',
              startTime: 1668470400000,
              endTime: 1668473400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  142.2515,
                  -18.0243
                ],
                [
                  143.46,
                  -15.88
                ],
                [
                  143.58,
                  -12.84
                ],
                [
                  144.98,
                  -10.52
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
          uniqid: 'aa9',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Flight Box',
              startDate: '2022-11-15T00:50:00.000Z',
              endDate: '2022-11-15T03:10:00.000Z',
              force: 'F-Red',
              startTime: 1668473400000,
              endTime: 1668481800000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    142.74777117084554,
                    -5.298967139234306
                  ],
                  [
                    142.74777117084554,
                    -11.532440289640927
                  ],
                  [
                    149.05912379326483,
                    -11.532440289640927
                  ],
                  [
                    149.05912379326483,
                    -5.298967139234306
                  ],
                  [
                    142.74777117084554,
                    -5.298967139234306
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Target Area',
              startDate: '2022-11-15T03:10:00.000Z',
              endDate: '2022-11-15T04:50:00.000Z',
              force: 'F-Red',
              startTime: 1668481800000,
              endTime: 1668487800000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    143.06091629862286,
                    -5.614630087325914
                  ],
                  [
                    143.06091629862286,
                    -11.221597919763349
                  ],
                  [
                    148.7362461871118,
                    -11.221597919763349
                  ],
                  [
                    148.7362461871118,
                    -5.614630087325914
                  ],
                  [
                    143.06091629862286,
                    -5.614630087325914
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
              startDate: '2022-11-15T04:50:00.000Z',
              endDate: '2022-11-15T06:40:00.000Z',
              force: 'F-Red',
              startTime: 1668487800000,
              endTime: 1668494400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  142.2515,
                  -18.0243
                ],
                [
                  143.55,
                  -15.17
                ],
                [
                  144.9,
                  -11.27
                ],
                [
                  145.54,
                  -8.08
                ],
                [
                  145.878,
                  -8.4283
                ]
              ]
            }
          }
        }
      ],
      activity: 'Transit',
      ownAssets: [
        'a128',
        'a157',
        'a147',
        'a153'
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
      title: 'Order item 12 Kinetic',
      startDate: '2022-11-15T00:00:00.000Z',
      endDate: '2022-11-15T00:40:00.000Z',
      location: [],
      activity: 'Kinetic',
      ownAssets: [
        'a196'
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
      title: 'Order item 15 Kinetic',
      startDate: '2022-11-15T00:00:00.000Z',
      endDate: '2022-11-15T05:30:00.000Z',
      location: [
        {
          uniqid: 'a11',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route in',
              startDate: '2022-11-15T00:00:00.000Z',
              endDate: '2022-11-15T00:50:00.000Z',
              force: 'F-Blue',
              startTime: 1668470400000,
              endTime: 1668473400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.8303,
                  -8.5197
                ],
                [
                  134.53,
                  -12.05
                ],
                [
                  129.52,
                  -16.28
                ],
                [
                  129.3162,
                  -16.1699
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
              startDate: '2022-11-15T00:50:00.000Z',
              endDate: '2022-11-15T03:00:00.000Z',
              force: 'F-Blue',
              startTime: 1668473400000,
              endTime: 1668481200000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                129.3162,
                -16.1699
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
              startDate: '2022-11-15T03:00:00.000Z',
              endDate: '2022-11-15T05:30:00.000Z',
              force: 'F-Blue',
              startTime: 1668481200000,
              endTime: 1668490200000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.8303,
                  -8.5197
                ],
                [
                  136.81,
                  -10.77
                ],
                [
                  132.82,
                  -13.99
                ],
                [
                  129.12,
                  -15.93
                ],
                [
                  129.3162,
                  -16.1699
                ]
              ]
            }
          }
        }
      ],
      activity: 'Kinetic',
      ownAssets: [
        'a196'
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
      title: 'Order item 18 Asymmetric',
      startDate: '2022-11-15T00:00:00.000Z',
      endDate: '2022-11-15T00:50:00.000Z',
      location: [
        {
          uniqid: 'aa7',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Transit//Route',
              startDate: '2022-11-15T00:00:00.000Z',
              endDate: '2022-11-15T00:50:00.000Z',
              force: 'F-Blue',
              startTime: 1668470400000,
              endTime: 1668473400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.8303,
                  -8.5197
                ],
                [
                  141.6,
                  -14.63
                ],
                [
                  142.73,
                  -20.41
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
      activity: 'Asymmetric',
      ownAssets: [
        'a179',
        'a185',
        'a197'
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
      title: 'Order item 21 Asymmetric',
      startDate: '2022-11-15T00:00:00.000Z',
      endDate: '2022-11-15T10:00:00.000Z',
      location: [
        {
          uniqid: 'aa8',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Route in',
              startDate: '2022-11-15T00:00:00.000Z',
              endDate: '2022-11-15T00:50:00.000Z',
              force: 'F-Blue',
              startTime: 1668470400000,
              endTime: 1668473400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  138.5853,
                  -6.3233
                ],
                [
                  132.07,
                  -10.56
                ],
                [
                  125.62,
                  -14.74
                ],
                [
                  119.45,
                  -18.64
                ],
                [
                  119.7138,
                  -18.9116
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Flight Box',
              startDate: '2022-11-15T00:50:00.000Z',
              endDate: '2022-11-15T04:00:00.000Z',
              force: 'F-Blue',
              startTime: 1668473400000,
              endTime: 1668484800000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    118.84543534793804,
                    -18.084106397505767
                  ],
                  [
                    118.84543534793804,
                    -19.735018325182658
                  ],
                  [
                    120.5907796757433,
                    -19.735018325182658
                  ],
                  [
                    120.5907796757433,
                    -18.084106397505767
                  ],
                  [
                    118.84543534793804,
                    -18.084106397505767
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'aa9',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Reconnaisance//Target Area',
              startDate: '2022-11-15T04:00:00.000Z',
              endDate: '2022-11-15T06:50:00.000Z',
              force: 'F-Blue',
              startTime: 1668484800000,
              endTime: 1668495000000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    118.7014143356327,
                    -17.94571463432002
                  ],
                  [
                    118.7014143356327,
                    -19.871937080284393
                  ],
                  [
                    120.7379142889207,
                    -19.871937080284393
                  ],
                  [
                    120.7379142889207,
                    -17.94571463432002
                  ],
                  [
                    118.7014143356327,
                    -17.94571463432002
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
              startDate: '2022-11-15T06:50:00.000Z',
              endDate: '2022-11-15T10:00:00.000Z',
              force: 'F-Blue',
              startTime: 1668495000000,
              endTime: 1668506400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  138.5853,
                  -6.3233
                ],
                [
                  134.27,
                  -9.03
                ],
                [
                  128.97,
                  -12.74
                ],
                [
                  123.95,
                  -16.17
                ],
                [
                  119.21,
                  -19.31
                ],
                [
                  119.7138,
                  -18.9116
                ]
              ]
            }
          }
        }
      ],
      activity: 'Asymmetric',
      ownAssets: [
        'a185',
        'a180'
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
      title: 'Order item 24 Kinetic',
      startDate: '2022-11-15T00:00:00.000Z',
      endDate: '2022-11-15T03:40:00.000Z',
      location: [
        {
          uniqid: 'a11',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route in',
              startDate: '2022-11-15T00:00:00.000Z',
              endDate: '2022-11-15T00:50:00.000Z',
              force: 'F-Blue',
              startTime: 1668470400000,
              endTime: 1668473400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  144.648,
                  -9.6247
                ],
                [
                  143.02,
                  -13.57
                ],
                [
                  140.83,
                  -17.08
                ],
                [
                  140.9707,
                  -17.0411
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
              startDate: '2022-11-15T00:50:00.000Z',
              endDate: '2022-11-15T02:30:00.000Z',
              force: 'F-Blue',
              startTime: 1668473400000,
              endTime: 1668479400000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                140.9707,
                -17.0411
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
              startDate: '2022-11-15T02:30:00.000Z',
              endDate: '2022-11-15T03:40:00.000Z',
              force: 'F-Blue',
              startTime: 1668479400000,
              endTime: 1668483600000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  144.648,
                  -9.6247
                ],
                [
                  143.22,
                  -13.68
                ],
                [
                  141.18,
                  -17.35
                ],
                [
                  140.9707,
                  -17.0411
                ]
              ]
            }
          }
        }
      ],
      activity: 'Kinetic',
      ownAssets: [
        'a171'
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
      title: 'Order item 27 Kinetic',
      startDate: '2022-11-15T00:00:00.000Z',
      endDate: '2022-11-15T03:30:00.000Z',
      location: [
        {
          uniqid: 'aa4',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Strike//Route in',
              startDate: '2022-11-15T00:00:00.000Z',
              endDate: '2022-11-15T00:50:00.000Z',
              force: 'F-Red',
              startTime: 1668470400000,
              endTime: 1668473400000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  117.7434,
                  -21.0232
                ],
                [
                  139.43,
                  -8.41
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
          uniqid: 'aa5',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Area Strike//Target Area',
              startDate: '2022-11-15T00:50:00.000Z',
              endDate: '2022-11-15T01:10:00.000Z',
              force: 'F-Red',
              startTime: 1668473400000,
              endTime: 1668474600000
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    135.660795472479,
                    -4.4014498451590764
                  ],
                  [
                    135.660795472479,
                    -11.692166040138547
                  ],
                  [
                    143.03995968857592,
                    -11.692166040138547
                  ],
                  [
                    143.03995968857592,
                    -4.4014498451590764
                  ],
                  [
                    135.660795472479,
                    -4.4014498451590764
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
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T03:30:00.000Z',
              force: 'F-Red',
              startTime: 1668474600000,
              endTime: 1668483000000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  117.7434,
                  -21.0232
                ],
                [
                  125.26,
                  -16.41
                ],
                [
                  131.89,
                  -12.69
                ],
                [
                  138.81,
                  -7.68
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
      activity: 'Kinetic',
      ownAssets: [
        'a130'
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
      title: 'Order item 30 Transit',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T03:15:00.000Z',
      location: [],
      activity: 'Transit',
      ownAssets: [
        'a114',
        'a143',
        'a131'
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
      title: 'Order item 33 Kinetic',
      startDate: '2022-11-15T00:20:00.000Z',
      endDate: '2022-11-15T02:40:00.000Z',
      location: [
        {
          uniqid: 'a11',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Point Reconnaisance//Route in',
              startDate: '2022-11-15T00:20:00.000Z',
              endDate: '2022-11-15T01:10:00.000Z',
              force: 'F-Red',
              startTime: 1668471600000,
              endTime: 1668474600000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  126.8957,
                  -17.0157
                ],
                [
                  134.51,
                  -14.31
                ],
                [
                  142.29,
                  -12.45
                ],
                [
                  149.36,
                  -10.3
                ],
                [
                  149.3998,
                  -10.1238
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
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T01:10:00.000Z',
              force: 'F-Red',
              startTime: 1668474600000,
              endTime: 1668474600000
            },
            geometry: {
              type: 'Point',
              coordinates: [
                149.3998,
                -10.1238
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
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T02:40:00.000Z',
              force: 'F-Red',
              startTime: 1668474600000,
              endTime: 1668480000000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  126.8957,
                  -17.0157
                ],
                [
                  132.42,
                  -15.1
                ],
                [
                  137.83,
                  -13.32
                ],
                [
                  143.52,
                  -12.25
                ],
                [
                  149.5,
                  -9.89
                ],
                [
                  149.3998,
                  -10.1238
                ]
              ]
            }
          }
        }
      ],
      activity: 'Kinetic',
      ownAssets: [
        'a134',
        'a152',
        'a131',
        'a126'
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
  }
]
