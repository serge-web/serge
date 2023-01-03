import { Box, Button, styled } from '@material-ui/core'
import { ADJUDICATION_PHASE, PLANNING_PHASE } from '@serge/config'
import { formatFullDate, formatTurn, incrementGameTime } from '@serge/helpers'
import classNames from 'classnames'
import { capitalize } from 'lodash'
import momenttz from 'moment-timezone'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Props from './types/props'

const GameControl = styled(Button)({
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  transition: 'box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  backgroundColor: '#1965d8',
  borderRadius: '5px',
  width: '100%',
  '&:hover': {
    boxShadow: 'none'
  }
})

type TimeState = {
  // values to display
  minutesStr: string
  secondsStr: string
  // if time is under warning time in planning phase
  warning: boolean
  // if planning allowance has expired
  ended: boolean
  // which phase we're currently in
  phase: string
}

/* Render component */
export const TurnProgression: React.FC<Props> = (props: Props) => {
  const {
    adjudicationStartTime,
    turnEndTime,
    timeWarning,
    currentTurn,
    turnPresentation,
    phase,
    gameDate,
    gameTurnLength,
    wargameInitiated,
    onNextTurn,
    isGameControl,
    showTimeRemaining
  } = props

  const now = Math.floor(new Date().getTime() / 1000)
  const end = Math.round(new Date(turnEndTime).getTime() / 1000)
  const seconds = end - now
  const adjudicationPhase = phase === ADJUDICATION_PHASE
  const initialState: TimeState = {
    minutesStr: ('0' + Math.floor(seconds / 60)).slice(-2),
    secondsStr: ('0' + Math.floor(seconds % 60)).slice(-2),
    ended: false,
    warning: false,
    phase
  }
  const [progressionState, setProgressionState] = useState<TimeState>(initialState)
  const [gameTurnEnd, setGameTurnEnd] = useState<string>('')


  useEffect(() => {
    if (gameDate && gameTurnLength) {
      const endTime = incrementGameTime(gameDate, gameTurnLength)
      setGameTurnEnd(endTime)
    }
  }, [gameDate, gameTurnLength])

  const timer = (): any => {
    const now = Math.floor(new Date().getTime() / 1000)
    const end = Math.round(new Date(turnEndTime).getTime() / 1000)

    const rawSeconds = end - now
    const ended = rawSeconds <= 0
    // once we've passed the allowed time, we start counting upwards
    const seconds = ended ? -rawSeconds : rawSeconds

    const minsLeft = Math.floor(seconds / 60)
    const minutesLeft = minsLeft < 100 ? ('0' + minsLeft).slice(-2) : minsLeft.toString()

    setProgressionState({
      ...progressionState,
      minutesStr: minutesLeft,
      secondsStr: ('0' + Math.round(Math.abs(seconds) % 60)).slice(-2),
      ended: ended,
      warning: !ended && (seconds <= (timeWarning / 1000))
    })
  }

  const countup = (): any => {
    const startTime = Math.round(new Date(adjudicationStartTime).getTime() / 1000)
    const now = Math.floor(new Date().getTime() / 1000)
    const seconds = now - startTime
    const minsUp = Math.floor(seconds / 60)
    const minutesStr = minsUp < 100 ? ('0' + minsUp).slice(-2) : minsUp.toString()
    setProgressionState({
      ...progressionState,
      minutesStr,
      secondsStr: ('0' + Math.round(seconds % 60)).slice(-2)
    })
  }
  const startInterval = {
    [PLANNING_PHASE]: timer,
    [ADJUDICATION_PHASE]: countup
  }
  let interval: any

  useEffect(() => {
    clearInterval(interval)
    // sort out the values for planning phase init values
    const now = Math.floor(new Date().getTime() / 1000)
    const end = Math.round(new Date(turnEndTime).getTime() / 1000)
    const seconds = end - now
    const minsLeft = Math.floor(seconds / 60)
    const minutesLeft = minsLeft < 100 ? ('0' + minsLeft).slice(-2) : minsLeft.toString()
    const secsLefs = ('0' + Math.round(Math.abs(seconds) % 60)).slice(-2)

    const inPlanning = phase === PLANNING_PHASE
    const minStr = inPlanning ? minutesLeft : '00'
    const secStr = inPlanning ? secsLefs : '00'
    setProgressionState({
      ...progressionState,
      minutesStr: minStr,
      secondsStr: secStr,
      ended: false,
      warning: false
    })
    if (showTimeRemaining) {
      interval = setInterval(startInterval[phase], 1000)
    }
    return (): any => clearInterval(interval)
  }, [phase])

  const warningStyle = progressionState.warning ? styles.warning : null
  const endedStyle = progressionState.ended ? styles.ended : null

  const onClickHandler = (e: any): void => {
    onNextTurn && onNextTurn(e)
  }

  return (
    <div className={classNames([
      styles['flex-content-wrapper'],
      styles['turn-progression-ui'],
      {
        'adjudication-phase': adjudicationPhase
      }
    ])} data-tour='turn-phase-step'
    >
      <div className={styles['turn-info-phase']}>
        {
          !wargameInitiated &&
          <div title='Initiate wargame via Admin Panel' className={styles['not-initiated']}>WARGAME NOT INITIATED</div>
        }
        <div className={styles['turn-phase-group']}>
          <div className={styles['turn-phase-item']}>
            <h5>Turn:</h5>
            <h5>{formatTurn(currentTurn, turnPresentation)}</h5>
          </div>
          <div className={styles['turn-phase-item']}>
            <h5>Phase:</h5>
            <h6>{capitalize(phase)}</h6>
          </div>
          {
            showTimeRemaining &&
            <div className={styles['turn-phase-item']}>
              {phase === PLANNING_PHASE &&
            <>
              <h5>Time Remaining:</h5>
              <span className={
                `${styles['time-left']} ${warningStyle} ${endedStyle}`
              }>{progressionState.minutesStr}:{progressionState.secondsStr}</span>
            </> }
              {phase === ADJUDICATION_PHASE &&
              <>
                <h5>Elapsed:</h5>
                <span className={styles['time-left']}>{progressionState.minutesStr}:{progressionState.secondsStr}</span>
              </> }
            </div>
          }
        </div>
        {
          isGameControl &&
          <Box margin={1}>
            <GameControl onClick={(e): void => { onClickHandler(e) }} size="small" variant="contained" color="secondary">Start New Phase</GameControl>
          </Box>
        }
        <time dateTime={formatFullDate(gameDate)} className={styles.time}>{momenttz(gameDate).utc().format('YYYY-MM-DD HH:mm')}</time>
      </div>
    </div>
  )
}

export default TurnProgression
