const colorFor = (force: string): string => {
  let hisColor
  switch (force) {
    case 'Red':
      hisColor = '#ff0000'
      break
    case 'Blue':
      hisColor = '#000fff'
      break
    case 'Blue2':
      hisColor = '#33adf9'
      break
    case 'Green':
      hisColor = '#19bd37'
      break
    default:
      hisColor = '#555'
  }
  return hisColor
}

export default colorFor
