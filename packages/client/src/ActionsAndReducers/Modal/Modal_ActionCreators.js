import ActionConstant from '../ActionConstants.js';

export const modalAction = {
  open: (openModal, data) => ({
    type: ActionConstant.OPEN_MODAL,
    payload: {
      open: true,
      modal: openModal,
      data: data || null
    },
  }),

  close: () => ({
    type: ActionConstant.CLOSE_MODAL,
    payload: {
      open: false,
      modal: '',
    },
  })
};
