import { LaydownTypes } from 'src/config'
import { ForceData } from 'src/custom-types'

export const forces: ForceData[] = [
  {
    color: '#FCFBEE',
    dirty: false,
    iconURL: 'images/default_img/umpireDefault.png',
    name: 'White',
    overview: 'Umpire force.',
    roles: [
      {
        roleId: 'rkrlw6f5f',
        isGameControl: true,
        isInsightViewer: true,
        isRFIManager: true,
        isObserver: true,
        name: 'Game Control'
      }, 
      {
        roleId: 'rkrlasdd5f',
        isGameControl: true,
        isInsightViewer: true,
        isRFIManager: true,
        isObserver: true,
        name: 'RFI Manager'
      }
    ],
    umpire: true,
    uniqid: 'umpire'
  },
  {
    assets: [
      {
        condition: 'Full capability',
        contactId: 'C713',
        history: [
          {
            route: ['R23'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 0
          },
          {
            route: ['P22'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 1
          },
          {
            route: ['P21'],
            status: {
              speedKts: 30,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        comprising: [
          {
            condition: 'Full capability',
            contactId: 'C964',
            history: [
            ],
            name: 'Frigate A',
            perceptions: [{
              by: 'Red',
              force: 'Blue',
              name: 'Frigate A Perceived Name'
            }],
            platformTypeId: 'a3',
            hosting: [
              {
                condition: 'Full capability',
                contactId: 'C721',
                history: [
                ],
                name: 'Dart 45',
                perceptions: [{
                  by: 'Red',
                  force: 'Blue',
                  name: 'Unknown UAV',
                  typeId: 'a10'
                }],
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
                history: [
                ],
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
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            uniqid: 'a0prbr6441'
          },
          {
            condition: 'Full capability',
            contactId: 'C653',
            history: [
            ],
            name: 'MCM Delta',
            perceptions: [],
            platformTypeId: 'a7',
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            uniqid: 'a0traa6790'
          }
        ],
        name: 'CTF 511',
        perceptions: [{
          by: 'Red',
          force: 'Blue',
          name: 'BRIT',
          typeId: 'a11'
        }],
        plannedTurns: [
          {
            route: [
              'Q19',
              'Q18'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'Q17',
              'P16'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a11',
        position: 'P19',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra5431'
      },
      {
        condition: 'Full capability',
        contactId: 'C043',
        history: [
          {
            route: ['P22'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Frigate',
        hosting: [
          {
            condition: 'Full capability',
            contactId: 'C572',
            history: [
            ],
            name: 'Merlin',
            perceptions: [{
              by: 'Red',
              force: 'Blue',
              typeId: 'a8'
            }],
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
            history: [
            ],
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
        perceptions: [{
          by: 'Red',
          force: 'Blue',
          name: 'Frigate Perceived Name',
          typeId: 'a3'
        }],
        plannedTurns: [
          {
            route: [
              'Q21',
              'Q20'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'Q19',
              'P18'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a3',
        position: 'P21',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra00001'
      },
      {
        condition: 'Full capability',
        contactId: 'C072',
        history: [
        ],
        name: 'MPA',
        perceptions: [],
        plannedTurns: [],
        platformTypeId: 'a9',
        position: 'C17',
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
            route: ['S23'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Tanker',
        perceptions: [{
          by: 'Red',
          force: 'Blue'
        }],
        plannedTurns: [
          {
            route: [
              'O20',
              'O19'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'O18',
              'O17'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          },
          {
            route: [
              'N16',
              'M16'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 6
          }
        ],
        position: 'O21',
        platformTypeId: 'a13',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra00003'
      }
    ],
    color: '#00F',
    dirty: false,
    iconURL: 'images/default_img/umpireDefault.png',
    name: 'Blue Force',
    overview: 'Blue force.',
    roles: [
      {
        roleId: 'rkrlw445e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      },
      {
        roleId: 'rkrlw6f5emms',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'Comms'
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
            route: ['M07'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 0
          },
          {
            status: {
              state: 'Moored'
            },
            turn: 1
          },
          {
            route: ['N05', 'N04'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        locationPending: LaydownTypes.ForceLaydown,
        name: 'Dhow-A',
        perceptions: [{
          by: 'Blue'
        }],
        plannedTurns: [
          {
            route: [
              'L04', 'K05'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            status: {
              state: 'Moored'
            },
            turn: 4
          },
          {
            route: [
              'I06'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a1',
        position: 'M04',
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
            route: ['N10'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        locationPending: LaydownTypes.ForceLaydown,
        hosting: [
          {
            condition: 'Full capability',
            contactId: 'C158',
            history: [
            ],
            name: 'Bog Draft',
            perceptions: [],
            plannedTurns: [],
            platformTypeId: 'a4',
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            uniqid: 'a0pra153102'
          }
        ],
        name: 'Dhow-B',
        perceptions: [{
          by: 'Blue',
          force: 'Green',
          name: 'SHU’AI',
          typeId: 'a1'
        }],
        plannedTurns: [
          {
            route: [
              'L09'
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
          },
          {
            route: [
              'K09'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 6
          },
          {
            route: [
              'J09'
            ],
            status: {
              speedKts: 30,
              state: 'Transiting'
            },
            turn: 7
          }
        ],
        platformTypeId: 'a1',
        position: 'M10',
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
            route: ['Q18'],
            status: {
              state: 'Moored'
            },
            turn: 2
          }
        ],
        locationPending: LaydownTypes.ForceLaydown,
        name: 'Dhow-C',
        perceptions: [],
        plannedTurns: [
          {
            route: [
              'P16'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              'O16'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'N15'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformTypeId: 'a1',
        position: 'P17',
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
            route: ['Q12'],
            status: {
              state: 'Inactive'
            },
            turn: 2
          }
        ],
        locationPending: LaydownTypes.ForceLaydown,
        name: 'Missile-A',
        perceptions: [],
        plannedTurns: [],
        platformTypeId: 'a12',
        position: 'Q12',
        status: {
          state: 'Inactive'
        },
        uniqid: 'a0pra000103'
      }
    ],
    color: '#F00',
    dirty: false,
    iconURL: 'images/default_img/umpireDefault.png',
    name: 'Red Force',
    overview: 'Red force.',
    roles: [
      {
        roleId: 'rkrl55f5e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      }, 
      {
        roleId: 'rkrlss55f5e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'Logs'
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
            route: ['H00'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Tanker-1',
        perceptions: [{
          by: 'Blue',
          force: 'Green',
          name: 'OSAKA',
          typeId: 'a13'
        }],
        plannedTurns: [
          {
            route: [
              'I04',
              'I05',
              'I06',
              'I06'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              'I07',
              'I08',
              'I09',
              'I10'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'I11',
              'J11',
              'J12',
              'J13'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          },
          {
            route: [
              'K14',
              'L14',
              'M15',
              'M16'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 6
          },
          {
            route: [
              'M17',
              'M18',
              'N18',
              'N19'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 7
          },
          {
            route: [
              'O20',
              'O21',
              'P21',
              'Q22'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 8
          },
          {
            status: {
              state: 'Moored'
            },
            turn: 9
          },
          {
            status: {
              state: 'Moored'
            },
            turn: 10
          },
          {
            status: {
              state: 'Moored'
            },
            turn: 11
          }
        ],
        platformTypeId: 'a13',
        position: 'H03',
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
            route: ['C00'],
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
            typeId: 'a13'
          },
          {
            by: 'Red',
            force: 'Green',
            name: 'BARLAY',
            typeId: 'a13'
          }],
        plannedTurns: [
          {
            route: [
              'C00',
              'C01',
              'C02',
              'C03'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              'C04',
              'C05',
              'C06',
              'C07'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'D07',
              'E08',
              'F08',
              'G08'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          },
          {
            route: [
              'H08',
              'H09',
              'I09',
              'I10'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 6
          },
          {
            route: [
              'I11',
              'J11',
              'J12',
              'J13'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 7
          },
          {
            route: [
              'K14',
              'L14',
              'M15',
              'M16'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 8
          },
          {
            route: [
              'M17',
              'M18',
              'N18',
              'N19'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 9
          },
          {
            route: [
              'O20',
              'O21',
              'P21',
              'Q22'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 10
          },
          {
            route: [
              'R22',
              'S22',
              'T22',
              'U23'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 11
          }
        ],
        platformTypeId: 'a13',
        position: 'C00',
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
            route: ['M02'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Fisher-A',
        perceptions: [{
          by: 'Blue',
          force: 'Green',
          name: 'JALIBUT',
          typeId: 'a13'
        }],
        plannedTurns: [
          {
            route: [
              'J03',
              'I04'
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
            route: [
              'I05',
              'I06'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 5
          },
          {
            route: [
              'I07',
              'I08'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 6
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 7
          },
          {
            route: [
              'J07',
              'K07'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 8
          },
          {
            route: [
              'L06',
              'M06'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 9
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 10
          },
          {
            route: [
              'M05',
              'M04'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 11
          }
        ],
        platformTypeId: 'a1',
        position: 'K03',
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
            route: ['N08'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Fisher-B',
        perceptions: [{
          by: 'Blue',
          force: 'Green',
          typeId: 'a13'
        }],
        plannedTurns: [
          {
            status: {
              state: 'Fishing'
            },
            turn: 3
          },
          {
            route: [
              'K10',
              'K09'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'K08',
              'K07'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 5
          },
          {
            route: [
              'K06',
              'M06'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 6
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 7
          },
          {
            route: [
              'N06',
              'N07'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 8
          },
          {
            route: [
              'M08',
              'L08'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 9
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 10
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 11
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 12
          }
        ],
        platformTypeId: 'a1',
        position: 'L09',
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
            route: ['N11'],
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
            typeId: 'a13'
          },
          {
            by: 'Red',
            force: 'Green',
            name: 'BOUM 3',
            typeId: 'a13'
          }
        ],
        plannedTurns: [
          {
            route: [
              'K10',
              'J09'
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
            route: [
              'K08',
              'K07'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 5
          },
          {
            route: [
              'K06',
              'M06'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 6
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 7
          },
          {
            route: [
              'N06',
              'N07'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 8
          },
          {
            route: [
              'M08',
              'L08'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 9
          },
          {
            status: {
              state: 'Fishing'
            },
            turn: 10
          },
          {
            route: [
              'M09',
              'N08'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 11
          }
        ],
        platformTypeId: 'a1',
        position: 'N11',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000204'
      }
    ],
    color: '#0F0',
    dirty: false,
    iconURL: 'images/default_img/umpireDefault.png',
    name: 'Green Force',
    overview: 'Green Shipping',
    roles: [
      {
        roleId: 'rkr666f5e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      },
      {
        roleId: 'rkrlss55f5e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'Game Control'
      }
    ],
    umpire: false,
    uniqid: 'Green'
  }
]

export default forces
