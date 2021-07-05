import { ExportItem } from './export-items'

import {
  CREATE_EXPORT_ITEM
} from '@serge/config'

import {

} from '@serge/custom-types'
import { Dispatch } from 'react'

interface SreateExportItemAction {
  type: typeof CREATE_EXPORT_ITEM,
  payload: ExportItem
}

export type ExportItemsUiActionTypes = SreateExportItemAction
export type ExportItemsDispatch = Dispatch<ExportItemsUiActionTypes>
