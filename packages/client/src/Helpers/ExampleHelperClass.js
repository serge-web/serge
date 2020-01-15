export default class ExampleHelperClass {
  constructor (firstName, lastName, age, sex) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.sex = sex
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }

  generateBio () {
    return {
      name: this.fullName,
      age: this.age,
      sex: this.sex
    }
  }

  createGuestPass (access) {
    const bio = this.generateBio()
    if (access === 'full') {
      bio.passType = 'All Access'
    }
    if (access === 'limited') {
      bio.passType = 'Restricted Access'
    }

    return bio
  }
}
