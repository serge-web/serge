import { SelectOption } from 'src/custom-types'
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
    colour: getRandomRgb(),
    id: '' + index
  }
})

const forces = [
  {
    name: 'Blue',
    colour: '#69c',
    id: 'f1'
  },
  {
    name: 'Red',
    colour: '#f00',
    id: 'f2'
  },
  {
    name: 'Green',
    colour: '#088F8F',
    id: 'f3'
  }
]

const logData = (data: any): void => {
  console.table(data)
}

export const CheckboxWithForce: React.FC = () => <Forces label="Visible to" options={forces} value={[forces[1].id, forces[0].id]} onChange={logData} />
export const CheckboxWithForceBottom: React.FC = () => <Forces labelPlacement='bottom' label="Visible to" options={forces} value={[forces[1].id]} onChange={logData} />
export const CheckboxWithForceEnd: React.FC = () => <Forces labelPlacement='end' label="Visible to" options={forces} value={[forces[1].id]} onChange={logData} />
export const CheckboxWithForceStart: React.FC = () => <Forces labelPlacement='start' label="Visible to" options={forces} value={[forces[1].id]} onChange={logData} />
export const CheckboxWithForceTop: React.FC = () => <Forces labelPlacement='top' label="Visible to" options={forces} value={[forces[1].id]} onChange={logData} />

export const CheckboxWithLargeForce: React.FC = () => <Forces labelPlacement='top' label="Visible to" options={largeForces} value={[largeForces[2].name]} onChange={logData} />
