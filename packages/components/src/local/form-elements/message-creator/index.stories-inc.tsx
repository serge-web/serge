import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
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
  channels={[P9Mock.data.channels]}
  curChannel={P9Mock.data.channels.name}
  currentTurn={0}
  currentWargame={P9Mock.currentWargame || ''}
  gameDate=''
  privateMessage={true}
  saveMessage={() => (): void => { console.log('save') }}
  saveNewActivityTimeMessage={() => (): void => { console.log('save new') }}
  schema={planningMessageTemplatesMock[0].details}
  selectedForce={P9Mock.data.forces.forces[0]}
  selectedRole={P9Mock.data.forces.forces[0].roles[0].roleId}
  selectedRoleName={P9Mock.data.forces.forces[0].roles[0].name}
  dispatch={noop}
/>
