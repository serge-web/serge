import React, { Component } from 'react'
import { connect } from 'react-redux'

class ModalWrapper extends Component<{ children?: any, onBackgroundClick?: () => void, editable?: boolean }> {
  // constructor(props) {
  //   super(props);
  // }

  handleBackgroundClick = (e: React.MouseEvent<HTMLElement>) => {
  if (e.target === e.currentTarget) this.props.onBackgroundClick && this.props.onBackgroundClick()
  }

  render () {
    const setSize = this.props.editable ? 'modal setsize' : 'modal'

    return (
      <div className='modal-bg' onClick={this.handleBackgroundClick}>
        <div className={setSize}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect()(ModalWrapper)
