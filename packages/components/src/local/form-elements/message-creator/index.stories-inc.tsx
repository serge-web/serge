import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import MessageCreator from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/MessageCreator',
  component: MessageCreator,
  decorators: [],
  parameters: {
    readme: {
      content: docs
    }
  }
}

export const Default: React.FC = () => <MessageCreator
  channels={[]}
  curChannel=''
  currentTurn={0}
  currentWargame=''
  gameDate=''
  privateMessage={false}
  saveMessage={() => (): void => { console.log('save') }}
  saveNewActivityTimeMessage={() => (): void => { console.log('save new') }}
  schema={''}
  selectedForce={P9Mock.data.forces.forces[0]}
  selectedRole={''}
  selectedRoleName={''}
  dispatch={noop}
/>
