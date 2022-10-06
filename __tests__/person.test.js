import Person from '../src/js/person.js'

describe('Person', () => {

  test('should correctly assign each property of the Person class with the value assigned', () => {
    const newPerson = new Person(45, 80);
    expect(newPerson.age).toEqual(45);
    expect(newPerson.lifeExpectancy).toEqual(80);
  });

});