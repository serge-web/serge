import React, { useState } from 'react'

// Import component files
import EditableList from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

// import types
import { Item } from './types/props'
import { PlatformTypeData } from '@serge/custom-types'

import { platformTypes } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/EditableList',
  component: EditableList,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [items, setItems] = useState<Array<PlatformTypeData>>(platformTypes)

  const handleClick = (item: Item): void => {
    console.log('selected item:', item)
  }
  const handleChange = (items: Array<Item>): void => {
    setItems(items as Array<PlatformTypeData>)
  }
  const handleCreate = (): void => {
    setItems([
      {
        name: 'New Item',
        conditions: [],
        icon: '',
        speedKts: [],
        states: [],
        travelMode: 'sea'
      },
      ...items
    ])
  }
  return (<EditableList
    title='Add new platform type'
    items={items}
    onClick={handleClick}
    onChange={handleChange}
    onCreate={handleCreate}
  />)
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
