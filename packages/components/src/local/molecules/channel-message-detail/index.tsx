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
  capitalize,
  formatFullDate
} from '@serge/helpers'
import Paragraph from '../../atoms/paragraph'
import MessageLabel from '../../atoms/message-label'

const DetailLabel = ({ label }: any): React.ReactElement => (
  <span className={styles.detail}><MessageLabel label={label} /></span>
)

const createObjItem = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`objItem--${pair[0]}-${pair[1]}`}><DetailLabel label={`${pair[0]}:`} />{ deconstructObj(pair[1]) }</Fragment>
  )
}

const createBoolItem = (pair: Array<any>): React.ClassicElement<any> => {
  return (
    <Fragment key={`boolItem-${pair[0]}${pair[1]}`}>
      <DetailLabel label={`${pair[0]}:`}/>
      <span className={styles.data}>
        <FontAwesomeIcon icon={pair[1] ? faCheck : faTimes} />
      </span>
    </Fragment>
  )
}

const createTimeItem = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`dateTime-${pair[0]}${pair[1]}`}>
      <DetailLabel label={`${pair[0]}:`}/>
      <span className={styles.data}>{formatFullDate(pair[1])}</span>
    </Fragment>
  )
}

const createStrItem = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`strItem-${pair[0]}${pair[1]}`}>
      <DetailLabel label={`${pair[0]}:`}/>
      <span className={styles.data}>
        {pair[1]}
      </span>
    </Fragment>
  )
}

const createUrlItem = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`urlItem-${pair[0]}${pair[1]}`}>
      <DetailLabel label={`${pair[0]}:`}/>
      <span className={styles.data}>
        <a href={pair[1]} target='_blank' rel='noopener noreferrer'>{pair[1]}</a>
      </span>
    </Fragment>
  )
}

const deconstructArr = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`${pair[0]}-group`}>
      <DetailLabel label={`${pair[0]}:`}/>
      <p className={styles['detail-rows']}>
        {pair[1].map((item: Record<any, any>, key: number) => {
          return (
            <span key={key} className={styles['detail-row']}>
              {deconstructObj(item)}
            </span>
          )
        })}
      </p>
    </Fragment>
  )
}

const deconstructObj = (obj: Record<any, any>): React.ReactFragment => {
  const keyPropPairs = Object.entries(obj)
  return keyPropPairs.map(pair => decideRender(pair)(createStrItem))
}

const defaultRender = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`${pair[0]}-${pair[1]}`}>
      <DetailLabel label={`${capitalize(pair[0])}:`}/>
      <span className={styles.data}>
        <Paragraph content={pair[1]} />
      </span>
    </Fragment>
  )
}

const decideRender = (pair: Array<any>) => (fallback: Function): React.ReactFragment => {
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
  return renderer(pair)
}

/* Render component */
export const ChannelMessageDetail: React.FC<Props> = ({ message, isUmpire, collapsed }: Props) => {
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
      { !collapsed && <>
        { keyPropPairs.map(pair => decideRender(pair)(defaultRender)) }
        {
          privateMessage && isUmpire && (
            <div className={styles['wrap-private']}>
              <DetailLabel label={<PrivateBadge />}/>
              <span className={styles.private}>
                <Paragraph content={privateMessage} />
              </span>
            </div>
          )
        }
      </>}
    </div>
  )
}

export default ChannelMessageDetail
