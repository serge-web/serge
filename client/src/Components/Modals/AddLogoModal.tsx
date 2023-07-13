import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import ImageDropzone from '../local/atoms/image-dropzone'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { saveSergeLogo } from '../../ActionsAndReducers/sergeInfo/sergeInfo_ActionCreators'
import { addNotification } from '../../ActionsAndReducers/Notification/Notification_ActionCreators'
import 'src/themes/App.scss'
import { RootState } from 'src/custom-types'

const AddLogoModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector((state: RootState) => state.currentModal)

  const saveLogo = (_: string, file: File) => {
    dispatch(saveSergeLogo(file))
    dispatch(modalAction.close())
  }

  const onRejected = () => {
    dispatch(addNotification('Not accepted.', 'warning'))
  }

  if (!currentModal.open) return <></>

  return (
    <ModalWrapper>
      <div className='display-text-wrapper'>
        <ImageDropzone
          title='Add an image'
          limit={100000}
          onChange={saveLogo}
          onRejected={onRejected}
        />
      </div>
    </ModalWrapper>
  )
}
export default AddLogoModal
