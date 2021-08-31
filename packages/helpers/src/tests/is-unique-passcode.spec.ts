import { forces } from "@serge/mocks"
import { ForceData } from "@serge/custom-types"
import { isUniquePasscode } from "../"

const allForces: ForceData[] = forces
const selectedForce: ForceData = {
  ...forces[0],
  roles: [
    {
      name: "CO",
      roleId: "pkszmzgl4a",
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      canSubmitPlans: true
    },
    {
      roleId: "pkszmzgl4b",
      name: "Game Control",
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
  ]
}
const selectedForceRevised: ForceData = {
  ...forces[0],
  roles: [
    {
      name: "CO",
      roleId: "pkszmzgl4",
      isGameControl: false,
      isObserver: false,
      isInsightViewer: false,
      canSubmitPlans: true
    },
    {
      roleId: "pkszmzgl4",
      name: "Game Control",
      canSubmitPlans: false,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
  ]
}

it("Check non-duplicate force role passcode", () => {
  const res = isUniquePasscode(selectedForce, allForces)
  expect(res).toHaveLength(0)
})

it("Check duplicate force role passcode", () => {
  const res = isUniquePasscode(selectedForceRevised, allForces)
  expect(res).toHaveLength(2)
})
