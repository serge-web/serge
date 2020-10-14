import React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

// Import component files
import WargameList from './index'
import docs from './README.md'
import { faBath, faClone, faFileDownload, faTrash } from '@fortawesome/free-solid-svg-icons'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff'
})

export default {
  title: 'local/organisms/WargameList',
  component: WargameList,
  decorators: [(story: Function): React.ReactElement => (
    <BlueContainer>{ story() }</BlueContainer>
  )],
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

const wargames = [{
  title: 'Wargame A',
  name: 'http://localhost/wargame-a',
  initiated: true
}, {
  title: 'Wargame B',
  name: 'http://localhost/wargame-b',
  initiated: false
}, {
  title: 'Wargame C',
  name: 'http://localhost/wargame-c',
  initiated: true
}]

const onGameClick = (title: string): void => {
  window.alert(`Click on ${title}`)
}

export const Default: React.FC = () => (
  <WargameList
    wargames={wargames}
    menuConfig={menus}
    onGameClick={onGameClick}
  />
)
