import React from 'react'
import JsonEditor from '../../json-editor'
import Props from './types/props'
import { CollaborativeMessageStates } from 'src/config'

const MessageEditorSection: React.FC<Props> = ({
  isResponse,
  canSeeResponse,
  message,
  collaboration,
  template,
  responseHandler,
  newMessageHandler,
  state,
  role,
  // formIsEditable,
  gameDate
}) => {
  const docBeingEdited = state === CollaborativeMessageStates.InProgress
  const roleIsOwner = collaboration.owner && collaboration.owner.roleId === role.roleId
  const formIsEditable = docBeingEdited && roleIsOwner
  return (
    <>
      {isResponse && (
        <JsonEditor
          messageContent={message.message}
          messageId={`${message._id}_${message.message.Reference}`}
          template={template}
          disabled={true}
          gameDate={gameDate}
        />
      )}
      {isResponse && canSeeResponse && (
        <JsonEditor
          messageId={`${message._id}_${message.message.Reference}`}
          messageContent={collaboration.response || {}}
          template={template}
          storeNewValue={responseHandler}
          disabled={!formIsEditable}
          title={'Response'}
          gameDate={gameDate}
        />
      )}
      {!isResponse && (
        <JsonEditor
          template={template}
          messageId={`${message._id}_${message.message.Reference}`}
          messageContent={message.message}
          storeNewValue={newMessageHandler}
          disabled={!formIsEditable}
          gameDate={gameDate}
        />
      )}
    </>
  )
}

export default MessageEditorSection
