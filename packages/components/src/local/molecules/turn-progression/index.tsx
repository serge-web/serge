import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import { PLANNING_PHASE, ADJUDICATION_PHASE } from '@serge/config'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const TurnProgression: React.FC<Props> = (props: Props) => {
  const {
    adjudicationStartTime,
    turnEndTime,
    timeWarning,
    currentTurn,
    phase,
    gameDate,
    controlUi
  } = props
  let interval: any
  const now = Math.floor(new Date().getTime() / 1000)
  const end = Math.round(new Date(turnEndTime).getTime() / 1000)
  const seconds = end - now
  const initialState = {
    minutesLeft: ('0' + Math.floor(seconds / 60)).slice(-2),
    secondsLeft: ('0' + Math.floor(seconds % 60)).slice(-2),
    ended: false,
    startTime: Math.round(new Date(adjudicationStartTime).getTime() / 1000),
    minutesUp: '',
    secondsUp: '',
    warning: false,
    phase
  }
  const [progressionState, setProgressionState] = useState(initialState)
  const adjudicationPhase = phase === ADJUDICATION_PHASE
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

    setProgressionState({
      ...progressionState,
      minutesLeft,
      secondsLeft: ('0' + Math.round(seconds % 60)).slice(-2)
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
  const initInterval = (): any => {
    const startInterval = {
      [PLANNING_PHASE]: timer,
      [ADJUDICATION_PHASE]: countup
    }

    if (progressionState.phase === phase) return

    if (
      phase === ADJUDICATION_PHASE
    ) {
      setProgressionState({
        ...progressionState,
        minutesUp: '00',
        secondsUp: '00',
        startTime: Math.round(new Date(adjudicationStartTime).getTime() / 1000)
      })
    }

    clearInterval()
    interval = setInterval(startInterval[phase], 1000)
    setProgressionState({
      ...progressionState,
      phase
    })
  }

  const clearComponentInterval = (): any => {
    setProgressionState({
      ...progressionState,
      ended: false,
      warning: false
    })
    clearInterval(interval)
  }

  useEffect(() => {
    if (phase === PLANNING_PHASE) {
      interval = setInterval(timer, 1000)
    } else if (phase === ADJUDICATION_PHASE) {
      interval = setInterval(countup, 1000)
    }
    initInterval()
    return clearComponentInterval
  }, [])
  useEffect(() => {
    const { secondsLeft, minutesLeft } = progressionState
    if (
      Number(secondsLeft) < (timeWarning / 1000) &&
      !progressionState.warning &&
      phase === PLANNING_PHASE
    ) {
      setProgressionState({
        ...progressionState,
        warning: true
      })
    } else if (
      secondsLeft === '00' &&
      minutesLeft === '00' &&
      !progressionState.ended &&
      phase === PLANNING_PHASE
    ) {
      setProgressionState({
        ...progressionState,
        ended: true
      })
    }
  }, [progressionState])
  const warningStyle = progressionState.warning ? styles.warning : null
  const endedStyle = progressionState.ended ? styles.ended : null
  return (
    <div className={classNames([
      styles['flex-content-wrapper'],
      styles['turn-progression-ui'],
      {
        'adjudication-phase': adjudicationPhase
      }
    ])}
    >
      <div className={styles['turn-info-phase']}>
        <h5>Turn {currentTurn} - {phase} phase</h5>
        <time dateTime={gameDate}>{moment(gameDate).format('DD/MM/YYYY HH:mm')}</time>
        {controlUi ? '<GameControls />' : false}
      </div>
      <div className={styles['turn-info-remaining']}>
        {phase === PLANNING_PHASE &&
        <>
          <span className={
            `${styles['time-left']} ${warningStyle} ${endedStyle}`
          }>{progressionState.minutesLeft}:{progressionState.secondsLeft}</span>
          <span className={styles['info-helper']}>Time left</span>
        </>
        }
        {phase === ADJUDICATION_PHASE &&
        <>
          <span className={styles['time-left']}>{progressionState.minutesUp}:{progressionState.secondsUp}</span>
          <span className={styles['info-helper']}>Elapsed</span>
        </>
        }
      </div>
    </div>
  )
}

export default TurnProgression
