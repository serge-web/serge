import { FORCE_LAYDOWN, LaydownPhases } from 'src/config'
import { Route, MessageForceLaydown } from 'src/custom-types'

const collateForceLaydown = (routes: Array<Route>): MessageForceLaydown => {
  const moved: Array<Route> = routes.filter((route: Route) => route.laydownPhase && route.laydownPhase === LaydownPhases.Moved)
  const results: Array<{uniqid: string, position: string }> = moved.map((route: Route): {uniqid: string, position: string} => {
    return { uniqid: route.uniqid, position: route.currentPosition }
  })

  const message: MessageForceLaydown = {
    messageType: FORCE_LAYDOWN,
    updates: results
  }
  return message
}

export default collateForceLaydown
