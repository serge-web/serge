import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ImageDropzone } from '@serge/components'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { saveSergeLogo } from '../../ActionsAndReducers/sergeInfo/sergeInfo_ActionCreators'
import { addNotification } from '../../ActionsAndReducers/Notification/Notification_ActionCreators'
import '@serge/themes/App.scss'

const AddLogoModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector(state => state.currentModal)

  const saveLogo = (src, file) => {
    dispatch(saveSergeLogo(file))
    dispatch(modalAction.close())
  }

  const onRejected = () => {
    dispatch(addNotification('Not accepted.', 'warning'))
  }

  if (!currentModal.open) return false

  return (
    <ModalWrapper>
      <div className="display-text-wrapper">
        <ImageDropzone
          title="Add an image"
          limit={100000}
          onChange={saveLogo}
          onRejected={onRejected}
        />
      </div>
    </ModalWrapper>
  )
}
export default AddLogoModal
