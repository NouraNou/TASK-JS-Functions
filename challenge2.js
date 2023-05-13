/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console, log("Hello ${name}");
}
greet("Noura");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

isOdd(7);
isOdd(10);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let num = num;
  if (num % 2 == 1 && num < n) {
    return num;
  }
}
oddsSmallerThan(7);
oddsSmallerThan(15);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 == 1) {
    n = n * n;
  } else if (n % 2 == 0) {
    n = n + n;
  }
}
squareOrDouble(9);
squareOrDouble(16);
