import Person from '../src/js/person.js'

describe('Person', () => {
  let newPerson;

  beforeEach(() => {
    newPerson = new Person(45, 80);
  });

  test('should correctly assign each property of the Person class with the value assigned', () => {
    expect(newPerson.age).toEqual(45);
    expect(newPerson.lifeExpectancy).toEqual(80);
  });

  test('should correctly divide the age and round it to the nearest integer to determine age in Mercury years', () => {
    let mercuryAge = newPerson.mercuryAge(newPerson);
    expect(mercuryAge).toEqual(188);
  });

  test('should correctly divide the age and round it to the nearest integer to determine age in Venus years', () => {
    let venusAge = newPerson.venusAge(newPerson);
    expect(venusAge).toEqual(73);
  });

  test('should correctly divide the age and round it to the nearest integer to determine age in Mars years', () => {
    let marsAge = newPerson.marsAge(newPerson);
    expect(marsAge).toEqual(24);
  });

  test('should correctly divide the age and round it to the nearest integer to determine age in Jupiter years', () => {
    let jupiterAge = newPerson.jupiterAge(newPerson);
    expect(jupiterAge).toEqual(4);
  });

  test('should correctly convert the life expectancy age into Mercury years', () => {
    let lifeExpectancyMercury = newPerson.lifeExpectanacyMercury(newPerson);
    expect(lifeExpectancyMercury).toEqual(333);
  });

  test('should correctly convert the life expectancy age into Venus years', () => {
    let lifeExpectancyVenus = newPerson.lifeExpectanacyVenus(newPerson);
    expect(lifeExpectancyVenus).toEqual(129);
  });

  test('should correctly convert the life expectancy age into Mars years', () => {
    let lifeExpectancyMars = newPerson.lifeExpectanacyMars(newPerson);
    expect(lifeExpectancyMars).toEqual(43);
  });

  test('should correctly convert the life expectancy age into Jupiter years', () => {
    let lifeExpectancyJupiter = newPerson.lifeExpectanacyJupiter(newPerson);
    expect(lifeExpectancyJupiter).toEqual(7);
  });

});