import React from 'react'

// Import component files
import RCB from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/RCB',
  component: RCB,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const forces = [
  {
    name: 'Blue',
    colour: '#69c'
  },
  {
    name: 'Red',
    colour: '#f00'
  },
  {
    name: 'White',
    colour: '#fff'
  }
]

const logData = (data: any): void => {
  console.log('callback', data)
}

export const Checkbox: React.FC = () => <RCB type="checkbox" label="Visible to" options={['Red', 'Blue']} value={['Red']} updateState={logData}/>
export const Radio: React.FC = () => <RCB type="radio" label="Visible to" options={['Red', 'Blue']} value="Red" updateState={logData}/>
export const RadioWithForce: React.FC = () => <RCB type="radio" force={true} label="Visible to" options={forces} value="Red" updateState={logData}/>
export const CheckboxWithForce: React.FC = () => <RCB type="checkbox" force={true} label="Visible to" options={forces} value={['Blue']} updateState={logData}/>
