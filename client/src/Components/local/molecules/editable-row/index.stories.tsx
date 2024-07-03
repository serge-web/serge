import React from 'react'

// Import component files
import EditableRow, { EDITABLE_SELECT_ITEM, EDITABLE_SWITCH_ITEM } from './index'
import docs from './README.md'

import { Item } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/EditableRow',
  component: EditableRow,
  decorators: [wrapper],
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
    type: EDITABLE_SELECT_ITEM,
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
    type: EDITABLE_SELECT_ITEM,
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
  },
  {
    title: 'Switch',
    type: EDITABLE_SWITCH_ITEM,
    active: true,
    uniqid: 'col3'
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
