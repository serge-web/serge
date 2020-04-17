import { Grid, Hex } from 'honeycomb-grid'
import cellName from './cellName'

/** retrive the cell at the supplied human-readable coords ("A01") */
const hexNamed = (name: string, gridCells: Grid<Hex<{}>>): Hex<{}> | undefined => {
    // TODO: it's expensive to create the cell name each time we do this loop.
    // we should do it once, and store it in the cell
    return gridCells.find(cell => cellName(cell) === name)
}

export default hexNamed;
