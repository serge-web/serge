import React from 'react'
import uniqid from 'uniqid'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonList } from '@serge/components'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import {
  refreshChannel,
  setTabSaved,
  addNewChannel,
  setSelectedChannel
} from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import 'src/themes/App.scss'
import { RootState } from 'src/custom-types'

const UnsavedChannelModal = () => {
  const dispatch = useDispatch()
  const wargame = useSelector((state: RootState) => state.wargame)
  const currentModal = useSelector((state: RootState) => state.currentModal)

  const dontSave = () => {
    if (currentModal.data as string === 'create-new') {
      const id = `channel-${uniqid.time()}`
      dispatch(addNewChannel({ name: id, uniqid: id }))
      dispatch(setSelectedChannel({ name: id, uniqid: id }))
    } else {
      if (wargame.currentWargame) dispatch(refreshChannel(wargame.currentWargame, `${currentModal.data}`))
    }

    dispatch(setTabSaved())
    dispatch(modalAction.close())
  }

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  if (!currentModal.open) return <></>

  const buttons = [{
    name: 'cancel',
    color: 'secondary',
    onClick: onHideModal,
    children: 'Cancel'
  }, {
    name: 'continue',
    color: 'primary',
    onClick: dontSave,
    children: 'Don\'t save'
  }]

  return (
    <ModalWrapper>
      <div className='display-text-wrapper'>
        <h3>Are you sure?</h3>
        <p>There are unsaved changes.</p>
        <div className='buttons'>
          <ButtonList buttons={buttons} />
        </div>
      </div>
    </ModalWrapper>
  )
}

export default UnsavedChannelModal
