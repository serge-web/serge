import React, { Fragment } from 'react'
import moment from 'moment'
import Box from '@material-ui/core/Box'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'

/* Import Types */
import Props from './types/props'
import { MessageStructure } from '@serge/custom-types/message'
import { CollaborativeMessageStates } from '@serge/config'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { capitalize, isArrayOfObject, isBoolean, isPlainObject, isValidUrl } from '@serge/helpers'
import Paragraph from '../../atoms/paragraph'
import MessageLabel from '../../atoms/message-label'

const DetailLabel = ({ label }: any): React.ReactElement => (
  <span className={styles.detail}><MessageLabel label={label} /></span>
)

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
      <DetailLabel label={`${pair[0]}:`}/>
      <span className={styles.data}>{moment(pair[1]).format('DD/MM/YY,HH:mm')}</span>
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
            <p key={key} className={styles['detail-row']}>
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
export const ChannelMessageDetail: React.FC<Props> = ({ detail, privateMessage, messageType, collaboration, rfiStatus, isUmpire, isRFIManager, collapsed }: Props) => {
  const keyPropPairs = Object.entries(detail)
  const isRFI = messageType === 'RFI'
  const RFIAnswer = collaboration?.response
  const PrivateBadge = (): React.ReactElement => (
    <span>
      <span className={styles['icon-private']}>
        <FontAwesomeIcon size='1x' icon={faUserSecret} />
      </span>
      Private:
    </span>
  )
  const ActionButtons = (): React.ReactElement | null => {
    switch (rfiStatus) {
      case CollaborativeMessageStates.Unallocated:
        return (
          <Box pt={2} display="flex" justifyContent="flex-end">
            <Button customVariant="form-action" size="small">Take ownership</Button>
          </Box>
        )
      case CollaborativeMessageStates.InProgress:
        return (
          <Box pt={2} display="flex" justifyContent="flex-end">
            <Button customVariant="form-action" size="small">Send for review</Button>
          </Box>
        )
      case CollaborativeMessageStates.PendingReview:
        return (
          <Box pt={2} display="flex" justifyContent="flex-end">
            <Button customVariant="form-action" size="small">Reject</Button>
            <Button customVariant="form-action" size="small">Release</Button>
          </Box>
        )
      default:
        return null
    }
  }
  return (
    <div className={
      `
        ${styles['wrap-detail']}
        ${!collapsed ? styles['wrap-detail-opened'] : ''}
        ${isRFI ? styles['wrap-detail--rfi'] : ''}
      `
    }>
      {
        isRFI
          ? (
            <>
              <div className={styles['message-detail__rfi-content']}>
                <Paragraph content={(detail as MessageStructure).content || ''} />
              </div>
              {
                RFIAnswer
                  ? (
                    <div className={styles['message-detail__rfi-response']}>
                      <p className={styles['message-detail__rfi-response__title']}>Answer</p>
                      <div className={styles['message-detail__rfi-response__body']}>
                        <Paragraph content={collaboration?.response || ''} />
                      </div>
                    </div>
                  )
                  : isRFIManager
                    ? (
                      <>
                        <div className={styles['message-detail__form-group']}>
                          <TextInput
                            fullWidth
                            label="Answer"
                            labelColor="common.white"
                            labelSize={12}
                            multiline
                            rows={2}
                            variant="filled"
                          />
                        </div>
                        <div className={styles['message-detail__form-group']}>
                          <TextInput
                            fullWidth
                            label="Private message"
                            labelColor="common.white"
                            labelSize={12}
                            multiline
                            rows={2}
                            variant="filled"
                            isPrivate={true}
                          />
                        </div>
                      </>
                    )
                    : null
              }
              {
                isRFIManager
                  ? <ActionButtons />
                  : null
              }
            </>
          )
          : (
            <>
              { keyPropPairs.map(pair => decideRender(pair)(defaultRender)) }
              {
                privateMessage &&
                isUmpire && (
                  <div className={styles['wrap-private']}>
                    <DetailLabel label={<PrivateBadge />}/>
                    <span className={styles.private}>
                      <Paragraph content={privateMessage} />
                    </span>
                  </div>
                )
              }
            </>
          )
      }
    </div>
  )
}

export default ChannelMessageDetail
