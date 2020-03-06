import React from 'react'
import { connect } from 'react-redux'
import { createMessageExportItem } from '../ActionsAndReducers/ExportItems/ExportItems_ActionsCreators'
import ExcelExport from '../Components/ExcelExport'
import ExportItem from '../Components/ExportItem'
import ExportView from './ExportView'

const ExportMessages = ({ wargame, exportItems, exportWargameMessages }) => {
  return (
    <ExportView>
      <h2>Export messages</h2>
      <span className="link link--noIcon" onClick={() => { exportWargameMessages(wargame) }}>Create Export</span>
      <ul>
        {exportItems.map((item, key) => (
          <ExportItem item={item} key={key}>
            <ExcelExport exp={item} index={key}/>
          </ExportItem>
        ))}
      </ul>
    </ExportView>
  )
}

const mapDispatchToProps = dispatch => ({
  exportWargameMessages: wargame => {
    dispatch(createMessageExportItem(wargame))
  }
})

const mapStateToProps = ({ wargame, exportItems }) => ({
  wargame, exportItems: exportItems.filter(item => item.type === 'messages')
})

export default connect(mapStateToProps, mapDispatchToProps)(ExportMessages)
