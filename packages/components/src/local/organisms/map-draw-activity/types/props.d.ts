import { PlannedActivityGeometry, PlanningActivity } from '@serge/custom-types'

export default interface PropTypes {
    // the activity being drawn
    planningActivity?: PlanningActivity
    // callback for feature complete
    storeFeature: {(planned: PlannedActivityGeometry[]): void}
    // callback for cancel feature drawing
    cancelFeature: {(): void}
}
