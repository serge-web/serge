import React from 'react'

// Import component files
import SettingOverview from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { WargameExportedMock } from '@serge/mocks'
import { WargameOverview } from './types/props'
import { GameTurnLength, MilliTurns, MonthTurns } from 'src/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const tenKmillis: MilliTurns = { unit: 'millis', millis: 10000 }
const sixMonths: MonthTurns = { unit: 'months', months: 6 }
const seventeenMonths: MonthTurns = { unit: 'months', months: 18 }
const items = { tenKmillis, sixMonths, eighteenMonths: seventeenMonths }

export default {
  title: 'local/organisms/SettingOverview',
  component: SettingOverview,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    turnTime: {
      name: 'Turn Time',
      options: Object.keys(items),
      mapping: items,
      control: {
        type: 'radio',
        control: {
          type: 'radio',
          labels: { tenKmillis: '10k millis', sixMonths: '6 months', seventeenMonths: '17 months' }
        }
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}

interface StoryPropTypes {
  turnTime: GameTurnLength
}

const Template: Story<StoryPropTypes> = (args) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    turnTime
  } = args

  const { overview } = WargameExportedMock.data

  const handleChange = (nextOverview: WargameOverview): void => {
    console.log(nextOverview)
  }
  const handleSave = (overview: WargameOverview): void => {
    console.log('Your save logic', overview)
  }
  const initiateWargame = (): void => {
    console.log('Initiating wargame')
  }
  console.log('turn time', turnTime, overview.gameTurnTime)
  overview.gameTurnTime = turnTime
  return (
    <SettingOverview
      wargameInitiated
      overview={overview}
      onChange={handleChange}
      onSave={handleSave}
      initiateWargame={initiateWargame}
      {...args}
    />
  )
}
/**
 * DEFAULT VIEW
 */
export const Default = Template.bind({})
