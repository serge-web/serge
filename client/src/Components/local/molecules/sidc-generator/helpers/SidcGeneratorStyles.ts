import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    minWidth: '600px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400
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
