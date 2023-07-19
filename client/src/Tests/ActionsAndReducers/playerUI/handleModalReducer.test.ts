import { describe, it, expect } from '@jest/globals'
import { openModal, closeModal } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import reducer, { initialState } from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import { OPEN_MODAL, CLOSE_MODAL } from 'src/config'

describe('PlayerUi Modal Actions', () => {
  it('should set a Modal Name', () => {
    const modal = 'MyTestModal'
    const expectedAction = {
      type: OPEN_MODAL,
      payload: modal
    }
    expect(openModal(modal)).toEqual(expectedAction)
  })
  it('should unset Modal Name', () => {
    const expectedAction = {
      type: CLOSE_MODAL
    }
    expect(closeModal()).toEqual(expectedAction)
  })
})

describe('PlayerUi Modal Reducer', () => {
  // it('should return the initial state', () => {
  //   expect(reducer(undefined, {})).toEqual(initialState)
  // })

  it('should handle OPEN_MODAL and set modalOpened', () => {
    const modalName = 'My Test Modal'
    expect(reducer(undefined, openModal(modalName))).toEqual({
      ...initialState,
      modalOpened: modalName
    })
  })

  it('should handle CLOSE_MODAL and unset modalOpened', () => {
    expect(reducer({
      ...initialState,
      modalOpened: 'My Test Modal'
    }, closeModal())).toEqual({
      ...initialState,
      modalOpened: undefined
    })
  })
})
