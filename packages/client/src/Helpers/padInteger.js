export default function (/* int */num, /* int opt */blanks) {
  var s = '' + num
  if (!blanks) {
    blanks = 2
  }
  return s.padStart(blanks, '0')
}
