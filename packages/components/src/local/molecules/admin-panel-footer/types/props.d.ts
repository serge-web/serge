import React from 'react'

export default interface Props {
  force: {
    color: string
    name: string
    icon: string
  }
  selectedRole: string
  byPassUrl?: string
  onIconClick: React.ReactEventHandler
}
