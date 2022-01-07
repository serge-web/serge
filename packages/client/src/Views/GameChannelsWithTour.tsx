import React from 'react'
import GameChannels from './GameChannels/GameChannels'
import Tour from 'reactour'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'
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
      content: 'Take a short guided tour to familiarise yourself with the main features of the wargame interface.'
    },
    {
      selector: '[data-tour="fourth-step"]',
      content: 'The game channels on the left are the medium by which the wargame is played. You will see a set of channels tailored to your specific roles.'
    },
    {
      selector: '[data-tour="fourth-step"]',
      content: 'You can ease the task of monitoring multiple channels by re-arranging them. You can Drag and drop a channel title tab to create a new column (or row). You can use the vertical bars to resize the area occupied by channels.'
    },
    {
      selector: '[data-tour="fifth-step"]',
      content: 'The area to the right is out of the wargame, and relates to how the game is organised and run.'
    },
    {
      selector: '[data-tour="turn-phase-step"]',
      content: 'This panel will indicate whether the game is currently in the planning or adjudication phase, and how much time is left when in a planning phase.'
    },
    {
      selector: '[data-tour="third-step"]',
      content: 'You can give feedback to the wargame organisers at any time by clicking on the speech bubble.'
    },
    {
      selector: '[data-tour="seventh-step"]',
      content: 'You can send messages to all other players here. They are visible to both players and umpire staff.'
    },
    {
      selector: '[data-tour="role-info-step"]',
      content: 'At the foot of the panel are the title of the role you are playing as, and the force you are assigned to'
    },
    {
      selector: '[data-tour="objectives-step"]',
      content: () => (<div className="close-tour-dialog">
        <span>
          At any point you can check the objectives assigned to your force by clicking on the
          circular icon to the right.
        </span>
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
