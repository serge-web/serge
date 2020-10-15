import React from 'react'

// Import component files
import PlanTurnForm from './index'
import docs from './README.md'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { PlanTurnFormValues } from '@serge/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/PlanTurnForm',
  component: PlanTurnForm,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const iconData = { platformType: 'merchant-vessel', forceColor: 'blue' }

// put in the post handler
const postback = (step: PlanTurnFormValues): void => {
  console.log('plan turn postback', step)
}

const speedLabel = 'Speed values'
const speedValues = {
  One: 'One',
  Four: 'Four'
}

export const Default: React.FC = () => <PlanTurnForm
  turnPlanned={postback}
  formHeader="Planning header"
  canSubmitPlans={true}
  formData={{
    populate: {
      status: [{
        name: 'Moored',
        mobile: false
      },
      {
        name: 'Transiting',
        mobile: true
      }],
      speed: radios(speedLabel, speedValues, 'Four') === 'One' ? [10] : [10, 20, 30, 40]
    },
    values: {
      statusVal: {
        name: 'Transiting',
        mobile: true
      },
      speedVal: 0,
      turnsVal: 5
    }
  }}
  icon={iconData}
  plansSubmitted={false}
/>

export const CannotSubmitPlans: React.FC = () => <PlanTurnForm
  turnPlanned={postback}
  formHeader="Planning header"
  canSubmitPlans={false}
  formData={{
    populate: {
      status: [{
        name: 'Moored',
        mobile: false
      },
      {
        name: 'Transiting',
        mobile: true
      }],
      speed: radios(speedLabel, speedValues, 'Four') === 'One' ? [10] : [10, 20, 30, 40]
    },
    values: {
      statusVal: {
        name: 'Transiting',
        mobile: true
      },
      speedVal: 0,
      turnsVal: 5
    }
  }}
  icon={iconData}
  plansSubmitted={false}
/>

export const TurnsPlanned: React.FC = () => <PlanTurnForm
  turnPlanned={postback}
  formHeader="Planning header"
  canSubmitPlans={true}
  formData={{
    populate: {
      status: [{
        name: 'Moored',
        mobile: false
      },
      {
        name: 'Transiting',
        mobile: true
      }],
      speed: radios(speedLabel, speedValues, 'Four') === 'One' ? [10] : [10, 20, 30, 40]
    },
    values: {
      statusVal: {
        name: 'Transiting',
        mobile: true
      },
      speedVal: 0,
      turnsVal: 5
    }
  }}
  icon={iconData}
  plansSubmitted={true}
/>

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
