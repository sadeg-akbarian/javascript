// 01) oddNumbers function

function oddNumbers(firstNum, secondNum) {
  let text = "";
  if (
    /*Frage: Wieso kann ich nicht schreiben firstNum && secondNum >= 0 && typeof (firstNum && secondNum) === "number"
      Antwort: Im unteren Fall werden alle vier Bedingungen separat ausgewertet. Die &&-Operator-Verknüpfungen stellen
               sicher, dass alle Bedingungen erfüllt sein müssen, damit die gesamte Bedingung als wahr betrachtet wird.
               Im oberen Fall wird der Ausdruck (firstNum && secondNum) zuerst ausgewertet, bevor typeof angewendet wird.
               Der Ausdruck (firstNum && secondNum) wird zu secondNum ausgewertet, wenn firstNum und secondNum nicht 0, 
               null, undefined, eine leere Zeichenkette oder false sind. Anschließend wird typeof secondNum mit "number"
               verglichen. Dies bedeutet, dass die Überprüfung des ersten Bedingungsteils firstNum ausgelassen wird, und
               es wird angenommen, dass firstNum immer einen Wert ungleich 0 hat.*/
    firstNum >= 0 &&
    secondNum >= 0 &&
    typeof firstNum === "number" &&
    typeof secondNum === "number"
  ) {
    for (let i = firstNum; i <= secondNum; i++) {
      if (i % 2 !== 0) {
        text += i + ", ";
      }
    }
    return text.slice(0, -2); // Erst muss die for-Schleife komplett abgearbeitet sein, erst dann kommt return
  } else if (firstNum || secondNum === NaN || firstNum || secondNum < 0) {
    return "Please enter only positive numbers ;)";
  }
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// ......
// 02) charCount function ................................................................................

function charCount(firstString, secondString) {
  if (typeof firstString !== "string" || typeof secondString !== "string") {
    return "Please type in only letters ;)";
  }
  let firstToLow = firstString.toLowerCase();
  let secondToLow = secondString.toLowerCase();
  if (secondToLow.length === 1) {
    let characterNumbers = 0;
    /* Frage: Wieso entsteht ein infinitive loop wenn ich erst let abc = firstToLow.length - 1; definiere und dann in
              folgende for-condition als zweites i = abc schreibe?
       Antwort: Wenn du den Ausdruck i = abc anstelle von i < firstToLow.length in der for-Schleife verwendest, ersetzt 
                du die Überprüfung der Schleifenbedingung durch eine Zuweisung. Dadurch wird die Schleifenbedingung immer
                als wahr betrachtet und es entsteht eine Endlosschleife. In deinem Fall definierst du abc als 
                firstToLow.length - 1, was den letzten Index des Arrays firstToLow darstellt. Wenn du dann i = abc in der
                for-Schleife verwendest, wird i auf den Wert von abc gesetzt. Da du die Bedingung i < firstToLow.length 
                entfernt hast, wird die Schleife nicht mehr durchlaufen und i wird nicht inkrementiert. Als Ergebnis 
                bleibt i immer gleich und die Schleife wird in einer Endlosschleife ausgeführt. Deswegen musst du anstatt
                i=abc einfach i<=abc (kleiner gleich) schreiben, dann funktioniert es.*/
    for (let i = 0; i < firstToLow.length; i++) {
      if (firstToLow[i] === secondToLow) {
        characterNumbers = characterNumbers + 1;
      } else {
        characterNumbers;
      }
    }
    return characterNumbers; // Erst muss die for-Schleife komplett abgearbeitet sein, erst dann kommt return
  }
}
console.log(charCount("hello", "L"));
// result should be: 2

console.log(charCount("mama", "M"));
// result should be: 2

console.log(charCount("Resümee", "E"));
// result should be: 3

//..................................................................................................................

function isUpperCase(checkedWord) {
  let comparison = checkedWord === checkedWord.toUpperCase();
  return comparison;
  /*
  //oder
  if (checkedWord === checkedWord.toUpperCase()) {
    return true;
  } else {
    return false;
  }
  */
}

console.log("HELLO should be true", isUpperCase("HELLO") === true);
console.log("FOO BAR should be true", isUpperCase("FOO BAR") === true);
console.log("F00_B4R should be true", isUpperCase("F00_B4R") === true);
console.log("heLLO should be false", isUpperCase("heLLO") === false);
console.log("FOO bAR should be false", isUpperCase("FOO bAR") === false);
console.log("fooBAR should be false", isUpperCase("fooBAR") === false);

//...............................................................................................................

class Degdeg {
  constructor(derName, alter = 42, groesse = 1.68) {
    (this.name = derName),
      (this.alter = alter),
      (this.groesse = groesse),
      this.derSatz();
  }
  derSatz() {
    console.log(
      `${this.name} ist ${this.alter} Jahre alt und ${this.groesse}m groß!`
    );
  }
}

const matin = new Degdeg("Matin");
const sadeg = new Degdeg("Sadeg", 36, 1.75);
console.log(matin);
console.log(sadeg);
