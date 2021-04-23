import React from 'react'
import { MessageCustom } from '@serge/custom-types/message'
import { ChannelData } from '@serge/custom-types'
import { RfiStatusBoard } from '@serge/components'

const RfiStatusBoardChannel = ({ rfiData}: { rfiData: {rfiMessages:MessageCustom[], roles: string[], channels: Array<ChannelData>} }) => {

  return (
    <RfiStatusBoard rfiMessages={rfiData.rfiMessages} roles={rfiData.roles} channels={rfiData.channels} />
  )
}

export default RfiStatusBoardChannel
