
import { GroupItem, NodeType } from '../../helper-elements/groups/types/props'
import { RouteStore, SergeGrid, SergeHex, Route } from '@serge/custom-types'
import { hexNamed } from '@serge/helpers'
/**
 *  indicate if two assets can be combined

 */
const canCombineWith = ( store: RouteStore, draggingItem: string | number, item: string | number, _parents: Array<GroupItem>, _type: NodeType, gridCells: SergeGrid<SergeHex<{}>> | undefined): boolean => {
  const ACCEPTABLE_RANGE = 1
  // check we have all data 
  if(draggingItem !== -1) {
    // check they're not sample platform
    if(draggingItem !== item) {
      if(gridCells) {
        const dragging: Route | undefined = store.routes.find(route => route.uniqid === draggingItem)
        const over: Route | undefined = store.routes.find(route => route.uniqid === item)
        if(dragging && over) {
          const dragHex = hexNamed(dragging.currentPosition, gridCells)
          const overHex = hexNamed(over.currentPosition, gridCells)
          if(dragHex && overHex) {
            const range: number = dragHex.distance(overHex)
            console.log('dragging', dragging.name, over.name, !(draggingItem > item), _type, range);
            return range <= ACCEPTABLE_RANGE
          } else {
            console.warn('Didnt find hex cells for', dragging.currentPosition, over.currentPosition)
            return false
          }
        } else {
          console.warn('Didnt find routes for', draggingItem, item, dragging, over)
          return false
        }
      } else {
        // don't have grid cells, maybe under test
        return !(draggingItem > item)
      }
    } else {
      return false
    }
  } else {
    return true
  }
}

export default canCombineWith
