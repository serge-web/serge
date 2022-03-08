import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonList } from '@serge/components'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { deleteSelectedForce, deleteSelectedChannel, clearWargames, deletePlatformType } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
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

    if (type === 'force') {
      const isUmpire = wargame.data[curTab].forces.find((f) => f.uniqid === data).umpire
      if (isUmpire) return
      dispatch(deleteSelectedForce(wargame.currentWargame, data))
    }

    if (type === 'channel') {
      dispatch(deleteSelectedChannel(wargame.currentWargame, data))
    }

    if (type === 'games') {
      dispatch(clearWargames())
    }

    if (type === 'platformType') {
      dispatch(deletePlatformType(wargame.currentWargame, data))
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
