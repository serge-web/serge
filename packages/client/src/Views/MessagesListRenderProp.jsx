import '@serge/themes/App.scss'
import React from 'react'

const MessagesListRenderProp = ({ messages, render }) => {
  return (
    <div className='message-list'>
      {render(messages)}
    </div>
  )
}

export default MessagesListRenderProp
