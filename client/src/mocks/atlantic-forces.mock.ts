import { ForceData } from 'src/custom-types'

export const forces: ForceData[] = [
  {
    color: '#FCFBEE',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'White',
    overview: 'Umpire force.',
    roles: [
      {
        roleId: 'rkrlw6f5f',
        isGameControl: true,
        isInsightViewer: true,
        isObserver: true,
        name: 'Game Control'
      }
    ],
    umpire: true,
    uniqid: 'umpire'
  },
  {
    assets: [
      {
        comprising: [
          {
            condition: 'Full capability',
            contactId: 'C964',
            history: [],
            hosting: [
              {
                condition: 'Full capability',
                contactId: 'C721',
                history: [],
                name: 'Dart 45',
                perceptions: [
                  {
                    by: 'Red',
                    force: 'Blue',
                    name: 'Unknown UAV',
                    typeId: 'Unmanned-Airborne-Vehicle'
                  }
                ],
                plannedTurns: [],
                platformTypeId: 'a10',
                status: {
                  state: 'Landed'
                },
                uniqid: 'a0pra43302'
              },
              {
                condition: 'Full capability',
                contactId: 'C932',
                history: [],
                name: 'Dart 46',
                perceptions: [],
                plannedTurns: [],
                platformTypeId: 'a10',
                status: {
                  state: 'Landed'
                },
                uniqid: 'a0pra17943'
              }
            ],
            name: 'Frigate A',
            perceptions: [
              {
                by: 'Red',
                force: 'Blue',
                name: 'Frigate A Perceived Name'
              }
            ],
            platformTypeId: 'a3',
            uniqid: 'a0prbr6441'
          },
          {
            condition: 'Full capability',
            contactId: 'C653',
            history: [],
            name: 'MCM Delta',
            perceptions: [],
            platformTypeId: 'a7',
            uniqid: 'a0traa6790'
          }
        ],
        condition: 'Full capability',
        contactId: 'C713',
        history: [
          {
            route: ['831896fffffffff'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 0
          },
          {
            route: ['831882fffffffff'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 1
          },
          {
            route: ['8318abfffffffff'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'CTF 511',
        perceptions: [
          {
            by: 'Red',
            force: 'Blue',
            name: 'BRIT',
            typeId: 'task-group'
          }
        ],
        plannedTurns: [
          {
            route: [
              '831810fffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              '831989fffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a11',
        position: '8318adfffffffff',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra5431'
      },
      {
        condition: 'Full capability',
        contactId: 'C043',
        history: [
          {
            route: ['831886fffffffff'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        hosting: [
          {
            condition: 'Full capability',
            contactId: 'C572',
            history: [],
            name: 'Merlin',
            perceptions: [
              {
                by: 'Red',
                force: 'Blue',
                typeId: 'helicopter'
              }
            ],
            plannedTurns: [],
            platformTypeId: 'a8',
            status: {
              state: 'Landed'
            },
            uniqid: 'a0pra11002'
          },
          {
            condition: 'Full capability',
            contactId: 'C591',
            history: [],
            name: 'Dart 42',
            perceptions: [],
            plannedTurns: [],
            platformTypeId: 'a10',
            status: {
              state: 'Landed'
            },
            uniqid: 'a0pra18702'
          }
        ],
        name: 'Frigate',
        perceptions: [
          {
            by: 'Red',
            force: 'Blue',
            name: 'Frigate Perceived Name',
            typeId: 'frigate'
          }
        ],
        plannedTurns: [
          {
            route: [
              '831999fffffffff'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              '831983fffffffff'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a3',
        position: '8318a3fffffffff',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra00001'
      },
      {
        condition: 'Full capability',
        contactId: 'C072',
        history: [],
        name: 'MPA',
        perceptions: [],
        plannedTurns: [],
        platformTypeId: 'a9',
        position: '831976fffffffff',
        status: {
          state: 'Landed'
        },
        uniqid: 'a0pra00002'
      },
      {
        condition: 'Full capability',
        contactId: 'C012',
        history: [
          {
            route: ['831819fffffffff'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Tanker',
        perceptions: [
          {
            by: 'Red',
            force: 'Blue',
            typeId: ''
          }
        ],
        plannedTurns: [
          {
            route: [
              '831803fffffffff'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              '831800fffffffff'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a13',
        position: '83181cfffffffff',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra00003'
      }
    ],
    color: '#00F',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Blue',
    overview: 'Blue force.',
    roles: [
      {
        roleId: 'rk116f5e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      }
    ],
    umpire: false,
    uniqid: 'Blue'
  },
  {
    assets: [
      {
        condition: 'Full capability',
        contactId: 'C065',
        history: [
          {
            route: ['830906fffffffff'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 0
          }
        ],
        name: 'Dhow-A',
        perceptions: [
          {
            by: 'Blue'
          }
        ],
        plannedTurns: [
          {
            route: [
              '831925fffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              '8309a8fffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 4
          }
        ],
        platformTypeId: 'a1',
        position: '830932fffffffff',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000100'
      },
      { 
        condition: 'Full capability',
        contactId: 'C105',
        history: [
          {
            route: [
              '83091cfffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        hosting: [
          {
            condition: 'Full capability',
            contactId: 'C158',
            history: [],
            name: 'Bog Draft',
            perceptions: [],
            plannedTurns: [],
            platformTypeId: 'a4',
            status: {
              state: 'Landed'
            },
            uniqid: 'a0pra153102'
          }
        ],
        name: 'Dhow-B',
        perceptions: [
          {
            by: 'Blue',
            force: 'Green',
            name: 'SHU’AI',
            typeId: 'fishing-vessel'
          }
        ],
        plannedTurns: [
          {
            route: [
              '8309a1fffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 4
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a1',
        position: '830910fffffffff',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000101'
      },
      {
        condition: 'Full capability',
        contactId: 'C008',
        history: [
          {
            route: ['830764fffffffff'],
            status: {
              state: 'Moored'
            },
            turn: 2
          }
        ],
        name: 'Dhow-C',
        perceptions: [],
        plannedTurns: [
          {
            route: [
              '831936fffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              '83076efffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              '83076afffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a1',
        position: '830765fffffffff',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000102'
      },
      {
        condition: 'Full capability',
        contactId: 'C076',
        history: [
          {
            status: {
              state: 'Inactive'
            },
            turn: 2
          }
        ],
        name: 'Missile-A',
        perceptions: [],
        plannedTurns: [],
        platformTypeId: 'a12',
        position: '830744fffffffff',
        status: {
          state: 'Inactive'
        },
        uniqid: 'a0pra000103'
      }
    ],
    color: '#F00',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Red',
    overview: 'Red force.',
    roles: [
      {
        roleId: 'rkr226f5e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      }
    ],
    umpire: false,
    uniqid: 'Red'
  },
  {
    assets: [
      {
        condition: 'Full capability',
        contactId: 'C015',
        history: [
          {
            route: ['83065afffffffff'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Tanker-1',
        perceptions: [
          {
            by: 'Blue',
            force: 'Green',
            name: 'OSAKA',
            typeId: 'merchant-vessel'
          }
        ],
        plannedTurns: [
          {
            route: [
              '831b2afffffffff'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              '831b0dfffffffff'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          }
        ],
        platformTypeId: 'a13',
        position: '831b21fffffffff',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra000200'
      },
      {
        condition: 'Full capability',
        contactId: 'C081',
        history: [
          {
            route: ['831b34fffffffff'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Tanker-2',
        perceptions: [
          {
            by: 'Blue',
            force: 'Green',
            name: 'ARUNA 12',
            typeId: 'merchant-vessel'
          },
          {
            by: 'Red',
            force: 'Green',
            name: 'BARLAY',
            typeId: 'merchant-vessel'
          }
        ],
        plannedTurns: [
          {
            route: [
              '831b04fffffffff'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              '831b00fffffffff'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          }
        ],
        platformTypeId: 'a13',
        position: '831b31fffffffff',
        status: {
          state: 'Moored'
        },
        uniqid: 'a0pra000201'
      },
      {
        condition: 'Full capability',
        contactId: 'C116',
        history: [
          {
            route: ['830659fffffffff'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Fisher-A',
        perceptions: [
          {
            by: 'Blue',
            force: 'Green',
            name: 'JALIBUT',
            typeId: 'merchant-vessel'
          }
        ],
        plannedTurns: [
          {
            route: [
              '83064bfffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 4
          }          
        ],
        platformTypeId: 'a1',
        position: '831b2dfffffffff',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000202'
      },
      {
        condition: 'Full capability',
        contactId: 'C026',
        history: [
          {
            route: ['83064efffffffff'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Fisher-B',
        perceptions: [
          {
            by: 'Blue',
            force: 'Green',
            typeId: 'merchant-vessel'
          }
        ],
        plannedTurns: [
          {
            status: {
              state: 'Fishing'
            },
            turn: 3
          },
          {
            route: [
              '83066bfffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 4
          }
        ],
        platformTypeId: 'a1',
        position: '83064bfffffffff',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000203'
      },
      {
        condition: 'Full capability',
        contactId: 'C115',
        history: [
          {
            route: ['830764fffffffff'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Fisher-C',
        perceptions: [
          {
            by: 'Blue',
            force: 'Green',
            name: 'BOUM 3',
            typeId: 'merchant-vessel'
          },
          {
            by: 'Red',
            force: 'Green',
            name: 'BOUM 3',
            typeId: 'merchant-vessel'
          }
        ],
        plannedTurns: [
          {
            route: [
              '831936fffffffff'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 4
          }
        ],
        platformTypeId: 'a1',
        position: '830761fffffffff',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000204'
      }
    ],
    color: '#0F0',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Green',
    overview: 'Green Shipping',
    roles: [
      {
        roleId: 'rkrlw6f33',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      }
    ],
    umpire: false,
    uniqid: 'Green'
  }
]

export default forces
