export default interface PropTypes {
    /** callback for filter status being changed */
    setFilterApplied: { (applied: boolean): void }
    /** current value of `filter applied` */
    filterApplied: boolean
}
