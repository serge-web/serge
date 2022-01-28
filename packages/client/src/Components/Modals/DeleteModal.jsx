import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonList } from '@serge/components'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { deleteMessage } from '../../ActionsAndReducers/dbMessages/messages_ActionCreators'
import { deleteMessageType } from '../../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import { setPreviewSchema, setSelectedSchema } from '../../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import { MESSAGE_TEMPLATE_ROUTE } from '../../consts'
import '@serge/themes/App.scss'

const DeleteModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector(state => state.currentModal)
  const messages = useSelector(state => state.messages)
  const umpireMenu = useSelector(state => state.umpireMenu)
  const currentViewURI = useSelector(state => state.currentViewURI)

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDeleteMessage = () => {
    if (currentViewURI === MESSAGE_TEMPLATE_ROUTE) {
      dispatch(deleteMessageType(umpireMenu.selectedSchemaID))
      dispatch(setPreviewSchema(''))
      dispatch(setSelectedSchema(''))
    } else {
      dispatch(deleteMessage(messages.messagePreviewId))
    }
    dispatch(modalAction.close())
  }

  if (!currentModal.open) return false

  const buttons = [{
    name: 'cancel',
    color: 'secondary',
    onClick: onHideModal,
    children: 'Cancel'
  }, {
    name: 'delete',
    color: 'primary',
    onClick: onDeleteMessage,
    children: 'Delete'
  }]

  return (
    <ModalWrapper>
      <div className="display-text-wrapper">
        <h3>Delete</h3>
        <p>This will permanently remove the message.<br/>Are you sure?</p>
        <div className="buttons">
          <ButtonList buttons={buttons} />
        </div>
      </div>
    </ModalWrapper>
  )
}

export default DeleteModal
