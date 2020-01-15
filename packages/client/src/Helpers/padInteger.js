/** convenience function to zero pad a number,
 * returning `01` for `1` or `12` for `12`, for instance
 */
export default function (/* int */num, /* int opt */blanks) {
  var s = '' + num
  if (!blanks) {
    blanks = 2
  }
  return s.padStart(blanks, '0')
}
