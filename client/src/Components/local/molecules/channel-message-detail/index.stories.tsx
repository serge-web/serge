import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChannelMessageDetail from './index'
import DetailPropTypes from './types/props'
import docs from './README.md'
import { GameMessagesMockRFI } from 'src/mocks'

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
  const { isUmpire, message } = args
  return <ChannelMessageDetail
    message={message}
    isUmpire={isUmpire} />
}

export const Chat = Template.bind({})
Chat.args = {
  message: GameMessagesMockRFI[0],
  isUmpire: false
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
  isUmpire: false
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
  isUmpire: false
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
  isUmpire: false
}

export const PrivateMessage = Template.bind({})
PrivateMessage.args = {
  message: {
    ...GameMessagesMockRFI[2],
    message: { content: 'Lorem ipsum do lor sit amet' }
  },
  isUmpire: false
}

export const WeatherForecast = Template.bind({})
WeatherForecast.args = {
  message: {
    ...GameMessagesMockRFI[0],
    message: {
      title: 'Forecast',
      'array of object': [
        { 'animal-1': 'dog' },
        { 'animal-2': 'cat' }
      ],
      'array of string': [
        'alpha', 'bravo'
      ],
      Location: {
        Lat: 19,
        'Lat Hemi': 'N',
        Long: 33,
        'Long Hemi': 'E',
        grids: {
          name: 'true',
          'name 2': 'magnetic'
        }
      },
      'Valid from': '2020-09-03 12:00',
      'Test file': 'file:///localhost/image.png',
      'Test url https': 'https://localhost/search.html',
      'Test url http': 'http:///localhost/other_search.html',
      'boolean-true': true,
      'boolean-false': false,
      'boolean string': 'true',
      number: 12,
      'number string': '12',
      'date-time': '2020-09-25 12:00',
      'plain-text': 'Clear'
    }
  },
  isUmpire: false
}
