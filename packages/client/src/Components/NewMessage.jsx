import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'
import MessageCreator from '../Components/MessageCreator.jsx'
import DropdownInput from '../Components/Inputs/DropdownInput'
import '@serge/themes/App.scss'

const NewMessage = props => {
  const { templates, curChannel, privateMessage, orderableChannel } = props
  const [selectedSchema, setSelectedSchema] = useState(null)

  const mapTemplateToDropdown = (item) => ({
    value: JSON.stringify(item.details),
    option: item.title
  })
  const setTemplate = val => {
    setSelectedSchema(JSON.parse(val))
  }

  const allTemplates = templates.map(mapTemplateToDropdown)
  const classes = `new-message-creator wrap ${orderableChannel ? 'new-message-orderable' : ''}`

  useEffect(() => {
    setSelectedSchema(null)
  }, [curChannel])

  useEffect(() => {
    setSelectedSchema(templates[0].details)
  }, [templates])

  return (
    <div className={classes}>
      <Collapsible
        trigger={'New Message'}
        transitionTime={200}
        easing={'ease-in-out'}
      >
        {
          allTemplates.length > 1 && (
            <DropdownInput
              updateStore={setTemplate}
              selectOptions={allTemplates}
              placeholder="Select message"
              className="message-input"
            />
          )
        }
        <MessageCreator
          schema={selectedSchema}
          curChannel={curChannel}
          privateMessage={privateMessage}
        />
      </Collapsible>
    </div>
  )
}
export default NewMessage

NewMessage.propTypes = {
  orderableChannel: PropTypes.bool,
  templates: PropTypes.array.isRequired,
  curChannel: PropTypes.string.isRequired,
  privateMessage: PropTypes.bool.isRequired
}
