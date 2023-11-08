import { ExportItem } from './export-items'

import {
  CREATE_EXPORT_ITEM, LOADER
} from 'src/config'

import { Dispatch } from 'react'

interface CreateExportItemAction {
  type: typeof CREATE_EXPORT_ITEM
  payload: ExportItem
}
interface CreateExportItemLoading {
  type: typeof LOADER
}

export type ExportItemsUiActionTypes = CreateExportItemAction | CreateExportItemLoading
export type ExportItemsDispatch = Dispatch<ExportItemsUiActionTypes>
