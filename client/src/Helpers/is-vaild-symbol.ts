import ms from 'milsymbol'

const isValidSymbol = (sidcCode: string): boolean => {
  try {
    const symbol = new ms.Symbol(sidcCode)
    return !!symbol['validIcon'] 
  } catch (error) {
    console.log('Error occurred while validating symbol:', error)
    return false 
  }
}

export default isValidSymbol
