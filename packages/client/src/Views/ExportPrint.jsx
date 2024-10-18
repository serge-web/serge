import React from 'react'
import { connect } from 'react-redux'

import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'

const ExportPrint = ({ exportItem, notFound }) => {
  if (!exportItem) {
    notFound()
    return
  }

  return (
    <div className='print-canvas'>
      <section>
        <h2>{exportItem.title}</h2>
        <hr/>
        <h4>Wargame: {exportItem.wargame}</h4>
        <h4>Type: {exportItem.type}</h4>
      </section>
      { exportItem.data.map((data, pageIndex) => (
        <section key={pageIndex}>
          <h2>{exportItem.wargame}</h2>
          <h4>{data.title}</h4>
          <hr/>
          <table>
            <tbody>
              {data.items.map((row, key) => (
                <tr key={key}>
                  {row.map((col, colKey) => (key ? (<td key={colKey}>{col}</td>) : (<th key={colKey}>{col}</th>)))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  )
}

const mapStateToProps = ({ exportItems, currentViewURI }) => ({
  exportItem: exportItems.data[currentViewURI.split('/')[4]] || null
})

const mapDispatchToProps = dispatch => ({
  notFound: () => { dispatch(setCurrentViewFromURI('/serge/export')) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExportPrint)
