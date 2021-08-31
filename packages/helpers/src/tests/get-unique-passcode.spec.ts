import { forces } from "@serge/mocks"
import { ForceData } from "@serge/custom-types"
import { getUniquePasscode } from "../"

const allForces: ForceData[] = forces

it("Check force role unique passcode", () => {
    const res = getUniquePasscode(allForces, 'P')
    expect(res).not.toEqual('rkrlw6f5m')
})


