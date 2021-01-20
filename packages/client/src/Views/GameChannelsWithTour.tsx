import React from 'react'
import GameChannels from './GameChannels/GameChannels'
import Tour from 'reactour'
import { usePlayerUiDispatch } from '../Store/PlayerUi'
import { expiredStorage, LOCAL_STORAGE_TIMEOUT } from '../consts'
import { openTour } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'

interface Props { storageKey: string, tourIsOpen: boolean }

const GameChannelsWithTour: React.FC<Props> = ({ storageKey, tourIsOpen }) => {
  const dispatch = usePlayerUiDispatch()

  const closeTour = (): void => {
    expiredStorage.setItem(storageKey, 'done', LOCAL_STORAGE_TIMEOUT)
    dispatch(openTour(false))
  }
  const tourSteps = [
    {
      selector: '[data-tour="first-step"]',
      content: 'Take a short guided tour to familiarise yourself with the main features of the War Game interface.'
    },
    {
      selector: '[data-tour="second-step"]',
      content: 'Check your force objectives by clicking on the target icon.'
    },
    {
      selector: '[data-tour="third-step"]',
      content: 'Give feedback at any time by clicking on the speech bubble.'
    },
    {
      selector: '[data-tour="fourth-step"]',
      content: 'In-game channels are on the left. Access is limited to specific forces and roles.'
    },
    {
      selector: '[data-tour="fifth-step"]',
      content: 'Game admin is on the right. All players can read and write in the channel.'
    },
    {
      selector: '[data-tour="sixth-step"]',
      content: 'This panel will indicate whether you are in a planning or adjudication phase, and how much time is left when in a planning phase.'
    },
    {
      selector: '[data-tour="seventh-step"]',
      content: 'Send out-of-game messages and questions here. They are visible by all players and umpires.'
    },
    {
      selector: '[data-tour="fourth-step"]',
      content: () => (<div>
        Drag and drop a tab to create a new column and re-organize your channels. And use the vertical bars to
        resize the area occupied by channels.
        <span className="link link--noIcon" onClick={closeTour} data-qa-type="close-tour">Close the tour</span>
      </div>)
    }
  ]

  return (
    <>
      <div className="flex-content-wrapper" data-tour="first-step">
        <div className="flex-content flex-content--fill">
          <GameChannels />
        </div>
      </div>
      {/* GUIDED TOUR */}
      <Tour
        steps={tourSteps}
        isOpen={tourIsOpen}
        onRequestClose={closeTour}
        startAt={0}
      />
    </>
  )
}

export default GameChannelsWithTour
