import { UMPIRE_FORCE } from '../../../consts'

export default function findHoverTextFor (/* string */ name, /* string */ condition, /* string */ force, /* string */ myForce,
  /* element */ perception, /* string */ contactId) {
  var hoverTxt
  if (force === myForce || myForce === UMPIRE_FORCE) {
    hoverTxt = name + ' - ' + condition
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
