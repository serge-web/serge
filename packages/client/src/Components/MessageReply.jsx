import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { addMessageFeedback } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mapStateToProps = ({ currentWargame, messages, messageTypes, selectedSchema }) => ({
  currentWargame,
  messages,
  messageTypes,
  selectedSchema
})

const MessageReply = ({ wargame, messageId, details, feedbackAuthor }) => {
  if (!details.draftMessage) return null

  const feedbackRef = React.createRef()

  const addReply = event => {
    event.preventDefault()

    if (feedbackRef.current.value.length) {
      const feedback = {
        message: feedbackRef.current.value,
        from: feedbackAuthor,
        timestamp: new Date().toISOString()
      }
      addMessageFeedback(wargame, messageId, feedback)
      feedbackRef.current.value = ''
    }
  }

  return (
    <div className="se-message-reply">
      <div className="se-message-reply__title">Feedbacks:</div>
      {details.feedbacks && details.feedbacks.length > 0 && <ul className="se-message-reply__list">
        {details.feedbacks.map(feedback => (
          <li key={feedback._id}>
            <div className="se-message-reply__created">{moment(details.timestamp).format('HH:mm')}</div>
            <div className="se-message-reply__message">{feedback.message}</div>
          </li>
        ))}
      </ul>}
      <div className="se-message-reply__form">
        <form onSubmit={addReply}>
          <div className="form-group">
            <div className="input-group">
              <input type="text" className="form-control" ref={feedbackRef} placeholder="Add your feedback"/>
              <div className="input-group-append">
                <button type='submit' className="btn btn-primary">
                  <FontAwesomeIcon icon={faPaperPlane} size="1x"/>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(MessageReply)
