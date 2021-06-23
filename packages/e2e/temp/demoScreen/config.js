const wargameAttrs = {
  title: `Demo end to end ${Date.now()}`
}
const umpireForce = {
  name: 'White',
  roleName: 'Game Control'
}
const customForces = [{
  name: 'Red',
  roleName: 'CO'
}, {
  name: 'Blue',
  roleName: 'CO'
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
