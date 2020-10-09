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
      control: true,
      isObserver: true,
      isInsightViewer: true,
      canSubmitPlans: true
    }
  ],
  icon: serverPath + 'default_img/umpireDefault.png',
  color: '#FCFBEE',
  umpire: true,
  dirty: false
}