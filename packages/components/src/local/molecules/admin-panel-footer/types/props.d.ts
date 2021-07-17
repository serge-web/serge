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
  selectedRoleId: string
  selectedRoleName: string
  byPassUrl?: string
  onIconClick: React.ReactEventHandler
}
