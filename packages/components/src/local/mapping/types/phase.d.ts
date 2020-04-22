/**
 * list the possible phases in a wargame
 * TODO: the concept of phase isn't restricted to the mapping component.  It should be declared higher up the tree
 */
export enum Phase {
  /* players are planning their next turn
   */
  Planning = "Planning",
  /** umpire is resolving planned turns */
  Adjudication = "Adjudication"
}