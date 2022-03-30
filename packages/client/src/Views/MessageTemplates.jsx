import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CREATE_TEMPLATE_ROUTE,
  EDIT_TEMPLATE_ROUTE,
  MESSAGE_CREATOR_BASE_ROUTE,
  MESSAGE_TEMPLATE_ROUTE
} from '../consts'
import { SearchList, Button, ButtonList } from '@serge/components'
import SidebarAdmin from '../Components/SidebarAdmin'
import JsonCreator from '../Components/JsonCreator'
import { getAllMessageTypes, duplicateMessageType } from '../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setSelectedSchema } from '../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { formatShortDate } from '@serge/helpers'
import '@serge/themes/App.scss'

const MessageTemplates = () => {
  const dispatch = useDispatch()
  const messageTypes = useSelector(state => state.messageTypes)
  const umpireMenu = useSelector(state => state.umpireMenu)

  const setView = route => {
    dispatch(setCurrentViewFromURI(route))
  }

  const duplicateTemplate = () => {
    dispatch(duplicateMessageType(umpireMenu.selectedSchemaID))
  }

  const deleteTemplate = () => {
    dispatch(modalAction.open('delete'))
  }

  const setSelectedSchemaId = (item) => {
    dispatch(setSelectedSchema(item._id))
  }

  const activeRow = item => {
    return item._id === umpireMenu.selectedSchemaID
  }

  const rowLabel = item => {
    const title = item.details.title ? item.details.title : '[Title missing]'
    const date = formatShortDate(item.lastUpdated)
    return `${title} - ${date}`
  }

  const rowFilter = (item, query) => {
    const { details } = item
    return (
      details.title === '' ||
      typeof details.title === 'undefined') ||
      (details.title || '').toLowerCase().includes(query.toLowerCase()
      )
  }

  const createSearchListSection = () => {
    return [
      <Button
        onClick={() => setView(`${MESSAGE_CREATOR_BASE_ROUTE}${CREATE_TEMPLATE_ROUTE}`)}
        color="secondary"
        icon="add"
        key="templates"
        fullWidth
      >
        Create new template
      </Button>,
      <SearchList
        key="searchlist"
        listData={messageTypes.messages}
        setSelected={setSelectedSchemaId}
        placeholder="Select template"
        activeRow={activeRow}
        rowLabel={rowLabel}
        rowFilter={rowFilter}
      />
    ]
  }

  const createTemplatesActions = () => {
    const actions = [{
      onClick: () => setView(`${MESSAGE_CREATOR_BASE_ROUTE}${EDIT_TEMPLATE_ROUTE}`),
      color: 'secondary',
      fullWidth: true,
      icon: 'edit',
      children: 'Edit'
    }, {
      onClick: duplicateTemplate,
      color: 'secondary',
      fullWidth: true,
      icon: 'copy',
      children: 'Duplicate'
    }, {
      onClick: deleteTemplate,
      color: 'secondary',
      fullWidth: true,
      icon: 'delete',
      children: 'Delete'
    }]
    return umpireMenu.selectedSchemaID.length > 0
      ? <ButtonList buttons={actions} />
      : null
  }

  useEffect(() => {
    dispatch(getAllMessageTypes())
    dispatch(setSelectedSchema(''))
  }, [])

  return (
    <div className="view-wrapper" id="umpire">
      <SidebarAdmin activeTab={MESSAGE_TEMPLATE_ROUTE}/>
      <div className="flex-content flex-content--big flex-content--last contain-message-templates">
        <h1>Message Templates</h1>
        <div className="flex-content-wrapper">
          <div id="selection" className="flex-content">
            {createSearchListSection()}
          </div>
          <div id="preview" className="flex-content flex-content--big">
            <p className="heading--sml">Preview</p>
            <JsonCreator
              id="preview"
              disabled={true}
              previewForm={true}
            />
          </div>
          <div id="function" className="flex-content flex-content--sml">
            <p className="heading--sml">Actions</p>
            <div className="template-actions">
              {createTemplatesActions()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageTemplates
