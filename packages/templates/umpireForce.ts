import uniqId from 'uniqid'
import { serverPath } from '@serge/config'

export default {
  name: 'White',
  uniqid: 'umpire',
  overview: 'Umpire force.',
  roles: [
    {
      name: 'Game Control',
      password: `p${uniqId.time()}`,
      isGameControl: true,
      isObserver: true,
      isInsightViewer: true,
      isRFIManager: true
    }
  ],
  icon: serverPath + 'default_img/umpireDefault.png',
  color: '#FCFBEE',
  umpire: true,
  dirty: false
}