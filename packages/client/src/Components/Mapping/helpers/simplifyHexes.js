
/** as we build up lists of cells (for a route), they will typically
 * be full hex grid cell structures.  Here we switch them to just
 * their names, ready to be sent off around the wargame
 */
simplifyHexes (/* array<hex cell */cells) {
  return cells.map(cell => cell.name)
}