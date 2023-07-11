import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ImageDropzone } from '@serge/components'
import { saveIcon } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import 'src/themes/App.scss'
import { RootState } from 'src/custom-types'

const AddIconModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector((state: RootState) => state.currentModal)

  const onSaveIcon = (file: string) => {
    dispatch(saveIcon(file))
    dispatch(modalAction.close())
  }

  if (!currentModal.open) return <></>

  return (
    <ModalWrapper>
      <div className='display-text-wrapper'>
        <ImageDropzone
          limit={20000}
          onChange={onSaveIcon}
        />
      </div>
    </ModalWrapper>
  )
}
export default AddIconModal
