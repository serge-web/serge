import React from 'react'
import { connect } from 'react-redux'
import { createMessageExportItem, showLoading } from '../../ActionsAndReducers/ExportItems/ExportItems_ActionsCreators'
import ExcelExport from '../../Components/ExcelExport'
import ExportView from '../ExportView'
import ExportItem from '../../Components/ExportItem'
import Props from './types'
import { ExportItem as ExportedItemType, ExportItemsDispatch, Wargame, ExportItemMessages } from 'src/custom-types'
import { EXPORT_ITEM_MESSAGES } from '@serge/config'

const ExportMessages = ({ wargame, exportItems, loader, exportWargameMessages }: Props): React.ReactElement => {
  document.body.style.cursor = loader ? 'progress' : 'default'
  return (
    <ExportView>
      <h2>Export messages</h2>

      <span className={loader ? 'link link--progress' : 'link link--noIcon'} onClick={() => { exportWargameMessages(wargame) }}>Create Export</span>
      <ul>
        
        {
          exportItems.map((item, key) => (
            <ExportItem item={item} key={key}>
              <ExcelExport exp={item} index={key}/>
            </ExportItem>
          ))}
      </ul>
    </ExportView>
  )
}

const mapDispatchToProps = (dispatch: ExportItemsDispatch) => ({
  exportWargameMessages: (wargame: Wargame) => {
    dispatch(showLoading())
    dispatch(createMessageExportItem(wargame))
  }
})

const mapStateToProps = ({ wargame, exportItems }: { wargame: Wargame, exportItems: {data:ExportedItemType[], loader:boolean }}) => ({
  wargame, exportItems: exportItems.data.filter(item => item.type === EXPORT_ITEM_MESSAGES) as ExportItemMessages[], loader: exportItems.loader
})

export default connect(mapStateToProps, mapDispatchToProps)(ExportMessages)
