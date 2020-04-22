import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'

/** retrive the cell at the supplied human-readable coords ("A01") */
const hexNamed = (name: string, gridCells: SergeGrid<SergeHex<{}>>): SergeHex<{}> | undefined => {
    return gridCells.find(cell => cell.name === name)
}

export default hexNamed;
