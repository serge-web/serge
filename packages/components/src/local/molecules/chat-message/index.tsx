import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Box from '@material-ui/core/Box'
import moment from 'moment'
import Badge from '../../atoms/badge'
import Paragraph from '../../atoms/paragraph'

const useStyles = makeStyles({
  owner: {
    borderRightColor: (props: Props) => props.borderColor,
    borderRightWidth: 8,
    borderRightStyle: 'solid',
    textAlign: 'right',
  },
  other: {
    borderLeftColor: (props: Props) => props.borderColor,
    borderLeftWidth: 8,
    borderLeftStyle: 'solid',
    textAlign: 'left',
  },
  ownerInfoBody: {
    marginLeft: 10
  },
  otherInfoBody: {
    marginRight: 0
  }
});

/* Render component */
export const ChatMessage: React.FC<Props> = (props: Props) => {


  const classes = useStyles(props);

  const PrivateBadge = (): React.ReactElement => (
    <span>
      <span className={styles['icon-private']}>
        <FontAwesomeIcon size='1x' icon={faUserSecret} />
      </span>
      Private message:
    </span>
  )

  return (
    <div className={`${styles['chat-message-wrapper']} ${props.isOwner ? classes.owner : classes.other}`}>
      <div className={styles['message-text']}>{props.message}</div>
      <Box display="flex" alignItems="center"
        justifyContent={props.isUmpire && props.privateMessage ? "space-between" : "flex-end"}
        flexDirection={!props.isOwner ? "row-reverse" : ""}
        mt={1}>
        {props.isUmpire && props.privateMessage && <PrivateBadge />}
        <Box display="flex" flexDirection={!props.isOwner ? "row-reverse" : ""}>
          <Badge size="small" label={props.role} color={'default'} />
          <span className={`${styles['info-body']} ${props.isOwner ? classes.ownerInfoBody : classes.otherInfoBody}`}>
            {moment(props.timestamp).format('HH:mm')}
          </span>
        </Box>
      </Box>
      {props.isUmpire && props.privateMessage &&
        (<Box mt={1} className={styles.private} textAlign="left">
          <Paragraph content={props.privateMessage} />
        </Box>)
      }
    </div>
  )
}

export default ChatMessage
