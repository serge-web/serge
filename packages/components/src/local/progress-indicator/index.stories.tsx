import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import ProgressIndicator from './index'
import docs from './README.md'

const wargame = {
  isLoading: false,
  wargameList: [
    {
      name: 'http://localhost:8080/db/wargame-k5xyxas9',
      title: 'IMWARC-T2 Playing',
      initiated: true
    },
    {
      name: 'http://localhost:8080/db/wargame-k5xxsr4b',
      title: 'IMWARC-T1 Adjudication',
      initiated: true
    },
    {
      name: 'http://localhost:8080/db/wargame-k5pap52f',
      title: 'IMWARC-Initialised',
      initiated: true
    },
    {
      name: 'http://localhost:8080/db/wargame-k5pafxci',
      title: 'IMWARC',
      initiated: false
    },
    {
      name: 'http://localhost:8080/db/wargame-k16fadm4',
      title: 'Monday',
      initiated: true
    }
  ],
  currentWargame: '',
  exportMessagelist: [],
  wargameTitle: '',
  data: {
    overview: {
      name: 'Overview - settings',
      gameDescription: '',
      gameTurnTime: 43200000,
      realtimeTurnTime: 300000,
      timeWarning: 60000,
      gameDate: '2020-02-21T12:41:20+00:00',
      showAccessCodes: false,
      complete: false,
      dirty: false
    },
    forces: {
      name: 'Forces',
      forces: [
        {
          name: 'White',
          uniqid: 'umpire',
          overview: 'Umpire force.',
          roles: [
            {
              name: 'Game Control',
              password: 'pk6w5y28j',
              control: true,
              isObserver: true,
              isInsightViewer: true
            }
          ],
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          color: '#FCFBEE',
          umpire: true,
          dirty: false
        }
      ],
      selectedForce: '',
      complete: false,
      dirty: false
    },
    channels: {
      name: 'Channels',
      channels: [],
      selectedChannel: '',
      complete: false,
      dirty: false
    }
  },
  currentTab: 'overview',
  wargameInitiated: false,
  adminNotLoggedIn: false
}

export default {
  title: 'local/ProgressIndicator',
  component: ProgressIndicator,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default = () =>
  <ProgressIndicator data={wargame.data} currentTab={select('Current Tab', ['overview', 'forces', 'channels'], 'overview', 'options')} />
