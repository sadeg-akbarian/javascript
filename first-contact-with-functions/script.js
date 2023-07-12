// 01) Greet function

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

// 02) Gross Price Function ..........................................................

function calcGrossPrice(net_price, tax_rate) {
  return net_price + net_price * tax_rate;
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

// 03) Add Positive Function .........................................................

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

let num = 16;
let legleg = num;

num += 1;
legleg *= 3;

console.log(num);
console.log(legleg);
