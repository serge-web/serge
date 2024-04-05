import { Component } from 'react'
import { connect } from 'react-redux'
import SidebarAdmin from '../Components/SidebarAdmin'
import WargameSearchList from '../Components/WargameSearchList'
import Loader from '../Components/Loader'
import {
  ADMIN_ROUTE,
  GAME_SETUP_ROUTE
} from 'src/config'
import Button from '../Components/local/atoms/button'
import AdminLogin from '../Components/local/organisms/admin-login'
import ZipFileUploader from '../Components/local/atoms/zip-dropzone'
import {
  createNewWargameDB,
  populateWargameList,
  checkAdminAccess,
  downloadAllWargames,
  openFauxtonUI,
  populateWargame
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import '../themes/App.scss'

class GameDesignerInterface extends Component {
  componentDidMount () {
    this.props.dispatch(populateWargameList())
  }

  createWargame = () => {
    this.props.dispatch(createNewWargameDB())
  }

  clearWargames = () => {
    this.props.dispatch(modalAction.open('confirmDelete', {
      type: 'games'
    }))
  }

  downloadAllData = () => {
    this.props.dispatch(downloadAllWargames())
  }

  openWargamesApiFuxion = () => {
    this.props.dispatch(openFauxtonUI)
  }

  checkPassword = password => {
    this.props.dispatch(checkAdminAccess(password))
  }

  onButtonClick = onClick => route => {
    onClick && onClick()
    route && this.props.dispatch(setCurrentViewFromURI(route))
  }
  
  // Method to populate a wargame with data
  onPopulateWargame = (data, dbName) => {
    this.props.dispatch(populateWargame(data, dbName))
  }

  render () {
    const loading = this.props.dbLoading.loadingWargames
 
    if (loading) {
      return <Loader />
    }

    if (this.props.wargame.adminNotLoggedIn) {
      return (
        <div id='umpire' className='flex-content-wrapper flex-landing-screen'>
          <div className='flex-content flex-content--center' id='form-login-admin'>
            <AdminLogin onSubmit={this.checkPassword} />
          </div>
        </div>
      )
    }

    return (
      <div id='umpire' className='flex-content-wrapper flex-transparent flex-jc-center'>
        <SidebarAdmin activeTab={ADMIN_ROUTE} />
        <div className='flex-content flex-content--big flex-content--last'>
          <h2 id='page-title'>Games</h2>
          <div className='btn-group game-designer-action'>
            <Button
              onClick={() => this.onButtonClick(this.createWargame)(GAME_SETUP_ROUTE)}
            >
              Create
            </Button>
            <Button
              onClick={() => this.onButtonClick(this.clearWargames)(ADMIN_ROUTE)}
              color='primary'
            >
              Clear wargames
            </Button>
            <Button
              onClick={() => this.onButtonClick(this.downloadAllData())}
              color='secondary'
            >
              Download all data
            </Button>
            <Button
              onClick={() => this.onButtonClick(this.openWargamesApiFuxion())}
              color='secondary'
            >
              Open Fauxton UI
            </Button>
            <ZipFileUploader onChange={ this.onPopulateWargame } >
              <Button
                color='secondary'
              >
              Populate wargame
              </Button>
            </ZipFileUploader>
          </div>
          <WargameSearchList key='searchlist'
            listData={this.props.wargame.wargameList}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ wargame, dbLoading }) => ({
  wargame,
  dbLoading
})

export default connect(mapStateToProps)(GameDesignerInterface)
