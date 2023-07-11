import React, { useReducer } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextInput from '../../atoms/text-input'

/* Import Types */
import Props, { ActionPayload, Action } from './types/props'
import { CollaborativeMessageStates } from 'src/config'

const useStyles = makeStyles<Theme>((theme) => ({
  rfiForm: {
    background: theme.palette.primary.main,
    padding: '10px'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  formColumn: {
    display: 'flex',
    flex: 1,
    maxWidth: '50%',

    '&:first-child': {
      paddingRight: '24px'
    },

    '& + $formColumn': {
      paddingLeft: '24px'
    }
  },
  formWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  fullHeightInput: {
    display: 'flex',
    flexDirection: 'column',

    '& .MuiFormControl-root': {
      flex: 1,

      '& .MuiInputBase-root': {
        height: '100%'
      },

      '& .MuiInputBase-input': {
        height: '100%',
        boxSizing: 'border-box'
      }
    }
  },
  mainInput: {
    '& + $mainInput': {
      paddingTop: '24px'
    }
  },
  formInput: {
    '& .MuiInputBase-root': {
      backgroundColor: '#1A3D5D',

      '&.Mui-disabled': {
        backgroundColor: '#54667C',
        cursor: 'not-allowed'
      }
    },
    '& .MuiInputBase-input': {
      maxHeight: '220px',
      color: 'white',
      fontSize: '12px'
    }
  },
  formActions: {
    display: 'flex',
    paddingTop: '24px',
    justifyContent: 'flex-end'
  }
}))
/* Render component */
export const RfiForm: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { message } = props
  const formReducers = (state: ActionPayload, action: Action): ActionPayload => {
    switch (action.type) {
      case 'updateAnswer':
        return {
          ...state,
          answer: action.payload || null
        }
      case 'updateMessage':
        return {
          ...state,
          privateMessageContent: action.payload || null
        }
    }
  }
  const [, dispatch] = useReducer(formReducers, {
    answer: null,
    privateMessageContent: null
  })
  const onUpdateMessage = (target: { value: string }): void => {
    dispatch({
      type: 'updateMessage',
      payload: target.value
    })
  }
  const onUpdateAnswer = (target: { value: string }): void => {
    dispatch({
      type: 'updateAnswer',
      payload: target.value
    })
  }
  const requestCompleteStatuses = [
    CollaborativeMessageStates.Released,
    CollaborativeMessageStates.Closed
  ]
  const requestIsCompleted =
    message.details.collaboration?.status &&
    requestCompleteStatuses.includes(message.details.collaboration?.status)

  return (
    <div className={classes.rfiForm}>
      <Box className={classes.formContainer}>
        <Box className={classes.formColumn}>
          <Box className={classes.formWrapper}>
            <TextInput
              fullWidth
              label={ message.message.Title || 'Request for Information' }
              value={ message.message.Request }
              labelColor="common.white"
              labelSize={12}
              multiline
              disabled
              rows={2}
              variant="filled"
              className={`${classes.mainInput} ${classes.formInput}`}
            />
            <TextInput
              fullWidth
              label="Private message"
              labelColor="common.white"
              labelSize={12}
              value={message.details.privateMessage}
              updateState={onUpdateMessage}
              multiline
              rows={2}
              variant="filled"
              disabled={requestIsCompleted}
              isPrivate={true}
              className={`${classes.mainInput} ${classes.formInput}`}
            />
          </Box>
        </Box>
        <Box className={classes.formColumn}>
          <TextInput
            fullWidth
            label="Answer"
            labelColor="common.white"
            labelSize={12}
            value={(message.details.collaboration?.response && message.details.collaboration?.response.content) || ''}
            updateState={onUpdateAnswer}
            multiline
            rows={2}
            variant="filled"
            disabled={requestIsCompleted}
            className={`${classes.fullHeightInput} ${classes.formInput}`}
          />
        </Box>
      </Box>
    </div>
  )
}

export default RfiForm
