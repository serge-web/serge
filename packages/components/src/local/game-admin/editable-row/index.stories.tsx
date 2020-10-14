import React from 'react'

// Import component files
import EditableRow from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { Item } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/EditableRow',
  component: EditableRow,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const items: Array<Item> = [
  {
    title: 'Column 1',
    active: [0],
    uniqid: 'col1',
    options: [
      { name: 'Option 1', uniqid: 'op1' },
      { name: 'Option 2', uniqid: 'op2' },
      { name: 'Option 3', uniqid: 'op3' }
    ]
  },
  {
    title: 'Column 2',
    active: [0],
    uniqid: 'col2',
    multiple: true,
    options: [
      { name: 'Option 1', uniqid: 'op1' },
      { name: 'Option 2', uniqid: 'op2' },
      { name: 'Option 3', uniqid: 'op3' },
      { name: 'Option 4', uniqid: 'op4' },
      { name: 'Option 5', uniqid: 'op5' },
      { name: 'Option 6', uniqid: 'op6' }
    ]
  }
]

export const Default: React.FC = () => {
  const handleChange = (nextItems: Array<Item>, _changedKey: number): Array<Item> => {
    return nextItems
  }

  return <table>
    <EditableRow
      items={items}
      onChange={handleChange}
      actions
      defaultMode='edit'
    />
  </table>
}

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
