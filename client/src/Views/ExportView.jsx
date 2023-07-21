import { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {
  ADMIN_ROUTE,
  EXPORT_ROUTE,
  EXPORT_MESSAGES_SUBROUTE,
  EXPORT_FORCES_SUBROUTE
} from 'src/config'
import Link from '../Components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'

class ExportView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tabs: [
        { title: 'Export Messages', url: EXPORT_ROUTE + EXPORT_MESSAGES_SUBROUTE, urlalt: EXPORT_ROUTE },
        { title: 'Export Forces', url: EXPORT_ROUTE + EXPORT_FORCES_SUBROUTE, urlalt: null }
      ]
    }
  }

  checkTab = tab => {
    const { currentViewURI } = this.props
    const { url, urlalt } = tab
    return classNames({
      'active-tab': url === currentViewURI || urlalt === currentViewURI,
      'tab-nav-item': true
    })
  }

  render () {
    if (!this.props.wargame.isLoading && !this.props.wargame.wargameInitiated) {
      // this.props.setTab(ADMIN_ROUTE);
    }

    return (
      <div className='view-wrapper view-wrapper-gamesetup'>
        <ul className='tab-nav'>
          {this.state.tabs.map((tab, key) => (
            <li key={key} className={this.checkTab(tab)} onClick={() => { this.props.setTab(tab.url) }}>{tab.title}</li>
          ))}
        </ul>
        <div id='sidebar'>
          <Link href={ADMIN_ROUTE} id='home-btn'><FontAwesomeIcon icon={faArrowLeft} size='2x' /></Link>
        </div>
        <div className='export-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
// export default ExportView;
const mapStateToProps = ({ currentViewURI, wargame }) => ({ currentViewURI, wargame })

const mapDispatchToProps = dispatch => ({
  setTab: tab => { dispatch(setCurrentViewFromURI(tab)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExportView)
