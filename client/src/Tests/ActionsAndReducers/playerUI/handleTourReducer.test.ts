import { describe, it, expect } from '@jest/globals'
import { openTour } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import reducer, { initialState } from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import { OPEN_TOUR } from 'src/config'

describe('PlayerUi Tour Actions', () => {
  it('should set a payload true', () => {
    const expectedAction = {
      type: OPEN_TOUR,
      payload: true
    }
    expect(openTour(true)).toEqual(expectedAction)
  })
  it('should set a payload false', () => {
    const expectedAction = {
      type: OPEN_TOUR,
      payload: false
    }
    expect(openTour(false)).toEqual(expectedAction)
  })
})

describe('PlayerUi Tour Reducer', () => {
  it('should handle OPEN_TOUR and set tourIsOpen true', () => {
    expect(reducer({
      ...initialState,
      tourIsOpen: false
    }, openTour(true))).toEqual({
      ...initialState,
      tourIsOpen: true
    })
  })
  it('should handle OPEN_TOUR and set tourIsOpen false', () => {
    expect(reducer({
      ...initialState,
      tourIsOpen: true
    }, openTour(false))).toEqual({
      ...initialState,
      tourIsOpen: false
    })
  })
})
