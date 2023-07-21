import { ChannelTypes } from 'src/custom-types'
import { FLEX_LAYOUT_MODEL_DEFAULT } from 'src/config'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setDefaultModel = (allChannels: ChannelTypes[]) => {
  const hasMap = allChannels.find(({ name }) => name.toLowerCase() === 'mapping')
  const setTabContent = (channel: ChannelTypes) => ({
    type: 'tab',
    id: channel.uniqid,
    name: channel.name,
    component: channel.name,
    className: ''
  })

  if (allChannels.length <= 1 || hasMap) {
    return {
      ...FLEX_LAYOUT_MODEL_DEFAULT,
      layout: {
        type: 'row',
        children: [{
          type: 'tabset',
          children: allChannels.map(setTabContent)
        }]
      }
    }
  }
  
  const chunks = [...allChannels]
  // note: switch chunkSize to 2, to start off with two stacks of channels,
  // note: which is useful with lots of channels
  const chunkSize = allChannels.length > 6 ? 2 : 1
  const firstSet = chunks.splice(0, Math.round(chunks.length / chunkSize))
  const tabChildren = (id: number) => {
    const collections = id === 0 ? firstSet : chunks
    return collections.map(setTabContent)
  }
  const children = Array.from(Array(chunkSize).keys()).map(tabset => {
    return {
      type: 'tabset',
      weight: 50,
      children: tabChildren(tabset)
    }
  })
  return {
    ...FLEX_LAYOUT_MODEL_DEFAULT,
    layout: {
      type: 'row',
      children
    }
  }
}
