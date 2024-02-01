const calculateHealthColor = (healthValue: number): string => {
  const normalizedHealth = Math.min(100, Math.max(0, healthValue)) / 100 

  const red = Math.round(255 * (1 - normalizedHealth))
  const green = Math.round(255 * normalizedHealth)
  const blue = 0

  return `rgb(${red}, ${green}, ${blue})`
}

export default calculateHealthColor
