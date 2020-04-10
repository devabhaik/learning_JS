// console.log('We are at tutorial 9');
// console.log(1)
// console.log(2)
// console.log(3)

// General Loops: for, while, do-while
// let a =34;
// a +=1;
// a++;
// console.log(a);
// for(let i=0; i<100;i++){
//     console.log(i);
// }

// let j = 110;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

// let arr = [2, 5, 6, 4, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// arr.forEach(function(element, index, array) {
//   console.log(element, index, array);
// });

// let obj = {
//   name: 'Rohan Das',
//   age: 78,
//   type: 'Dangerous Programmer',
//   os: 'Ubuntu'
// };
// for (let key in obj) {
//   console.log(`The ${key} of object is ${obj[key]}`);
// }

// console.log('done');

// array = [1, 2, 4, 5];

// for (var key = 0; key < array.length; key++) {
//   cons;
// }
// forEach()
// map()
// filter()
// reduce()

// obj = {
//   name: 'Ajit',
//   age: 25
// };

// for (let key in obj) {
// }

// function myFunction() {
//   document.getElementById('demo').style.background = 'blue';
// }
// function myFun() {
//   document.getElementById('dem').style.background = 'blue';
// }
// function unaction() {
//   document.getElementById('de').style.background = 'blue';
// }
// function action() {
//   document.getElementById('d').style.background = 'blue';
// }

const elements = document.getElementsByClassName('box');
initialSetup();
function initialSetup() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('green');
    elements[i].classList.add('red');
  }
}

function er() {
  initialSetup();
  event.target.classList.add('green');
}
