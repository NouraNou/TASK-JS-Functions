/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name) {
  console, log("Hello ${name}");
}

printName("Noura");

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
let currentYear = 2023;

function printName(birthYear) {
  Age = currentYear - birthYear;
  console.log(Age);
}
printName(1986);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
const en = Hello;
const es = Hola;
const fr = Bounjour;
const tr = Merhaba;

function printHello(name, language) {
  function toCaps(name) {
    return name.toUpperCase();
  }

  console.log(`${language} ${name}`);
}

printHello("Noura", es);

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  if (num1 > num2) {
    const max = num1;
  } else {
    const max = num2;
  }
}
console.log(max);
