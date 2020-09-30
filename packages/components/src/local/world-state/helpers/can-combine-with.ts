
import { GroupItem, NodeType } from '../../helper-elements/groups/types/props'
import { RouteStore, SergeGrid, SergeHex, Route } from '@serge/custom-types'
import { hexNamed } from '@serge/helpers'
/**
 *  indicate if two assets can be combined

 */
const canCombineWith = ( store: RouteStore, draggingItem: string | number, item: string | number, _parents: Array<GroupItem>, nodeType: NodeType, gridCells: SergeGrid<SergeHex<{}>> | undefined): boolean => {
  const ACCEPTABLE_RANGE = 1
  if(draggingItem === -1) {
    // on initial render, nothing is being dragged, so
    // a value of -1 is passed for draggingItem
    return true
  } else {
    // check they're not same platform
    if(draggingItem === item) {
      // this can't really happen, but return true
      return true
    } else {
      // see what the mode is
      switch(nodeType) {
        case 'empty': {
          if(item === -1) {
            // special case, being dragged to root level
            return true
          }
          break
        } 
        case 'group' : break;
        case 'group-out': break;
      }
      if(gridCells) {
        const dragging: Route | undefined = store.routes.find(route => route.uniqid === draggingItem)
        const over: Route | undefined = store.routes.find(route => route.uniqid === item)
        if(dragging && over) {
          const dragHex = hexNamed(dragging.currentPosition, gridCells)
          const overHex = hexNamed(over.currentPosition, gridCells)
          if(dragHex && overHex) {
            const range: number = dragHex.distance(overHex)
            return range <= ACCEPTABLE_RANGE
          } else {
            console.warn('failed to find hex cell for locations', dragHex, overHex, 
              dragging.currentPosition, over.currentPosition)
            return false
          }
        } else {
          // we didn't find one or both of the platforms in the top level
          // of a force.  If the platforms aren't at the top level we don't allow them to
          // be combined.
          // TODO: Eventually we should let a helo be put on a ship in a task group
          return false
        }
      } else {
        // don't have grid cells, maybe under test
        return !(draggingItem > item)
      }
    }
  }
}

export default canCombineWith
