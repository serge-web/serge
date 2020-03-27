import colorFor from './colorFor'

export default function updateRouteLineForForce (/* string */ force, /* Line */ line) {
  const hisColor = colorFor(force)
  line.setStyle({
    color: hisColor
  })
}
