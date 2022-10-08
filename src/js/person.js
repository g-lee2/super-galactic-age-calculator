export default class Person {

  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge(age) {
    this.age = age;
    let mercuryToEarthYears = 0.24;
    this.age /= mercuryToEarthYears;
    return Math.round(this.age);
  }

  venusAge(age) {
    this.age = age;
    let venusToEarthYears = 0.62;
    this.age /= venusToEarthYears;
    return Math.round(this.age);
  }

  marsAge(age) {
    this.age = age;
    let marsToEarthYears = 1.88;
    this.age /= marsToEarthYears;
    return Math.round(this.age);
  }

  jupiterAge(age) {
    this.age = age;
    let jupiterToEarthYears = 11.86;
    this.age /= jupiterToEarthYears;
    return Math.round(this.age);
  }

  lifeExpectanacyMercury(lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
    let mercuryToEarthYears = 0.24;
    this.lifeExpectancy /= mercuryToEarthYears;
    return Math.round(this.lifeExpectancy);
  }

  lifeExpectanacyVenus(lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
    let venusToEarthYears = 0.62;
    this.lifeExpectancy /= venusToEarthYears;
    return Math.round(this.lifeExpectancy);
  }

  lifeExpectanacyMars(lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
    let marsToEarthYears = 1.88;
    this.lifeExpectancy /= marsToEarthYears;
    return Math.round(this.lifeExpectancy);
  }

  lifeExpectanacyJupiter(lifeExpectancy) {
    this.lifeExpectancy = lifeExpectancy;
    let jupiterToEarthYears = 11.86;
    this.lifeExpectancy /= jupiterToEarthYears;
    return Math.round(this.lifeExpectancy);
  }

  outliveOrYearsLeftMercury(age, lifeExpectancy) {
    age = this.mercuryAge();
    lifeExpectancy = this.lifeExpectanacyMercury();
    if (age > lifeExpectancy) {
      let outliveAge =  age - lifeExpectancy;
      return "Congratulations! You lived " + outliveAge + " years more than the life expectancy age!";
    } else {
      let yearsLeftToLive = lifeExpectancy - age;
      return "You have " + yearsLeftToLive + " years left to live on Mercury!";
    }
  }

  outliveOrYearsLeftVenus(age, lifeExpectancy) {
    age = this.venusAge();
    lifeExpectancy = this.lifeExpectanacyVenus();
    if (age > lifeExpectancy) {
      let outliveAge =  age - lifeExpectancy;
      return "Congratulations! You lived " + outliveAge + " years more than the life expectancy age!";
    } else {
      let yearsLeftToLive = lifeExpectancy - age;
      return "You have " + yearsLeftToLive + " years left to live on Venus!";
    }
  }

  outliveOrYearsLeftMars(age, lifeExpectancy) {
    age = this.marsAge();
    lifeExpectancy = this.lifeExpectanacyMars();
    if (age > lifeExpectancy) {
      let outliveAge =  age - lifeExpectancy;
      return "Congratulations! You lived " + outliveAge + " years more than the life expectancy age!";
    } else {
      let yearsLeftToLive = lifeExpectancy - age;
      return "You have " + yearsLeftToLive + " years left to live on Mars!";
    }
  }

  outliveOrYearsLeftJupiter(age, lifeExpectancy) {
    age = this.jupiterAge();
    lifeExpectancy = this.lifeExpectanacyJupiter();
    if (age > lifeExpectancy) {
      let outliveAge =  age - lifeExpectancy;
      return "Congratulations! You lived " + outliveAge + " years more than the life expectancy age!";
    } else {
      let yearsLeftToLive = lifeExpectancy - age;
      return "You have " + yearsLeftToLive + " years left to live on Jupiter!";
    }
  }
}
