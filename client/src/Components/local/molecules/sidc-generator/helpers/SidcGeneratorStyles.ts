import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '800px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    paddingTop: 18
  },
  warning: {
    fontWeight: 600
  },
  content: {
    maxHeight: 308
  },
  symbolContainer: {
    textAlign: 'center',
    margin: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}))

export default useStyles
