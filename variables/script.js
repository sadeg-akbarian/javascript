// 01) Spot the errors and fix them

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(a) {
  return a.length;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

// 02) isString function ................................................................................

let isString = function (a) {
  return typeof a === "string";
};

// TODO: Implement the isString function

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
