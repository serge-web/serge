import React from 'react'

export default interface Props {
  /**
   * Callback on cancel button click event
   */
  onCancel: React.ReactEventHandler
  /**
   * Callback on send button click event
   */
  onSend: React.ReactEventHandler
}
