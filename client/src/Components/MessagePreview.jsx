import React, { Component } from 'react'
import { connect } from 'react-redux'

import check from 'check-types'
import moment from 'moment'

import 'src/themes/App.scss'

const Fragment = React.Fragment

class MessagePreview extends Component {
  createObjItem (pair) {
    const that = this
    return <span key={`objItem--${pair[0]}-${pair[1]}`} className='group-section'>{ that.deconstructObj(pair[1]) }</span>
  }

  createBoolItem (pair) {
    return <span key={`boolItem--${pair[0]}-${pair[1]}`}>{pair[1] ? pair[0] : false}</span>
  }

  createTimeItem (pair) {
    return (
      <Fragment key={`dateTime-${pair[1]}`}>
        <h3>{pair[0]}</h3>
        <span>{moment(pair[1]).format('Do MMMM YYYY, HH:mm')}</span>
      </Fragment>
    )
  }

  createStrItem (pair, withoutName) {
    return <span key={`strItem-${pair[0]}-${pair[1]}`}><b>{pair[0]}: </b>{pair[1]}</span>
  }

  deconstructArr (pair) {
    const that = this
    return (
      <Fragment key={`${pair[0]}`}>
        <h3>{pair[0]}</h3>
        {pair[1].map((item) => {
          // CHECK NAME PROP ON EVERY OBJ
          return (
            that.deconstructObj(item)
          )
        })}
      </Fragment>
    )
  }

  deconstructObj (obj) {
    const that = this
    const keyPropPairs = Object.entries(obj)

    return keyPropPairs.map((pair, i) => {
      if (check.object(pair[1])) return that.createObjItem(pair)
      if (check.array.of.object(pair[1])) return that.deconstructArr(pair)
      if (check.boolean(pair[1])) return that.createBoolItem(pair)

      if (moment(pair[1], moment.ISO_8601, true).isValid()) return that.createTimeItem(pair)

      return that.createStrItem(pair)
    })
  }

  render () {
    if (!this.props.detail) return false

    const that = this
    const keyPropPairs = Object.entries(this.props.detail)

    return keyPropPairs.map((pair, i) => {
      if (i === 0) {
        return (
          <Fragment key={`from-${pair[1]}`}>
            <h2>{pair[1]}</h2>
            { this.props.from ? <span key={'from'}>From: {this.props.from}</span> : false }
          </Fragment>
        )
      }

      if (check.object(pair[1])) return that.createObjItem(pair)
      if (check.array.of.object(pair[1])) return that.deconstructArr(pair)
      if (check.boolean(pair[1])) return that.createBoolItem(pair)
      if (moment(pair[1], moment.ISO_8601, true).isValid()) return that.createTimeItem(pair)

      return (
        <Fragment key={`${pair[0]}-${pair[1]}`}>
          <h3>{pair[0]}</h3>
          <span>{pair[1]}</span>
        </Fragment>
      )
    })
  }
}

export default connect()(MessagePreview)
