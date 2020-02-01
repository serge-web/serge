import React from 'react'
import './styles.scss'

const Asset = ({ data }) => {
  let status = ''

  if (data.plannedTurns.length) {
    status = `${data.plannedTurns.length} Turns planned`
  }

  const forceClass = data.force && data.force.toLowerCase()
  const typeClass = data.platformType && data.platformType.replace(/ /g, '-').toLowerCase()

  return (
    <div className="orders-panel__asset">
      <div className={
        `platform-counter orders-panel__icon platform-type-${typeClass} platform-force-${forceClass}`
      }/>
      <div className="orders-panel__description">
        <div className="orders-panel__name">{data.name}</div>
        <div className="orders-panel__status">{status}</div>
      </div>
    </div>
  )
}

export default Asset
