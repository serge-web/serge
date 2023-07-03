import { Component } from 'react'
import PropTypes from 'prop-types'

import '@serge/themes/App.scss'

class DropdownInput extends Component {
  onChange = (e) => {
    this.props.updateStore(e.target.value)
  }

  render () {
    return (
      <select disabled={this.props.disabled} value={this.props.data ? this.props.data : 'placeholder'} onChange={this.onChange} className={this.props.className || null}>
        <option value='placeholder' disabled={true}>{this.props.placeholder}</option>
        { this.props.selectOptions.map((item, i) => {
          return (<option key={`${item.value}${item.option}`} value={item.value}>{item.option}</option>)
        })}
      </select>
    )
  }
}

DropdownInput.propTypes = {
  updateStore: PropTypes.func.isRequired,
  selectOptions: PropTypes.array.isRequired
  // options: PropTypes.object.isRequired,
}

export default DropdownInput
