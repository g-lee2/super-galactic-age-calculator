import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/person.js';

function handleFormSubmission(event) {
  event.preventDefault();
  let inputAge = parseInt(document.getElementById("age").value);
  let lifeExpectancyAge = parseInt(document.getElementById("life-age").value);
  let newPerson = new Person(inputAge, lifeExpectancyAge);
  let mercuryAge = newPerson.mercuryAge(inputAge);
  let venusAge = newPerson.venusAge(inputAge);
  let marsAge = newPerson.marsAge(inputAge);
  let jupiterAge = newPerson.jupiterAge(inputAge);
  let lifeExpectanacyMercury = newPerson.lifeExpectanacyMercury(lifeExpectancyAge);
  let lifeExpectanacyVenus = newPerson.lifeExpectanacyVenus(lifeExpectancyAge);
  let lifeExpectanacyMars = newPerson.lifeExpectanacyMars(lifeExpectancyAge);
  let lifeExpectanacyJupiter = newPerson.lifeExpectanacyJupiter(lifeExpectancyAge);
  let outliveOrYearsLeftMercury = newPerson.outliveOrYearsLeftMercury(mercuryAge, lifeExpectanacyMercury);
  let outliveOrYearsLeftVenus = newPerson.outliveOrYearsLeftVenus(venusAge ,lifeExpectanacyVenus);
  let outliveOrYearsLeftMars = newPerson.outliveOrYearsLeftMars(marsAge, lifeExpectanacyMars);
  let outliveOrYearsLeftJupiter = newPerson.outliveOrYearsLeftJupiter(jupiterAge, lifeExpectanacyJupiter);
  document.getElementById("mercury-age").innerText = mercuryAge;
  document.getElementById("mercury-life-expectancy").innerText = outliveOrYearsLeftMercury;
  document.getElementById("venus-age").innerText = venusAge;
  document.getElementById("venus-life-expectancy").innerText = outliveOrYearsLeftVenus;
  document.getElementById("mars-age").innerText = marsAge;
  document.getElementById("mars-life-expectancy").innerText = outliveOrYearsLeftMars;
  document.getElementById("jupiter-age").innerText = jupiterAge;
  document.getElementById("jupiter-life-expectancy").innerText = outliveOrYearsLeftJupiter;
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});
