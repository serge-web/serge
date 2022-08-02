import { SelectOption } from '@serge/custom-types'
import _ from 'lodash'
import React from 'react'

// Import component files
import Forces from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/forces',
  component: Forces,
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
    name: 'Green',
    colour: '#088F8F'
  }
]

const logData = (data: any): void => {
  console.table(data)
}

export const CheckboxWithForce: React.FC = () => <Forces label="Visible to" options={forces} value={['Red']} onChange={logData} />
export const CheckboxWithLargeForce: React.FC = () => <Forces label="Visible to" options={largeForces} value={[largeForces[2].name]} onChange={logData} />
