export default interface PropTypes {
  /**
   * All types in this definition are options for a form input
   */
  formData: {
    status: Array<string>,
    speed: Array<number>,
    visible_to: Array<{
      name: string,
      colour: string
    }>,
    condition: Array<string>
  }
}

