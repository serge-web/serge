/** convert this point in cell coordinates to lat/long */
const padInteger = (num: number, blanks?: number) => {
  var s = '' + num
  if (!blanks) {
    blanks = 2
  }
  return s.padStart(blanks, '0')
}

export default padInteger

