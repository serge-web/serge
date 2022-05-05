import React from 'react'

const PlayerUiInitiate: React.FC<{ initiateGameplay: () => void }> = ({ initiateGameplay }) => (
  <div className='flex-content-wrapper'>
    <div className='pre-start-screen'>
      <button
        name='initiate-game'
        className='btn btn-action btn-action--primary'
        onClick={initiateGameplay}
      >
        Initiate Game
      </button>
    </div>
  </div>
)

export default PlayerUiInitiate
