export default function plannedStateFor (/* String */ currentState, /* number */ currentSpeed, /* dictionary */ platformStates, /* array */ platformSpeeds) {
  var popup = 'Proposed State:<fieldset id="state"><ul>'
  for (const key in platformStates.states) {
    // TODO: only show the speed box if this state is mobile
    // const stateDetail = platformStates[key]
    const checked = key === currentState ? 'checked' : ''
    // TODO: attach onclick handler in next line
    const stateCtrl = '<li><input name="state" type="radio" name="vehicle3" ' + checked + ' value="' + key + '">' + key + '</input></li>'
    popup += stateCtrl
  }
  popup += '</ul>'
  // and the speeds
  popup += 'Proposed Speed:<ul>'
  if (platformSpeeds) {
    platformSpeeds.forEach((speed) => {
      const checked = speed === currentSpeed ? 'checked' : ''
      // TODO: attach handler to changes in next field
      popup += '<li><input name="speed" type="radio" name="vehicle3" ' + checked + '>' + speed + '</input><br/></li>'
    })
  }
  popup += '</ul><hr/>'
  return popup
};
