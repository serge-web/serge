import { Component } from 'react'
import PropTypes from 'prop-types'

import 'src/themes/App.scss'

class Checkbox extends Component {
  onChange = (e) => {
    this.props.updateStore(e.target.checked)
  }

  render () {
    return (
      <div className='md-checkbox'>
        <input
          id={this.props.id}
          type='checkbox'
          onChange={this.onChange}
          checked={this.props.isChecked}
          title={this.props.title}
          className='md-checkbox--checkbox'
        />
        <label title={this.props.title} htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  updateStore: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Checkbox
