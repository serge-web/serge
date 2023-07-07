
import { MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from 'src/custom-types'

export const mockPlanningMessages: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = [
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'MTG 3',
        roleId: 'blue-mtg-3',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Land--Patrol',
      timestamp: '2022-09-22T15:47:41.086Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-6',
      title: 'Order item 6',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T04:35:00.000Z',
      location: [
        {
          uniqid: 'Patrol-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route out',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'f-blue',
              startTime: 1668470700000,
              endTime: 1668473700000,
              geomId: 'Patrol-0',
              name: 'f-blue//3.105222334795144//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  73.7335,
                  43.5688
                ],
                [
                  48.58,
                  35.27
                ],
                [
                  23.8,
                  26.34
                ],
                [
                  23.5101,
                  26.6663
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Patrol Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T02:55:00.000Z',
              force: 'f-blue',
              startTime: 1668473700000,
              endTime: 1668480900000,
              geomId: 'Patrol-1',
              name: 'f-blue//6.210444669590288//Patrol Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    22.78906268214402,
                    27.30518334623726
                  ],
                  [
                    22.78906268214402,
                    26.02381814069331
                  ],
                  [
                    24.22308411185446,
                    26.02381814069331
                  ],
                  [
                    24.22308411185446,
                    27.30518334623726
                  ],
                  [
                    22.78906268214402,
                    27.30518334623726
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route back',
              startDate: '2022-11-15T02:55:00.000Z',
              endDate: '2022-11-15T04:35:00.000Z',
              force: 'f-blue',
              startTime: 1668480900000,
              endTime: 1668486900000,
              geomId: 'Patrol-2',
              name: 'f-blue//9.315667004385432//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  23.5101,
                  26.6663
                ],
                [
                  39.99,
                  31.92
                ],
                [
                  56.71,
                  38.42
                ],
                [
                  73.72,
                  43.21
                ],
                [
                  73.7335,
                  43.5688
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Land-Patrol',
      ownAssets: [
        {
          asset: 'a49',
          number: 5
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        },
        {
          asset: 'a107'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_6',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'Land & Fires',
        roleId: 'red-land',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Maritime--Patrol',
      timestamp: '2022-09-27T19:41:04.380Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-9',
      title: 'Order item 9',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T04:55:00.000Z',
      location: [
        {
          uniqid: 'Patrol-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route out',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'f-red',
              startTime: 1668470700000,
              endTime: 1668473700000,
              geomId: 'Patrol-0',
              name: 'f-red//3.8121305503746044//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  27.75,
                  23.6603
                ],
                [
                  39.25,
                  30.11
                ],
                [
                  49.65,
                  37.47
                ],
                [
                  61.34,
                  44.12
                ],
                [
                  72.31,
                  50.04
                ],
                [
                  72.5266,
                  50.5454
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Patrol Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T03:15:00.000Z',
              force: 'f-red',
              startTime: 1668473700000,
              endTime: 1668482100000,
              geomId: 'Patrol-1',
              name: 'f-red//7.624261100749209//Patrol Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    67.27548585052453,
                    53.55177613180756
                  ],
                  [
                    67.27548585052453,
                    47.33177205640518
                  ],
                  [
                    77.12806529699637,
                    47.33177205640518
                  ],
                  [
                    77.12806529699637,
                    53.55177613180756
                  ],
                  [
                    67.27548585052453,
                    53.55177613180756
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route back',
              startDate: '2022-11-15T03:15:00.000Z',
              endDate: '2022-11-15T04:55:00.000Z',
              force: 'f-red',
              startTime: 1668482100000,
              endTime: 1668488100000,
              geomId: 'Patrol-2',
              name: 'f-red//11.436391651123813//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  72.5266,
                  50.5454
                ],
                [
                  57.61,
                  41.22
                ],
                [
                  42.79,
                  33
                ],
                [
                  27.26,
                  24.06
                ],
                [
                  27.75,
                  23.6603
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Maritime-Patrol',
      ownAssets: [
        {
          asset: 'a141',
          number: 2
        },
        {
          asset: 'a194',
          number: 0
        },
        {
          asset: 'a176',
          number: 1
        },
        {
          asset: 'a187',
          number: 5
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_9',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'AEW 2',
        roleId: 'blue-aew-2',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Maritime--ISTAR',
      timestamp: '2022-09-29T05:18:28.464Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-12',
      title: 'Order item 12',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T05:55:00.000Z',
      location: [
        {
          uniqid: 'ISTAR-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'ISTAR//Route out',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'f-blue',
              startTime: 1668470700000,
              endTime: 1668473700000,
              geomId: 'ISTAR-0',
              name: 'f-blue//3.412459935258994//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  73.7335,
                  43.5688
                ],
                [
                  57.99,
                  35.04
                ],
                [
                  41.33,
                  25.6
                ],
                [
                  24.95,
                  17.44
                ],
                [
                  25.4577,
                  16.9954
                ]
              ]
            }
          }
        },
        {
          uniqid: 'ISTAR-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'ISTAR//Patrol Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T02:55:00.000Z',
              force: 'f-blue',
              startTime: 1668473700000,
              endTime: 1668480900000,
              geomId: 'ISTAR-1',
              name: 'f-blue//6.824919870517988//Patrol Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    25.19838068598645,
                    17.242900747382723
                  ],
                  [
                    25.19838068598645,
                    16.747572041961114
                  ],
                  [
                    25.716335011928884,
                    16.747572041961114
                  ],
                  [
                    25.716335011928884,
                    17.242900747382723
                  ],
                  [
                    25.19838068598645,
                    17.242900747382723
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'ISTAR-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'ISTAR//Observation Area',
              startDate: '2022-11-15T02:55:00.000Z',
              endDate: '2022-11-15T03:15:00.000Z',
              force: 'f-blue',
              startTime: 1668480900000,
              endTime: 1668482100000,
              geomId: 'ISTAR-2',
              name: 'f-blue//10.237379805776982//Observation Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    23.61337108593522,
                    18.73376744444559
                  ],
                  [
                    23.61337108593522,
                    15.240744446564971
                  ],
                  [
                    27.267975208020083,
                    15.240744446564971
                  ],
                  [
                    27.267975208020083,
                    18.73376744444559
                  ],
                  [
                    23.61337108593522,
                    18.73376744444559
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'ISTAR-3',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'ISTAR//Route back',
              startDate: '2022-11-15T03:15:00.000Z',
              endDate: '2022-11-15T05:55:00.000Z',
              force: 'f-blue',
              startTime: 1668482100000,
              endTime: 1668491700000,
              geomId: 'ISTAR-3',
              name: 'f-blue//13.649839741035976//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  25.4577,
                  16.9954
                ],
                [
                  41.69,
                  26.3
                ],
                [
                  58.06,
                  34.74
                ],
                [
                  73.7,
                  43.46
                ],
                [
                  73.7335,
                  43.5688
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Maritime-ISTAR',
      ownAssets: [
        {
          asset: 'a87',
          number: 1
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_12',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'AEW 2',
        roleId: 'blue-aew-2',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Air--Standard',
      timestamp: '2022-09-26T20:39:53.339Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-15',
      title: 'Order item 15',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T05:35:00.000Z',
      location: [
        {
          uniqid: 'Suppression of Air Defences (SEAD)-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Suppression of Air Defences (SEAD)//Route out',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'f-blue',
              startTime: 1668470700000,
              endTime: 1668473700000,
              geomId: 'Suppression of Air Defences (SEAD)-0',
              name: 'f-blue//6.906210489443765//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  34.5795,
                  38.5097
                ],
                [
                  54.39,
                  21.44
                ],
                [
                  74.51,
                  3.68
                ],
                [
                  74.3035,
                  3.7946
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Suppression of Air Defences (SEAD)-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Suppression of Air Defences (SEAD)//SEAD Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T03:05:00.000Z',
              force: 'f-blue',
              startTime: 1668473700000,
              endTime: 1668481500000,
              geomId: 'Suppression of Air Defences (SEAD)-1',
              name: 'f-blue//13.81242097888753//SEAD Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    70.58881724690697,
                    7.469799355662781
                  ],
                  [
                    70.58881724690697,
                    0.10363757236208751
                  ],
                  [
                    77.98662053971228,
                    0.10363757236208751
                  ],
                  [
                    77.98662053971228,
                    7.469799355662781
                  ],
                  [
                    70.58881724690697,
                    7.469799355662781
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Suppression of Air Defences (SEAD)-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Suppression of Air Defences (SEAD)//Route back',
              startDate: '2022-11-15T03:05:00.000Z',
              endDate: '2022-11-15T05:35:00.000Z',
              force: 'f-blue',
              startTime: 1668481500000,
              endTime: 1668490500000,
              geomId: 'Suppression of Air Defences (SEAD)-2',
              name: 'f-blue//20.718631468331296//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  74.3035,
                  3.7946
                ],
                [
                  61.54,
                  15.66
                ],
                [
                  47.82,
                  26.56
                ],
                [
                  34.38,
                  38.74
                ],
                [
                  34.5795,
                  38.5097
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Air-Suppression of Air Defences (SEAD)',
      ownAssets: [
        {
          asset: 'a88',
          number: 1
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_15',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'MTG 3',
        roleId: 'blue-mtg-3',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Air--TST',
      timestamp: '2022-09-29T01:45:19.005Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-18',
      title: 'Order item 18',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T03:25:00.000Z',
      location: [
        {
          uniqid: 'Time Sensitive Targeting (TST)-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Time Sensitive Targeting (TST)//Route out',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'f-blue',
              startTime: 1668470700000,
              endTime: 1668473700000,
              geomId: 'Time Sensitive Targeting (TST)-0',
              name: 'f-blue//4.293382212938013//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  51.9965,
                  45.7005
                ],
                [
                  39.99,
                  34.35
                ],
                [
                  27.33,
                  23.35
                ],
                [
                  27.581,
                  23.1017
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Time Sensitive Targeting (TST)-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Time Sensitive Targeting (TST)//TST Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T01:05:00.000Z',
              force: 'f-blue',
              startTime: 1668473700000,
              endTime: 1668474300000,
              geomId: 'Time Sensitive Targeting (TST)-1',
              name: 'f-blue//8.586764425876027//TST Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    25.402830519628,
                    25.06001860913663
                  ],
                  [
                    25.402830519628,
                    21.114362297187355
                  ],
                  [
                    29.696100406314063,
                    21.114362297187355
                  ],
                  [
                    29.696100406314063,
                    25.06001860913663
                  ],
                  [
                    25.402830519628,
                    25.06001860913663
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Time Sensitive Targeting (TST)-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Time Sensitive Targeting (TST)//Route back',
              startDate: '2022-11-15T01:05:00.000Z',
              endDate: '2022-11-15T03:25:00.000Z',
              force: 'f-blue',
              startTime: 1668474300000,
              endTime: 1668482700000,
              geomId: 'Time Sensitive Targeting (TST)-2',
              name: 'f-blue//12.88014663881404//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  27.581,
                  23.1017
                ],
                [
                  39.96,
                  34.38
                ],
                [
                  51.69,
                  46.01
                ],
                [
                  51.9965,
                  45.7005
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Air-Time Sensitive Targeting (TST)',
      ownAssets: [
        {
          asset: 'a46',
          number: 4
        },
        {
          asset: 'a55',
          number: 3
        },
        {
          asset: 'a91',
          number: 4
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_18',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'Sub-Surface',
        roleId: 'blue-sub',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Maritime--MineLaying',
      timestamp: '2022-09-27T12:34:45.461Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-21',
      title: 'Order item 21',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T06:55:00.000Z',
      location: [
        {
          uniqid: 'Mine Laying-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Mine Laying//Route out',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'f-blue',
              startTime: 1668470700000,
              endTime: 1668473700000,
              geomId: 'Mine Laying-0',
              name: 'f-blue//5.573975105719001//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  48.344,
                  31.3463
                ],
                [
                  55.19,
                  27.59
                ],
                [
                  62.1,
                  23.89
                ],
                [
                  69.3,
                  20.48
                ],
                [
                  69.5602,
                  20.2184
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Mine Laying-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Mine Laying//Mine Area',
              startDate: '2022-11-15T00:55:00.000Z',
              endDate: '2022-11-15T04:05:00.000Z',
              force: 'f-blue',
              startTime: 1668473700000,
              endTime: 1668485100000,
              geomId: 'Mine Laying-1',
              name: 'f-blue//11.147950211438001//Mine Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    68.6757545623389,
                    21.041663960394256
                  ],
                  [
                    68.6757545623389,
                    19.39075516256376
                  ],
                  [
                    70.43530903362823,
                    19.39075516256376
                  ],
                  [
                    70.43530903362823,
                    21.041663960394256
                  ],
                  [
                    68.6757545623389,
                    21.041663960394256
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Mine Laying-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Mine Laying//Route back',
              startDate: '2022-11-15T04:05:00.000Z',
              endDate: '2022-11-15T06:55:00.000Z',
              force: 'f-blue',
              startTime: 1668485100000,
              endTime: 1668495300000,
              geomId: 'Mine Laying-2',
              name: 'f-blue//16.721925317157//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  69.5602,
                  20.2184
                ],
                [
                  47.99,
                  31.38
                ],
                [
                  48.344,
                  31.3463
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Maritime-Mine Laying',
      ownAssets: [
        {
          asset: 'a58',
          number: 3
        },
        {
          asset: 'a52',
          number: 0
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_21',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'MTG 2',
        roleId: 'blue-mtg-2',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Maritime--Standard',
      timestamp: '2022-09-22T05:08:12.707Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-24',
      title: 'Order item 24',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T00:55:00.000Z',
      location: [
        {
          uniqid: 'SAM MEZ-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'SAM MEZ//SAM MEZ Location',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'f-blue',
              startTime: 1668470700000,
              endTime: 1668473700000,
              geomId: 'SAM MEZ-0',
              name: 'f-blue//5.747989167804917//SAM MEZ Location'
            },
            geometry: {
              type: 'Point',
              coordinates: [
                67.6098,
                24.7249
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Maritime-SAM MEZ',
      ownAssets: [
        {
          asset: 'a25',
          number: 0
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        },
        {
          asset: 'a107'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_24',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'Land & Fires',
        roleId: 'red-land',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Land--Transit',
      timestamp: '2022-09-29T19:25:40.744Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-27',
      title: 'Order item 27',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T00:55:00.000Z',
      location: [
        {
          uniqid: 'Transit-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Transit//Route out',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'f-red',
              startTime: 1668470700000,
              endTime: 1668473700000,
              geomId: 'Transit-0',
              name: 'f-red//4.815424399195763//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  70.7274,
                  25.5667
                ],
                [
                  34.53,
                  40.69
                ],
                [
                  34.4164,
                  41.0459
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Land-Transit',
      ownAssets: [
        {
          asset: 'a146',
          number: 4
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        },
        {
          asset: 'a96'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_27',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'MAR',
        roleId: 'red-mar',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Maritime--MineLaying',
      timestamp: '2022-09-25T07:27:09.572Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-30',
      title: 'Order item 30',
      startDate: '2022-11-15T00:10:00.000Z',
      endDate: '2022-11-15T04:00:00.000Z',
      location: [
        {
          uniqid: 'Mine Laying-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Mine Laying//Route out',
              startDate: '2022-11-15T00:10:00.000Z',
              endDate: '2022-11-15T01:00:00.000Z',
              force: 'f-red',
              startTime: 1668471000000,
              endTime: 1668474000000,
              geomId: 'Mine Laying-0',
              name: 'f-red//2.7762807999097276//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  80.6025,
                  15.0499
                ],
                [
                  63.77,
                  28.33
                ],
                [
                  47.22,
                  40.89
                ],
                [
                  29.96,
                  53.73
                ],
                [
                  30.0136,
                  54.109
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Mine Laying-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Mine Laying//Mine Area',
              startDate: '2022-11-15T01:00:00.000Z',
              endDate: '2022-11-15T01:50:00.000Z',
              force: 'f-red',
              startTime: 1668474000000,
              endTime: 1668477000000,
              geomId: 'Mine Laying-1',
              name: 'f-red//5.552561599819455//Mine Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    25.737349478660413,
                    56.402214288214
                  ],
                  [
                    25.737349478660413,
                    51.68036960902181
                  ],
                  [
                    33.82920108746788,
                    51.68036960902181
                  ],
                  [
                    33.82920108746788,
                    56.402214288214
                  ],
                  [
                    25.737349478660413,
                    56.402214288214
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Mine Laying-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Mine Laying//Route back',
              startDate: '2022-11-15T01:50:00.000Z',
              endDate: '2022-11-15T04:00:00.000Z',
              force: 'f-red',
              startTime: 1668477000000,
              endTime: 1668484800000,
              geomId: 'Mine Laying-2',
              name: 'f-red//8.328842399729183//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  30.0136,
                  54.109
                ],
                [
                  43.03,
                  44.25
                ],
                [
                  54.83,
                  34.18
                ],
                [
                  67.92,
                  24.39
                ],
                [
                  80.29,
                  14.88
                ],
                [
                  80.6025,
                  15.0499
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Maritime-Mine Laying',
      ownAssets: [
        {
          asset: 'a122',
          number: 0
        },
        {
          asset: 'a170',
          number: 0
        },
        {
          asset: 'a147',
          number: 5
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        },
        {
          asset: 'a96'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_30',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'Air & AD',
        roleId: 'red-air',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Land--MissileStrike',
      timestamp: '2022-09-25T09:12:39.190Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-33',
      title: 'Order item 33',
      startDate: '2022-11-15T00:30:00.000Z',
      endDate: '2022-11-15T00:50:00.000Z',
      location: [],
      activity: 'f-red-Land-Strike',
      ownAssets: [
        {
          asset: 'a152',
          number: 3
        },
        {
          asset: 'a185',
          number: 2
        },
        {
          asset: 'a148',
          number: 2
        },
        {
          asset: 'a139',
          number: 4
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        },
        {
          asset: 'a96'
        },
        {
          asset: 'a8'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_33',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'MTG 3',
        roleId: 'blue-mtg-3',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Maritime--Standard',
      timestamp: '2022-09-21T16:42:09.598Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-36',
      title: 'Order item 36',
      startDate: '2022-11-15T00:45:00.000Z',
      endDate: '2022-11-15T02:45:00.000Z',
      location: [
        {
          uniqid: 'Resupply-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Resupply//Route out',
              startDate: '2022-11-15T00:45:00.000Z',
              endDate: '2022-11-15T01:35:00.000Z',
              force: 'f-blue',
              startTime: 1668473100000,
              endTime: 1668476100000,
              geomId: 'Resupply-0',
              name: 'f-blue//5.378257109216065//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  65.7332,
                  36.4001
                ],
                [
                  67.96,
                  28.43
                ],
                [
                  71.03,
                  19.31
                ],
                [
                  73.39,
                  11.47
                ],
                [
                  76.03,
                  2.91
                ],
                [
                  75.673,
                  2.8865
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Resupply-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Resupply//Resupply at this location',
              startDate: '2022-11-15T01:35:00.000Z',
              endDate: '2022-11-15T02:35:00.000Z',
              force: 'f-blue',
              startTime: 1668476100000,
              endTime: 1668479700000,
              geomId: 'Resupply-1',
              name: 'f-blue//10.75651421843213//Resupply at this location'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    72.81925408663112,
                    5.722448169563038
                  ],
                  [
                    72.81925408663112,
                    0.043440309434564055
                  ],
                  [
                    78.51251363389763,
                    0.043440309434564055
                  ],
                  [
                    78.51251363389763,
                    5.722448169563038
                  ],
                  [
                    72.81925408663112,
                    5.722448169563038
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Resupply-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Resupply//Route back',
              startDate: '2022-11-15T02:35:00.000Z',
              endDate: '2022-11-15T02:45:00.000Z',
              force: 'f-blue',
              startTime: 1668479700000,
              endTime: 1668480300000,
              geomId: 'Resupply-2',
              name: 'f-blue//16.134771327648195//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  75.673,
                  2.8865
                ],
                [
                  72.14,
                  13.61
                ],
                [
                  68.86,
                  25.59
                ],
                [
                  65.87,
                  36.86
                ],
                [
                  65.7332,
                  36.4001
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Maritime-Resupply',
      ownAssets: [
        {
          asset: 'a39',
          number: 4
        },
        {
          asset: 'a57',
          number: 0
        },
        {
          asset: 'a5',
          number: 2
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_36',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'Direct Action',
        roleId: 'red-direct',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Maritime--Standard',
      timestamp: '2022-09-22T13:55:40.797Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-39',
      title: 'Order item 39',
      startDate: '2022-11-15T00:45:00.000Z',
      endDate: '2022-11-15T03:55:00.000Z',
      location: [
        {
          uniqid: 'FIAC EZ-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'FIAC EZ//Route out',
              startDate: '2022-11-15T00:45:00.000Z',
              endDate: '2022-11-15T01:35:00.000Z',
              force: 'f-red',
              startTime: 1668473100000,
              endTime: 1668476100000,
              geomId: 'FIAC EZ-0',
              name: 'f-red//5.019377017772058//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  71.2747,
                  14.6686
                ],
                [
                  70.17,
                  23.74
                ],
                [
                  68.29,
                  33.03
                ],
                [
                  66.69,
                  41.61
                ],
                [
                  66.5401,
                  42.0968
                ]
              ]
            }
          }
        },
        {
          uniqid: 'FIAC EZ-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'FIAC EZ//FIAC EZ Location',
              startDate: '2022-11-15T01:35:00.000Z',
              endDate: '2022-11-15T03:25:00.000Z',
              force: 'f-red',
              startTime: 1668476100000,
              endTime: 1668482700000,
              geomId: 'FIAC EZ-1',
              name: 'f-red//10.038754035544116//FIAC EZ Location'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    65.82549410874967,
                    42.6204420383667
                  ],
                  [
                    65.82549410874967,
                    41.56879728374625
                  ],
                  [
                    67.24295310658444,
                    41.56879728374625
                  ],
                  [
                    67.24295310658444,
                    42.6204420383667
                  ],
                  [
                    65.82549410874967,
                    42.6204420383667
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'FIAC EZ-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'FIAC EZ//Route back',
              startDate: '2022-11-15T03:25:00.000Z',
              endDate: '2022-11-15T03:55:00.000Z',
              force: 'f-red',
              startTime: 1668482700000,
              endTime: 1668484500000,
              geomId: 'FIAC EZ-2',
              name: 'f-red//15.058131053316174//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  66.5401,
                  42.0968
                ],
                [
                  67.33,
                  34.74
                ],
                [
                  68.99,
                  28.26
                ],
                [
                  69.94,
                  21.06
                ],
                [
                  71.16,
                  15.14
                ],
                [
                  71.2747,
                  14.6686
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Maritime-FIAC EZ',
      ownAssets: [
        {
          asset: 'a178',
          number: 0
        },
        {
          asset: 'a182',
          number: 0
        },
        {
          asset: 'a115',
          number: 4
        },
        {
          asset: 'a174',
          number: 5
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        },
        {
          asset: 'a96'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_39',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'Direct Action',
        roleId: 'red-direct',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Air--Patrol',
      timestamp: '2022-09-28T00:53:12.787Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-42',
      title: 'Order item 42',
      startDate: '2022-11-15T00:50:00.000Z',
      endDate: '2022-11-15T04:30:00.000Z',
      location: [
        {
          uniqid: 'Patrol-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route out',
              startDate: '2022-11-15T00:50:00.000Z',
              endDate: '2022-11-15T01:40:00.000Z',
              force: 'f-red',
              startTime: 1668473400000,
              endTime: 1668476400000,
              geomId: 'Patrol-0',
              name: 'f-red//3.55391809566936//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  66.8179,
                  13.6797
                ],
                [
                  68.3,
                  25.73
                ],
                [
                  71.04,
                  38.03
                ],
                [
                  72.07,
                  50.62
                ],
                [
                  72.5266,
                  50.5454
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Patrol Area',
              startDate: '2022-11-15T01:40:00.000Z',
              endDate: '2022-11-15T02:30:00.000Z',
              force: 'f-red',
              startTime: 1668476400000,
              endTime: 1668479400000,
              geomId: 'Patrol-1',
              name: 'f-red//7.10783619133872//Patrol Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    67.85637764726746,
                    53.24975172108632
                  ],
                  [
                    67.85637764726746,
                    47.674900680143864
                  ],
                  [
                    76.67559980865279,
                    47.674900680143864
                  ],
                  [
                    76.67559980865279,
                    53.24975172108632
                  ],
                  [
                    67.85637764726746,
                    53.24975172108632
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route back',
              startDate: '2022-11-15T02:30:00.000Z',
              endDate: '2022-11-15T04:30:00.000Z',
              force: 'f-red',
              startTime: 1668479400000,
              endTime: 1668486600000,
              geomId: 'Patrol-2',
              name: 'f-red//10.66175428700808//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  72.5266,
                  50.5454
                ],
                [
                  69.67,
                  31.98
                ],
                [
                  67.3,
                  13.91
                ],
                [
                  66.8179,
                  13.6797
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Air-Patrol',
      ownAssets: [
        {
          asset: 'a174',
          number: 5
        },
        {
          asset: 'a163',
          number: 5
        },
        {
          asset: 'a179',
          number: 2
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_42',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'MTG 2',
        roleId: 'blue-mtg-2',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Air--Standard',
      timestamp: '2022-09-29T17:34:45.567Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-45',
      title: 'Order item 45',
      startDate: '2022-11-15T01:10:00.000Z',
      endDate: '2022-11-15T04:00:00.000Z',
      location: [
        {
          uniqid: 'Offensive Counter Air-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Offensive Counter Air//Route out',
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'f-blue',
              startTime: 1668474600000,
              endTime: 1668477600000,
              geomId: 'Offensive Counter Air-0',
              name: 'f-blue//5.981880342907971//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  49.9002,
                  49.3109
                ],
                [
                  49.99,
                  21.04
                ],
                [
                  49.9528,
                  21.3991
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Offensive Counter Air-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Offensive Counter Air//OCA Area',
              startDate: '2022-11-15T02:00:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'f-blue',
              startTime: 1668477600000,
              endTime: 1668477600000,
              geomId: 'Offensive Counter Air-1',
              name: 'f-blue//11.963760685815942//OCA Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    48.94448682229479,
                    22.32880694375131
                  ],
                  [
                    48.94448682229479,
                    20.463441478454907
                  ],
                  [
                    50.94832991602052,
                    20.463441478454907
                  ],
                  [
                    50.94832991602052,
                    22.32880694375131
                  ],
                  [
                    48.94448682229479,
                    22.32880694375131
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Offensive Counter Air-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Offensive Counter Air//Route back',
              startDate: '2022-11-15T02:00:00.000Z',
              endDate: '2022-11-15T04:00:00.000Z',
              force: 'f-blue',
              startTime: 1668477600000,
              endTime: 1668484800000,
              geomId: 'Offensive Counter Air-2',
              name: 'f-blue//17.945641028723912//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  49.9528,
                  21.3991
                ],
                [
                  50.1,
                  35.33
                ],
                [
                  49.59,
                  49.61
                ],
                [
                  49.9002,
                  49.3109
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Air-Offensive Counter Air',
      ownAssets: [
        {
          asset: 'a26',
          number: 3
        },
        {
          asset: 'a97',
          number: 2
        },
        {
          asset: 'a99',
          number: 2
        },
        {
          asset: 'a31',
          number: 4
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_45',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'MAR',
        roleId: 'red-mar',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Land--Transit',
      timestamp: '2022-09-27T16:00:19.138Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-48',
      title: 'Order item 48',
      startDate: '2022-11-15T01:10:00.000Z',
      endDate: '2022-11-15T02:00:00.000Z',
      location: [
        {
          uniqid: 'Transit-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Transit//Route out',
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'f-red',
              startTime: 1668474600000,
              endTime: 1668477600000,
              geomId: 'Transit-0',
              name: 'f-red//2.303263759415131//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  60.7398,
                  5.7535
                ],
                [
                  62.85,
                  13.9
                ],
                [
                  64.82,
                  22.92
                ],
                [
                  66.07,
                  31.21
                ],
                [
                  67.61,
                  38.79
                ],
                [
                  67.9125,
                  39.108
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Land-Transit',
      ownAssets: [
        {
          asset: 'a131',
          number: 5
        },
        {
          asset: 'a188',
          number: 1
        },
        {
          asset: 'a175',
          number: 2
        },
        {
          asset: 'a189',
          number: 1
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        },
        {
          asset: 'a96'
        },
        {
          asset: 'a8'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_48',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'AEW 2',
        roleId: 'blue-aew-2',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Maritime--Standard',
      timestamp: '2022-09-21T20:09:53.499Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-51',
      title: 'Order item 51',
      startDate: '2022-11-15T01:10:00.000Z',
      endDate: '2022-11-15T02:00:00.000Z',
      location: [
        {
          uniqid: 'BMD MEZ-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'BMD MEZ//BMD MEZ Location',
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'f-blue',
              startTime: 1668474600000,
              endTime: 1668477600000,
              geomId: 'BMD MEZ-0',
              name: 'f-blue//2.5180683452636003//BMD MEZ Location'
            },
            geometry: {
              type: 'Point',
              coordinates: [
                27.2049,
                21.4301
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Maritime-BMD MEZ',
      ownAssets: [
        {
          asset: 'a89',
          number: 2
        },
        {
          asset: 'a34',
          number: 1
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        },
        {
          asset: 'a107'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_51',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'CO',
        roleId: 'red-CO',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Air--TST',
      timestamp: '2022-09-28T22:03:28.651Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-54',
      title: 'Order item 54',
      startDate: '2022-11-15T01:10:00.000Z',
      endDate: '2022-11-15T04:40:00.000Z',
      location: [
        {
          uniqid: 'Time Sensitive Targeting (TST)-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Time Sensitive Targeting (TST)//Route out',
              startDate: '2022-11-15T01:10:00.000Z',
              endDate: '2022-11-15T02:00:00.000Z',
              force: 'f-red',
              startTime: 1668474600000,
              endTime: 1668477600000,
              geomId: 'Time Sensitive Targeting (TST)-0',
              name: 'f-red//6.6262941003078595//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  85.8061,
                  11.1361
                ],
                [
                  76.94,
                  20.38
                ],
                [
                  69.33,
                  29.88
                ],
                [
                  60,
                  39.66
                ],
                [
                  60.4596,
                  39.5973
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Time Sensitive Targeting (TST)-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Time Sensitive Targeting (TST)//TST Area',
              startDate: '2022-11-15T02:00:00.000Z',
              endDate: '2022-11-15T04:20:00.000Z',
              force: 'f-red',
              startTime: 1668477600000,
              endTime: 1668486000000,
              geomId: 'Time Sensitive Targeting (TST)-1',
              name: 'f-red//13.252588200615719//TST Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    56.17797956454215,
                    42.669092517241396
                  ],
                  [
                    56.17797956454215,
                    36.38192309149725
                  ],
                  [
                    64.3693983260808,
                    36.38192309149725
                  ],
                  [
                    64.3693983260808,
                    42.669092517241396
                  ],
                  [
                    56.17797956454215,
                    42.669092517241396
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Time Sensitive Targeting (TST)-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Time Sensitive Targeting (TST)//Route back',
              startDate: '2022-11-15T04:20:00.000Z',
              endDate: '2022-11-15T04:40:00.000Z',
              force: 'f-red',
              startTime: 1668486000000,
              endTime: 1668487200000,
              geomId: 'Time Sensitive Targeting (TST)-2',
              name: 'f-red//19.87888230092358//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  60.4596,
                  39.5973
                ],
                [
                  72.91,
                  25.55
                ],
                [
                  85.81,
                  10.95
                ],
                [
                  85.8061,
                  11.1361
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Air-Time Sensitive Targeting (TST)',
      ownAssets: [
        {
          asset: 'a107',
          number: 5
        },
        {
          asset: 'a134',
          number: 5
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        },
        {
          asset: 'a96'
        },
        {
          asset: 'a8'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_54',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'Direct Action',
        roleId: 'red-direct',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Land--EWAttack',
      timestamp: '2022-09-23T21:41:04.593Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-57',
      title: 'Order item 57',
      startDate: '2022-11-15T01:20:00.000Z',
      endDate: '2022-11-15T05:00:00.000Z',
      location: [
        {
          uniqid: 'EW Attack-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'EW Attack//Route out',
              startDate: '2022-11-15T01:20:00.000Z',
              endDate: '2022-11-15T02:10:00.000Z',
              force: 'f-red',
              startTime: 1668475200000,
              endTime: 1668478200000,
              geomId: 'EW Attack-0',
              name: 'f-red//4.627941024693428//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  85.8061,
                  11.1361
                ],
                [
                  66.77,
                  17.38
                ],
                [
                  46.94,
                  23.82
                ],
                [
                  27.39,
                  29.55
                ],
                [
                  27.2352,
                  29.9904
                ]
              ]
            }
          }
        },
        {
          uniqid: 'EW Attack-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'EW Attack//EW Area of Effect',
              startDate: '2022-11-15T02:10:00.000Z',
              endDate: '2022-11-15T05:00:00.000Z',
              force: 'f-red',
              startTime: 1668478200000,
              endTime: 1668488400000,
              geomId: 'EW Attack-1',
              name: 'f-red//9.255882049386855//EW Area of Effect'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    23.938017228233633,
                    32.72389366451755
                  ],
                  [
                    23.938017228233633,
                    27.179215678482983
                  ],
                  [
                    30.353191888351674,
                    27.179215678482983
                  ],
                  [
                    30.353191888351674,
                    32.72389366451755
                  ],
                  [
                    23.938017228233633,
                    32.72389366451755
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'EW Attack-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'EW Attack//Route back',
              startDate: '2022-11-15T05:00:00.000Z',
              endDate: '2022-11-15T05:00:00.000Z',
              force: 'f-red',
              startTime: 1668488400000,
              endTime: 1668488400000,
              geomId: 'EW Attack-2',
              name: 'f-red//13.883823074080283//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  27.2352,
                  29.9904
                ],
                [
                  56.62,
                  20.32
                ],
                [
                  85.5,
                  11.14
                ],
                [
                  85.8061,
                  11.1361
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Land-EW Attack',
      ownAssets: [
        {
          asset: 'a175',
          number: 4
        },
        {
          asset: 'a188',
          number: 3
        },
        {
          asset: 'a131',
          number: 0
        },
        {
          asset: 'a199',
          number: 0
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        },
        {
          asset: 'a96'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_57',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'Threat Network',
        roleId: 'red-threat',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Air--Standard',
      timestamp: '2022-09-23T11:02:41.326Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-60',
      title: 'Order item 60',
      startDate: '2022-11-15T01:30:00.000Z',
      endDate: '2022-11-15T07:50:00.000Z',
      location: [
        {
          uniqid: 'Offensive Counter Air-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Offensive Counter Air//Route out',
              startDate: '2022-11-15T01:30:00.000Z',
              endDate: '2022-11-15T02:20:00.000Z',
              force: 'f-red',
              startTime: 1668475800000,
              endTime: 1668478800000,
              geomId: 'Offensive Counter Air-0',
              name: 'f-red//6.523009118420305//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  74.3035,
                  3.7946
                ],
                [
                  54.63,
                  21.17
                ],
                [
                  34.28,
                  38.86
                ],
                [
                  34.5795,
                  38.5097
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Offensive Counter Air-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Offensive Counter Air//OCA Area',
              startDate: '2022-11-15T02:20:00.000Z',
              endDate: '2022-11-15T05:10:00.000Z',
              force: 'f-red',
              startTime: 1668478800000,
              endTime: 1668489000000,
              geomId: 'Offensive Counter Air-1',
              name: 'f-red//13.04601823684061//OCA Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    30.508209615214312,
                    41.490697568077884
                  ],
                  [
                    30.508209615214312,
                    35.39912652834502
                  ],
                  [
                    38.32028924693916,
                    35.39912652834502
                  ],
                  [
                    38.32028924693916,
                    41.490697568077884
                  ],
                  [
                    30.508209615214312,
                    41.490697568077884
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Offensive Counter Air-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Offensive Counter Air//Route back',
              startDate: '2022-11-15T05:10:00.000Z',
              endDate: '2022-11-15T07:50:00.000Z',
              force: 'f-red',
              startTime: 1668489000000,
              endTime: 1668498600000,
              geomId: 'Offensive Counter Air-2',
              name: 'f-red//19.569027355260914//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  34.5795,
                  38.5097
                ],
                [
                  44.32,
                  30.03
                ],
                [
                  53.98,
                  21.47
                ],
                [
                  63.92,
                  12.19
                ],
                [
                  74.15,
                  4.19
                ],
                [
                  74.3035,
                  3.7946
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Air-Offensive Counter Air',
      ownAssets: [
        {
          asset: 'a199',
          number: 0
        },
        {
          asset: 'a197',
          number: 2
        },
        {
          asset: 'a126',
          number: 0
        },
        {
          asset: 'a179',
          number: 4
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_60',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'AEW 1',
        roleId: 'blue-aew-1',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Other--SOFAttack',
      timestamp: '2022-09-27T14:08:18.849Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-63',
      title: 'Order item 63',
      startDate: '2022-11-15T01:50:00.000Z',
      endDate: '2022-11-15T06:50:00.000Z',
      location: [
        {
          uniqid: 'SOF Activity-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'SOF Activity//Route out',
              startDate: '2022-11-15T01:50:00.000Z',
              endDate: '2022-11-15T02:40:00.000Z',
              force: 'f-blue',
              startTime: 1668477000000,
              endTime: 1668480000000,
              geomId: 'SOF Activity-0',
              name: 'f-blue//2.311498381488491//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  52.2775,
                  43.778
                ],
                [
                  44.78,
                  31.41
                ],
                [
                  36.63,
                  19.39
                ],
                [
                  36.9805,
                  19.0458
                ]
              ]
            }
          }
        },
        {
          uniqid: 'SOF Activity-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'SOF Activity//Activity Location',
              startDate: '2022-11-15T02:40:00.000Z',
              endDate: '2022-11-15T03:00:00.000Z',
              force: 'f-blue',
              startTime: 1668480000000,
              endTime: 1668481200000,
              geomId: 'SOF Activity-1',
              name: 'f-blue//4.622996762976982//Activity Location'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    32.834909204057595,
                    22.821181754393546
                  ],
                  [
                    32.834909204057595,
                    15.182073993649173
                  ],
                  [
                    40.939453201270105,
                    15.182073993649173
                  ],
                  [
                    40.939453201270105,
                    22.821181754393546
                  ],
                  [
                    32.834909204057595,
                    22.821181754393546
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'SOF Activity-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'SOF Activity//Effect Location',
              startDate: '2022-11-15T03:00:00.000Z',
              endDate: '2022-11-15T04:50:00.000Z',
              force: 'f-blue',
              startTime: 1668481200000,
              endTime: 1668487800000,
              geomId: 'SOF Activity-2',
              name: 'f-blue//6.9344951444654725//Effect Location'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    34.935149686400194,
                    20.94482108728698
                  ],
                  [
                    34.935149686400194,
                    17.12477005124668
                  ],
                  [
                    38.979301012401045,
                    17.12477005124668
                  ],
                  [
                    38.979301012401045,
                    20.94482108728698
                  ],
                  [
                    34.935149686400194,
                    20.94482108728698
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'SOF Activity-3',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'SOF Activity//Route back',
              startDate: '2022-11-15T04:50:00.000Z',
              endDate: '2022-11-15T06:50:00.000Z',
              force: 'f-blue',
              startTime: 1668487800000,
              endTime: 1668495000000,
              geomId: 'SOF Activity-3',
              name: 'f-blue//9.245993525953963//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  36.9805,
                  19.0458
                ],
                [
                  44.31,
                  30.95
                ],
                [
                  51.96,
                  44.16
                ],
                [
                  52.2775,
                  43.778
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Other-SOF Activity',
      ownAssets: [
        {
          asset: 'a79',
          number: 3
        },
        {
          asset: 'a63',
          number: 5
        },
        {
          asset: 'a74',
          number: 4
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        },
        {
          asset: 'a189'
        },
        {
          asset: 'a107'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_63',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Red',
        forceColor: '#ff3d43',
        roleName: 'CO',
        roleId: 'red-CO',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-red'
      },
      messageType: 'Air--Patrol',
      timestamp: '2022-09-27T22:57:57.163Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Red-66',
      title: 'Order item 66',
      startDate: '2022-11-15T01:50:00.000Z',
      endDate: '2022-11-15T06:00:00.000Z',
      location: [
        {
          uniqid: 'Patrol-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route out',
              startDate: '2022-11-15T01:50:00.000Z',
              endDate: '2022-11-15T02:40:00.000Z',
              force: 'f-red',
              startTime: 1668477000000,
              endTime: 1668480000000,
              geomId: 'Patrol-0',
              name: 'f-red//6.993408813752467//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  84.1145,
                  10.1282
                ],
                [
                  77.32,
                  30.4
                ],
                [
                  69.93,
                  51.07
                ],
                [
                  69.5398,
                  51.5758
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Patrol Area',
              startDate: '2022-11-15T02:40:00.000Z',
              endDate: '2022-11-15T04:50:00.000Z',
              force: 'f-red',
              startTime: 1668480000000,
              endTime: 1668487800000,
              geomId: 'Patrol-1',
              name: 'f-red//13.986817627504934//Patrol Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    67.86932312505414,
                    52.579204276843654
                  ],
                  [
                    67.86932312505414,
                    50.54971433229363
                  ],
                  [
                    71.13731823289143,
                    50.54971433229363
                  ],
                  [
                    71.13731823289143,
                    52.579204276843654
                  ],
                  [
                    67.86932312505414,
                    52.579204276843654
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route back',
              startDate: '2022-11-15T04:50:00.000Z',
              endDate: '2022-11-15T06:00:00.000Z',
              force: 'f-red',
              startTime: 1668487800000,
              endTime: 1668492000000,
              geomId: 'Patrol-2',
              name: 'f-red//20.9802264412574//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  69.5398,
                  51.5758
                ],
                [
                  83.64,
                  10.24
                ],
                [
                  84.1145,
                  10.1282
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-red-Air-Patrol',
      ownAssets: [
        {
          asset: 'a115',
          number: 1
        },
        {
          asset: 'a181',
          number: 1
        },
        {
          asset: 'a178',
          number: 5
        },
        {
          asset: 'a105',
          number: 1
        }
      ],
      otherAssets: [
        {
          asset: 'a10'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-red_66',
    _rev: '2'
  },
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-planning',
      from: {
        force: 'Blue',
        forceColor: '#3dd0ff',
        roleName: 'MTG 1',
        roleId: 'blue-mtg-1',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'f-blue'
      },
      messageType: 'Land--Patrol',
      timestamp: '2022-09-24T13:31:36.267Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-69',
      title: 'Order item 69',
      startDate: '2022-11-15T02:00:00.000Z',
      endDate: '2022-11-15T07:40:00.000Z',
      location: [
        {
          uniqid: 'Patrol-0',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route out',
              startDate: '2022-11-15T02:00:00.000Z',
              endDate: '2022-11-15T02:50:00.000Z',
              force: 'f-blue',
              startTime: 1668477600000,
              endTime: 1668480600000,
              geomId: 'Patrol-0',
              name: 'f-blue//5.568740415357752//Route out'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  42.2807,
                  30.4085
                ],
                [
                  46.2,
                  25.7
                ],
                [
                  49.6,
                  21.48
                ],
                [
                  49.9528,
                  21.3991
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-1',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Patrol Area',
              startDate: '2022-11-15T02:50:00.000Z',
              endDate: '2022-11-15T04:50:00.000Z',
              force: 'f-blue',
              startTime: 1668480600000,
              endTime: 1668487800000,
              geomId: 'Patrol-1',
              name: 'f-blue//11.137480830715504//Patrol Area'
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [
                    47.30972294959791,
                    23.796959342165355
                  ],
                  [
                    47.30972294959791,
                    18.961170574547136
                  ],
                  [
                    52.50985917082621,
                    18.961170574547136
                  ],
                  [
                    52.50985917082621,
                    23.796959342165355
                  ],
                  [
                    47.30972294959791,
                    23.796959342165355
                  ]
                ]
              ]
            }
          }
        },
        {
          uniqid: 'Patrol-2',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Patrol//Route back',
              startDate: '2022-11-15T04:50:00.000Z',
              endDate: '2022-11-15T07:40:00.000Z',
              force: 'f-blue',
              startTime: 1668487800000,
              endTime: 1668498000000,
              geomId: 'Patrol-2',
              name: 'f-blue//16.706221246073255//Route back'
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  49.9528,
                  21.3991
                ],
                [
                  41.96,
                  30.29
                ],
                [
                  42.2807,
                  30.4085
                ]
              ]
            }
          }
        }
      ],
      activity: 'f-blue-Land-Patrol',
      ownAssets: [
        {
          asset: 'a5',
          number: 0
        },
        {
          asset: 'a57',
          number: 4
        },
        {
          asset: 'a39',
          number: 0
        }
      ],
      otherAssets: [
        {
          asset: 'a109'
        }
      ]
    },
    hasBeenRead: false,
    _id: 'm_f-blue_69',
    _rev: '2'
  }
]
