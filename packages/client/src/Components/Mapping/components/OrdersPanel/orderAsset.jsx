import React from 'react'
import './styles.scss'

const Asset = ({ data, message }) => {
  const forceClass = data.force && data.force.toLowerCase()
  const typeClass = data.platformType && data.platformType.replace(/ /g, '-').toLowerCase()
  // we get messages for assets that have been updated. If there's a message, show a tick marker
  const tickMarker = message && message.length && <span style={{ color: 'green' }} className="fa fa-check-circle"></span>
  return (
    <div className="orders-panel__asset">
      <div className={
        `platform-counter orders-panel__icon platform-type-${typeClass} platform-force-${forceClass}`
      }/>
      <div className="orders-panel__description">
        <div className="orders-panel__name">{data.name}&nbsp;{tickMarker}</div>
        <div className="orders-panel__status">{message}</div>
      </div>
    </div>
  )
}

export default Asset
