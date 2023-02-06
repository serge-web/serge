const hexToRGBA = (hex: string, opacity: number): string => {
  const formatHex = (hexStr: string): string => {
    const c = hexStr.substring(1).split('')
    if (c.length === 3) {
      return `${c[0]}${c[0]}${c[1]}${c[1]}${c[2]}${c[2]}`
    }
    return `${c.join('')}`
  }
  const color = formatHex(hex)
  const r = parseInt(color.slice(0, 2), 16)
  const g = parseInt(color.slice(2, 4), 16)
  const b = parseInt(color.slice(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export default hexToRGBA
