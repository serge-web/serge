import { AttributeValues, RouteTurn } from "@serge/custom-types"
import orientationFor from "./orientation-for"


it('Calculates correct orientation', () => {
  const orientation = {}
  const history: RouteTurn[] = []
  const planned: RouteTurn[] = []
  const attributes: AttributeValues = []
  const res = orientationFor(orientation, history, planned, attributes)
  expect(res).toEqual(12)
})
