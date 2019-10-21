import React from 'react'

export default function PlayerUiInitiate ({ initiateGameplay }) {
  return (
    <div className="flex-content-wrapper">
      <div className="pre-start-screen">
        <button name="initiate-game" className="btn btn-action btn-action--primary" onClick={initiateGameplay}>Initiate Game</button>
      </div>
    </div>
  )
}
