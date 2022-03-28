import { Confirm } from '@serge/components'
import '@serge/themes/App.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearWargames,
  deletePlatformType,
  deleteSelectedAsset,
  deleteSelectedChannel,
  deleteSelectedForce,
  deleteSelectedRole
} from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'

const DeleteModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector(state => state.currentModal)
  const wargame = useSelector(state => state.wargame)

  if (!currentModal.data) {
    return <></>
  }

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDelete = () => {
    const { type, data } = currentModal.data
    const curTab = wargame.currentTab

    switch (type) {
      case 'force': {
        const isUmpire = wargame.data[curTab].forces.find((f) => f.uniqid === data).umpire
        if (isUmpire) return
        dispatch(deleteSelectedForce(wargame.currentWargame, data))
        break
      }
      case 'asset': {
        dispatch(deleteSelectedAsset(data))
        break
      }
      case 'channel': {
        dispatch(deleteSelectedChannel(wargame.currentWargame, data))
        break
      }
      case 'role': {
        dispatch(deleteSelectedRole(data))
        break
      }
      case 'games': {
        dispatch(clearWargames())
        break
      }
      case 'platformType': {
        dispatch(deletePlatformType(wargame.currentWargame, data))
        break
      }
      default: {
        console.warn('delete handler not provided for:', type)
      }
    }

    dispatch(modalAction.close())
  }

  if (!currentModal.open) return false

  const customMessages = currentModal.data.customMessages

  return (
    <Confirm
      isOpen={currentModal.open}
      title={customMessages ? customMessages.title : `Delete ${currentModal.data.type}`}
      message={customMessages ? customMessages.message : 'This action is permanent. Are you sure?'}
      cancelBtnText='Cancel'
      confirmBtnText='Delete'
      onCancel={onHideModal}
      onConfirm={onDelete}
    />
  )
}
export default DeleteModal
