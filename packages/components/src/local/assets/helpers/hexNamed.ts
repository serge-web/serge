import cellName from './cellName'
import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'

/** retrive the cell at the supplied human-readable coords ("A01") */
const hexNamed = (name: string, gridCells: SergeGrid<SergeHex<{}>>): SergeHex<{}> | undefined => {
    // TODO: it's expensive to create the cell name each time we do this loop.
    // we should do it once, and store it in the cell
    return gridCells.find(cell => cellName(cell) === name)
}

export default hexNamed;
