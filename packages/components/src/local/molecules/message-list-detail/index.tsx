import React, { Fragment } from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import isPlainObject from '@serge/helpers/is-plain-object'
import isArrayOfObject from '@serge/helpers/is-array-of-object'
import isBoolean from '@serge/helpers/is-boolean'
import isValidURI from '@serge/helpers/is-valid-url'
import Paragraph from '../../atoms/paragraph'

const createObjItem = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`objItem--${pair[0]}-${pair[1]}`}>{ deconstructObj(pair[1]) }</Fragment>
  )
}

const createBoolItem = (pair: Array<any>): React.ClassicElement<any> => {
  return <span key={`boolItem--${pair[0]}-${pair[1]}`}>{pair[1] ? pair[0] : false}</span>
}

const createTimeItem = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`dateTime-${pair[0]}${pair[1]}`}>
      <span className='detail'>{pair[0]}:</span>
      <span className='data'>{moment(pair[1]).format('DD/MM/YY,HH:mm')}</span>
    </Fragment>
  )
}

const createStrItem = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`strItem-${pair[0]}${pair[1]}`}>
      <span className='detail'>
        {pair[0]}:
      </span>
      <span className='data'>
        {pair[1]}
      </span>
    </Fragment>
  )
}

const createUrlItem = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`urlItem-${pair[0]}${pair[1]}`}>
      <span className='detail'>
        {pair[0]}:
      </span>
      <span className='data'>
        <a href={pair[1]} target='_blank' rel='noopener noreferrer'>{pair[1]}</a>
      </span>
    </Fragment>
  )
}

const deconstructArr = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`${pair[0]}-group`}>
      <span className='detail detail-title'>{pair[0]}:</span><p className='detail-rows'>
        {pair[1].map((item: Record<any, any>) => {
          return (
            <p className='detail-row'>
              {deconstructObj(item)}
            </p>
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

const capitalize = (s: any): string => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const defaultRender = (pair: Array<any>): React.ReactFragment => {
  return (
    <Fragment key={`${pair[0]}-${pair[1]}`}>
      <span className='detail'>{capitalize(pair[0])}: </span>
      <span className='data'>
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
    case isValidURI(detail):
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
export const MessageListDetail: React.FC<Props> = ({ detail, privateMessage, isUmpire }: Props) => {
  const keyPropPairs = Object.entries(detail)
  return (
    <>
      { keyPropPairs.map(pair => decideRender(pair)(defaultRender)) }
      {
        privateMessage &&
        isUmpire && (
          <>
            <span className='detail'>
              <FontAwesomeIcon size='1x' icon={faUserSecret}/>
              Private:
            </span>
            <span className='data private'>
              <Paragraph content={privateMessage} />
            </span>
          </>
        )
      }
    </>
  )
}

export default MessageListDetail
