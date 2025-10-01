import { ForceData } from 'src/custom-types'

const forces: ForceData[] = [
  {
    color: '#FCFBEE',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'White',
    overview: 'Umpire force.',
    roles: [
      {
        roleId: 'rkr776f5e',
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
    color: '#00F',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Blue',
    overview: 'Blue force.',
    roles: [
      {
        roleId: 'rkr886f5e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      },
      {
        roleId: 'rk888w6f6e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'Logistics'
      }
    ],
    umpire: false,
    uniqid: 'Blue-1'
  },
  {
    color: '#F00',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Red',
    overview: 'Red force.',
    roles: [
      {
        roleId: 'rkrlw6f99e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      },
      {
        roleId: 'rkr996f5emms',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'Comms'
      }
    ],
    umpire: false,
    uniqid: 'Red-1'
  },
  {
    color: '#0F0',
    dirty: false,
    iconURL: 'default_img/umpireDefault.png',
    name: 'Green',
    overview: 'Green Shipping',
    roles: [
      {
        roleId: 'rkrlaaf5e',
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO'
      }
    ],
    umpire: false,
    uniqid: 'green-force'
  }
]

export default forces
