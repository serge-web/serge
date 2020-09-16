import React from 'react'

export default interface Props {
  force: {
    color: string
    name: string
    icon: string
    overview: string
  }
  selectedRole: string
  onIconClick: React.ReactEventHandler
}
