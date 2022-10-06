describe('Age', () => {

  test('should correctly assign each property of the Age class with the value assigned', () => {
    const newAge = new Age(45);
    expect(newAge.age).toEqual(45);
  });
});