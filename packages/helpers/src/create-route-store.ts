import { RouteStore, RouteForce } from '@serge/custom-types'

/** convert this point in world coordinates to cell
 * @param {data} any wargame data object
 * @param {string[]} controls forces controlled by this player
 * @returns {RouteStore} RouteStore representing current data
 */
const createRouteStore = (data: any): RouteStore => {
  // loop through forces
  const forces: Array<RouteForce> = data.map((force: any) => {
    // see if we control it
    console.log('create route', force)

      // loop through assets

      // create route

      // store route

      // done
    });

    const res: RouteStore = {data: forces}

  return res;
}

export default createRouteStore
