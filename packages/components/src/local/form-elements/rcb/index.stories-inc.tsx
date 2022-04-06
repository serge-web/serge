import { SelectOption } from '@serge/custom-types'
import _ from 'lodash'
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

const getRandomRgb = (): string => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const largeNumbers = _.range(15)
const largeForces = largeNumbers.map((_item, index): SelectOption => {
  return {
    name: 'force-' + index,
    colour: getRandomRgb()
  }
})

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

const numberChoices: number[] = [10, 20, 30]

const logData = (data: any): void => {
  console.table(data)
}

export const Checkbox: React.FC = () => <RCB type="checkbox" label="Visible to" options={['Red', 'Blue']} value={'Blue'} updateState={logData} />
export const CheckboxNumbers: React.FC = () => <RCB type="checkbox" label="Speed" options={numberChoices} value={[numberChoices[1]]} updateState={logData} />
export const CheckboxLargeNumbers: React.FC = () => <RCB type="checkbox" label="Speed" options={largeNumbers} value={[largeNumbers[1]]} updateState={logData} />
export const CheckboxNumbersMulti: React.FC = () => <RCB type="checkbox" label="Speed" options={numberChoices} value={[numberChoices[1], numberChoices[2]]} updateState={logData} />
export const CheckboxWithForce: React.FC = () => <RCB type="checkbox" force={true} label="Visible to" options={forces} value={['Red']} updateState={logData} />
export const CheckboxWithLargeForce: React.FC = () => <RCB type="checkbox" force={true} label="Visible to" options={largeForces} value={largeForces[2].name} updateState={logData} />
export const CompactCheckboxWithForce: React.FC = () => <RCB type="checkbox" compact={true} force={true} label="Visible to" options={forces} value={['Red']} updateState={logData} />
export const CompactCheckboxWithForceMulti: React.FC = () => <RCB type="checkbox" compact={true} force={true} label="Visible to" options={forces} value={['Red', 'Blue']} updateState={logData} />
export const CompactCheckboxWithLargeForce: React.FC = () => <RCB type="checkbox" compact={true} force={true} label="Visible to" options={largeForces} value={largeForces[2].name} updateState={logData} />
export const Radio: React.FC = () => <RCB type="radio" label="Visible to" options={['Red', 'Blue']} value="Blue" updateState={logData} />
export const RadioNumbers: React.FC = () => <RCB type="radio" label="Speed" options={numberChoices} value={numberChoices[1]} updateState={logData} />
export const RadiLargeNumbers: React.FC = () => <RCB type="radio" label="Speed" options={largeNumbers} value={largeNumbers[1]} updateState={logData} />
export const RadioWithForce: React.FC = () => <RCB type="radio" force={true} label="Visible to" options={forces} value="Red" updateState={logData} />
export const RadioWithLargeForce: React.FC = () => <RCB type="radio" force={true} label="Visible to" options={largeForces} value={largeForces[2].name} updateState={logData} />
