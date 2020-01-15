export default function colorFor (/* String */ force) {
  let hisColor
  switch (force) {
    case 'Red':
      hisColor = '#ff0000'
      break
    case 'Blue':
      hisColor = '#000fff'
      break
    case 'Green':
      hisColor = '#19bd37'
      break
    default:
      console.error('failed to recognise force for:' + force)
      hisColor = '#555'
      break
  }
  return hisColor
};
