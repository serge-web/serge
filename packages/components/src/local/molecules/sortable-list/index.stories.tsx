import React, { useState } from 'react'

// Import component files
import SortableList from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

// import types
import { Item } from './types/props'
import { PlatformTypeData } from '@serge/custom-types'

import { platformTypes } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/SortableList',
  component: SortableList,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const Wrapper = (): React.ReactElement => {
    const initialState = { types: platformTypes }
    const [items, setItems] = useState<{ types: Array<PlatformTypeData> }>(initialState)

    const handleClick = (item: Item): void => {
      console.log('selected item:', item)
    }
    const handleChange = (items: Array<Item>): void => {
      setItems({ types: items as Array<PlatformTypeData> })
    }
    const handleCreate = (): void => {
      setItems({
        types: [
          {
            name: 'New Item',
            conditions: [],
            icon: '',
            speedKts: [],
            states: [],
            travelMode: 'sea',
            uniqid: 'a1'
          },
          ...items.types
        ]
      })
    }

    return (
      <SortableList
        title='Add new platform type'
        remove={true}
        items={items.types}
        onClick={handleClick}
        onChange={handleChange}
        onCreate={handleCreate}
      />
    )
  }
  return <Wrapper />
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
