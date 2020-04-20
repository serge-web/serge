/** convert this point in cell coordinates to lat/long */
const coordsGenerator = (
  columnCount: number,
  rowsCount: number,
  firstChar: string = 'A',
  lastChar: string = 'Z',
): string[] => {
  // Convert character to ASCII code. EX   "A".charCodeAt(0) = 65
  const firstCharCode: number = firstChar.charCodeAt(0)
  const lastCharCode: number = lastChar.charCodeAt(0)
  // Get the difference between first and last char codes
  const codesCount: number = Math.abs(lastCharCode - firstCharCode)
  // Calculate column string max length
  const colIndexLength: number = `${columnCount - 1}`.length

  // Generate first row template to not copy all logic in main loop
  let rowIndex: number = 0
  const rows = []
  // loop equal count of rows
  for (let i = 0; i < rowsCount; i++, rowIndex++) {
    // copy last row value or init a first one
    const row: number[] = [...(rows[rows.length - 1] || [rowIndex])]
    // ++ first value (In string it will be a last number)
    row[0] = rowIndex
    // if row's last value more then biggest letter char code we need to update next char
    // Ex. AZ (Z + 1) -> BA
    if (rowIndex > codesCount) {
      rowIndex = 0
      rows.push(updateArray(row, codesCount))
    } else {
      rows.push(row)
    }
  }

  // Generate columns
  let colIndex: number = 0
  const cols = [...Array(columnCount)].map(() => (
    indexParseString(colIndex ++, colIndexLength)
  ))

  const res: string[] = []
  if (rows.length) {
    // if rows length is ok then get row string max length
    const rowMaxLength = rows[rows.length - 1].length
    // loop on rows
    for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
      // get rov string value based on generated array
      /*
        EX.
        rowMaxLength = 4
        [66 67] => [65, 65, 66, 67] outputs AABC
      */
      const row = rowStingify(rows[rowIdx], rowMaxLength, firstCharCode)

      // Add the col template for every row
      for (let colIdx = 0; colIdx < cols.length; colIdx++) {
        res.push(row + cols[colIdx])
      }
    }
  }

  return res
}

const updateArray = (oldArray: number[], codesCount: number): number[] => {
  // bool var for detecting changes in next map item
  let updateNext: boolean = false
  const res = oldArray.map(code => {
    // add value if previous item value more than maximum allowed
    if (updateNext) {
      updateNext = false
      code++
    }
    // If current item value more than maximum allowed need to reset it and up next item value
    if (code > codesCount) {
      updateNext = true
      return 0
    }
    // return updated or untouched value
    return code
  })
  // In case if after loop last value was on maximum
  if (updateNext) {
    res.push(1)
  }
  return res
}

// convert char codes array to string
/*
  EX.
  rowMaxLength = 4
  [66 67] => [65, 65, 66, 67] outputs AABC
*/
const rowStingify = (column: number[], rowMaxLength: number, firstCharCode: number): string => {
  let key = rowMaxLength - 1
  return [...Array(rowMaxLength)].map(() => {
    return String.fromCharCode((column[key--] || 0) + firstCharCode)
  }).join('')
}

/*
  indexParseString(10000, 5) outputs '10000'
  indexParseString(1000, 5)  outputs '01000'
  indexParseString(100, 5)   outputs '00100'
  indexParseString(10, 5)    outputs '00010'
*/
const indexParseString = (num: number, length: number): string => {
    var r = "" + num
    while (r.length < length) {
        r = "0" + r
    }
    return r
}

export default coordsGenerator
