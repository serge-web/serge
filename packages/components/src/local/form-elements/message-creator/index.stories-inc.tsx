import { ChannelUI } from '@serge/custom-types'
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

export const Default: React.FC = () => {
  const channels = {}
  P9Mock.data.channels.channels.forEach(c => {
    channels[c.name] = {
      cData: c,
      name: c.name,
      uniqid: c.uniqid
    } as ChannelUI
  })

  return (<MessageCreator
    channels={channels}
    curChannel={P9Mock.data.channels.channels[0].name}
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
  />)
}
