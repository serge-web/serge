import { Role } from '@serge/custom-types'
import React from 'react'

export default interface Props {
  force: {
    color: string
    name: string
    /**
    * @deprecated use iconURL instead
    */
    icon?: string
    iconURL: string
  }
  selectedRoleName: Role['name']
  byPassUrl?: string
  onIconClick: React.ReactEventHandler
}
