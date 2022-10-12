export default class Person {

  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge(age) {
    age = this.age;
    let mercuryToEarthYears = 0.24;
    age /= mercuryToEarthYears;
    return Math.round(age);
  }

  venusAge(age) {
    age = this.age;
    let venusToEarthYears = 0.62;
    age /= venusToEarthYears;
    return Math.round(age);
  }

  marsAge(age) {
    age = this.age;
    let marsToEarthYears = 1.88;
    age /= marsToEarthYears;
    return Math.round(age);
  }

  jupiterAge(age) {
    age = this.age;
    let jupiterToEarthYears = 11.86;
    age /= jupiterToEarthYears;
    return Math.round(age);
  }

  lifeExpectanacyMercury(lifeExpectancy) {
    lifeExpectancy = this.lifeExpectancy;
    let mercuryToEarthYears = 0.24;
    lifeExpectancy /= mercuryToEarthYears;
    return Math.round(lifeExpectancy);
  }

  lifeExpectanacyVenus(lifeExpectancy) {
    lifeExpectancy = this.lifeExpectancy;
    let venusToEarthYears = 0.62;
    lifeExpectancy /= venusToEarthYears;
    return Math.round(lifeExpectancy);
  }

  lifeExpectanacyMars(lifeExpectancy) {
    lifeExpectancy = this.lifeExpectancy;
    let marsToEarthYears = 1.88;
    lifeExpectancy /= marsToEarthYears;
    return Math.round(lifeExpectancy);
  }

  lifeExpectanacyJupiter(lifeExpectancy) {
    lifeExpectancy = this.lifeExpectancy;
    let jupiterToEarthYears = 11.86;
    lifeExpectancy /= jupiterToEarthYears;
    return Math.round(lifeExpectancy);
  }

  outliveOrYearsLeftMercury(age, lifeExpectancy) {
    age = this.mercuryAge();
    lifeExpectancy = this.lifeExpectanacyMercury();
    if (age > lifeExpectancy) {
      let outliveAge =  age - lifeExpectancy;
      return outliveAge;
    } else {
      let yearsLeftToLive = lifeExpectancy - age;
      return yearsLeftToLive;
    }
  }

  outliveOrYearsLeftVenus(age, lifeExpectancy) {
    age = this.venusAge();
    lifeExpectancy = this.lifeExpectanacyVenus();
    if (age > lifeExpectancy) {
      let outliveAge =  age - lifeExpectancy;
      return outliveAge;
    } else {
      let yearsLeftToLive = lifeExpectancy - age;
      return yearsLeftToLive;
    }
  }

  outliveOrYearsLeftMars(age, lifeExpectancy) {
    age = this.marsAge();
    lifeExpectancy = this.lifeExpectanacyMars();
    if (age > lifeExpectancy) {
      let outliveAge =  age - lifeExpectancy;
      return outliveAge;
    } else {
      let yearsLeftToLive = lifeExpectancy - age;
      return yearsLeftToLive;
    }
  }
  
  outliveOrYearsLeftJupiter(age, lifeExpectancy) {
    age = this.jupiterAge();
    lifeExpectancy = this.lifeExpectanacyJupiter();
    if (age > lifeExpectancy) {
      let outliveAge =  age - lifeExpectancy;
      return outliveAge;
    } else {
      let yearsLeftToLive = lifeExpectancy - age;
      return yearsLeftToLive;
    }
  }
}
