import React from 'react'
import {
  ADMIN_ROUTE,
  MESSAGE_LIBRARY_ROUTE,
  MESSAGE_TEMPLATE_ROUTE,
  WELCOME_SCREEN_EDIT_ROUTE
} from '../consts'
import Link from './Link'

export default (props) => {
  const menus = {
    [ADMIN_ROUTE]: 'Games',
    [MESSAGE_TEMPLATE_ROUTE]: 'Message Templates',
    [MESSAGE_LIBRARY_ROUTE]: 'Message Library',
    [WELCOME_SCREEN_EDIT_ROUTE]: 'Welcome Screen'
  }
  return (
    <div id='sidebar_admin'>
      {
        Object.keys(menus).map(key => {
          const activeClassName = props.activeTab === key ? 'link--active' : ''
          const className = `link link--large ${activeClassName}`
          return <Link href={ key } key={ key } class={ className }>{ menus[key] }</Link>
        })
      }
    </div>
  )
}
