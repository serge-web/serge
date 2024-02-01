
const calculateHealthColor = (healthValue: number): string => {
  let red, green, blue
  if (healthValue === 0) {
    red = 255
    green = 0
    blue = 0
  } else if (healthValue >= 0 && healthValue <= 10) {
    // Red to Dark Red gradient
    red = 255
    green = Math.round((255 - healthValue * 15.25))
    blue = 0
  } else if (healthValue > 10 && healthValue <= 50) {
    // Yellow to Dark Yellow gradient
    red = 255
    green = 255 - Math.round((healthValue - 10) * 3.825)
    blue = 0
  } else if (healthValue > 50 && healthValue <= 100) {
    // Green to Dark Green gradient
    red = Math.round((100 - (healthValue - 10)) * 5.1)
    green = 255
    blue = 0
  }
  
  return `rgb(${red}, ${green}, ${blue})`
}

export default calculateHealthColor
