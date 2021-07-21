import React from 'react'

export default interface Props {
  /**
   * Force information object
   */
  force: {
    color: string
    name: string
   /**
    * @deprecated use iconURL instead
    */
    icon?: string
    iconURL: string
    overview: string
  }
  /**
   * Selected role label
   */
  selectedRole: string
  /**
   * Event handler on icon click
   */
  onIconClick: React.ReactEventHandler
}
