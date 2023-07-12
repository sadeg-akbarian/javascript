// 01) removeItem function

let removeItem = function (theArray, theNumber) {
  for (i = 0; i < theArray.length; i++) {
    if (typeof theArray[i] !== "string") {
      return "Please type in only characters and words";
    }
  }
  if (typeof theNumber !== "number") {
    return "Please type in only a number";
  }
  const reducedArray = structuredClone(theArray);
  let arrayPosition = theNumber - 1;
  reducedArray.splice(arrayPosition, 1);
  return reducedArray;
};

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
//....................................................................................................................
// 02) sumOfCharacters function ......................................................................................

let sumOfCharacters = function (checkedArray) {
  let stringsCombined = "";
  for (let index = 0; index < checkedArray.length; index++) {
    if (typeof checkedArray[index] === "string") {
      stringsCombined += checkedArray[index];
    }
  }
  return stringsCombined.length;
};
const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

//....................................................................................................................

const arr = ["Nico", "Lucy", "Kai", "annelie"];
for (let i = 0; i < arr.length; i++) {
  console.log("Hallo " + arr[i], i);
}

//...................................................................................................................

function addNumbers(numbers) {
  let summary = 0;
  for (let i = 0; i < numbers.length; i++) {
    summary += numbers[i];
  }
  return summary;
}

const r = addNumbers([1, 2, 3, 4]);
console.log(r);

//...................................................................................................................

function containsValue(brr, value) {
  let comparison;
  for (let i = 0; i < brr.length; i++) {
    comparison = brr[i] === value;
    if (comparison === true) {
      return "The " + value + " can be found at the array-position [" + i + "]";
      break;
    }
  }
}
console.log(containsValue([1, 2, 3], 2));

//...................................................................................................................

const wrr = [10, 20, 30, 40, 50, 60];
console.group(wrr);
wrr[2] = 300;
console.log(wrr);
let removed = wrr.splice(4, 1, 520, 576);
console.log(removed);
console.log(wrr);
console.log(typeof wrr);

//..................................................................................................................

let abc = { name1: "value1", name2: "value2" };
console.log(abc.name1);

let buch = "name1";
console.log(abc[buch]);
buch = "name2";
console.log(abc[buch]);

abc.alter = 43;
console.log(abc);
abc["straße"] = "Klausstraße 5";
console.log(abc);
for (const property in abc) {
  console.log(property, abc[property]);
}

//...............................................................................................................

const arrr1 = [1, 2, 3, 4, ["Hans", "Peter"]];
const arrr2 = [...arrr1];
arrr2[4] = "Michael";
console.log(arrr2);
console.log(arrr1);
