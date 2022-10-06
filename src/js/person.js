export default class Person {

  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge() {
    let mercuryToEarthYears = 0.24;
    this.age /= mercuryToEarthYears;
    return Math.round(this.age);
  }
};

