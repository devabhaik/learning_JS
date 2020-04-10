console.log('Welcome to tutorial ');
function sum(...deva) {
  if (deva.length === 1) {
    const [firstArg] = deva;
    if (firstArg instanceof Array) {
      return sum(...firstArg);
    }
  }
  return deva.reduce((a, b) => a + b);
}
document.write(sum(1, 2, 3, 4, 10));

let str = document.createElement('p');
let abc = 'sadiveD ,tijA';
let cab = abc
  .split('')
  .reverse()
  .join('');
str.textContent = cab;
document.body.appendChild(str);
document.write(sum(40, 765, 3856, 34));
