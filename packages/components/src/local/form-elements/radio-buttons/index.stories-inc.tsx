import _ from 'lodash'
import React from 'react'

// Import component files
import RadioButtons from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/radio-buttons',
  component: RadioButtons,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const largeNumbers = _.range(15)
const numberChoices: number[] = [10, 20, 30]

const logData = (data: any): void => {
  console.table(data)
}

export const Radio: React.FC = () => <RadioButtons label="Visible to" options={['Red', 'Blue']} value="Blue" onChange={logData} />
export const RadioNumbers: React.FC = () => <RadioButtons label="Speed" options={numberChoices} value={numberChoices[1]} onChange={logData} />
export const RadiLargeNumbers: React.FC = () => <RadioButtons label="Speed" options={largeNumbers} value={largeNumbers[1]} onChange={logData} />
