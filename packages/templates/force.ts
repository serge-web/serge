import uniqId from 'uniqid'
import { serverPath } from '@serge/config'

export default {
  name: '',
  uniqid: null,
  overview: 'An overview written here..',
  roles: [
    {
      name: 'CO',
      password: `p${uniqId.time()}`,
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false
    }
  ],
  icon: serverPath + 'default_img/forceDefault.png',
  color: '#3dd0ff',
  umpire: false,
  dirty: false
}