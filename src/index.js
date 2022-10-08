import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/person.js';

function handleFormSubmission(event) {
  event.preventDefault();
  let inputAge = parseInt(document.getElementById("age").value);
  let newPerson = new Person(inputAge, inputSelection);
  let mercuryAge = newPerson.mercuryAge(inputAge);
  let venusAge = newPerson.venusAge(inputAge);
  let marsAge = newPerson.marsAge(inputAge);
  let jupiterAge = newPerson.jupiterAge(inputAge);
  let lifeExpectanacyMercury = newPerson.lifeExpectanacyMercury(inputSelection());
  let lifeExpectanacyVenus = newPerson.lifeExpectanacyVenus(inputSelection());
  let lifeExpectanacyMars = newPerson.lifeExpectanacyMars(inputSelection());
  let lifeExpectanacyJupiter = newPerson.lifeExpectanacyJupiter(inputSelection());
  let outliveOrYearsLeftMercury = newPerson.outliveOrYearsLeftMercury(mercuryAge, lifeExpectanacyMercury);
  let outliveOrYearsLeftVenus = newPerson.outliveOrYearsLeftVenus(venusAge ,lifeExpectanacyVenus);
  let outliveOrYearsLeftMars = newPerson.outliveOrYearsLeftMars(marsAge, lifeExpectanacyMars);
  let outliveOrYearsLeftJupiter = newPerson.outliveOrYearsLeftJupiter(jupiterAge, lifeExpectanacyJupiter);
  function inputSelection () {
    let continent = document.querySelector("input[name='continent']:checked").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    if (continent === "northAmerica" && gender === "male") {
      newPerson.lifeExpectancy = 75;
    } else if (continent === "northAmerica" && gender === "female") {
      newPerson.lifeExpectancy = 81;
    } else if (continent === "europe" && gender === "male") {
      newPerson.lifeExpectancy = 75;
    } else if (continent === "europe" && gender === "female") {
      newPerson.lifeExpectancy = 81;
    } else if (continent === "latinAmerica" && gender === "male") {
      newPerson.lifeExpectancy = 73;
    } else if (continent === "latinAmerica" && gender === "female") {
      newPerson.lifeExpectancy = 79;
    } else if (continent === "asia" && gender === "male") {
      newPerson.lifeExpectancy = 72;
    } else if (continent === "asia" && gender === "female") {
      newPerson.lifeExpectancy = 76;
    } else if (continent === "africa" && gender === "male") {
      newPerson.lifeExpectancy = 63;
    } else {
      newPerson.lifeExpectancy = 66;
    }
    return newPerson.lifeExpectancy;
  }
  document.getElementById("mercury-age").innerText = mercuryAge + " years old";
  document.getElementById("mercury-life-expectancy").innerText = outliveOrYearsLeftMercury;
  document.getElementById("venus-age").innerText = venusAge + " years old";
  document.getElementById("venus-life-expectancy").innerText = outliveOrYearsLeftVenus;
  document.getElementById("mars-age").innerText = marsAge + " years old";
  document.getElementById("mars-life-expectancy").innerText = outliveOrYearsLeftMars;
  document.getElementById("jupiter-age").innerText = jupiterAge + " years old";
  document.getElementById("jupiter-life-expectancy").innerText = outliveOrYearsLeftJupiter;
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});
