import React from 'react'

// Import component files
import SettingOverview from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { WargameExportedMock } from '@serge/mocks'
import { WargameOverview } from './types/props'
import { MilliTurns, MonthTurns, YearTurns } from '@serge/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const millis: MilliTurns = {unit: 'millis', millis: 10000}

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
      control: {
        type: 'radio',
        default: millis,
        options: {
          tenKMillis: millis,
          sixMonths: {unit: 'months', millis: 6},
          twoYears: {unit: 'years', millis: 2}
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
  turnTime:  MilliTurns | MonthTurns | YearTurns
}

const Template: Story<StoryPropTypes> = (args) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    turnTime,
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
  console.log('turn time', turnTime)
  overview.gameTurnTime = turnTime
  return (
    // @ts-ignore it thinks we're missing wargame initiated, but storybook is providing that
    <SettingOverview
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
