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
  success: {
    color: '#fff',
    fontWeight: 700,
    padding: '0.01em 16px',
    borderRadius: 4,
    border: '1px solid #fff !important',
    backgroundColor: '#4CAF50 !important'
  },
  info: {
    fontWeight: 500,
    background: '#2196F3',
    color: '#fff',
    border: '1px solid #ccc',
    padding: '1.01em 16px',
    fontFamily: 'Verdana,sans-serif'
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
