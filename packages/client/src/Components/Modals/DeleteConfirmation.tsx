import { Confirm } from '@serge/components'
import { RootState, ForceData, ModalData, RoleType, PlatformType } from '@serge/custom-types'
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
  const currentModal = useSelector((state: RootState) => state.currentModal)
  const wargame = useSelector((state: RootState) => state.wargame)

  if (!currentModal.data) {
    return <></>
  }

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDelete = () => {
    const { type, data } = currentModal.data as ModalData
    const curTab = wargame.currentTab

    switch (type) {
      case 'force': {
        if (curTab && wargame.currentWargame) {
          const isUmpire = wargame.data[curTab].forces.find((f: ForceData) => f.uniqid === data).umpire
          if (isUmpire) return
          dispatch(deleteSelectedForce(wargame.currentWargame, data as string))
        }
        break
      }
      case 'asset': {
        dispatch(deleteSelectedAsset(data))
        break
      }
      case 'channel': {
        if (wargame.currentWargame) dispatch(deleteSelectedChannel(wargame.currentWargame, data as string))
        break
      }
      case 'role': {
        if (wargame.currentWargame) dispatch(deleteSelectedRole(wargame.currentWargame, data as RoleType))
        break
      }
      case 'games': {
        dispatch(clearWargames())
        break
      }
      case 'platformType': {
        if (wargame.currentWargame) dispatch(deletePlatformType(wargame.currentWargame, data as PlatformType))
        break
      }
      default: {
        console.warn('delete handler not provided for:', type)
      }
    }

    dispatch(modalAction.close())
  }

  if (!currentModal.open) return <></>

  const { customMessages, type } = currentModal.data as ModalData

  return (
    <Confirm
      isOpen={currentModal.open}
      title={customMessages ? customMessages.title : `Delete ${type}`}
      message={customMessages ? customMessages.message : 'This action is permanent. Are you sure?'}
      cancelBtnText='Cancel'
      confirmBtnText='Delete'
      onCancel={onHideModal}
      onConfirm={onDelete}
    />
  )
}
export default DeleteModal
