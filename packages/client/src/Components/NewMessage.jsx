import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'
import MessageCreator from '../Components/MessageCreator/MessageCreator'
import DropdownInput from '../Components/Inputs/DropdownInput'
import '@serge/themes/App.scss'
import { usePrevious } from '@serge/helpers'

const NewMessage = props => {
  const { templates, curChannel, privateMessage, orderableChannel, confirmCancel } = props
  const prevTemplates = usePrevious(templates)
  const [selectedSchema, setSelectedSchema] = useState(null)
  const tab = useRef(null)

  const mapTemplateToDropdown = (item) => ({
    value: JSON.stringify(item.details),
    option: item.title
  })
  const setTemplate = val => {
    setSelectedSchema(JSON.parse(val))
  }

  const allTemplates = (templates.length && templates[0] && templates.map(mapTemplateToDropdown)) || []

  const classes = `message-editor new-message-creator wrap ${orderableChannel ? 'new-message-orderable' : ''}`

  useEffect(() => {
    setSelectedSchema(null)
  }, [curChannel])

  useEffect(() => {
    if (!prevTemplates) {
      setSelectedSchema(templates[0].details)
    }
  }, [templates, prevTemplates])

  const onMessageSend = (e) => {
    setTimeout(() => {
      tab.current.handleTriggerClick(e)
    }, 0)
  }

  const onCancel = (e) => {
    setTimeout(() => {
      tab.current.handleTriggerClick(e)
    }, 0)
  }

  return (
    <div className={classes} style={{ zIndex: 1 }}>
      <Collapsible
        trigger={'New Message'}
        transitionTime={200}
        easing={'ease-in-out'}
        ref={tab}
      >
        {
          allTemplates.length > 1 && (
            <DropdownInput
              updateStore={setTemplate}
              selectOptions={allTemplates}
              placeholder="Select message"
              className="message-input"
              data={JSON.stringify(selectedSchema)}
            />
          )
        }
        <MessageCreator
          schema={selectedSchema}
          curChannel={curChannel}
          confirmCancel={!!confirmCancel}
          privateMessage={privateMessage}
          onMessageSend={onMessageSend}
          onCancel={onCancel}
        />
      </Collapsible>
    </div>
  )
}
export default NewMessage

NewMessage.propTypes = {
  orderableChannel: PropTypes.bool,
  // whether user has to confirm cancelling a new document
  confirmCancel: PropTypes.bool,
  templates: PropTypes.array.isRequired,
  curChannel: PropTypes.string.isRequired,
  privateMessage: PropTypes.bool.isRequired
}
