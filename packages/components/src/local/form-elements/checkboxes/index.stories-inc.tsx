import _ from 'lodash'
import React from 'react'

// Import component files
import CheckBoxes from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/checkboxes',
  component: CheckBoxes,
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

export const Checkbox: React.FC = () => <CheckBoxes label="Visible to" options={['Red', 'Blue']} value={['Blue']} onChange={logData} />
export const CheckboxNumbers: React.FC = () => <CheckBoxes label="Speed" options={numberChoices} value={[numberChoices[1]]} onChange={logData} />
export const CheckboxLargeNumbers: React.FC = () => <CheckBoxes label="Speed" options={largeNumbers} value={[largeNumbers[1]]} onChange={logData} />
export const CheckboxNumbersMulti: React.FC = () => <CheckBoxes label="Speed" options={numberChoices} value={[numberChoices[1], numberChoices[2]]} onChange={logData} />
