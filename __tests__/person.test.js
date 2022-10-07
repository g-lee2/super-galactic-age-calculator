import Person from '../src/js/person.js'

describe('Person', () => {

  test('should correctly assign each property of the Person class with the value assigned', () => {
    const newPerson = new Person(45, 80);
    expect(newPerson.age).toEqual(45);
    expect(newPerson.lifeExpectancy).toEqual(80);
  });

  test('should correctly divide the age and round it to the nearest integer to determine age in Mercury years', () => {
    const newPerson = new Person(45, 80);
    let mercuryAge = newPerson.mercuryAge(newPerson);
    expect(mercuryAge).toEqual(188);
  });

  test('should correctly divide the age and round it to the nearest integer to determine age in Venus years', () => {
    const newPerson = new Person(45, 80);
    let venusAge = newPerson.venusAge(newPerson);
    expect(venusAge).toEqual(73);
  });

  test('should correctly divide the age and round it to the nearest integer to determine age in Mars years', () => {
    const newPerson = new Person(45, 80);
    let marsAge = newPerson.marsAge(newPerson);
    expect(marsAge).toEqual(24);
  });

  test('should correctly divide the age and round it to the nearest integer to determine age in Jupiter years', () => {
    const newPerson = new Person(45, 80);
    let jupiterAge = newPerson.jupiterAge(newPerson);
    expect(jupiterAge).toEqual(4);
  });

  test('should correctly convert the life expectancy age into Mercury years', () => {
    const newPerson = new Person(45, 80);
    let lifeExpectancyMercury = newPerson.lifeExpectanacyMercury(newPerson);
    expect(lifeExpectancyMercury).toEqual(333);
  });

  test('should correctly convert the life expectancy age into Venus years', () => {
    const newPerson = new Person(45, 80);
    let lifeExpectancyVenus = newPerson.lifeExpectanacyVenus(newPerson);
    expect(lifeExpectancyVenus).toEqual(129);
  });

  test('should correctly convert the life expectancy age into Mars years', () => {
    const newPerson = new Person(45, 80);
    let lifeExpectancyMars = newPerson.lifeExpectanacyMars(newPerson);
    expect(lifeExpectancyMars).toEqual(43);
  });

  test('should correctly convert the life expectancy age into Jupiter years', () => {
    const newPerson = new Person(45, 80);
    let lifeExpectancyJupiter = newPerson.lifeExpectanacyJupiter(newPerson);
    expect(lifeExpectancyJupiter).toEqual(7);
  });

  test('should correctly subtract the life expectancy and determine how many years the user has left to live in Mercury years', () => {
    const newPerson = new Person(45, 80);
    let outliveOrYearsLeftMercury = newPerson.outliveOrYearsLeftMercury(newPerson);
    expect(outliveOrYearsLeftMercury).toEqual(145);
  });

  test('should correctly subtract the life expectancy age and determine how many years the user lived past the life expectancy age in Mercury years', () => {
    const newPerson = new Person(81, 80);
    let outliveOrYearsLeftMercury = newPerson.outliveOrYearsLeftMercury(newPerson);
    expect(outliveOrYearsLeftMercury).toEqual(5);
  });

  test('should correctly subtract the life expectancy age and determine how many years the user lived past the life expectancy age in Venus years', () => {
    const newPerson = new Person(45, 80);
    let outliveOrYearsLeftVenus = newPerson.outliveOrYearsLeftVenus(newPerson);
    expect(outliveOrYearsLeftVenus).toEqual(56);
  });

  test('should correctly subtract the life expectancy age and determine how many years the user lived past the life expectancy age in Venus years', () => {
    const newPerson = new Person(81, 80);
    let outliveOrYearsLeftVenus = newPerson.outliveOrYearsLeftVenus(newPerson);
    expect(outliveOrYearsLeftVenus).toEqual(2);
  });

  test('should correctly subtract the life expectancy age and determine how many years the user lived past the life expectancy age in Mars years', () => {
    const newPerson = new Person(45, 80);
    let outliveOrYearsLeftMars = newPerson.outliveOrYearsLeftMars(newPerson);
    expect(outliveOrYearsLeftMars).toEqual(19);
  });

  test('should correctly subtract the life expectancy age and determine how many years the user lived past the life expectancy age in Mars years', () => {
    const newPerson = new Person(82, 80);
    let outliveOrYearsLeftMars = newPerson.outliveOrYearsLeftMars(newPerson);
    expect(outliveOrYearsLeftMars).toEqual(1);
  });

  test('should correctly subtract the life expectancy age and determine how many years the user lived past the life expectancy age in Jupiter years', () => {
    const newPerson = new Person(45, 80);
    let outliveOrYearsLeftJupiter = newPerson.outliveOrYearsLeftJupiter(newPerson);
    expect(outliveOrYearsLeftJupiter).toEqual(3);
  });

  test('should correctly subtract the life expectancy age and determine how many years the user lived past the life expectancy age in Jupiter years', () => {
    const newPerson = new Person(90, 80);
    let outliveOrYearsLeftJupiter = newPerson.outliveOrYearsLeftJupiter(newPerson);
    expect(outliveOrYearsLeftJupiter).toEqual(1);
  });
});
