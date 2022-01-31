import React from 'react'
import uniqid from 'uniqid'
import ModalWrapper from './ModalWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonList } from '@serge/components'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import {
  setSelectedForce,
  setTabSaved,
  addNewForce,
  saveForce,
  refreshForce
} from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { forceTemplate } from '../../consts'
import '@serge/themes/App.scss'

const UnsavedForceModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector(state => state.currentModal)
  const wargame = useSelector(state => state.wargame)

  const dontSave = () => {
    if (currentModal.data === 'create-new') {
      const id = 'force-' + uniqid.time()
      dispatch(addNewForce({ name: id, uniqid: id }))
      dispatch(setSelectedForce({ name: id, uniqid: id }))

      const template = forceTemplate
      template.name = id
      template.uniqid = id

      dispatch(saveForce(wargame.currentWargame, id, template, id))
    } else {
      dispatch(refreshForce(wargame.currentWargame, currentModal.data))
    }
    dispatch(setTabSaved())
    dispatch(modalAction.close())
  }

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  if (!currentModal.open) return false

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
      <div className="display-text-wrapper">
        <h3>Are you sure?</h3>
        <p>There are unsaved changes.</p>
        <div className="buttons">
          <ButtonList buttons={buttons} />
        </div>
      </div>
    </ModalWrapper>
  )
}

export default UnsavedForceModal
