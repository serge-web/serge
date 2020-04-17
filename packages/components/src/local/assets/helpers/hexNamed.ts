import { Grid, Hex } from 'honeycomb-grid'
import cellName from './cellName'

/** retrive the cell at the supplied human-readable coords ("A01") */
const hexNamed = (name: string, gridCells: Grid<Hex<{}>>): Hex<{}> | undefined => {
    return gridCells.find(cell => cellName(cell) === name)
}

export default hexNamed;
