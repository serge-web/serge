import React, { Fragment } from 'react'
import moment from 'moment'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  isPlainObject,
  isArrayOfObject,
  isBoolean,
  isValidUrl,
  capitalize
} from '@serge/helpers'
import Paragraph from '../../atoms/paragraph'
import MessageLabel from '../../atoms/message-label'
import { UMPIRE_FORCE } from '@serge/config'

const DetailLabel = ({ label }: any): React.ReactElement => (
  <span className={styles.detail}>
    <MessageLabel label={label} />
  </span>
)

const createObjItem = (pair: Array<any>, level: number): React.ReactFragment => {
  return (
    <Fragment key={`objItem--${pair[0]}-${pair[1]}`}>
      <div className={level ? styles['level-margin'] : ''}>
        <DetailLabel label={`${pair[0]}:`} />
        {deconstructObj(pair[1], ++level)}
      </div>
    </Fragment>
  )
}

const createBoolItem = (pair: Array<any>, level: number): React.ClassicElement<any> => {
  return (
    <Fragment key={`boolItem-${pair[0]}${pair[1]}`}>
      <div className={level ? styles['level-margin'] : ''}>
        <DetailLabel label={`${pair[0]}:`}/>
        <span className={styles.data} >
          <FontAwesomeIcon icon={pair[1] ? faCheck : faTimes} />
        </span>
      </div>
    </Fragment>
  )
}

const createTimeItem = (pair: Array<any>, level: number): React.ReactFragment => {
  return (
    <Fragment key={`dateTime-${pair[0]}${pair[1]}`}>
      <div className={level ? styles['level-margin'] : ''}>
        <DetailLabel label={`${pair[0]}:`}/>
        <span className={styles.data}>
          {moment(pair[1]).format('DD/MM/YY,HH:mm')}
        </span>
      </div>
    </Fragment>
  )
}

const createStrItem = (pair: Array<any>, level: number): React.ReactFragment => {
  return (
    <Fragment key={`strItem-${pair[0]}${pair[1]}`}>
      <div className={level ? styles['level-margin'] : ''}>
        <DetailLabel label={`${pair[0]}:`}/>
        <span className={styles.data}>
          {pair[1]}
        </span>
      </div>
    </Fragment>
  )
}

const createUrlItem = (pair: Array<any>, level: number): React.ReactFragment => {
  return (
    <Fragment key={`urlItem-${pair[0]}${pair[1]}`}>
      <div className={level ? styles['level-margin'] : ''}>
        <DetailLabel label={`${pair[0]}:`}/>
        <span className={styles.data}>
          <a href={pair[1]} target='_blank' rel='noopener noreferrer'>{pair[1]}</a>
        </span>
      </div>
    </Fragment>
  )
}

const deconstructArr = (pair: Array<any>, level: number): React.ReactFragment => {
  const nextLevel = level + 1

  return (
    <Fragment key={`${pair[0]}-group`}>
      <div className={level ? styles['level-margin'] : ''}>
        <DetailLabel label={`${pair[0]}:`} />
        <p className={styles['detail-rows']}>
          {pair[1].map((item: Record<any, any>, key: number) => {
            return (
              <p key={key} className={styles['detail-row']}>
                {deconstructObj(item, nextLevel)}
              </p>
            )
          })}
        </p>
      </div>
    </Fragment>
  )
}

const deconstructObj = (obj: Record<any, any>, level: number): React.ReactFragment => {
  const keyPropPairs = Object.entries(obj)
  return keyPropPairs.map(pair => decideRender(pair, level)(createStrItem, level))
}

const defaultRender = (pair: Array<any>, level: number): React.ReactFragment => {
  return (
    <Fragment key={`${pair[0]}-${pair[1]}`}>
      <div className={level ? styles['level-margin'] : ''}>
        <DetailLabel label={`${capitalize(pair[0])}:`} />
        <span className={styles.data}>
          <Paragraph content={Array.isArray(pair[1]) ? pair[1].join(', ') : pair[1]} />
        </span>
      </div>
    </Fragment>
  )
}

const decideRender = (pair: Array<any>, level: number) => (fallback: Function, _level: number): React.ReactFragment => {
  const [, detail] = pair
  let renderer
  switch (true) {
    case isPlainObject(detail):
      renderer = createObjItem
      break
    case isArrayOfObject(detail):
      renderer = deconstructArr
      break
    case isBoolean(detail):
      renderer = createBoolItem
      break
    case isValidUrl(detail):
      renderer = createUrlItem
      break
    case moment(detail, moment.ISO_8601, true).isValid():
      renderer = createTimeItem
      break
    default:
      renderer = fallback
      break
  }
  return renderer(pair, level)
}

/* Render component */
export const ChannelMessageDetail: React.FC<Props> = ({ message, playerForce, collapsed }: Props) => {
  const keyPropPairs = Object.entries(message.message)
  const privateMessage = message.details.privateMessage
  const PrivateBadge = (): React.ReactElement => (
    <span>
      <span className={styles['icon-private']}>
        <FontAwesomeIcon size='1x' icon={faUserSecret} />
      </span>
      Private:
    </span>
  )
  return (
    <div className={
      `${styles['wrap-detail']} ${!collapsed ? styles['wrap-detail-opened'] : ''}`
    }>
      { keyPropPairs.map(pair => decideRender(pair, 0)(defaultRender, 0)) }
      {
        privateMessage &&
        playerForce === UMPIRE_FORCE && (
          <div className={styles['wrap-private']}>
            <DetailLabel label={<PrivateBadge />}/>
            <span className={styles.private}>
              <Paragraph content={privateMessage} />
            </span>
          </div>
        )
      }
    </div>
  )
}

export default ChannelMessageDetail
