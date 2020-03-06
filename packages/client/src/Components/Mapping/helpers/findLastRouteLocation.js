export default function findLastRouteWithLocation (/* array */ routes, /* LatLng */ defaultLoc) {
  const reversed = routes.slice().reverse()
  let cell = null
  reversed.find(thisRoute => {
    if (thisRoute.route && thisRoute.route.length > 0) {
      cell = thisRoute.route[thisRoute.route.length - 1]
      return true
    }
    return false
  })
  return cell || defaultLoc
};
