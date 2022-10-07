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

  jupiterAge() {
    let jupiterToEarthYears = 11.86;
    this.age /= jupiterToEarthYears;
    return Math.round(this.age);
  }

  lifeExpectanacyMercury() {
    let mercuryToEarthYears = 0.24;
    this.lifeExpectancy /= mercuryToEarthYears;
    return Math.round(this.lifeExpectancy);
  }

  lifeExpectanacyVenus() {
    let venusToEarthYears = 0.62;
    this.lifeExpectancy /= venusToEarthYears;
    return Math.round(this.lifeExpectancy);
  }

  lifeExpectanacyMars() {
    let marsToEarthYears = 1.88;
    this.lifeExpectancy /= marsToEarthYears;
    return Math.round(this.lifeExpectancy);
  }
};
