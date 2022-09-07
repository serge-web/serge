import { Box, Button, styled } from '@material-ui/core'
import { ADJUDICATION_PHASE, PLANNING_PHASE } from '@serge/config'
import { formatFullDate, formatTurn } from '@serge/helpers'
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
    wargameInitiated,
    onNextTurn,
    isGameControl
  } = props

  // TODO: this should come from the new turn attributes in game overview,
  // to be implemented in https://github.com/serge-web/serge/issues/954
  const showTimeRemaining = true

  const now = Math.floor(new Date().getTime() / 1000)
  const end = Math.round(new Date(turnEndTime).getTime() / 1000)
  const seconds = end - now
  const adjudicationPhase = phase === ADJUDICATION_PHASE
  const initialState = {
    minutesLeft: ('0' + Math.floor(seconds / 60)).slice(-2),
    secondsLeft: ('0' + Math.floor(seconds % 60)).slice(-2),
    ended: false,
    warning: false,
    minutesUp: adjudicationPhase ? '00' : '',
    secondsUp: adjudicationPhase ? '00' : '',
    startTime: Math.round(new Date(adjudicationStartTime).getTime() / 1000),
    phase
  }
  const timer = (): any => {
    const now = Math.floor(new Date().getTime() / 1000)
    const end = Math.round(new Date(turnEndTime).getTime() / 1000)
    let seconds

    if (progressionState.ended) {
      seconds = now - end
    } else {
      seconds = end - now
    }

    const minsLeft = Math.floor(seconds / 60)
    const minutesLeft = minsLeft < 100 ? ('0' + minsLeft).slice(-2) : minsLeft.toString()

    console.log('timer2', minsLeft, minutesLeft, ('0' + minsLeft))


    setProgressionState({
      ...progressionState,
      minutesLeft,
      secondsLeft: ('0' + Math.round(Math.abs(seconds) % 60)).slice(-2),
      ended: seconds === 0 && minsLeft === 0,
      warning: (seconds < (timeWarning / 1000))
    })
  }
  const countup = (): any => {
    const now = Math.floor(new Date().getTime() / 1000)
    const seconds = now - progressionState.startTime
    const minsUp = Math.floor(seconds / 60)
    const minutesUp = minsUp < 100 ? ('0' + minsUp).slice(-2) : minsUp.toString()

    setProgressionState({
      ...progressionState,
      minutesUp,
      secondsUp: ('0' + Math.round(seconds % 60)).slice(-2)
    })
  }
  const startInterval = {
    [PLANNING_PHASE]: timer,
    [ADJUDICATION_PHASE]: countup
  }
  const [progressionState, setProgressionState] = useState(initialState)

  let interval: any

  useEffect(() => {
    clearInterval(interval)
    console.log('phase handler')
    setProgressionState({
      ...progressionState,
      minutesUp: adjudicationPhase ? '00' : '',
      secondsUp: adjudicationPhase ? '00' : '',
      minutesLeft: '',
      secondsLeft: '',
      startTime: Math.round(new Date(adjudicationStartTime).getTime() / 1000)
    })
    if (showTimeRemaining) {
      interval = setInterval(startInterval[phase], 1000)
      console.log('interval', interval)
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
              }>{progressionState.minutesLeft}:{progressionState.secondsLeft}</span>
            </> }
              {phase === ADJUDICATION_PHASE &&
              <>
                <h5>Elapsed:</h5>
                <span className={styles['time-left']}>{progressionState.minutesUp}:{progressionState.secondsUp}</span>
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
