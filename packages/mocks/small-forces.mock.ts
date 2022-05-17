import { LaydownTypes } from "@serge/config"
import { ForceData } from "@serge/custom-types"

export const forces: ForceData[] = [
  {
    color: '#FCFBEE',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'White',
    overview: 'Umpire force.',
    roles: [
      {
        roleId: 'rkrbbw6f5e',
        isGameControl: true,
        isInsightViewer: true,
        isRFIManager: false,
        canSubmitPlans: true,
        isObserver: true,
        name: 'Game Control',
      }, 
      {
        roleId: 'rkasdbw6f5e',
        isGameControl: true,
        isInsightViewer: true,
        isRFIManager: true,
        canSubmitPlans: true,
        isObserver: true,
        name: 'RFI Manager',
      }
    ],
    umpire: true,
    uniqid: 'umpire'
  },
  {
    assets: [
      {
        condition: 'Full capability',
        contactId: 'C043',
        history: [
          {
            route: ['K03'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Frigate 2',
        hosting: [],
        perceptions: [{
          by: 'Red',
          force: 'Blue',
          name: 'Frigate Perceived Name',
          type: 'frigate'
        }],
        plannedTurns: [
          {
            route: [
              'M05',
              'M06'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'M07',
              'M08'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformType: 'frigate',
        platformTypeId : 'a3',
        position: 'L04',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra001111'
      },
      {
        condition: 'Full capability',
        contactId: 'C043',
        history: [
          {
            route: ['L03'],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        name: 'Frigate',
        hosting: [],
        perceptions: [{
          by: 'Red',
          force: 'Blue',
          name: 'Frigate Perceived Name',
          type: 'frigate'
        }],
        plannedTurns: [
          {
            route: [
              'L05',
              'L06'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
          {
            route: [
              'L07',
              'L08'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 5
          }
        ],
        platformType: 'frigate',
        platformTypeId : 'a3',
        position: 'L04',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra00001'
      }
    ],
    color: '#00F',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Blue',
    overview: 'Blue force.',
    roles: [
      {
        roleId: 'rkrlbbbf5e',
        isGameControl: false,
        canSubmitPlans: true,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO',
      },
      {
        roleId: 'rkrlwetf5e',
        isGameControl: false,
        canSubmitPlans: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'Logs',
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
            route: [ 'N06', 'M06' ],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 1
          },
          {
            route: ['N05', 'N04'],
            status: {
              speedKts: 10,
              state: 'Transiting'
            },
            turn: 2
          }
        ],
        locationPending: LaydownTypes.ForceLaydown,
        name: 'Dhow-A',
        perceptions: [{
          by: 'Blue',
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
            route: [
              'J05'
            ],
            status: {
              speedKts: 10,
              state: 'Transiting'
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
        platformType: 'fishing-vessel',
        platformTypeId : 'a1',
        status: {
          speedKts: 10,
          state: 'Transiting'
        },
        uniqid: 'a0pra000100'
      }],
    color: '#F00',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Red',
    overview: 'Red force.',
    roles: [
      {
        roleId: 'rkrlwcc5e',
        isGameControl: false,
        canSubmitPlans: true,
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
            route: ['M03'],
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
              'M06',
              'M07'
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 3
          },
          {
            route: [
              'M08',
              'M09',
            ],
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            turn: 4
          },
        ],
        platformType: 'merchant-vessel',
        platformTypeId : 'a13',
        position: 'M04',
        status: {
          speedKts: 20,
          state: 'Transiting'
        },
        uniqid: 'a0pra000200'
      }
    ],
    color: '#0F0',
    controlledBy: 'umpire',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Green',
    overview: 'Green Shipping',
    roles: [
      {
        roleId: 'rkrlddf5e',
        isGameControl: false,
        canSubmitPlans: true,
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
