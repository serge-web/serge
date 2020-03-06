const clickHandler = (currentForce: string, currentMarkerForce: string, setClicked: Function): Function => {
  return currentForce !== 'umpire' &&
  currentForce !== currentMarkerForce &&
  setClicked(true)
}

export default clickHandler
