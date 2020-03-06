import { UMPIRE_FORCE } from '../../../consts'

export default function findAssetNameFor (/* string */ name, /* string */ condition, /* string */ force, /* string */ myForce,
  /* element */ perception, /* string */ contactId) {
  var hoverTxt
  if (force === myForce || myForce === UMPIRE_FORCE) {
    const condStr = condition && condition.length ? ' - ' + condition : ''
    hoverTxt = name + condStr
  } else {
    // do we have a perceived name for it?
    if (perception && perception.name && perception.name.length) {
      hoverTxt = perception.name
    } else {
      hoverTxt = contactId || 'Contact unknown'
    }
  }
  return hoverTxt
};
