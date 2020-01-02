import React from 'react'
import { createWargame, createWargameListItemObject } from '../api/wargames_api'
import { saveAllWargameNames } from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { connect } from 'react-redux'
import { databasePath } from '../consts'

const ImportWargame = ({ onWargameImport }) => {
  const onWargameLoad = ({ target }) => {
    if (target && target.result) {
      let wargame
      try {
        wargame = JSON.parse(target.result)
      } catch (e) {
        wargame = null
      }

      onWargameImport(wargame)
    }
  }
  const handleChange = e => {
    const files = e.target.files
    if (files && files.length) {
      for (const file of files) {
        const fileReader = new window.FileReader()
        fileReader.onloadend = onWargameLoad
        fileReader.readAsText(file)
      }
    }
  }

  return (
    <div className='se-import'>
      <form>
        <label htmlFor="wargame-json-file-input">
          <span className="link link--noIcon">IMPORT</span>
        </label>
        <input
          type='file'
          id="wargame-json-file-input"
          onChange={ handleChange }
          accept=".json"
        />
      </form>
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch, { wargameList }) => ({
  onWargameImport: wargame => {
    createWargame(dispatch, wargame).then(res => {
      dispatch(saveAllWargameNames([
        ...wargameList,
        createWargameListItemObject(databasePath + wargame.name, res)
      ]))
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ImportWargame)
