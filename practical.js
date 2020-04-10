let abc = [60, 70, 80, 90, 10, 20, 30, 40, 50, 100];

let min = abc[0];
let max = abc[0];
let sum = 0;

for (let index = 0; index < abc.length; index++) {
  sum += abc[index];
  if (min > abc[index]) min = abc[index];
  if (max < abc[index]) max = abc[index];
}

document.getElementById('demo').innerHTML = min + ' ' + max;

// let sum = abc.reduce(myFunction);

document.getElementById('demo1').innerHTML = sum;

// function myFunction(total, value, index, array) {
//   return total + value;
// }
