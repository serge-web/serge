import { ChannelUI, MessageDetails } from '@serge/custom-types'
import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import { noop } from 'lodash'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import NewMessage from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

export default {
  title: 'local/form-elements/NewMessage',
  component: NewMessage,
  decorators: [wrapper],
  parameters: {
    readme: {
      content: docs
    },
    options: {
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    privateMessage: {
      description: 'Provide private message (umpire force)',
      control: {
        type: 'boolean'
      }
    },
    orderableChannel: {
      description: 'Whether messages are shown in order',
      control: {
        type: 'boolean'
      }
    },
    confirmCancel: {
      description: 'Whether player has to confirm cancelling a message',
      control: {
        type: 'boolean'
      }
    }
  }
}

const saveMessage = (dbName: string, details: MessageDetails, message: object) => {
  return async (): Promise<void> => {
    console.log('dbName: ', dbName, ', details: ', details, ', message: ', message)
  }
}

interface StoryPropTypes {
  privateMessage: boolean
  orderableChannel: boolean
  confirmCancel: boolean
}

const Template: Story<StoryPropTypes> = (args) => {
  const { privateMessage, orderableChannel, confirmCancel } = args
  const channels = {}
  P9Mock.data.channels.channels.forEach(c => {
    channels[c.name] = {
      cData: c,
      name: c.name,
      uniqid: c.uniqid
    } as ChannelUI
  })

  return (<NewMessage
    templates={planningMessageTemplatesMock}
    privateMessage={privateMessage}
    orderableChannel={orderableChannel}
    curChannel={P9Mock.data.channels.channels[0].name}
    confirmCancel={confirmCancel}
    activityTimeChanel={noop}
    channels={channels}
    currentTurn={0}
    currentWargame={P9Mock.name || 'dumb-name'}
    gameDate={P9Mock.data.overview.gameDate}
    saveMessage={saveMessage}
    saveNewActivityTimeMessage={() => (): void => { console.log('save activity') }}
    selectedForce={P9Mock.data.forces.forces[0]}
    selectedRole={P9Mock.data.forces.forces[0].roles[0].roleId}
    selectedRoleName={P9Mock.data.forces.forces[0].roles[0].name}
    dispatch={noop}
  />)
}

export const Default = Template.bind({})
