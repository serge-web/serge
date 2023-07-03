import { faBath, faClone, faFileDownload, faTrash } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    onClick: (): void => window.alert('Click on menu #1'),
    icon: faBath,
    title: 'Save clean copy of wargame (no messages)',
    label: 'Clean copy'
  },
  {
    onClick: (): void => window.alert('Click on menu #2'),
    icon: faClone,
    title: 'Duplicate wargame',
    label: 'Duplicate'
  },
  {
    onClick: (): void => window.alert('Click on menu #3'),
    icon: faFileDownload,
    title: 'Export wargame',
    label: 'Export'
  },
  {
    onClick: (): void => window.alert('Click on menu #4'),
    icon: faTrash,
    title: 'Delete wargame',
    label: 'Delete'
  }
]
