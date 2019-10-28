const wargameAttrs = {
  title: `Demo end to end ${Date.now()}`
}
const umpireForce = {
  name: 'White',
  role: 'Game Control'
}
const customForces = [{
  name: 'Red',
  role: 'CO'
}, {
  name: 'Blue',
  role: 'CO'
}]
const allForces = [
  umpireForce,
  ...customForces
]
const allChannels = [{
  name: 'All chat',
  template: 'Chat'
}, {
  name: 'Daily intentions',
  template: 'Daily intentions'
}]

export {
  wargameAttrs,
  umpireForce,
  customForces,
  allForces,
  allChannels
}
