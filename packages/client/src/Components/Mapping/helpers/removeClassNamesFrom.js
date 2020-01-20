import L from 'leaflet'
export default function removeClassNamesFrom (/* object */ marker, /* array String  refixes */ prefixes) {
  // ok, get the class
  const classStr = L.DomUtil.getClass(marker._icon)
  const items = classStr.split(' ')
  items.forEach(name => {
    // now check our prefixes
    prefixes.forEach(prefix => {
      if (name.startsWith(prefix)) {
        // ok, drop it
        L.DomUtil.removeClass(marker._icon, name)
      }
    })
  })
};
