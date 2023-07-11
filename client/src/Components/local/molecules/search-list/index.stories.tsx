import React, { useState } from 'react'
import { formatShortDate } from 'src/Helpers'

// Import component files
import SearchList from './index'
import { TemplateListItem } from './types/props'
import docs from './README.md'

export default {
  title: 'local/molecules/SearchList',
  component: SearchList,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [selected, setSelected] = useState('')
  const listData = [{
    completed: false,
    details: {
      title: 'State of World (laydown 2)'
    },
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'State of World L',
    _id: 'k16eedkp',
    _rev: '1-612d7dc5d10fc81bc7459b2801c66816'
  }, {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Daily intentions',
    details: {
      title: 'Daily Intent'
    },
    completed: false,
    _id: 'k16eedkn',
    _rev: '1-cc8e8cdb01447959c266761066448382'
  }, {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Link',
    details: {
      title: 'Link'
    },
    completed: false,
    _id: 'k16eedkm',
    _rev: '1-7fa1e6dd6b4ac5b6afc45b596ee7af61'
  }, {
    lastUpdated: '2019-09-30T12:37:26.705Z',
    title: 'Chat',
    details: {
      title: 'Chat'
    },
    completed: false,
    _id: 'k16eedkl',
    _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
  }]
  return (
    <SearchList
      placeholder="Select template"
      listData={listData}
      setSelected={(item): void => setSelected((item as TemplateListItem)._id)}
      activeRow={(item): boolean => (item as TemplateListItem)._id === selected}
      rowLabel={(listItem): string => {
        const item = listItem as TemplateListItem
        const title = item.details.title ? item.details.title : '[Title missing]'
        const date = formatShortDate(item.lastUpdated)
        return `${title} - ${date}`
      }}
      rowFilter={(item, query): boolean => {
        const { details } = item as TemplateListItem
        return (
          details.title === '' ||
          typeof details.title === 'undefined') ||
          (details.title || '').toLowerCase().includes(query.toLowerCase()
          )
      }}
    />
  )
}
