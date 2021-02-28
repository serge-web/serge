import React, { useReducer } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'

/* Import Types */
import Props, { State, Action } from './types/props'

const useStyles = makeStyles(() => ({
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
      minHeight: '25vh',
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
  const { request, onSaveDraft, onSubmit } = props
  const formReducers = (state: State, action: Action): State => {
    switch (action.type) {
      case 'updateAnswer':
        return {
          ...state,
          answer: action.payload
        }
      case 'updateMessage':
        return {
          ...state,
          message: action.payload
        }
    }
  }
  const [state, dispatch] = useReducer(formReducers, {
    answer: undefined,
    message: undefined
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
  const handleOnSaveDraft = (): void => {
    onSaveDraft && onSaveDraft(state)
  }
  const handleOnSubmit = (): void => {
    onSubmit && onSubmit(state)
  }
  return (
    <>
      <Box className={classes.formContainer}>
        <Box className={classes.formColumn}>
          <Box className={classes.formWrapper}>
            <TextInput
              fullWidth
              label={ request.title }
              labelColor="common.white"
              labelSize={12}
              value={ request.description }
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
              value={state.message}
              updateState={onUpdateMessage}
              multiline
              rows={2}
              variant="filled"
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
            value={state.answer}
            updateState={onUpdateAnswer}
            multiline
            rows={2}
            variant="filled"
            className={`${classes.fullHeightInput} ${classes.formInput}`}
          />
        </Box>
      </Box>
      <Box className={classes.formActions}>
        { onSaveDraft ? <Button onClick={handleOnSaveDraft} customVariant="form-action" size="small">Save draft</Button> : null }
        { onSubmit ? <Button onClick={handleOnSubmit} customVariant="form-action" size="small">Send for review</Button> : null }
      </Box>
    </>
  )
}

export default RfiForm
