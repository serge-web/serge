import colorFor from './colorFor'

updateRouteLineForForce (/* string */ force, /* Line */ line) {
  const hisColor = colorFor(force)
  line.setStyle({
    color: hisColor
  })
}
