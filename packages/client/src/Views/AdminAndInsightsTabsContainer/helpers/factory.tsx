import React, { ReactNode } from 'react'
import { TabNode } from 'flexlayout-react'
import GameAdmin from '../../GameAdmin'
import InsightsChannel from '../../InsightsChannel'

type Factory = (node: TabNode) => ReactNode

const factory = (gameAdminTitle: string, insights: string): Factory => {
  return (node: TabNode): ReactNode => {
    if (node.getName() === gameAdminTitle) return <GameAdmin />
    if (node.getName() === insights) return <InsightsChannel />
    return null
  }
}

export default factory
