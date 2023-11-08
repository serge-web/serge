export const lightOrDark = (color: string): 'light' | 'dark' => {
  let r: any, g: any, b: any
  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    const colorMatch = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/) || []

    r = colorMatch[1]
    g = colorMatch[2]
    b = colorMatch[3]
  } else {
    // If RGB --> Convert it to HEX:
    const newColor: any = +('0x' + color.slice(1).replace(color.length < 5 ? /./g : '', '$&$&'))

    r = newColor >> 16
    g = newColor >> 8 & 255
    b = newColor & 255
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp: any = Math.sqrt(
    0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
  )

  // Using the HSP value, determine whether the color is light or dark
  return hsp > 200 ? 'light' : 'dark'
}

export default lightOrDark
