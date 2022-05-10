import moment from 'moment'
import umpireForceTemplate from './umpireForce'
import { ADJUDICATION_PHASE, wargameSettings } from '@serge/config'

export default {
  _id: wargameSettings,
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
      dirty: false
    },
    forces: {
      name: 'Forces',
      forces: [umpireForceTemplate],
      selectedForce: '',
      dirty: false
    },
    channels: {
      name: 'Channels',
      channels: [],
      selectedChannel: '',
      dirty: false
    }
  },
  wargameInitiated: false,
  gameTurn: 0,
  phase: ADJUDICATION_PHASE,
  turnEndTime: null,
  adjudicationStartTime: moment().format()
}