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
