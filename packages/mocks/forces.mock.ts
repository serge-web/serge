export const forces = [
  {
    color: '#FCFBEE',
    dirty: false,
    icon: 'default_img/umpireDefault.png',
    name: 'White',
    overview: 'Umpire force.',
    roles: [
      {
        control: true,
        isInsightViewer: true,
        isObserver: true,
        name: 'Game Control',
        password: 'p2311'
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
            position: 'P21',
            status: {
              speedKts: 20,
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
                name: 'NORT',
                type: 'frigate'
              }],
              platformType: 'frigate',
              uniqid: 'a0prbr6441'
            }, 
            {
              condition: 'Full capability',
              contactId: 'C653',
              history: [
              ],
              name: 'MCM Delta',
              perceptions: [{
                by: 'Red',
                force: 'Blue',
                name: 'RICH',
                type: 'frigate'
              }],
              platformType: 'MCMV',
              uniqid: 'a0traa6441'
            }
        ],
        name: 'CTF 511',
        perceptions: [{
          by: 'Red',
          force: 'Blue',
          name: 'NORT',
          type: 'frigate'
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
              'R17',
              'S17'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformType: 'task-group',
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
            position: 'P21',
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
            perceptions: [],
            plannedTurns: [],
            platformType: 'helicopter',
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
            platformType: 'Unmanned-Airborne-Vehicle',
            status: {
              state: 'Landed'
            },
            uniqid: 'a0pra18702'
          }
        ],
        perceptions: [{
          by: 'Red',
          force: 'Blue',
          name: 'NORT',
          type: 'frigate'
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
              'R19',
              'S19'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformType: 'frigate',
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
          {
            position: 'C17',
            status: {
              state: 'Landed'
            },
            turn: 2
          }
        ],
        name: 'MPA',
        perceptions: [],
        plannedTurns: [],
        platformType: 'fixed-wing-aircraft',
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
            position: 'S23',
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
          force: 'Blue',
          type: ''
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
        platformType: 'merchant-vessel',
        position: 'O21',
        route: [
          'P21',
          'O21'
        ],
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra00003'
      }
    ],
    color: '#00F',
    dirty: false,
    icon: 'default_img/umpireDefault.png',
    name: 'Blue',
    overview: 'Blue force.',
    roles: [
      {
        control: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO',
        password: 'p5543'
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
            position: 'N04',
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        locationPending: true,
        name: 'Dhow-A',
        perceptions: [{
          by: 'Blue',
        }],
        plannedTurns: [
          {
            route: [
              'L04'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              'K05'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'J05'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformType: 'fishing-vessel',
        position: 'M04',
        route: [
          'M04'
        ],
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
            position: 'N10',
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        locationPending: true,
        name: 'Dhow-B',
        perceptions: [{
          by: 'Blue',
          force: 'Green',
          name: 'SHU’AI',
          type: 'fishing-vessel'
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
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 6
          },
          {
            route: [
              'J09'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 7
          }
        ],
        platformType: 'fishing-vessel',
        position: 'M10',
        route: [
          'M10'
        ],
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
            position: 'Q18',
            status: {
              state: 'Moored'
            },
            turn: 2
          }
        ],
        locationPending: true,
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
        platformType: 'fishing-vessel',
        position: 'P17',
        route: [
          'P17'
        ],
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
            position: 'Q12',
            status: {
              state: 'Inactive'
            },
            turn: 2
          }
        ],
        locationPending: true,
        name: 'Missile-A',
        perceptions: [],
        plannedTurns: [],
        platformType: 'coastal-radar-site',
        position: 'Q12',
        status: {
          state: 'Inactive'
        },
        uniqid: 'a0pra000103'
      }
    ],
    color: '#F00',
    dirty: false,
    icon: 'default_img/umpireDefault.png',
    name: 'Red',
    overview: 'Red force.',
    roles: [
      {
        control: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO',
        password: 'p3244'
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
            position: 'H00',
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
          type: 'merchant-vessel'
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
        platformType: 'merchant-vessel',
        position: 'H03',
        route: [
          'H00',
          'H01',
          'H02',
          'H03'
        ],
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
            position: 'C00',
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
            type: 'merchant-vessel'
          },
          {
            by: 'Red',
            force: 'Green',
            name: 'BARLAY',
            type: 'merchant-vessel'
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
        platformType: 'merchant-vessel',
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
            position: 'M02',
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
          type: 'merchant-vessel'
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
        platformType: 'fishing-vessel',
        position: 'K03',
        route: [
          'M02',
          'K03'
        ],
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
            position: 'N08',
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
          type: 'merchant-vessel'
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
        platformType: 'fishing-vessel',
        position: 'L09',
        route: [
          'N08',
          'L09'
        ],
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
            position: 'N11',
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
            type: 'merchant-vessel'
          },
          {
            by: 'Red',
            force: 'Green',
            name: 'BOUM 3',
            type: 'merchant-vessel'
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
        platformType: 'fishing-vessel',
        position: 'L10',
        route: [
          'N11',
          'L10'
        ],
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000204'
      }
    ],
    color: '#0F0',
    controlledBy: [
      'umpire'
    ],
    dirty: false,
    icon: 'default_img/umpireDefault.png',
    name: 'Green',
    overview: 'Green Shipping',
    roles: [
      {
        control: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO',
        password: 'P9454'
      }
    ],
    umpire: false,
    uniqid: 'Green'
  }
]

export default forces
