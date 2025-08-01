import Confirm from '../local/atoms/confirm'
import { ForceData, ModalData, RoleType, RootState } from 'src/custom-types'
import 'src/themes/App.scss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearWargames,
  deleteSelectedChannel,
  deleteSelectedForce,
  deleteSelectedRole,
  deleteSelectedTemplate
} from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'

const DeleteModal: React.FC = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector((state: RootState) => state.currentModal)
  const wargame = useSelector((state: RootState) => state.wargame)

  // check we have necessary data nugget
  if (!currentModal.data) {
    console.warn('Warning: Delete Confirmation form lacks ModalData data element')
    return <></>
  }

  const { type, data, customMessages } = currentModal.data as ModalData
  const [message] = useState<string>(customMessages && customMessages.message)

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDelete = () => {
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
      case 'channel': {
        if (wargame.currentWargame) dispatch(deleteSelectedChannel(wargame.currentWargame, data as string))
        break
      }
      case 'template': {
        if (wargame.currentWargame) dispatch(deleteSelectedTemplate(wargame.currentWargame, data as string))
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
      default: {
        console.warn('delete handler not provided for:', type)
      }
    }

    dispatch(modalAction.close())
  }

  if (!currentModal.open) return <></>

  return (
    <Confirm
      isOpen={currentModal.open}
      title={customMessages ? customMessages.title : `Delete ${type}`}
      message={customMessages ? message : 'This action is permanent. Are you sure?'}
      cancelBtnText='Cancel'
      confirmBtnText='Delete'
      onCancel={onHideModal}
      onConfirm={onDelete}
    />
  )
}

export default DeleteModal
