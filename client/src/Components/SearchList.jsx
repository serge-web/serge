import { Component } from 'react'
import { connect } from 'react-redux'
import { formatShortDate } from 'src/Helpers'
import classNames from 'classnames'
import { PropTypes } from 'prop-types'

import 'src/themes/App.scss'

class SearchList extends Component {
  setSelected = (item) => {
    this.props.setSelected(item)
  }

  render () {
    const that = this

    return (
      <div className='searchlist'>
        <input type='text' className='searchlist-input' key='search-templates' placeholder={this.props.placeholder} onChange={ this.props.filter } value={this.props.searchQuery} />
        <div className='searchlist-list'>
          { this.props.listData.map(function (item) {
            // onClick handlers should not contain instantiating () to pass a specific value, .bind can be used here this is a simpler
            // ES5 way to pass properties to click handlers from arrays, another option is to build a sub-component but I don't like
            // how the data moves back and forth, it breaks Reacts initial idea of 1 way data flow.

            const active = item._id === that.props.selected ? 'active' : null

            // following line includes a workaround, for when a message type doesn't include
            // a title field
            const title = item.details.title ? item.details.title : '[Title missing]'

            const date = formatShortDate(item.lastUpdated)
            return <span className={classNames({ 'searchlist-title': true, active })} href='#' onClick={that.setSelected.bind(that, item)} key={item._id}>{title} - {date}</span>
          })
          }
        </div>
      </div>
    )
  }
}

// empty mapStateToProps is here for react-redux to wire up the dispatch function to props so firing actions is possible.
const mapStateToProps = ({ currentViewURI, umpireMenu }) => ({
  currentViewURI,
  umpireMenu
})

SearchList.propTypes = {
  listData: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default connect(mapStateToProps)(SearchList)
