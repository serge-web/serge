import React, { useState } from 'react'
import GameChannels from './GameChannels/GameChannels'
import Tour from 'reactour'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'
import { expiredStorage, LOCAL_STORAGE_TIMEOUT } from '../consts'
import { openTour } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { TabNode } from 'flexlayout-react'
import { UMPIRE_FORCE } from '@serge/config'

type GameTour = {
  selector: string;
  content: string | (() => JSX.Element);
}

const GameChannelsWithTour: React.FC = () => {
  const dispatch = usePlayerUiDispatch()
  const {
    selectedForce,
    selectedRole,
    wargameTitle,
    allForces,
  } = usePlayerUiState()

  const gameTourKey = `${wargameTitle}-${(selectedForce && selectedForce.uniqid) || ''}-${(selectedRole && selectedRole) || ''}-tourDone`
  const mappingTourKey = `${wargameTitle}-${(selectedForce && selectedForce.uniqid) || ''}-${(selectedRole && selectedRole) || ''}-mapping-tourDone`

  const [tourIsOpen, setTourIsOpen] = useState<boolean>(false)
  const [mapTourIsOpen, setMapTourIsOpen] = useState<boolean>(false)
  const [showMappingTour, setShowMappingTour] = useState<boolean>(false)
  const [tourSteps, setTourStep] = useState<GameTour[]>([])

  const storageTourIsOpen = expiredStorage.getItem(gameTourKey) !== 'done'
  const storageMappingTourIsOpen = expiredStorage.getItem(mappingTourKey) !== 'done'

  const closeTour = (): void => {
    expiredStorage.setItem(showMappingTour ? mappingTourKey : gameTourKey, 'done', LOCAL_STORAGE_TIMEOUT)
    dispatch(openTour(false))
  }

  const gameTourSteps = [
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

  const mappingTourSteps: any[] = [
    {
      selector: '',
      content: 'This is the Mapping Channel. Use this channel to view and control assets, plan actions and implement decisions.'
    },
    {
      selector: '[data-tour="world-state"]',
      content: 'The tab on the left of the screen shows Force Assets, under "Control", where you can submit routes per Assets'
    },
    {
      selector: '[data-tour="visibility"]',
      content: 'Under "Visibility", you can view all of the visible Assets across various Forces. Clicking on any asset will popup a panel containing further information'
    },
    {
      selector: '[data-tour="zoom-control"]',
      content: 'You can Zoom In and Zoom with the Plus and Dash button above, as well as fit the screen to the window by pressing the Home button'
    },
    {
      selector: '[data-tour="counter-clockwise"]',
      content: 'Use the Counter-Clockwise button to View Full History. Use the Clockwise button to View All Planned Steps'
    }
  ]

  if (selectedForce && selectedForce.uniqid === UMPIRE_FORCE && allForces.length) {
    mappingTourSteps.push(
      {
        selector: '[data-tour="certain-force"]',
        content: 'The Globe buttons serve as filter to mapping perception. Use them to view the map as a certain Force'
      }
    )
  }

  mappingTourSteps.push(
    {
      selector: '',
      content: () => (<div className="close-tour-dialog">
        <span>
          You can come back to this turotial as any time by clicking on the intro button on the top right corner.
        </span>
        <span className="link link--noIcon" onClick={closeTour} data-qa-type="close-tour">Close the tour</span>
      </div>)
    }
  )

  if (!showMappingTour && tourIsOpen !== storageTourIsOpen) {
    setTourStep(gameTourSteps)
    setTourIsOpen(storageTourIsOpen)
  }

  if (!storageTourIsOpen && showMappingTour && mapTourIsOpen !== storageMappingTourIsOpen) {
    setTourStep(mappingTourSteps)
    setMapTourIsOpen(storageMappingTourIsOpen)
  }

  const onTabChange = (node: TabNode): void => {
    setShowMappingTour(node.getComponent() === 'mapping')
  }

  return (
    <>
      <div className="flex-content-wrapper" data-tour="first-step">
        <div className="flex-content flex-content--fill">
          <GameChannels onTabChange={onTabChange} />
        </div>
      </div>
      {/* GUIDED TOUR */}
      <Tour
        steps={tourSteps}
        isOpen={tourIsOpen || mapTourIsOpen}
        onRequestClose={closeTour}
        startAt={0}
      />
    </>
  )
}

export default GameChannelsWithTour
