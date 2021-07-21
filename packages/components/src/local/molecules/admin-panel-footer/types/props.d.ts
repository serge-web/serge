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
  selectedRole: string
  byPassUrl?: string
  onIconClick: React.ReactEventHandler
}
