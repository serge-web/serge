export default function plannedStateFor (/* String */ currentState, /* number */ curentSpeed, /* dictionary */ platformStates) {
  var popup = 'Proposed State:<ul>'
  for (const key in platformStates) {
    // TODO: only show the speed box if this state is mobile
    // const stateDetail = platformStates[key]
    const checked = key === currentState ? 'checked' : ''
    // TODO: attach onclick handler in next line
    const stateCtrl = '<input type="radio" name="vehicle3" ' + checked + ' value="' + key + '">' + key + '</input><br/>'
    popup += stateCtrl
  }
  popup += '</ul>'
  popup += 'Speed:<input type="text" name="vehicle3"  value="' + curentSpeed + '"></input><br/>'
  popup += '<hr/>'
  return popup
};
