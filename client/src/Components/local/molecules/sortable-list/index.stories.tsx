import React, { useState } from 'react'

// Import component files
import SortableList from './index'
import docs from './README.md'

import { watuWargame } from 'src/mocks'

// import types
import { Item } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/SortableList',
  component: SortableList,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const Wrapper = (): React.ReactElement => {
    const forcesMock = watuWargame.data.forces.forces[0]
    const initialState = { types: forcesMock.roles }

    const [items, setItems] = useState<{ types: Array<Item> }>(initialState)

    const handleClick = (item: Item): void => {
      console.log('selected item:', item)
    }
    const handleChange = (items: Array<Item>): void => {
      setItems({ types: items as Array<Item> })
    }
    const handleCreate = (): void => {
      setItems({
        types: [
          {
            isGameControl: false,
            isInsightViewer: false,
            isObserver: false,
            name: 'New role',
            roleId: 'blueCO'
          },
          ...items.types
        ]
      })
    }

    return (
      <SortableList
        title='Add Role'
        remove={true}
        sortable='auto'
        required
        items={items.types}
        onClick={handleClick}
        onChange={handleChange}
        onCreate={handleCreate}
        valueOnEmpty=''
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
