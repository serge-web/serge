import React from 'react'

// Import component files
import WargameList from './index'
import docs from './README.md'
import {
  faBath,
  faClone,
  faFileDownload,
  faTrash
} from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'local/organisms/WargameList',
  component: WargameList,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const menus = [
  {
    onClick: (title: string): void => window.alert(`Clean copy ${title}`),
    icon: faBath,
    title: 'Save clean copy of wargame (no messages)',
    label: 'Clean copy'
  },
  {
    onClick: (title: string): void => window.alert(`Duplicate ${title}`),
    icon: faClone,
    title: 'Duplicate wargame',
    label: 'Duplicate'
  },
  {
    onClick: (title: string): void => window.alert(`Export ${title}`),
    icon: faFileDownload,
    title: 'Export wargame',
    label: 'Export'
  },
  {
    onClick: (title: string): void => window.alert(`Delete ${title}`),
    icon: faTrash,
    title: 'Delete wargame',
    label: 'Delete'
  }
]

const wargames = [
  {
    title: 'Wargame A',
    name: 'http://localhost/wargame-a',
    shortName: 'wargame-a',
    initiated: true
  },
  {
    title: 'Wargame B',
    name: 'http://localhost/wargame-b',
    shortName: 'wargame-b',
    initiated: false
  },
  {
    title: 'Wargame C',
    name: 'http://localhost/wargame-c',
    shortName: 'wargame-c',
    initiated: true
  }
]

const onGameClick = (title: string): void => {
  window.alert(`Click on ${title}`)
}
const toggleAction = (title: string): void => {
  window.alert(`Click on ${title}`)
}

export const Default: React.FC = () => (
  <WargameList
    useCustomScroll
    wargames={wargames}
    menuConfig={menus}
    onGameClick={onGameClick}
    toggleAction={toggleAction}
  />
)

const lotsWargames = [
  {
    title: 'Wargame A',
    name: 'http://localhost/wargame-a',
    shortName: 'wargame-a',
    initiated: true
  },
  {
    title: 'Wargame B',
    name: 'http://localhost/wargame-b',
    shortName: 'wargame-b',
    initiated: false
  },
  {
    title: 'Wargame C',
    name: 'http://localhost/wargame-c',
    shortName: 'wargame-c',
    initiated: true
  },
  {
    title: 'Wargame E',
    name: 'http://localhost/wargame-a',
    shortName: 'wargame-a',
    initiated: true
  },
  {
    title: 'Wargame F',
    name: 'http://localhost/wargame-b',
    shortName: 'wargame-b',
    initiated: false
  },
  {
    title: 'Wargame G',
    name: 'http://localhost/wargame-c',
    shortName: 'wargame-c',
    initiated: true
  },
  {
    title: 'Wargame H',
    name: 'http://localhost/wargame-a',
    shortName: 'wargame-a',
    initiated: true
  },
  {
    title: 'Wargame I',
    name: 'http://localhost/wargame-b',
    shortName: 'wargame-b',
    initiated: false
  },
  {
    title: 'Wargame J',
    name: 'http://localhost/wargame-c',
    shortName: 'wargame-c',
    initiated: true
  },
  {
    title: 'Wargame K',
    name: 'http://localhost/wargame-a',
    shortName: 'wargame-a',
    initiated: true
  },
  {
    title: 'Wargame L',
    name: 'http://localhost/wargame-b',
    shortName: 'wargame-b',
    initiated: false
  },
  {
    title: 'Wargame M',
    name: 'http://localhost/wargame-c',
    shortName: 'wargame-c',
    initiated: true
  }
]

export const LotsOfWargames: React.FC = () => (
  <WargameList
    useCustomScroll
    wargames={lotsWargames}
    menuConfig={menus}
    onGameClick={onGameClick}
    toggleAction={toggleAction}
  />
)
export const LotsOfWargamesCustomScroll: React.FC = () => (
  <WargameList
    useCustomScroll
    wargames={lotsWargames}
    menuConfig={menus}
    onGameClick={onGameClick}
    toggleAction={toggleAction}
  />
)
