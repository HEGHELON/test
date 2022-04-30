/*FUNCTIONAL PROGRAMMING (HIGHER ORDER FUNCTIONS ) */

//let radius =[4,2,5,8]

/*let Area = (r) => Math.PI*Math.pow(r,2);

function Circumference(r){ return 2 * Math.PI * r};

let diameter = (r) => 2* r;

Array.prototype.calculate = function(rule) {
  let output = [];
  for(let i=0; i<this.length; i++){
  output.push(rule(this[i]));
  }
  return output;
}

console.log(radius.calculate(result => Area(result)));

console.log(radius.map(Circumference));


console.log(radius.map(result => diameter(result)));

console.log(radius.calculate(result => Circumference(result)));
*/
let radius =[4,2,5,8, 10, 23];

console.log(radius);
console.log(radius.join("").replace("2", "1"));