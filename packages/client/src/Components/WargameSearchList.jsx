import React from 'react'
import { useDispatch } from 'react-redux'
import {
  editWargame,
  cleanWargame,
  exportWargame,
  duplicateWargame,
  updateWargameVisible
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { faBath, faClone, faFileDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { EXPORT_ROUTE, GAME_SETUP_ROUTE } from '../consts'
import { WargameList } from '@serge/components'
import '@serge/themes/App.scss'

const WargameSearchList = ({ listData: wargames }) => {
  const dispatch = useDispatch()
  const onGameClick = title => {
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
