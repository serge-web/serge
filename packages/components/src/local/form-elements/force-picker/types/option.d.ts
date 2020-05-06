export default interface Option {
  /* The name of the force */
  name: string
  /* The colour to use for the force (hex) */
  colour: string
  /* Is the current force the selected force? */
  selected?: boolean
}
