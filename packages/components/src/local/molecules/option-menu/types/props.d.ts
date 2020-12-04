import React from 'react'
import FontAwesomeCommonTypes from '@fortawesome/fontawesome-common-types'

export interface MenuItem {
  /**
   * Callback on menu item click event
   */
  onClick: ((gameTitle: string) => void)
  /**
   * Menu icon taken from fontawesome icons list
   */
  icon: [FontAwesomeCommonTypes.IconPrefix, FontAwesomeCommonTypes.IconName] | FontAwesomeCommonTypes.IconLookup
  /**
   * Menu item title for accessibility
   */
  title: string | undefined
  /**
   * Menu label that is displayed to the user
   */
  label: React.ReactNode
}

export default interface Props {
  /**
   * List of menus
   */
  menus: Array<MenuItem>
  /**
   * Game name that is used as the option menu parameter
   */
  gameName: string
  /**
   * Callback on hide menu event
   */
  onHideMenu?: () => void
}
