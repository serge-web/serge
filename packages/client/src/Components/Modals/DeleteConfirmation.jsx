import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonList } from '@serge/components'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { deleteSelectedForce, deleteSelectedChannel, clearWargames, deletePlatformType, deleteSelectedAsset } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import '@serge/themes/App.scss'

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

  const buttons = [{
    name: 'cancel',
    color: 'secondary',
    onClick: onHideModal,
    children: 'Cancel'
  }, {
    name: 'delete',
    color: 'primary',
    onClick: onDelete,
    children: 'Delete'
  }]

  return (
    <ModalWrapper>
      <div className="display-text-wrapper">
        {customMessages ? <h3>{customMessages.title}</h3> : <h3>Delete {currentModal.data.type}</h3>}
        {customMessages ? <p>{customMessages.message}</p> : <p>This action is permanent.<br />Are you sure?</p>}
        <div className="buttons">
          <ButtonList buttons={buttons} />
        </div>
      </div>
    </ModalWrapper>
  )
}
export default DeleteModal
