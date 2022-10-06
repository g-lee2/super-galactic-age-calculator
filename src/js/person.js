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

  venusAge() {
    let venusToEarthYears = 0.62;
    this.age /= venusToEarthYears;
    return Math.round(this.age);
  }

  marsAge() {
    let marsToEarthYears = 1.88;
    this.age /= marsToEarthYears;
    return Math.round(this.age);
  }
};

