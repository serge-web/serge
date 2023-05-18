import React from 'react'
import excellentExport from 'excellentexport'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExcelExport = ({ exp, index }) => {
  const ids = {
    xlsx: `export_button_${index}_xlsx`,
    xls: `export_button_${index}_xls`,
    csv: `export_button_${index}_csv`
  }

  const hreflink = window.location.href

  const data = exp.data.filter(dataItem => dataItem.items.length > 1).map(dataItem => {
    return ({
      name: dataItem.title,
      from: {
        arrayHasHeader: true,
        array: dataItem.items
      }
    })
  })

  const generateFile = (format) => {
    return excellentExport.convert({
      anchor: ids[format],
      filename: exp.title,
      format
    }, data)
  }

  if (data.length === 0) return <span className='badge badge-warning'>No data to export</span>

  return (
    <div>
      <a
        href={hreflink}
        className='link link--secondary'
        onClick={e => generateFile('xlsx')}
        id={ids.xlsx}
      >
        <FontAwesomeIcon icon={faFileDownload}/>Download .xlsx
      </a>
    </div>
  )
}

export default ExcelExport
