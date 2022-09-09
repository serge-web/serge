import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import NewMessage2 from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/NewMessage2',
  component: NewMessage2,
  decorators: [],
  parameters: {
    readme: {
      content: docs
    }
  }
}

export const Default: React.FC = () => <NewMessage2
  role=''
  templates={[]}
  privateMessage={false}
  orderableChannel={false}
  curChannel=''
  confirmCancel={false}
  activityTimeChanel={noop}
  channels={[]}
  currentTurn={0}
  currentWargame=''
  gameDate=''
  saveMessage={() => () => { }}
  saveNewActivityTimeMessage={() => () => { }}
  selectedForce={P9Mock.data.forces.forces[0]}
  selectedRole={''}
  selectedRoleName={''}
  dispatch={noop}
/>
