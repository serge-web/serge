import moment from 'moment'
import umpireForceTemplate from './umpireForce'
import { ADJUDICATION_PHASE } from '@serge/config'

export default {
  _id: 'settings',
  wargameTitle: '',
  data: {
    overview: {
      name: 'Overview - settings',
      gameDescription: '',
      // spatialRepresentation: '',
      gameTurnTime: 43200000,
      realtimeTurnTime: 300000,
      timeWarning: 60000,
      // turnStrategy: '',
      gameDate: moment(new Date(), moment.ISO_8601).format(),
      showAccessCodes: true,
      complete: false,
      dirty: false
    },
    forces: {
      name: 'Forces',
      forces: [umpireForceTemplate],
      selectedForce: '',
      complete: false,
      dirty: false
    },
    channels: {
      name: 'Channels',
      channels: [],
      selectedChannel: '',
      complete: false,
      dirty: false
    }
  },
  wargameInitiated: false,
  gameTurn: 0,
  phase: ADJUDICATION_PHASE,
  turnEndTime: null,
  adjudicationStartTime: moment().format()
}