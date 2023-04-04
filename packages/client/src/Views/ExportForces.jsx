import React from 'react'
import { connect } from 'react-redux'
import { createExportItem, showLoading } from '../ActionsAndReducers/ExportItems/ExportItems_ActionsCreators'
import ExportView from './ExportView'
import ExportItem from '../Components//ExportItem'
import ExcelExport from '../Components/ExcelExport'
import HtmlExport from '../Components/HtmlExport'

const ExportForces = ({ wargame, savExportItem, loader, exportItems }) => {
  document.body.style.cursor = loader ? 'progress' : 'default'
  const generateExportItem = () => {
    savExportItem({
      title: `Export ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`,
      wargame: wargame.currentWargame ? wargame.wargameTitle : 'Not Selected',
      data: wargame.data && wargame.data.forces && wargame.data.forces.forces
        ? wargame.data.forces.forces.map(force => ({
          title: force.name,
          items: generateRoleItems(force)
        }))
        : []
    })
  }

  const reOrderFields = (fields) => {
    const _fields = fields
    const nameIndex = _fields.findIndex(i => i === 'name')
    if (nameIndex !== -1) {
      _fields.splice(0, 0, _fields.splice(nameIndex, 1)[0])
    }
    const passwordIndex = _fields.findIndex(i => i === 'password')
    if (nameIndex !== -1) {
      _fields.splice(1, 0, _fields.splice(passwordIndex, 1)[0])
    }
    return _fields
  }

  const generateRoleItems = ({ roles }) => {
    // all excel keys/titles for current tab
    let fields = []
    // rows under titles
    const rows = []

    // construct field list with reordering
    for (const role of roles) {
      for (const key of Object.keys(role)) {
        if (typeof role[key] !== 'object') {
          // check if fields/titles have no current key then add
          if (!fields.includes(key)) {
            fields.push(key)
            fields = reOrderFields(fields)
          }
        }
      }
    }

    // loop on roles
    for (const role of roles) {
      // create row with empty items equal to current fields length
      const row = Array(fields.length).fill('')

      for (const key of Object.keys(role)) {
        if (typeof role[key] !== 'object') {
          // check position for field then add value to rigth position in row
          row[fields.indexOf(key)] = role[key]
        }
      }

      rows.push(row)
    }

    return [
      fields.map(field => (field.toUpperCase())),
      ...rows
    ]
  }

  return (
    <ExportView>
      <h2>Export Forces</h2>
      <span className={ loader ? 'link link--progress' : 'link link--noIcon'} onClick={generateExportItem}>Create Export</span>
      <ul>
        {exportItems.map((item, key) => (
          <ExportItem item={item} key={key}>
            <ExcelExport exp={item} index={key}/>
            <HtmlExport id={item.id}/>
          </ExportItem>
        ))}
      </ul>
    </ExportView>
  )
}

const mapStateToProps = ({ wargame, exportItems }) => ({
  wargame,
  exportItems: exportItems.data.map((item, key) => ({ ...item, id: key })).filter(item => item.type === 'forces'),
  loader: exportItems.loader
})

const mapDispatchToProps = dispatch => ({
  savExportItem: data => {
    dispatch(showLoading())
    dispatch(createExportItem({
      ...data,
      type: 'forces'
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExportForces)
