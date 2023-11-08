const isHexLight = (color: string):boolean => {
  const hex = color.replace('#', '')
  const red = parseInt(hex.substr(0, 2), 16)
  const green = parseInt(hex.substr(2, 2), 16)
  const blue = parseInt(hex.substr(4, 2), 16)
  const brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000
  return brightness > 155
}

export default isHexLight
