import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChannelMessageDetail from './index'
import DetailPropTypes from './types/props'
import docs from './README.md'
import { GameMessagesMockRFI } from '@serge/mocks'

export default {
  title: 'local/molecules/ChannelMessageDetail',
  component: ChannelMessageDetail,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  },
  argTypes: {
    playerForce: {
      name: 'Player force',
      defaultValue: 'Blue',
      control: {
        type: 'radio',
        options: [
          'umpire',
          'Blue',
          'Red'
        ]
      }
    }
  }
}



const Template: Story<DetailPropTypes> = (args) => {
  // @ts-ignore: Add custom property for storybook
  const { playerForce, message } = args
  return <ChannelMessageDetail
    message={message}
    playerForce={playerForce} />
}

export const Chat = Template.bind({})
Chat.args = {
  message: GameMessagesMockRFI[0],
  playerForce: 'Blue'
}

export const Link = Template.bind({})
Link.args = {
  message: {
    ...GameMessagesMockRFI[0],
    message: {
      title: 'lorem ipsum',
      URL: 'https://google.com'
    }
  },
  playerForce: 'Blue'
}

export const DailyIntention = Template.bind({})
DailyIntention.args = {
  message: {
    ...GameMessagesMockRFI[0],
    message: {
      TurnNumber: '1',
      OverallIntentions: 'Some intentions',
      Orders: [{
        Unit: '1',
        Tasking: 'Some tasking',
        SearchPolicy: 'Some policy',
        ActionOnContact: 'Ignore',
        AnyOtherComments: 'other'
      }]
    }
  },
  playerForce: 'Blue'
}

export const StateOfTheWorld = Template.bind({})
StateOfTheWorld.args = {
  message: {
    ...GameMessagesMockRFI[0],
    message: {
      Forces: [{
        assets: [{
          location: 'loc',
          name: 'name',
          visibleTo: [{ Force: 'Blue' }]
        }, {
          location: 'lo2',
          name: 'name2',
          visibleTo: [{ Force: 'Red' }]
        }],
        force: 'Blue'
      }, {
        assets: [{
          location: 'loc',
          name: 'name3',
          visibleTo: []
        }],
        force: 'Red'
      }]
    }
  },
  playerForce: 'Blue'
}

export const PrivateMessage = Template.bind({})
PrivateMessage.args = {
  message: {
    ...GameMessagesMockRFI[2],
    message: { content: 'Lorem ipsum do lor sit amet' }
  },
  playerForce: 'Blue'
}

export const WeatherForecast = Template.bind({})
WeatherForecast.args = {
  message: {
    ...GameMessagesMockRFI[0],
    message: {
      title: 'Forecast',
      Location: { Lat: 19, 'Lat Hemi': 'N', Long: 33, 'Long Hemi': 'E' },
      'Valid from': '2020-09-03 12:00',
      'Valid until': '2020-09-25 12:00',
      Forecast: 'Clear'
    }
  },
  playerForce: 'Blue'
}
