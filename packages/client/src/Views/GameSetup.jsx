import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'

import {
  setCurrentTab,
  saveWargameTitle
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'

import TabbedView from './TabbedView'

import { ProgressIndicator } from '@serge/components'

import Link from '../Components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSave, faHourglassStart } from '@fortawesome/free-solid-svg-icons'

import _ from 'lodash'
import checkUnique from '../Helpers/checkUnique'

import classNames from 'classnames'
import TextInput from '../Components/Inputs/TextInput'
import { addNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { ADMIN_ROUTE } from '../consts'

const GameSetup = ({ wargame, dispatch }) => {
  const [newWargameName, setNewWargameName] = useState(null)

  const saveWargame = () => {
    let wargameNames = wargame.wargameList.map(game => game.title)
    wargameNames = _.pull(wargameNames, wargame.wargameTitle)

    if (!checkUnique(newWargameName, wargameNames)) {
      dispatch(addNotification('Wargame name is not unique.', 'warning'))
      return
    }

    if (!checkWargameNameSaveable()) return

    if (typeof newWargameName === 'string' && newWargameName.length > 0) {
      dispatch(saveWargameTitle(wargame.currentWargame, newWargameName))
    }

    if (newWargameName === null || newWargameName.length === 0) {
      // TODO: We should replace this with a notification component
      window.alert('no channel name')
    }
  }

  const currentTabSetter = tab => dispatch(setCurrentTab(tab))

  // Loop through wargame data and build up an array of tab objects
  const allTabs = () => Object.entries(wargame.data).map(tab => {
    console.log('running')
    return {
      name: tab[0],
      complete: tab[1].complete
    }
  })

  const tabs = useRef([])

  // Only do this once
  useEffect(() => {
    tabs.current = allTabs()
  }, [])

  const updateWargameTitle = name => setNewWargameName(name)

  const checkWargameNameSaveable = () => {
    if (newWargameName === wargame.wargameTitle) return false
    if (newWargameName === null || newWargameName.length === 0) return false
    return true
  }

  const checkAllSaved = () => {
    return Object.values(wargame.data).every(item => !item.dirty)
  }

  const notSavedNotification = () => {
    if (!checkAllSaved()) {
      dispatch(addNotification('Unsaved changes', 'warning'))
    }
  }

  const wargameTitle = typeof newWargameName === 'string' ? newWargameName : wargame.wargameTitle

  return (
    <>
      <div className="view-wrapper view-wrapper-gamesetup first-step">
        <div id="sidebar">
          <Link
            disable={!checkAllSaved()}
            class={classNames({ 'link--disabled': !checkAllSaved() })}
            onClickHandler={notSavedNotification} href={ADMIN_ROUTE} id="home-btn"><FontAwesomeIcon icon={faArrowLeft} size="2x" /></Link>
        </div>
        <div className="flex-content-wrapper flex-content-wrapper--distribute" id="game-setup-head">
          <div className="flex-content flex-content--row">
            <TextInput
              id="title-editable"
              updateStore={updateWargameTitle}
              options={{ numInput: false }}
              data={wargameTitle}
            />
            {checkWargameNameSaveable()
              ? <FontAwesomeIcon className="savewargame-icon" icon={faSave} onClick={saveWargame } size="2x" />
              : false
            }
          </div>
          <ProgressIndicator
            tabs={tabs.current}
            currentTab={wargame.currentTab}
          />
          {wargame.wargameInitiated &&
              <div className="wargame-in-progress-warning">
                <FontAwesomeIcon icon={faHourglassStart} size="1x" />
                <h6>Wargame in progress</h6>
              </div>
          }
        </div>
        <TabbedView
          tabs={wargame.data}
          setCurrentTab={currentTabSetter}
        />
      </div>
    </>
  )
}

// temp use allMessages
const mapStateToProps = ({ wargame }) => ({
  wargame
})

export default connect(mapStateToProps)(GameSetup)
