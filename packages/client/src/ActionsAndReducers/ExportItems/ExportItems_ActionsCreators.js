import ActionConstant from '../ActionConstants';

export const createExportItem = (exportData) => ({
  type: ActionConstant.CREATE_EXPORT_ITEM,
  payload: exportData
});
