import React /*, { useState }*/ from 'react'

import { Phase } from '@serge/config'
import { Story } from '@storybook/react/types-6-0'
// Import component files
import TurnProgression from './index'
import TurnPropTypes from './types/props'

import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/TurnProgression',
  component: TurnProgression,
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
    phase: {
      name: 'Game phase',
      control: {
        type: 'radio',
        defaultValue: Phase.Planning,
        options: [
          Phase.Planning,
          Phase.Adjudication
        ]
      }
    }
  }
}


const Template: Story<TurnPropTypes> = (args) => {
  // @ts-ignore: Add custom property for storybook
  const { viewAs, store, ...props } = args
  return <TurnProgression 
    {...props} />
}

export const WithPhases = Template
WithPhases.args = {
    adjudicationStartTime:"2019-09-30T14:13:22+01:00",
    turnEndTime:"0",
    timeWarning:60000,
    currentTurn:1,
    gameDate:"2019-10-01T02:02",
    phase: Phase.Planning
}


// export const Default: React.FC = (args) => (
//   // @ts-ignore
//   <TurnProgression
//     adjudicationStartTime="2019-09-30T14:13:22+01:00"
//     turnEndTime="0"
//     timeWarning={60000}
//     currentTurn={1}
//     gameDate="2019-10-01T02:02"
//     isGameControl={boolean('is game control', false)}
//     {...args}
//   />
// )

// export const Planning: React.FC = () => (
//   <TurnProgression
//     adjudicationStartTime="2019-09-30T14:13:22+01:00"
//     turnEndTime={moment(new Date()).add(1.1, 'm').toString()}
//     timeWarning={60000}
//     currentTurn={1}
//     phase={PLANNING_PHASE}
//     gameDate="2019-10-01T02:02"
//     isGameControl={false}
//   />
// )

// export const WithGameControl: React.FC = () => {
//   const [state, setState] = useState({
//     phase: PLANNING_PHASE,
//     currentTurn: 1
//   })
//   const updateState = (): void => {
//     setState({
//       phase: ADJUDICATION_PHASE,
//       currentTurn: 2
//     })
//   }
//   return (
//     <TurnProgression
//       adjudicationStartTime="2019-09-30T14:13:22+01:00"
//       turnEndTime={moment(new Date()).add(1.1, 'm').toString()}
//       timeWarning={60000}
//       currentTurn={state.currentTurn}
//       phase={state.phase}
//       gameDate="2019-10-01T02:02"
//       isGameControl={true}
//       onNextTurn={updateState}
//     />
//   )
// }

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
// Default.story = {
//   parameters: {
//     options: {
//       // This story requires addons but other stories in this component do not
//       showPanel: true
//     }
//   }
// }
