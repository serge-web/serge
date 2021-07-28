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
  selectedRole: Role['roleId']
  byPassUrl?: string
  onIconClick: React.ReactEventHandler
}
