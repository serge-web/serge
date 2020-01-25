// TODO: this class can probably be deleted
import plannedStateFor from './plannedStateFor'

const plannedModePopupFor = asset => {
  let popup = '<b>' + asset.name + '</b><br/>'
  // states
  // TODO: do we have concept of current speed? Maybe take from history
  popup += plannedStateFor(asset.status, 0, asset.platformTypeDetail, asset.platformSpeeds)

  // reset the route
  popup += '<input type="button" value="Reset Planned Route">'

  // TODO: handler for this planned mode changing
  popup += '<input type="button" value="Save">'

  return popup
}

export default plannedModePopupFor
