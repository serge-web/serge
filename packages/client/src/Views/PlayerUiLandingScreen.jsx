import React from 'react'
import lineBreak from '../Helpers/splitNewLineBreak'

export default function PlayerUiLandingScreen ({ gameInfo, enterSerge }) {
  return (
    <div className="flex-content-wrapper flex-content-wrapper--welcome">
      <div className="flex-content flex-content--welcome">
        <div className="flex-content--center contain-welcome-screen">
          <div className="welcome-logo">
            <img className="serge-logo" src={gameInfo.imageUrl} alt="Serge gaming" />
          </div>
          <div className="welcome-desc">
            <h1>{gameInfo.title}</h1>
            {lineBreak(gameInfo.description)}
            <button name="play" className="btn btn-action btn-action--primary" onClick={enterSerge}>Play</button>
          </div>
        </div>
      </div>
    </div>
  )
}
