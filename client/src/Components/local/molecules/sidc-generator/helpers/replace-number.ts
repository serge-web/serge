import { isValidSymbol } from 'src/Helpers'

const replaceNumber = (originalNumber: number | string, replacementNumber: string, startIndex: number): string => {
  let originalNumberString = originalNumber.toString()
  const replacementNumberString = replacementNumber.toString()
  const replacementLength = replacementNumberString.length
  
  if (startIndex + replacementLength <= originalNumberString.length) {
    originalNumberString = originalNumberString.substring(0, startIndex) + replacementNumberString + originalNumberString.substring(startIndex + replacementLength)
    const modifiedNumber = originalNumberString
    const vaildSymbol = isValidSymbol(modifiedNumber)
    if (!vaildSymbol) {
      const aString = originalNumberString.toString()
      const modifiedString = aString.substring(0, 6) + '00000000000000'
      const modifiedNumber = parseInt(modifiedString, 10)
      return String(modifiedNumber)
    }
    return modifiedNumber
  } else {
    console.log("Replacement doesn't fit into the original number.")
    return ''
  }
}

export default replaceNumber
