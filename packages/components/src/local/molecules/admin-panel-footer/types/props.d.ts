import React from 'react'

export default interface Props {
  force: {
    color: string
    name: string
    icon: string
  }
  selectedRoleId: string
  selectedRoleName: string
  byPassUrl?: string
  onIconClick: React.ReactEventHandler
}
