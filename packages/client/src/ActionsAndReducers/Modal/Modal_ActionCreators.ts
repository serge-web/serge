import * as ActionConstant from '@serge/config'

export interface ModalActionInterface {
  open: (openModal: string, data: {}) => ({
      open: boolean,
      modal: string,
      data: {}
  }),

  close: () => ({
    payload: {
      open: boolean,
      modal: ''
    }
  })
}

export const modalAction = {
  open: (openModal: string, data: {}) => ({
    type: ActionConstant.OPEN_MODAL,
    payload: {
      open: true,
      modal: openModal,
      data: data || null
    }
  }),

  close: () => ({
    type: ActionConstant.CLOSE_MODAL,
    payload: {
      open: false,
      modal: ''
    }
  })
}
