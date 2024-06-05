import { ADMIN_ROUTE, WELCOME_SCREEN_EDIT_ROUTE } from 'src/config'
import Link from './Link'

export default (props) => {
  const menus = {
    [ADMIN_ROUTE]: 'Games',
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
