import { useDispatch } from 'react-redux'
import {
  editWargame,
  cleanWargame,
  exportWargame,
  setCurrentTab,
  duplicateWargame,
  updateWargameVisible,
  downloadWargame
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { faBath, faClone, faFileDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { EXPORT_ROUTE, GAME_SETUP_ROUTE, GAME_START_TAB } from 'src/config'
import WargameList from './local/organisms/wargame-list'
import 'src/themes/App.scss'

const WargameSearchList = ({ listData: wargames }) => {
  const dispatch = useDispatch()
  const onGameClick = title => {
    dispatch(setCurrentTab(GAME_START_TAB))
    dispatch(editWargame(title))
    dispatch(setCurrentViewFromURI(GAME_SETUP_ROUTE))
  }
  const onExportWargame = title => {
    dispatch(exportWargame(title))
    dispatch(setCurrentViewFromURI(EXPORT_ROUTE))
  }
  const onCleanWargame = title => {
    dispatch(cleanWargame(title))
  }
  const onDuplicateWargame = title => {
    dispatch(duplicateWargame(title))
  }
  const onDeleteWargame = title => {
    dispatch(modalAction.open('deleteWargame', title))
  }

  // Note: when the download button is cicked, the SQLITE database be downloaded in a zip format
  // Handle what happens when the "Download" option is clicked on
  const onDownloadWargame = title => {
    // dispatch the downloadWargame action to download the wargame with the given title
    dispatch(downloadWargame(title))
  }
  const onShowHideWargame = title => {
    dispatch(updateWargameVisible(title))
  }

  const menus = [
    {
      onClick: onCleanWargame,
      icon: faBath,
      title: 'Save clean copy of wargame (no messages)',
      label: 'Clean copy'
    },
    {
      onClick: onDuplicateWargame,
      icon: faClone,
      title: 'Duplicate wargame',
      label: 'Duplicate'
    },
    {
      onClick: onExportWargame,
      icon: faFileDownload,
      title: 'Export wargame',
      label: 'Export'
    },
    {
      onClick: onDownloadWargame,
      icon: faFileDownload,
      title: 'Download wargame',
      label: 'Download'
    },
    {
      onClick: onDeleteWargame,
      icon: faTrash,
      title: 'Delete wargame',
      label: 'Delete'
    }
  ]
  return (
    <WargameList
      wargames={wargames}
      useCustomScroll={true}
      menuConfig={menus}
      onGameClick={onGameClick}
      toggleAction={onShowHideWargame}
    />
  )
}

export default WargameSearchList
