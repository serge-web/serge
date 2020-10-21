import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ImageDropzone } from '@serge/components'
import { saveIcon } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import '@serge/themes/App.scss'

const AddIconModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector(state => state.currentModal)

  const onSaveIcon = (src, file) => {
    dispatch(saveIcon(file))
    dispatch(modalAction.close())
  }

  if (!currentModal.open) return false

  return (
    <ModalWrapper>
      <div className="display-text-wrapper">
        <ImageDropzone
          limit={20000}
          onChange={onSaveIcon}
        />
      </div>
    </ModalWrapper>
  )
}
export default AddIconModal
