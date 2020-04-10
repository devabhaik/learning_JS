// // console.log("Welcome to tutorial 24");

// // let today = new Date();
// // console.log(typeof today);
// // let otherDate = new Date('8-4-2003 04:54:08');
// // otherDate = new Date('June 13 1976');
// // otherDate = new Date('09/16/1976');
// // console.log(otherDate);
// let a;
// a = otherDate.getDay();
// a = otherDate.getDate();
// a = otherDate.getMinutes();
// // a = otherDate.getSeconds();
// // a = otherDate.getHours();
// a = otherDate.getTime();
// a = otherDate.getMilliseconds();
// a = otherDate.getMonth();
// console.log(a);
// otherDate.setDate(23);
// otherDate.setMonth(0);
// otherDate.setFullYear(1900);
// otherDate.setMinutes(2);
// otherDate.setHours(1);
// otherDate.setSeconds(3);
// console.log(otherDate);

// let elem = document.getElementsByTagName('p')[0];
// elem.innerText = 'Ajit';
// console.log(elem);

// // below will return the 1st head tag object from the document
// const head = document.getElementsByTagName('head')[0];

// // this will return the 1st title tag object from the document
// let title = document.getElementsByTagName('title')[0];

// // this will remove children title object from the head object
// head.removeChild(title);
// // const myhead = `<title>My Website</title>`;

// // this code will create new title element and will add it to head tag
// title = document.createElement('title');
// title.text = 'My Site';
// head.appendChild(title);

// // document.head.innerHTML = myhead;

// let html = `<p class="ajit">Ajit Bhaik</p>`;
// document.body.innerHTML = html;

// // const script = document.getElementsByTagName('script')[0];
// // let button = document.getElementByTagName('button')[1];

// let button = document.createElement('button');
// button.textContent = 'Submit';
// // button.onclick = `<script src= "tut25.js"></script>`;
// button.addEventListener('click', function() {
//   addScript();
// });
// document.body.appendChild(button);

// function addScript() {
//   let script = document.head.getElementsByTagName('script');
//   debugger;
//   for (let i = script.length - 1; i >= 0; i--) {
//     document.head.removeChild(script[i]);
//   }
//   script = document.createElement('script');
//   script.innerHTML = 'console.log("hello")';
//   head.appendChild(script);
// }
