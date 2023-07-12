// 01) Spot the errors and fix them

const size = 25;
let result;

if (size > 10 && size <= 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// 02) oddEven function .....................................................................................

let oddEven = function (num) {
  if (num % 1 !== 0) {
    return "Please type in an integer ;)";
  } else if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// 03) oldYoung function .....................................................................................

let oldYoung = function (age) {
  if (age < 0 || typeof age !== "number") {
    return "invalid parameter";
  } else if (age < 16) {
    return "children";
  } else if (age < 50) {
    return "young person";
  } else if (age >= 50) {
    return "elder person";
  }
};

// TODO: Implement the oldYoung function

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung("Hallo"));
