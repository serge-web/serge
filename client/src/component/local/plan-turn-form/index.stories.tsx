import React from 'react'

// Import component files
import PlanTurnForm from './index'
import docs from './README.md'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { PlanTurnFormValues } from '@serge/custom-types'
import { ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_VALUE_NUMBER } from '@serge/config'

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

const iconData = { platformType: 'merchant-vessel', forceColor: 'blue', icon: 'frigate.svg' }

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
      speed: radios(speedLabel, speedValues, 'Four') === 'One' ? [10] : [10, 20, 30, 40],
      attributes: []
    },
    values: {
      statusVal: {
        name: 'Transiting',
        mobile: true
      },
      speedVal: 0,
      turnsVal: 5,
      condition: 'Working',
      attributes: []
    }
  }}
  icon={iconData}
  plansSubmitted={false}
/>

export const DefaultAttributesEditable: React.FC = () => <PlanTurnForm
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
      speed: radios(speedLabel, speedValues, 'Four') === 'One' ? [10] : [10, 20, 30, 40],
      attributes: [{ attrId: 'comm_a', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'Fuel', editableByPlayer: false },
        { attrId: 'comm_b', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'People', editableByPlayer: true },
        { attrId: 'comm_c', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'Water', units: 'litres', editableByPlayer: false }]
    },
    values: {
      statusVal: {
        name: 'Transiting',
        mobile: true
      },
      speedVal: 0,
      turnsVal: 5,
      condition: 'Working',
      attributes: [{ attrId: 'comm_a', attrType: ATTRIBUTE_VALUE_NUMBER, value: 12 },
        { attrId: 'comm_b', attrType: ATTRIBUTE_VALUE_NUMBER, value: 213 },
        { attrId: 'comm_c', attrType: ATTRIBUTE_VALUE_NUMBER, value: 12450 }]
    }
  }}
  icon={iconData}
  plansSubmitted={false}
/>

export const DefaultAttributesEditableCannotSubmitPlans: React.FC = () => <PlanTurnForm
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
      speed: radios(speedLabel, speedValues, 'Four') === 'One' ? [10] : [10, 20, 30, 40],
      attributes: [{ attrId: 'comm_a', description: 'Volume of fuel remaining', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'Fuel', editableByPlayer: false },
        { attrId: 'comm_b', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'People', editableByPlayer: true },
        { attrId: 'comm_c', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'Water', units: 'litres', editableByPlayer: false }]
    },
    values: {
      statusVal: {
        name: 'Transiting',
        mobile: true
      },
      speedVal: 0,
      turnsVal: 5,
      condition: 'Working',
      attributes: [{ attrId: 'comm_a', attrType: ATTRIBUTE_VALUE_NUMBER, value: 12 },
        { attrId: 'comm_b', attrType: ATTRIBUTE_VALUE_NUMBER, value: 213 },
        { attrId: 'comm_c', attrType: ATTRIBUTE_VALUE_NUMBER, value: 12450 }]
    }
  }}
  icon={iconData}
  plansSubmitted={false}
/>

export const CannotSubmitPlansNoAttributes: React.FC = () => <PlanTurnForm
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
      speed: radios(speedLabel, speedValues, 'Four') === 'One' ? [10] : [10, 20, 30, 40],
      attributes: []
    },
    values: {
      statusVal: {
        name: 'Transiting',
        mobile: true
      },
      speedVal: 0,
      turnsVal: 5,
      condition: 'Working',
      attributes: []
    }
  }}
  icon={iconData}
  plansSubmitted={false}
/>

export const TurnsPlannedAttributesNotEditable: React.FC = () => <PlanTurnForm
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
      speed: radios(speedLabel, speedValues, 'Four') === 'One' ? [10] : [10, 20, 30, 40],
      attributes: [{ attrId: 'comm_a', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'Fuel', editableByPlayer: false }]
    },
    values: {
      statusVal: {
        name: 'Transiting',
        mobile: true
      },
      speedVal: 0,
      turnsVal: 5,
      condition: 'Working',
      attributes: [{ attrId: 'comm_a', attrType: ATTRIBUTE_VALUE_NUMBER, value: 12 }]
    }
  }}
  icon={iconData}
  plansSubmitted={true}
/>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
