import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'
import MessageCreator from '../Components/MessageCreator/MessageCreator'
import DropdownInput from '../Components/Inputs/DropdownInput'
import { usePlayerUiState } from '../Store/PlayerUi'
import '@serge/themes/App.scss'

const NewMessage = props => {
  const { templates, curChannel, privateMessage, orderableChannel } = props
  const [selectedSchema, setSelectedSchema] = useState(null)
  const { channels } = usePlayerUiState()
  const isRFI = channels[curChannel].name.toLowerCase().match(/rfis/)

  const mapTemplateToDropdown = (item) => ({
    value: JSON.stringify(item.details),
    option: item.title
  })
  const setTemplate = val => {
    setSelectedSchema(JSON.parse(val))
  }

  const allTemplates = (templates.length && templates[0] && templates.map(mapTemplateToDropdown)) || []

  const classes = `new-message-creator wrap ${orderableChannel ? 'new-message-orderable' : ''}`

  const collapsibleTile = templates.length === 1 && isRFI
    ? 'New Request'
    : 'New Message'

  useEffect(() => {
    setSelectedSchema(null)
  }, [curChannel])

  useEffect(() => {
    const RFISchema = {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          format: 'text',
          options: {
            inputAttributes: {
              placeholder: 'type the title'
            }
          }
        },
        content: {
          type: 'string',
          format: 'textarea',
          options: {
            inputAttributes: {
              placeholder: 'type the content'
            }
          }
        }
      },
      title: 'RFI',
      format: 'grid'
    }
    setSelectedSchema(
      isRFI
        ? RFISchema
        : templates[0].details
    )
  }, [templates])

  return (
    <div className={classes}>
      <Collapsible
        trigger={collapsibleTile}
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
          isRFI={isRFI}
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
